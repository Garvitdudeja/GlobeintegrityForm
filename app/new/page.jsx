"use client";
import React, { Suspense, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import Image from "next/image";
import * as images from "../../utilities/images";

export function SignUp() {
  const [step, setStep] = useState(0); // 0..3
  const [errors, setErrors] = useState({});
  const [fade, setFade] = useState(true);
  const min = 100;
  const max = 1000;
  const [sliderValue, setSliderValue] = useState(250);
  const percentage = ((sliderValue - min) / (max - min)) * 100;

  const [formData, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Phone: "",
    zipCode: "",
    dob: "",
    gender: "",
    tobaccoUse: [],
    height: "",
    weight: "",
    goal: [],
    monthlyContribution: 250,
  });

  const steps = [
    { title: "Contact", inputs: ["First_Name", "Last_Name", "Email", "Phone"] },
    { title: "Basics", inputs: ["zipCode", "dob", "gender"] },
    { title: "Health", inputs: ["tobaccoUse", "height", "weight"] },
    { title: "Plan", inputs: ["goal", "monthlyContribution"] },
  ];

  const currentStepInputs = steps[step].inputs;

  const getErrorMessage = (field) => {
    switch (field) {
      case "First_Name": return "Please enter your first name.";
      case "Last_Name": return "Please enter your last name.";
      case "Email": return "Please enter a valid email.";
      case "Phone": return "Please enter a valid phone number.";
      case "zipCode": return "Please enter your zip code.";
      case "dob": return "Please enter a valid date of birth (MM/DD/YYYY).";
      case "gender": return "Please select your gender.";
      case "tobaccoUse": return "Please select at least one option.";
      case "height": return "Please enter your height.";
      case "weight": return "Please enter your weight.";
      case "goal": return "Please select at least one goal.";
      case "monthlyContribution": return "Please enter your monthly budget.";
      default: return "This field is required.";
    }
  };

  function isValidDOB(dob) {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!regex.test(dob)) return false;
    const [month, day, year] = dob.split('/').map(Number);
    const dobDate = new Date(year, month - 1, day);
    const now = new Date();
    if (
      dobDate.getFullYear() !== year ||
      dobDate.getMonth() !== month - 1 ||
      dobDate.getDate() !== day
    ) {
      return false;
    }
    if (dobDate > now) return false;
    const age = now.getFullYear() - year - (now < new Date(year, month - 1, day) ? 1 : 0);
    if (age < 18) return false;
    return true;
  }

  const isStepValid = () => {
    const fields = currentStepInputs;
    const newErrors = {};
    fields.forEach((field) => {
      switch (field) {
        case "First_Name":
        case "Last_Name":
        case "Email":
        case "Phone":
        case "zipCode":
        case "gender":
        case "height":
        case "weight":
          if (!String(formData[field] || "").trim()) newErrors[field] = getErrorMessage(field);
          break;
        case "dob":
          if (!isValidDOB(formData.dob)) newErrors.dob = getErrorMessage("dob");
          break;
        case "tobaccoUse":
        case "goal":
          if (!formData[field] || formData[field].length === 0) newErrors[field] = getErrorMessage(field);
          break;
        case "monthlyContribution":
          if (!formData.monthlyContribution || Number(formData.monthlyContribution) <= 0) newErrors.monthlyContribution = getErrorMessage("monthlyContribution");
          break;
        default:
          break;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayToggle = (field, value) => {
    setFormData(prev => {
      const currentArray = prev[field] || [];
      const isChecked = currentArray.includes(value);
      if (isChecked) {
        return { ...prev, [field]: currentArray.filter(item => item !== value) };
      }
      return { ...prev, [field]: [...currentArray, value] };
    });
  };

  const goNext = async () => {
    if (!isStepValid()) return;
    if (step === 0) {
      try {
        await axios.post('/api/submit', {
          data: {
            First_Name: formData.First_Name,
            Last_Name: formData.Last_Name,
            Email: formData.Email,
            Phone: formData.Phone,
          }
        });
      } catch (error) {
        console.error('Error submitting step 1:', error);
      }
    }
    setFade(false);
    setTimeout(() => {
      setStep(prev => Math.min(prev + 1, steps.length - 1));
      setFade(true);
    }, 200);
  };

  const goBack = () => {
    setFade(false);
    setTimeout(() => {
      setStep(prev => Math.max(prev - 1, 0));
      setFade(true);
    }, 200);
  };

  const submitFinal = async () => {
    if (!isStepValid()) return;
    try {
      await axios.post('/api/submit', {
        data: {
          First_Name: formData.First_Name,
          Last_Name: formData.Last_Name,
          Email: formData.Email,
          Phone: formData.Phone,
          Zip_Code: formData.zipCode,
          Date_of_Birth: formData.dob,
          Gender: formData.gender,
          Tobacco_Marijuana_Use: formData.tobaccoUse.join(', '),
          Height: formData.height,
          Weight: parseFloat(formData.weight || 0),
          Insurance: formData.goal.join(', '),
          Comfortable_Monthly_Contribution: parseFloat(formData.monthlyContribution || 0),
        }
      });
      // Redirect to thank you page upon successful submission
      if (typeof window !== 'undefined') {
        window.location.href = 'https://globeintegrity.com/thankyou';
      }
    } catch (error) {
      console.error('Error submitting final:', error);
      alert('There was an error submitting the form.');
    }
  };

  const handleDateInput = (e) => {
    let input = e.target.value.replace(/\D/g, "").slice(0, 8);
    let formatted = input;
    if (input.length >= 3 && input.length <= 4) {
      formatted = input.slice(0, 2) + "/" + input.slice(2);
    } else if (input.length > 4) {
      formatted = input.slice(0, 2) + "/" + input.slice(2, 4) + "/" + input.slice(4);
    }
    updateFormData('dob', formatted);
  };

  const handleHeightInput = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input === "") {
      updateFormData('height', '');
      return;
    }
    if (input.length === 2) {
      const feet = input.slice(0, 1);
      const inches = input.slice(-1);
      const formatted = `${feet}'${inches}`;
      updateFormData('height', formatted);
    } else if (input.length === 3) {
      const feet = input.slice(0, 1);
      const inches = input.slice(1);
      const formatted = `${feet}'${inches}`;
      updateFormData('height', formatted);
    } else {
      updateFormData('height', input);
    }
  };

  const getError = (field) => errors[field];

  return (
    <>
      <section className="steperSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="stepOuter d-flex position-relative">
                {steps.map((s, i) => (
                  <div key={i} className="barText text-center" style={{ width: `${100 / steps.length}%`, zIndex: 1 }}>
                    <small className={`${i === step ? "activeBar" : "inActiveBar"}`}>
                      {s.title}
                    </small>
                  </div>
                ))}
                <div
                  className="position-absolute top-0 start-0"
                  style={{ width: "100%", height: "4px", backgroundColor: "#e0e0e0", zIndex: 0 }}
                >
                  <div
                    className="bgBlue h-100 rounded"
                    style={{ width: `${(step / (steps.length - 1)) * 100}%`, transition: "width 0.3s ease" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="steperOption">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="steperOptionInner">
                <div className="row justify-content-center">
                  <div className={`col-lg-8`}>
                    <div className={`animated-slide ${fade ? "fade-enter-active" : "fade-exit-active"}`}>
                      {step === 0 && (
                        <>
                          <h1 className="heading54 mb-3">Contact information</h1>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="seletDateOuter">
                                <input type="text" id="First_Name" placeholder="First Name" value={formData.First_Name} onChange={(e) => updateFormData('First_Name', e.target.value)} />
                                <label htmlFor="First_Name">First Name</label>
                                {getError('First_Name') && <p className="text-danger mt-2" style={{ fontSize: '14px' }}>{getError('First_Name')}</p>}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="seletDateOuter">
                                <input type="text" id="Last_Name" placeholder="Last Name" value={formData.Last_Name} onChange={(e) => updateFormData('Last_Name', e.target.value)} />
                                <label htmlFor="Last_Name">Last Name</label>
                                {getError('Last_Name') && <p className="text-danger mt-2" style={{ fontSize: '14px' }}>{getError('Last_Name')}</p>}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="seletDateOuter">
                                <input type="email" id="Email" placeholder="Email" value={formData.Email} onChange={(e) => updateFormData('Email', e.target.value)} />
                                <label htmlFor="Email">Email</label>
                                {getError('Email') && <p className="text-danger mt-2" style={{ fontSize: '14px' }}>{getError('Email')}</p>}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="seletDateOuter">
                                <input type="text" id="Phone" placeholder="Phone" value={formData.Phone} onChange={(e) => updateFormData('Phone', e.target.value)} />
                                <label htmlFor="Phone">Phone</label>
                                {getError('Phone') && <p className="text-danger mt-2" style={{ fontSize: '14px' }}>{getError('Phone')}</p>}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {step === 1 && (
                        <>
                          <h1 className="heading54 mb-3">Basic details</h1>
                          <label className="input-label d-block mb-2">Gender</label>
                          <div className="row">
                            <div className="col-lg-6 mb-3 mb-lg-0">
                              <div className={`selectGender ${formData.gender === 'Male' ? 'selected' : ''}`} onClick={() => updateFormData('gender', 'Male')} style={{ cursor: 'pointer' }}>Male</div>
                            </div>
                            <div className="col-lg-6">
                              <div className={`selectGender ${formData.gender === 'Female' ? 'selected' : ''}`} onClick={() => updateFormData('gender', 'Female')} style={{ cursor: 'pointer' }}>Female</div>
                            </div>
                          </div>
                          {getError('gender') && <p className="text-danger mt-2" style={{ fontSize: '14px' }}>{getError('gender')}</p>}
                          <div className="row">
                            <div className="col-lg-6 mb-3 mb-lg-0">
                              <div className="seletDateOuter">
                                <input type="text" id="zipcode" placeholder="Zip Code" value={formData.zipCode} onChange={(e) => updateFormData('zipCode', e.target.value)} />
                                <label htmlFor="zipcode">Zip Code</label>
                                {getError('zipCode') && <p className="text-danger mt-2" style={{ fontSize: '14px' }}>{getError('zipCode')}</p>}
                              </div>
                            </div>
                            <div className="col-lg-6 mb-3 mb-lg-0">
                              <div className="seletDateOuter">
                                <input type="text" id="date" placeholder="MM/DD/YYYY" maxLength={10} value={formData.dob} onChange={handleDateInput} />
                                <label htmlFor="date">MM/DD/YYYY</label>
                                {getError('dob') && <p className="text-danger mt-2" style={{ fontSize: '14px' }}>{getError('dob')}</p>}
                              </div>
                            </div>
                          </div>  
                        </>
                      )}

                      {step === 2 && (
                        <>
                          <h1 className="heading54 mb-3">Health</h1>
                          <label className="input-label d-block mb-2">Tobacco/Marijuana usage (last 5 years)</label>
                          <div className="customGrid">
                          {["None", "Cigarettes", "Marijuana", "Other"].map((label, index) => (
                            <div key={index} className="custom-checkbox-wrapper">
                              <input type="checkbox" id={`tobacco${index}`} className="custom-checkbox" checked={formData.tobaccoUse.includes(label)} onChange={() => handleArrayToggle('tobaccoUse', label)} />
                              <label htmlFor={`tobacco${index}`}></label>
                              <label htmlFor={`tobacco${index}`} className="check-label">{label}</label>
                            </div>
                          ))}
                          {getError('tobaccoUse') && <p className="text-danger mt-2" style={{ fontSize: '14px' }}>{getError('tobaccoUse')}</p>}

                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-6 mb-3">
                              <label htmlFor="height" className="input-label">Height</label>
                              <div className="input-wrapper">
                                <input type="text" id="height" className="weight-input" placeholder="Enter height" value={formData.height} onChange={handleHeightInput} />
                                <span className="unit">ft'in</span>
                              </div>
                              {getError('height') && <p className="text-danger mt-2" style={{ fontSize: '14px' }}>{getError('height')}</p>}
                            </div>
                            <div className="col-lg-6 mb-3">
                              <label htmlFor="weight" className="input-label">Weight (lbs)</label>
                              <div className="input-wrapper">
                                <input type="number" id="weight" className="weight-input" placeholder="" value={formData.weight} onChange={(e) => updateFormData('weight', e.target.value)} />
                                <span className="unit">lbs</span>
                              </div>
                              {getError('weight') && <p className="text-danger mt-2" style={{ fontSize: '14px' }}>{getError('weight')}</p>}
                            </div>
                          </div>
                        </>
                      )}

                      {step === 3 && (
                        <>
                          <h1 className="heading54 mb-4">Your plan</h1>
                          <div className="customGrid">
                          {["Lock in a guaranteed rate", "Help build more wealth", "Leave a legacy for my family", "Get tax-advantaged income", "Pay off debts", "Income protection"].map((label, index) => (
                            <div key={index} className="custom-checkbox-wrapper">
                              <input type="checkbox" id={`goal${index}`} className="custom-checkbox" checked={formData.goal.includes(label)} onChange={() => handleArrayToggle('goal', label)} />
                              <label htmlFor={`goal${index}`}></label>
                              <label htmlFor={`goal${index}`} className="check-label">{label}</label>
                            </div>
                          ))}
                          </div>
                          {getError('goal') && <p className="text-danger mt-2" style={{ fontSize: '14px' }}>{getError('goal')}</p>}

                          <h1 className="heading54 mb-4">
                                What would be a comfortable monthly contribution?
                              </h1>

                              {/* Slider */}
                              <div className="formSliderWraper mb-4">
                                <div
                                  className="slider-label-box"
                                  style={{
                                    position: "absolute",
                                    top: "-40px",
                                    left: `calc(${((sliderValue - min) / (max - min)) * 100
                                      }% - 8px)`,
                                    backgroundColor: "#1e2a5a",
                                    color: "white",
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ${sliderValue}
                                  <div className="slider-label-arrow"></div>
                                </div>

                                <input
                                  type="range"
                                  min={min}
                                  max={max}
                                  step={50}
                                  value={sliderValue}
                                  onChange={(e) => {
                                    const value = Number(e.target.value);
                                    setSliderValue(value);
                                    updateFormData('monthlyContribution', value);
                                  }}
                                  className="custombar-slider"
                                  style={{
                                    background: `linear-gradient(to right, #1e2a5a 0%, #1e2a5a ${percentage}%, #ccc ${percentage}%, #ccc 100%)`,
                                  }}
                                />
                              </div>

                              {/* Info Box */}
                              <div className="didYouNow">
                                <div className="row align-items-center">
                                  <div className="col-lg-4 text-center">
                                    <Image src={images.benifit1} width={130} height={160} alt="image" />
                                  </div>
                                  <div className="col-lg-8">
                                    <h4>DID YOU KNOW?</h4>
                                    <p>
                                      If you pay <strong>${sliderValue}.00</strong>{" "}
                                      of premium a month into a policy&apos;s investment
                                      subaccounts, you could grow your account value
                                      up to{" "}
                                      <strong>
                                        ${(sliderValue * 2270).toLocaleString()}
                                      </strong>{" "}
                                      after 30 years.
                                    </p>
                                  </div>
                                </div>
                              </div>
                        </>
                      )}

                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}

              </div>
            </div>
          </div>
        </div>
        <div className="fixed-bottom-nav">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-center gap-3">
                  {step > 0 && (
                    <button className="steperBack" onClick={goBack}><FaArrowLeft /></button>
                  )}
                  {step < steps.length - 1 && (
                    <button className="commonBtn" onClick={goNext}>Next</button>
                  )}
                  {step === steps.length - 1 && (
                    <button className="commonBtn" onClick={submitFinal}>Submit</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="row mt-auto">
        <div className="col-12">
          <div className="d-flex justify-content-center my-4 gap-3">

          </div>
        </div>
      </div> */}


    </>);
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUp />
    </Suspense>
  );
}