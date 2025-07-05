"use client";
import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import Select from "react-select";

const options = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
const marital = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "separated", label: "Separated" },
  { value: "widowed", label: "Widowed" },
];
const risk = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];
const childrenOptions = Array.from({ length: 101 }, (_, i) => ({
  value: i,
  label: i.toString(),
}));
const Calculator = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // only style the placeholder gray, leave everything else default
  const selectStyles = {
    placeholder: provided => ({
      ...provided,
      color: "#6c757d", // Bootstrap’s secondary gray
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.selectProps.menuIsOpen ? provided.color : "#212529", // dark text once selected
    }),
  };

  const [selectedChildren, setSelectedChildren] = useState(null);
  return (
    <section className="calculator py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 mb-5 lg-mb-0">
            <div className="calcLeftCard">
              <h2 className="heading54">Globe Integrity's Insurance Calculator</h2>
              <p className="sub24">
                In three simple steps we will establish your coverage need,
                determine the best product for you, and get you started on a
                plan.
              </p>
              <div className="calcHeading">
                <div className="calcCount">1</div>
                Personal Details
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Date of Birth</h4>
                      <p className="sub18">
                        Age is a big factor in what life insurance products are
                        a good fit for you and how much they will cost.
                      </p>
                    </div>
                  </div>
                  Date Of Birth
                </div>
                <div className="calcInput">
                  <input type="text" placeholder="01/01/1911" />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Gender</h4>
                      <p className="sub18">
                        Insurance carriers have different cost models for men
                        and women so it's helpful for us to know this.
                      </p>
                    </div>
                  </div>
                  Gender
                </div>
                <div className="calcInput">
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Gender"
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        minHeight: "64px",
                        height: "64px",
                        width: "100%",
                        borderRadius: "0",
                        borderColor: "#2d3269",
                        boxShadow: state.isFocused ? "none" : "none",
                        "&:hover": {
                          borderColor: "#2d3269",
                        },
                        fontSize: "18px",
                        color: "#2d3269",
                      }),
                      container: provided => ({
                        ...provided,
                        width: "100%",
                      }),
                      valueContainer: provided => ({
                        ...provided,
                        height: "64px",
                        padding: "0 12px",
                      }),
                      input: provided => ({
                        ...provided,
                        margin: "0px",
                      }),
                      placeholder: provided => ({
                        ...provided,
                        color: "#adb5bd",
                        lineHeight: "64px",
                        fontSize: "18px",
                      }),
                      singleValue: provided => ({
                        ...provided,
                        lineHeight: "64px",
                        fontSize: "18px",
                      }),
                    }}
                  />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Zip Code</h4>
                      <p className="sub18">
                        Life insurance is regulated at the state level, so
                        different products may be available to you depending on
                        where you live.
                      </p>
                    </div>
                  </div>
                  Zip Code
                </div>
                <div className="calcInput">
                  <input type="text" placeholder="12345" />
                </div>
              </div>
              <div className="calcHeading my-5">
                <div className="calcCount">2</div>
                Coverage Need
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Marital status</h4>
                      <p className="sub18">
                        This helps us figure out who will need financial support
                        if you were to pass away.
                      </p>
                    </div>
                  </div>
                  Marital status
                </div>
                <div className="calcInput">
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={marital}
                    placeholder="Marital status"
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        minHeight: "64px",
                        height: "64px",
                        width: "100%",
                        borderRadius: "0",
                        borderColor: "#2d3269",
                        boxShadow: state.isFocused ? "none" : "none",
                        "&:hover": {
                          borderColor: "#2d3269",
                        },
                        fontSize: "18px",
                        color: "#2d3269",
                      }),
                      container: provided => ({
                        ...provided,
                        width: "100%",
                      }),
                      valueContainer: provided => ({
                        ...provided,
                        height: "64px",
                        padding: "0 12px",
                      }),
                      input: provided => ({
                        ...provided,
                        margin: "0px",
                      }),
                      placeholder: provided => ({
                        ...provided,
                        color: "#adb5bd",
                        lineHeight: "64px",
                        fontSize: "18px",
                      }),
                      singleValue: provided => ({
                        ...provided,
                        lineHeight: "64px",
                        fontSize: "18px",
                      }),
                    }}
                  />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">
                        Number of Children Under 18
                      </h4>
                      <p className="sub18">
                        If you've got kids, it's wise to ensure you have enough
                        income replacement and college expenses factored into
                        your coverage amount.
                      </p>
                    </div>
                  </div>
                  Number of Children Under 18
                </div>
                <div className="calcInput">
                  <Select
                    value={selectedChildren}
                    onChange={setSelectedChildren}
                    options={childrenOptions}
                    placeholder="Children"
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        minHeight: "64px",
                        height: "64px",
                        width: "100%",
                        borderRadius: "0",
                        borderColor: "#2d3269",
                        boxShadow: "none",
                        "&:hover": {
                          borderColor: "#2d3269",
                        },
                        fontSize: "18px",
                        color: "#2d3269",
                        cursor: "pointer",
                      }),
                      container: provided => ({
                        ...provided,
                        width: "100%",
                      }),
                      valueContainer: provided => ({
                        ...provided,
                        height: "64px",
                        padding: "0 12px",
                      }),
                      input: provided => ({
                        ...provided,
                        margin: "0px",
                      }),
                      placeholder: provided => ({
                        ...provided,
                        color: "#adb5bd",
                        lineHeight: "64px",
                        fontSize: "18px",
                      }),
                      singleValue: provided => ({
                        ...provided,
                        lineHeight: "64px",
                        fontSize: "18px",
                      }),
                    }}
                  />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Your Annual Income</h4>
                      <p className="sub18">
                        This helps us know how much income will need to be
                        replaced if you were to pass away.
                      </p>
                    </div>
                  </div>
                  Your Annual Income
                </div>
                <div className="calcInput">
                  <input type="text" placeholder="$75,000" />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">
                        Existing Life Insurance Coverage
                      </h4>
                      <p className="sub18">
                        Include any existing life insurance coverage you have
                        purchased for yourself.
                      </p>
                    </div>
                  </div>
                  Existing Life Insurance Coverage
                </div>
                <div className="calcInput">
                  <input type="text" placeholder="$50,000" />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">
                        Total Savings + Liquid Assets
                      </h4>
                      <p className="sub18">
                        This is all the money you have in cash, savings,
                        checking, or securities that you could access
                        immediately if needed.
                      </p>
                    </div>
                  </div>
                  Total Savings + Liquid Assets
                </div>
                <div className="calcInput">
                  <input type="text" placeholder="$18,700" />
                </div>
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">
                        Total Retirement Savings
                      </h4>
                      <p className="sub18">
                        This is all the money you have set aside specifically
                        for retirement. Hopefully this is mostly in a 401(k),
                        IRA, Roth IRA, or some other tax-deferred or
                        tax-advantaged account.
                      </p>
                    </div>
                  </div>
                  Total Retirement Savings
                </div>
                <div className="calcInput">
                  <input type="text" placeholder="$5,000" />
                </div>
              </div>
              <div className="calcHeading my-5">
                <div className="calcCount">3</div>
                Product Fit Assessment
              </div>
              <div className="calcFormControl">
                <div className="calcLabel">
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">Risk Tolerance</h4>
                      <p className="sub18">
                        Be honest here. High risk tolerance means you are
                        comfortable with potentially losing money on an
                        investment.
                      </p>
                    </div>
                  </div>
                  Risk Tolerance
                </div>
                <div className="calcInput">
                  <Select
                    value={selectedChildren}
                    onChange={setSelectedChildren}
                    options={risk}
                    placeholder="Choose"
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        minHeight: "64px",
                        height: "64px",
                        width: "100%",
                        borderRadius: "0",
                        borderColor: "#2d3269",
                        boxShadow: "none",
                        "&:hover": {
                          borderColor: "#2d3269",
                        },
                        fontSize: "18px",
                        color: "#2d3269",
                        cursor: "pointer",
                      }),
                      container: provided => ({
                        ...provided,
                        width: "100%",
                      }),
                      valueContainer: provided => ({
                        ...provided,
                        height: "64px",
                        padding: "0 12px",
                      }),
                      input: provided => ({
                        ...provided,
                        margin: "0px",
                      }),
                      placeholder: provided => ({
                        ...provided,
                        color: "#adb5bd",
                        lineHeight: "64px",
                        fontSize: "18px",
                      }),
                      singleValue: provided => ({
                        ...provided,
                        lineHeight: "64px",
                        fontSize: "18px",
                      }),
                    }}
                  />
                </div>
              </div>
              <div className="calcFormControl border-0 mb-3 pb-0">
                <div className="calcLabel">
                  <div className="infoIconWrapper">
                    <CiCircleInfo
                      style={{ width: "18px", height: "18px" }}
                      className="infoIcon"
                    />
                    <div className="tooltipBox">
                      <h4 className="heading28 fw-bold">
                        Years Before You Will Use Your Cash Value
                      </h4>
                      <p className="sub18">
                        This is all the money you have set aside specifically
                        for retirement. Hopefully this is mostly in a 401(k),
                        IRA, Roth IRA, or some other tax-deferred or
                        tax-advantaged account.
                      </p>
                    </div>
                  </div>
                  Years Before You Will Use Your Cash Value
                </div>
                <div className="calcInput">
                  <input type="number" placeholder="10" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 lg-mb-4">
            <div className="calcRightCard">
              <div className="row mb-4">
                <div className="col-lg-6 mb-4 lg-mb-0">
                  <div className="calcRightInner">
                    <div className="py-5">
                      <h4 className="text-center">Your Total Coverage Need</h4>
                      <p className="sub16 fw-normal mb-0">
                        To see your result, please answer questions to the left.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <span className="sub16 mb-2 d-block fw-normal">
                        Progress Until Answer
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar w-50"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  mb-4 lg-mb-0">
                  <div className="calcRightInner">
                    <div className="py-5">
                      <h4 className="text-center">
                        Permanent Coverage to Start With
                      </h4>
                      <p className="sub16 fw-normal mb-0">
                        To see your result, please answer questions to the left.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <span className="sub16 mb-2 d-block fw-normal">
                        Progress Until Answer
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar w-50"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="policyType mb-4">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="calcLabel">
                      <div className="infoIconWrapper">
                        policy type
                        <CiCircleInfo
                          style={{ width: "18px", height: "18px" }}
                          className="infoIcon"
                        />
                        <div className="tooltipBox">
                        <h4 className="heading28 fw-bold">
                        POLICY TYPE
                      </h4>
                          <p className="sub18">
                            Some policy are first and foremost a way to protect your loved ones when you pass away. Some policy types also offer you a chance to build tax-efficient wealth that can be used while you’re alive. These elements of protection and tax-efficient wealth building are a great place to start when comparing products. Because they are very distinct functions, we will approach each element separately.

                          </p>
                        </div>
                      </div>
                      
                    </div>
                    <h4 className="">Which policy type should you consider?</h4>
                    <p className="sub16 fw-normal mb-0">
                      To see your result, please answer questions to the left.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <span className="sub16 mb-2 d-block fw-normal">
                      Progress Until Answer
                    </span>
                    <div className="progress">
                      <div
                        className="progress-bar w-50"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="calcFooter">
                <div className="row">
                    <div className="col-lg-6">
                        <p>© 2021 by Globe Integrity. All rights reserved. Globe Integrity operates in California as Globe Integrity Life Insurance Services (CA license # 6004158).
                        <br/>
                        <br/>
                        This webpage is for educational purposes only, and is not a recommendation to purchase, sell, hold, or roll over any asset and does not account for any investment, tax, or financial condition of any specific person.
                        <br/>
                        <br/>
                        It is possible that coverage will terminate when either no premiums are paid following the initial premium, or subsequent premiums are insufficient to continue coverage.
                        <br/>
                        <br/>
                        Variable Universal Life (VUL) policies are a combination of life insurance and a security that requires Securities and Exchange Commission registration. Actual performance of a VUL policy is dependent on the performance of the underlying investment. VUL policies can be negatively impacted by the performance of the underlying investment options, inadequate funding, and increasing cost of insurance rates. There is no guaranteed rate of interest.
                        <br/>
                        <br/>
                        Accessing policy cash value through loans and surrenders may cause a permanent reduction of policy cash values and death benefit and negate any guarantees against lapse that may be provided under your policy. Surrender charges may apply to the policy and loans may be subject to interest charges. Although loans are generally not taxable, there may be tax consequences if the policy lapses, or is surrendered or exchanged with an outstanding loan.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <p>
                         Taxable income could exceed the amount of proceeds actually available. Surrenders are generally taxable to the extent they exceed the remaining investment in the policy.
                        <br/>
                        <br/>
                        Securities offered through The Leaders Group, Inc. Member FINRA/SIPC 26 W Dry Creek Circle, Suite 800, Littleton, CO 80120, 303-797-9080. Globe Integrity Life Insurance Company is not affiliated within The Leaders Group, Inc. Globe Integrity Life Insurance Company offers variable life insurance policies underwritten by Nationwide Mutual Insurance Company and Equitable Financial Life Insurance Company of America.
                                                Accessing policy cash value through loans and surrenders may cause a permanent reduction of policy cash values and death benefit and negate any guarantees against lapse that may be provided under your policy. Surrender charges may apply to the policy and loans may be subject to interest charges. Although loans are generally not taxable, there may be tax consequences if the policy lapses, or is surrendered or exchanged with an outstanding loan. Taxable income could exceed the amount of proceeds actually available. Surrenders are generally taxable to the extent they exceed the remaining investment in the policy.
                        <br/>
                        <br/>
                        Check the background of your financial professional or broker/dealer with FINRA BrokerCheck.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
