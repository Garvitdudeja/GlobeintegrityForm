"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image'
import * as images from '@/utilities/images'
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter()
  const [step, setStep] = useState(0);
  const [currentInput, setCurrentInput] = useState(0);
  const [sliderValue, setSliderValue] = useState(1000);
  const [errors, setErrors] = useState({});
  const min = 100;
  const max = 10000;

  // Form data state
  const [formData, setFormData] = useState({
    // Step 0 - Personal Info
    goal: [],
    risk: '',
    gender: '',
    dob: '',
    zipCode: '',

    // Step 1 - Account Info
    householdIncome: '',
    personalIncome: '',
    monthlyContribution: 1000,
    citizen: '',
    employed: '',
    maritalStatus: '',
    activities: [],
    height: '',
    weight: '',
    substanceUse: [],
    hivStatus: '',
    First_Name: '',
    Last_Name: '',
    Email: '',
    Phone: '',

  });

  const steps = [
    {
      title: "Personal Info",
      inputs: ["goal", "risk", "gender", "dob", "zipCode"],
    },
    {
      title: "Account Info",
      inputs: ["income", "investment", "citizen", "employed", "marital", "activities", "health", "substances", "hiv", "name"]
    },
    { title: "Confirmation", inputs: ["review"] },
  ];

  const [fade, setFade] = useState(true);

  const totalInputs = steps.reduce((acc, curr) => acc + curr.inputs.length, 0);
  const completedInputs =
    steps.slice(0, step).reduce((acc, curr) => acc + curr.inputs.length, 0) +
    currentInput;

  const currentStepInputs = steps[step].inputs;

  // Get error message for current field
  const getErrorMessage = (field) => {
    switch (field) {
      case "goal":
        return "Please select at least one goal for your life insurance.";
      case "risk":
        return "Please select your investment risk tolerance.";
      case "gender":
        return "Please select your gender.";
      case "dob":
        return "Please enter a valid date of birth (DD/MM/YYYY).";
      case "zipCode":
        return "Please enter your zip code.";
      case "income":
        return "Please enter both household and personal income.";
      case "investment":
        return "Please select a monthly contribution amount.";
      case "citizen":
        return "Please indicate if you are a U.S. citizen.";
      case "employed":
        return "Please indicate your employment status.";
      case "marital":
        return "Please select your marital status.";
      case "activities":
        return "Please select at least one option for high-risk activities.";
      case "health":
        return "Please enter both your height and weight.";
      case "substances":
        return "Please select at least one option for substance use.";
      case "hiv":
        return "Please answer the HIV/AIDS diagnosis question.";
      case "name":
        return "Please fill in all required fields.";
      default:
        return "This field is required.";
    }
  };

  // Validation function
  const isCurrentInputValid = (value) => {
    const currentField = currentStepInputs[currentInput];

    switch (currentField) {
      case "goal":
        return formData.goal.length > 0;
      case "risk":
        return value || formData.risk !== '';
      case "gender":
        return value || formData.gender !== '';
      case "dob":
        return formData.dob !== '' && formData.dob.length === 10;
      case "zipCode":
        return formData.zipCode !== '';
      case "income":
        return formData.householdIncome !== '' && formData.personalIncome !== '';
      case "investment":
        return formData.monthlyContribution >= min && formData.monthlyContribution <= max;
      case "citizen":
        return value  ||formData.citizen !== '';
      case "employed":
        return value || formData.employed !== '';
      case "marital":
        return value || formData.maritalStatus !== '';
      case "activities":
        return formData.activities.length > 0;
      case "health":
        return formData.height !== '' && formData.weight !== '';
      case "substances":
        return formData.substanceUse.length > 0;
      case "hiv":
        return value || formData.hivStatus !== '';
      case "review":
        return true;
      case "name":
        return formData.First_Name !== '' && formData.Last_Name !== '' && formData.Email !== '' && formData.Phone !== '';
      default:
        return false;
    }
  };

  // Update form data
  const updateFormData = (field, value, next= false) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing/selecting
    const currentField = currentStepInputs[currentInput];
    if (errors[currentField]) {
      setErrors(prev => ({
        ...prev,
        [currentField]: null
      }));
    }
    
    if(next){
      nextInput(value);
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (field, value) => {
    setFormData(prev => {
      const currentArray = prev[field] || [];
      const isChecked = currentArray.includes(value);

      if (isChecked) {
        return {
          ...prev,
          [field]: currentArray.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [field]: [...currentArray, value]
        };
      }
    });

    // Clear error when user makes a selection
    const currentField = currentStepInputs[currentInput];
    if (errors[currentField]) {
      setErrors(prev => ({
        ...prev,
        [currentField]: null
      }));
    }
  };

  const nextInput = (value = "") => {
    const currentField = currentStepInputs[currentInput];
    
    if (!isCurrentInputValid(value)) {
      // Set error for current field
      setErrors(prev => ({
        ...prev,
        [currentField]: getErrorMessage(currentField)
      }));
      return;
    }

    // Clear any existing error
    setErrors(prev => ({
      ...prev,
      [currentField]: null
    }));

    // Console log current step data
    console.log(`Step ${step + 1}, Input ${currentInput + 1} completed:`, {
      field: currentStepInputs[currentInput],
      value: getCurrentFieldValue()
    });

    setFade(false);
    setTimeout(() => {
      if (currentInput < currentStepInputs.length - 1) {
        setCurrentInput(prev => prev + 1);
      } else if (step < steps.length - 1) {
        setStep(prev => prev + 1);
        setCurrentInput(0);
      }
      setFade(true);
    }, 300);
    if(step === 1 && currentInput === 9){
      handleSubmit();
    }
  };

  const prevInput = () => {
    // Clear errors when going back
    const currentField = currentStepInputs[currentInput];
    setErrors(prev => ({
      ...prev,
      [currentField]: null
    }));

    setFade(false);
    setTimeout(() => {
      if (currentInput > 0) {
        setCurrentInput(prev => prev - 1);
      } else if (step > 0) {
        const previousStepInputs = steps[step - 1].inputs.length;
        setStep(prev => prev - 1);
        setCurrentInput(previousStepInputs - 1);
      }
      setFade(true);
    }, 300);
  };

  // Get current field value for logging
  const getCurrentFieldValue = () => {
    const currentField = currentStepInputs[currentInput];
    switch (currentField) {
      case "goal": return formData.goal;
      case "risk": return formData.risk;
      case "gender": return formData.gender;
      case "dob": return formData.dob;
      case "zipCode": return formData.zipCode;
      case "income": return { household: formData.householdIncome, personal: formData.personalIncome };
      case "investment": return formData.monthlyContribution;
      case "citizen": return formData.citizen;
      case "employed": return formData.employed;
      case "marital": return formData.maritalStatus;
      case "activities": return formData.activities;
      case "health": return { height: formData.height, weight: formData.weight };
      case "substances": return formData.substanceUse;
      case "hiv": return formData.hivStatus;
      case "name": return { firstName: formData.First_Name, lastName: formData.Last_Name, email: formData.Email, phone: formData.Phone };
      default: return null;
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/submit', {
        data: {
          High_risk_Activities: formData.activities.join(', '),
          Height: formData.height,
          HIV_AIDS_Diagnosis: formData.hivStatus,
          HouseHold_Income: parseFloat(formData.householdIncome),
          Insurance: formData.goal.join(', '),
          Risk_Tolerance: formData.risk,
          Gender: formData.gender,
          Date_of_Birth: formData.dob, // If Zoho requires YYYY-MM-DD, format it accordingly
          Zip_Code: formData.zipCode,
          Personal_Income: parseFloat(formData.personalIncome),
          Comfortable_Monthly_Contribution: parseFloat(formData.monthlyContribution),
          U_S_Citizen: formData.citizen,
          Currently_Employed: formData.employed,
          Marital_Status: formData.maritalStatus,
          Weight: parseFloat(formData.weight),
          Tobacco_Marijuana_Use: formData.substanceUse.join(', '),
          Last_name: formData.Last_Name,
          First_Name: formData.First_Name,
          Email: formData.Email,
          Phone: formData.Phone
        }
      });
      router.push("/");
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };

  // Progress within current step
  const stepProgress =
    ((completedInputs -
      steps.slice(0, step).reduce((acc, curr) => acc + curr.inputs.length, 0)) /
      currentStepInputs.length) *
    100;

  // Date input handler
  const handleDateInput = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (input.length > 2 && input.length <= 4) {
      input = input.slice(0, 2) + "/" + input.slice(2);
    } else if (input.length > 4) {
      input =
        input.slice(0, 2) + "/" + input.slice(2, 4) + "/" + input.slice(4, 8);
    }
    updateFormData('dob', input);
  };

  const percentage = ((sliderValue - min) / (max - min)) * 100;

  // Get current field for error display
  const getCurrentField = () => currentStepInputs[currentInput];

  return (
    <>
      {/* Stepper Header */}
      <section className="steperSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="stepOuter d-flex position-relative">
                {steps.map((s, i) => {
                  const otherStepWidth = 50 / (steps.length - 1);
                  const width = i === step ? "50%" : `${otherStepWidth}%`;
                  return (
                    <div
                      key={i}
                      className="barText text-center"
                      style={{ width, zIndex: 1 }}
                    >
                      <small
                        className={`${i === step ? "activeBar" : "inActiveBar"
                          }`}
                      >
                        {s.title}
                      </small>
                    </div>
                  );
                })}
                {/* Full Track */}
                <div
                  className="position-absolute top-0 start-0"
                  style={{
                    width: "100%",
                    height: "4px",
                    backgroundColor: "#e0e0e0",
                    zIndex: 0,
                  }}
                >
                  {/* Progress Bar */}
                  <div
                    className="bgBlue h-100 rounded"
                    style={{
                      width: (() => {
                        let width = 0;
                        for (let i = 0; i < steps.length; i++) {
                          if (i < step) {
                            width += i === step ? 50 : 50 / (steps.length - 1);
                          } else if (i === step) {
                            width += (50 * stepProgress) / 100;
                            break;
                          }
                        }
                        return `${width}%`;
                      })(),
                      transition: "width 0.4s ease",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stepper Content */}
      <section className="steperOption">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="steperOptionInner">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div
                      className={`animated-slide ${fade ? "fade-enter-active" : "fade-exit-active"
                        }`}
                    >
                      {step === 0 && (
                        <>
                          {currentInput === 0 && (
                            <>
                              <h1 className="heading54 mb-4">
                                Why are you looking for life insurance?
                              </h1>
                              {[
                                "Lock in a guaranteed rate",
                                "Help build more wealth",
                                "Leave a legacy for my family",
                                "Get tax-advantaged income",
                                "Pay off debts",
                                "Income protection",
                              ].map((label, index) => (
                                <div
                                  key={index}
                                  className="custom-checkbox-wrapper"
                                >
                                  <input
                                    type="checkbox"
                                    id={`goal${index}`}
                                    className="custom-checkbox"
                                    checked={formData.goal.includes(label)}
                                    onChange={() => handleCheckboxChange('goal', label)}
                                  />
                                  <label htmlFor={`goal${index}`}></label>
                                  <label
                                    htmlFor={`goal${index}`}
                                    className="check-label"
                                  >
                                    {label}
                                  </label>
                                </div>
                              ))}
                              {errors[getCurrentField()] && (
                                <p className="text-danger mt-3" style={{ fontSize: '14px', marginBottom: '10px' }}>
                                  {errors[getCurrentField()]}
                                </p>
                              )}
                            </>
                          )}
                          {currentInput === 1 && (
                            <>
                              <h1 className="heading54 mb-4">
                                What is your investment risk tolerance?
                              </h1>
                              {[
                                {label: "I prefer high risk, with high-reward potential", value: "High risk"},
                                {label: "I prefer moderate risk, with moderate-reward potential", value: "Moderate risk"},
                                {label: "I prefer low risk, with low-reward potential", value:"Low risk"}
                              ].map((item, index) => (
                                <div
                                  key={index}
                                  className="custom-radio-option mb-3"
                                >
                                  <input
                                    type="radio"
                                    id={`risk${index}`}
                                    name="risk"
                                    checked={formData.risk === item.value}
                                    onChange={() => updateFormData('risk', item.value, true)}
                                  />
                                  <label htmlFor={`risk${index}`}>
                                    {item.label}
                                  </label>
                                </div>
                              ))}
                              {errors[getCurrentField()] && (
                                <p className="text-danger mt-3" style={{ fontSize: '14px', marginBottom: '10px' }}>
                                  {errors[getCurrentField()]}
                                </p>
                              )}
                            </>
                          )}
                          {currentInput === 2 && (
                            <>
                              <h1 className="heading54 mb-4">
                                What&apos;s your gender?
                              </h1>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div
                                    className={`selectGender ${formData.gender === 'Male' ? 'selected' : ''}`}
                                    onClick={() => updateFormData('gender', 'Male', true)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    Male
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div
                                    className={`selectGender ${formData.gender === 'Female' ? 'selected' : ''}`}
                                    onClick={() => updateFormData('gender', 'Female', true)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    Female
                                  </div>
                                </div>
                              </div>
                              {errors[getCurrentField()] && (
                                <p className="text-danger mt-3" style={{ fontSize: '14px', marginBottom: '10px' }}>
                                  {errors[getCurrentField()]}
                                </p>
                              )}
                            </>
                          )}
                          {currentInput === 3 && (
                            <>
                              <h1 className="heading54 mb-4">
                                What is your date of birth?
                              </h1>
                              <div className="seletDateOuter">
                                <input
                                  type="text"
                                  id="date"
                                  placeholder="DD/MM/YYYY"
                                  maxLength={10}
                                  value={formData.dob}
                                  onChange={handleDateInput}
                                  required
                                />
                                <label htmlFor="date">DD/MM/YYYY</label>
                              </div>
                              {errors[getCurrentField()] && (
                                <p className="text-danger mt-3" style={{ fontSize: '14px', marginBottom: '10px' }}>
                                  {errors[getCurrentField()]}
                                </p>
                              )}
                            </>
                          )}
                          {currentInput === 4 && (
                            <>
                              <h1 className="heading54">
                                What&apos;s your zip code?
                              </h1>
                              <p className="sub20  mb-4">
                                This helps us find the right products available
                                to you in your area.
                              </p>
                              <div className="seletDateOuter">
                                <input
                                  type="text"
                                  id="zipcode"
                                  placeholder="zip code"
                                  value={formData.zipCode}
                                  onChange={(e) => updateFormData('zipCode', e.target.value)}
                                />
                                <label htmlFor="zipcode">Zip Code</label>
                              </div>
                              {errors[getCurrentField()] && (
                                <p className="text-danger mt-3" style={{ fontSize: '14px', marginBottom: '10px' }}>
                                  {errors[getCurrentField()]}
                                </p>
                              )}
                            </>
                          )}
                        </>
                      )}

                      {step === 1 && (
                        <>
                          {currentInput === 0 && (
                            <>
                              <h1 className="heading54 mb-4">
                                What is your annual income?
                              </h1>
                              <div className="seletDateOuter">
                                <input
                                  type="text"
                                  id="household"
                                  placeholder="Household Income"
                                  value={formData.householdIncome}
                                  onChange={(e) => updateFormData('householdIncome', e.target.value)}
                                />
                                <label htmlFor="household">Household Income</label>
                              </div>
                              <div className="seletDateOuter">
                                <input
                                  type="text"
                                  id="personal"
                                  placeholder="Personal Income"
                                  value={formData.personalIncome}
                                  onChange={(e) => updateFormData('personalIncome', e.target.value)}
                                />
                                <label htmlFor="personal">Personal Income</label>
                              </div>
                              {errors[getCurrentField()] && (
                                <p className="text-danger mt-3" style={{ fontSize: '14px', marginBottom: '10px' }}>
                                  {errors[getCurrentField()]}
                                </p>
                              )}
                            </>
                          )}
                          {currentInput === 1 && (
                            <>
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
                                    left: `calc(${
                                      ((sliderValue - min) / (max - min)) * 100
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
                                  step={100}
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
                                    <Image src={images.benifit1} width={130} height={160} alt="image"/>
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
                              {errors[getCurrentField()] && (
                                <p className="text-danger mt-3" style={{ fontSize: '14px', marginBottom: '10px' }}>
                                  {errors[getCurrentField()]}
                                </p>
                              )}
                            </>
                          )}
                          {currentInput === 2 && (
                            <>
                              <h1 className="heading54 mb-4">
                                Are you a U.S. Citizen?
                              </h1>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div
                                    className={`selectGender ${formData.citizen === 'Yes' ? 'selected' : ''}`}
                                    onClick={() => updateFormData('citizen', 'Yes', true)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    Yes
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div
                                    className={`selectGender ${formData.citizen === 'No' ? 'selected' : ''}`}
                                    onClick={() => updateFormData('citizen', 'No', true)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    No
                                  </div>
                                </div>
                              </div>
                              {errors[getCurrentField()] && (
                                <p className="text-danger mt-3" style={{ fontSize: '14px', marginBottom: '10px' }}>
                                  {errors[getCurrentField()]}
                                </p>
                              )}
                            </>
                          )}
                          {currentInput === 3 && (
                            <>
                              <h1 className="heading54 mb-4">
                                Are you currently employed?
                              </h1>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div
                                    className={`selectGender ${formData.employed === 'Yes' ? 'selected' : ''}`}
                                    onClick={() => updateFormData('employed', 'Yes', true)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    Yes
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div
                                    className={`selectGender ${formData.employed === 'No' ? 'selected' : ''}`}
                                    onClick={() => updateFormData('employed', 'No', true)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    No
                                  </div>
                                </div>
                              </div>
                              {errors[getCurrentField()] && (
                                <p className="text-danger mt-3" style={{ fontSize: '14px', marginBottom: '10px' }}>
                                  {errors[getCurrentField()]}
                                </p>
                              )}
                            </>
                          )}
                          {currentInput === 4 && (
                            <>
                              <h1 className="heading54 mb-4">
                                What&apos;s your marital status?
                              </h1>
                              <div className="row">
                                {["Single", "Married", "Divorced", "Separated", "Widowed"].map((status) => (
                                  <div key={status} className="col-lg-6 mb-3">
                                    <div
                                      className={`selectGender ${formData.maritalStatus === status ? 'selected' : ''}`}
                                      onClick={() => updateFormData('maritalStatus', status, true)}
                                      style={{ cursor: 'pointer' }}
                                    >
                                      {status}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {errors[getCurrentField()] && (
                                <p className="text-danger mt-3" style={{ fontSize: '14px', marginBottom: '10px' }}>
                                  {errors[getCurrentField()]}
                                </p>
                              )}
                            </>
                          )}
                          {currentInput === 5 && (
                            <>
                              <h1 className="heading54 mb-4">
                                Will you be performing any of the following activities in the next 2 years?
                              </h1>
                              <div className="row">
                                {["None", "Sky Diving", "Hang Gliding", "Mountain Climbing", "Racing", "Scuba Diving"].map(
                                  (label, index) => (
                                    <div key={index} className="col-lg-6">
                                      <div className="custom-checkbox-wrapper">
                                        <input
                                          type="checkbox"
                                          id={`activity${index}`}
                                          className="custom-checkbox"
                                          checked={formData.activities.includes(label)}
                                          onChange={() => handleCheckboxChange("activities", label)}
                                        />
                                        <label htmlFor={`activity${index}`}></label>
                                        <label htmlFor={`activity${index}`} className="check-label">
                                          {label}
                                        </label>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                              {errors[getCurrentField()] && (
                                <p className="text-danger mt-3" style={{ fontSize: '14px', marginBottom: '10px' }}>
                                  {errors[getCurrentField()]}
                                </p>
                              )}
                            </>
                          )}
                          {currentInput === 6 && (
                            <>
                              <div className="row">
                                <div className="col-lg-12 mb-3 ">
                                  <label htmlFor="height" className="select-label">
                                    Height (ft)
                                  </label>
                                  <select
                                    id="height"
                                    className="custom-select"
                                    value={formData.height}
                                    onChange={(e) => updateFormData('height', e.target.value)}
                                  >
                                    <option value="">Select Height</option>
                                    <option value="<4'8">&lt; 4&apos;8&quot;</option>
                                    <option value="4'8">4&apos;&quot;</option>
                                    <option value="4'9">4&apos;&quot;</option>
                                    <option value="4'10">4&apos;1&quot;</option>
                                    <option value="4'11">4&apos;1&quot;</option>
                                    <option value="5'0">5&apos;&quot;</option>
                                    <option value="5'1">5&apos;&quot;</option>
                                    <option value="5'2">5&apos;&quot;</option>
                                    <option value="5'3">5&apos;&quot;</option>
                                    <option value="5'4">5&apos;&quot;</option>
                                    <option value="5'5">5&apos;&quot;</option>
                                    <option value="5'6">5&apos;&quot;</option>
                                    <option value="5'7">5&apos;&quot;</option>
                                    <option value="5'8">5&apos;&quot;</option>
                                    <option value="5'9">5&apos;&quot;</option>
                                    <option value="5'10">5&apos;1&quot;</option>
                                    <option value="5'11">5&apos;1&quot;</option>
                                    <option value="6'0">6&apos;&quot;</option>
                                    <option value="6'1">6&apos;&quot;</option>
                                    <option value="6'2">6&apos;&quot;</option>
                                    <option value="6'3">6&apos;&quot;</option>
                                    <option value="6'4">6&apos;&quot;</option>
                                    <option value=">6'4">&gt; 6&apos;&quot;</option>
                                  </select>
                                </div>
                                <div className="col-lg-12 mb-3 ">
                                  <label htmlFor="weight" className="input-label">Weight (lbs)</label>
                                  <div className="input-wrapper">
                                    <input
                                      type="number"
                                      id="weight"
                                      className="weight-input"
                                      placeholder="234"
                                      value={formData.weight}
                                      onChange={(e) => updateFormData('weight', e.target.value)}
                                    />
                                    <span className="unit">lbs</span>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {currentInput === 7 && (
                            <>
                              <h1 className="heading54">
                                What products have you used in the last 5 years?
                              </h1>
                              <p className="sub20 mb-3">You can choose multiple</p>
                              {["None", "Cigarettes", "Marijuana", "Other"].map((label, index) => (
                                <div
                                  key={index}
                                  className="custom-checkbox-wrapper"
                                >
                                  <input
                                    type="checkbox"
                                    id={`substance${index}`}
                                    className="custom-checkbox"
                                    checked={formData.substanceUse.includes(label)}
                                    onChange={() => handleCheckboxChange('substanceUse', label)}
                                  />
                                  <label htmlFor={`substance${index}`}></label>
                                  <label
                                    htmlFor={`substance${index}`}
                                    className="check-label"
                                  >
                                    {label}
                                  </label>
                                </div>
                              ))}
                            </>
                          )}
                          {currentInput === 8 && (
                            <>
                              <h1 className="heading54 mb-4">
                                Have you ever been diagnosed with AIDS, HIV, or AIDS-related complex (ARC)?
                              </h1>
                              <p className="sub20  mb-4">
                                We know this is a sensitive topic, and we take great measures to ensure your privacy.
                              </p>
                              <div className="row">
                                <div className="col-lg-6 mb-3 ">
                                  <div
                                    className={`selectGender ${formData.hivStatus === 'Yes' ? 'selected' : ''}`}
                                    onClick={() => updateFormData('hivStatus', 'Yes', true)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    Yes
                                  </div>
                                </div>
                                <div className="col-lg-6 mb-3 ">
                                  <div
                                    className={`selectGender ${formData.hivStatus === 'No' ? 'selected' : ''}`}
                                    onClick={() => updateFormData('hivStatus', 'No', true)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    No
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {currentInput === 9 && (<>
                            <h1 className="heading54 mb-4">
                              We’re almost to your estimate.
                            </h1>
                            <p className="sub20  mb-4">
                              As a last step, we need your email and phone number.
                            </p>
                            <div className="seletDateOuter">
                              <input
                                type="text"
                                id="First_Name"
                                placeholder="First Name"
                                value={formData.First_Name}
                                onChange={(e) => updateFormData('First_Name', e.target.value)}
                              />
                              <label htmlFor="First_Name">First Name</label>
                            </div>
                            <div className="seletDateOuter">
                              <input
                                type="text"
                                id="Last_Name"
                                placeholder="Last Name"
                                value={formData.Last_Name}
                                onChange={(e) => updateFormData('Last_Name', e.target.value)}
                              />
                              <label htmlFor="Last_Name">Last Name</label>
                            </div>
                            <div className="seletDateOuter">
                              <input
                                type="text"
                                id="Email"
                                placeholder="email"
                                value={formData.Email}
                                onChange={(e) => updateFormData('Email', e.target.value)}
                              />
                              <label htmlFor="Email">Email</label>
                            </div>
                            <div className="seletDateOuter">
                              <input
                                type="text"
                                id="Phone"
                                placeholder="Phone"
                                value={formData.Phone}
                                onChange={(e) => updateFormData('Phone', e.target.value)}
                              />
                              <label htmlFor="Phone">Phone</label>
                            </div>
                          </>)}
                        </>
                      )}

                      {step === 2 && (
                        <>
                          <h1 className="heading54 mb-2">Review Your Information</h1>
                          <div className="review-section">
                            <p className="sub20 mb-3">Please review your information before submitting:</p>
                            <div className="form-summary" style={{ textAlign: 'left', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', marginBottom: '20px' }}>
                              <h5 className="sub24">Personal Information:</h5>
                              <p><strong>Goals:</strong> {formData.goal.join(', ') || 'Not specified'}</p>
                              <p><strong>Risk Tolerance:</strong> {formData.risk || 'Not specified'}</p>
                              <p><strong>Gender:</strong> {formData.gender || 'Not specified'}</p>
                              <p><strong>Date of Birth:</strong> {formData.dob || 'Not specified'}</p>
                              <p><strong>Zip Code:</strong> {formData.zipCode || 'Not specified'}</p>

                              <h5 className="sub24 mb-3">Account Information:</h5>
                              <p><strong>Household Income:</strong> {formData.householdIncome || 'Not specified'}</p>
                              <p><strong>Personal Income:</strong> {formData.personalIncome || 'Not specified'}</p>
                              <p><strong>Monthly Contribution:</strong> ${formData.monthlyContribution}</p>
                              <p><strong>U.S. Citizen:</strong> {formData.citizen || 'Not specified'}</p>
                              <p><strong>Employed:</strong> {formData.employed || 'Not specified'}</p>
                              <p><strong>Marital Status:</strong> {formData.maritalStatus || 'Not specified'}</p>
                              <p><strong>Activities:</strong> {formData.activities.join(', ') || 'Not specified'}</p>
                              <p><strong>Height:</strong> {formData.height || 'Not specified'}</p>
                              <p><strong>Weight:</strong> {formData.weight ? `${formData.weight} lbs` : 'Not specified'}</p>
                              <p><strong>Substance Use:</strong> {formData.substanceUse.join(', ') || 'Not specified'}</p>
                              <p><strong>HIV Status:</strong> {formData.hivStatus || 'Not specified'}</p>
                            </div>
                            <button className="btn btn-success" onClick={handleSubmit}>
                              Submit Application
                            </button>
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
          {/* Your existing navigation buttons */}
            {(step > 0 || currentInput > 0) && (
                        <button className="steperBack" onClick={prevInput}>
                          <FaArrowLeft />
                        </button>
                      )}
                      {(step < steps.length - 1 ||
                        currentInput < currentStepInputs.length - 1) && (
                          <button className="commonBtn" onClick={nextInput}>
                            Next
                          </button>
                        )}
        </div>
      </div>
    </div>
  </div>
</div>
      </section>
                      <div className="row mt-auto">
                  <div className="col-12">
                    <div className="d-flex justify-content-center my-4 gap-3">
                    
                    </div>
                  </div>
                </div>
    </>);
}
