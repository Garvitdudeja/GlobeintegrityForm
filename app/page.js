'use client';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Image from 'next/image'
import * as images from './../utilities/images'
import { useState } from "react";
import { Range } from "react-range";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TaxCards from "@/Components/HomePage/taxCards";
const Home = () => {
  const customerReviews = [
    {
      image: images.starsImg,
      alt: "star",
      reviewText: "Getting my indexed universal life policy was a breeze, thanks to my advisor's expertise and personalized approach. They walked me through every step of the process, ensuring I understood all the details. Now, seeing my policy exceed its projections gives me peace of mind and reassurance for the years ahead.",
      name: "John Smith"
    },
    {
      image: images.starsImg,
      alt: "star",
      reviewText: "Getting my indexed universal life policy was a breeze, thanks to my advisor's expertise and personalized approach. They walked me through every step of the process, ensuring I understood all the details. Now, seeing my policy exceed its projections gives me peace of mind and reassurance for the years ahead.",
      name: "John Smith"
    },
    {
      image: images.starsImg,
      alt: "star",
      reviewText: "Getting my indexed universal life policy was a breeze, thanks to my advisor's expertise and personalized approach. They walked me through every step of the process, ensuring I understood all the details. Now, seeing my policy exceed its projections gives me peace of mind and reassurance for the years ahead.",
      name: "John Smith"
    }
  ];

  const taxCards = [
    {
      image: images.tax1,
      alt: "icon",
      title: "Protect",
      subtitle: "your loved ones",
      description: "Gain peace of mind knowing your family is protected in case the unexpected happens. Globe Integrity combines life insurance and wealth-building into one powerful solution.",
      buttonText: "CALCULATE COVERAGE"
    },
    {
      image: images.tax2,
      alt: "icon",
      title: "Grow",
      subtitle: "your wealth",
      description: "Turn your life insurance policy into a wealth-building tool. With Globe Integrity, enjoy tax-advantaged growth and the flexibility to access your funds for life’s major milestones.ESTIMATE CASH VALUE",
      buttonText: "ESTIMATE CASH VALUE"
    },
    {
      image: images.tax3,
      alt: "icon",
      title: "Simplify",
      subtitle: "the process",
      description: "We’ve made getting covered easier than ever. Get a free personalized plan and speak with an expert who will walk you through the next steps — most applications are quick and hassle-free.",
      buttonText: "GET MY PERSONALIZED PLAN"
    }
  ];

  const stepsData = [
    {
      number: 1,
      title: "Get an Estimate",
      description: "Answer a few quick questions to get a free, no-obligation estimate and product recommendation customized for you."
    },
    {
      number: 2,
      title: "Speak with a Licensed Advisor",
      description: "Schedule a quick call with one of our licensed advisors to review your estimate and answer any questions about your options."
    },
    {
      number: 3,
      title: "Apply and Get Covered",
      description: "Our team will help you apply and guide you through getting covered — no medical exam required in most cases."
    }
  ];
  // Range slider
  const [values, setValues] = React.useState([100]);
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      question: 'Our Values',
      answer:
        'At Globe Integrity, our team of advisors specializes in securing the ideal coverage for each individual client at a highly competitive rate. With a focus on securing your future and providing unwavering support, our financial advisors are committed to ensuring that you are well-protected and prepared for whatever life may bring.',
    },
    {
      question: 'Company Mission',
      answer:
        "Our goal is to provide monetary and insurance solutions that are easy to understand. We strive to offer people, families, and companies safety and security by offering the most extensive and customized insurance coverages. We do this by offering the largest selection of investment and insurance options. Our customers may confidently confront future's risks thanks to our reliable insurance coverages.",
    },
    {
      question: 'Our Goals',
      answer:
        "Protecting the things that are most important to you and ensuring your security are our top priorities at Globe Integrity. Our commitment lies in offering dependable insurance options that provide you with the sense of calmness you deserve. We've got you secured whether it's your company, house, car, or health. You can rely on us to keep our word and perform honestly and transparently right when you require us the most. Insure anything under the sun with us and live a secured life stress-free.",
    },
    {
      question: 'Why Choose Globe Integrity',
      answer:
        "In most cases, no medical exam is required to get covered through our simplified process. Some higher coverage amounts or specific situations may still require one, but our team will guide you every step of the way."
    },
        {
      question: 'How Quickly Can I Get Covered?',
      answer:
        "Many of our clients are able to get same-day estimates and fast approvals, sometimes in as little as 24 to 48 hours. Our process is streamlined to get you covered as quickly as possible."
    },
    
  ];
  // slider 
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
  const [isActive, setIsActive] = useState(false);
  const [financialGoal, setFinancialGoal] = useState(""); // "Grow", "Protect", "Both"
  const [riskTolerance, setRiskTolerance] = useState(""); // "Low", "Medium", "High"
  return (
    <>
      <section className="banner">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="bannerInner">
                <div className="row">
                  <div className="col-lg-6">
                    <h2 className="heading54">Build tax-free<br /> wealth.<span className="sky"> Protect your<br /> future.</span></h2>
                    <p className="sub16">Whether you&apos;re planning for retirement or protecting your family, Globe Integrity gives you the strategy and security to do both in one policy.</p>
                    <button type="button" className="commonBtn me-2">See If you Qualify</button>
                    <button type="button" className="blueBtn">Watch Video <Image src={images.videoIcon} alt="icon" className="ms-1 mb-1" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customer">
        <div className="container-fluid">
          <div className="row text-center mb-4">
            <div className="col-12">
              <h2 className="heading54">What our customers are <span className="sky">talking about</span></h2>
              <Image src={images.starsImg} alt="stars" className="mb-2" />
              <p className="sub16"><Image src={images.star} className="me-1 mb-1" alt="icon" />Trustpilot</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel
                swipeable
                draggable
                showDots={false}
                responsive={responsive}
                ssr // enable server-side rendering
                infinite
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl
                customTransition="all .5s"
                transitionDuration={500}
                container-fluidClass="carousel-container-fluid"
                removeArrowOnDeviceType={['tablet', 'mobile']}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                arrows={false}
              >
                {customerReviews.map((review, index) => (
                  <div className="customerCard" key={index}>
                    <Image
                      src={review.image}
                      alt={review.alt || `Reviewer ${index + 1}`}
                      width={80}
                      height={80}
                      className="mb-2 mx-auto d-block"
                    />
                    <p className="mb-2 sub14">{review.reviewText}</p>
                    <h6 className="reviewName mb-0">{review.name}</h6>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="tax">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-12">
              <h2 className="heading54">Bundled Protection and  <span className="sky">Tax Savings</span></h2>
            </div>
          </div>
          <TaxCards data={taxCards}/>
        </div>
      </section>
      <section className="steps">
        <div className="container-fluid">
          <div className="row text-center mb-4">
            <div className="col-12">
              <h2 className="heading54">Done in 3 Easy <span className="sky">Steps </span></h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row align-items-center">
                <div className="col-6">
                  <Image src={images.steps} alt="image" className="img-fluid" />
                </div>
                <div className="col-6" >
                  {stepsData.map((step, index) => (
                    <div className="stepsCard" key={index}>
                      <div>
                        <div className="stepNum">
                          {step.number}
                        </div>
                      </div>
                      <div className="stepDes">
                        <h6 className="heading36">{step.title}</h6>
                        <p className="sub36">{step.description}</p>
                      </div>
                    </div>
                  ))}
                  <button className="commonBtn">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="love">
        <div className="container-fluid">
          <div className="row mb-4 justify-content-center">
            <div className="col-xl-8">
              <div className="row text-center">
                <div className="col-12">
                  <h2 className="heading54 mb-3">Personalized life insurance designed to grow your money and <span className="sky">protect the people you love.</span></h2>
                  <p className="sub36 mb-5">You&apos;ve got options. We help you find them.</p>
                </div>
              </div>
              <div className="loveForm">

                <div className="row mb-5">
                  <div className="col-lg-6 mb-4 mb-sm-5">
                    <div className="row">
                      <div className="col-6">
                        <label className="form-label customLabel">Age</label>
                        <input type="number" className="form-control customInput" id="" />
                      </div>
                      <div className="col-6">
                        <label className="form-label customLabel">Zip Code</label>
                        <input type="text" className="form-control customInput" id="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-5">
                    <label className="form-label customLabel">Monthly contribution budget</label>
                    <div style={{ marginTop: '48px', marginLeft: '20px' }}>
                      <Range
                        step={0.1}
                        min={0}
                        max={100}
                        values={values}
                        onChange={(values) => setValues(values)}
                        renderTrack={({ props, children }) => (
                          <div
                            {...props}
                            style={{
                              ...props.style,
                              height: '1px',
                              width: '100%',
                              backgroundColor: '#2D3269',
                            }}
                            className="rangeBorder"
                          >
                            {children}
                          </div>
                        )}
                        renderThumb={({ props, index }) => (
                          <div
                            {...props}
                            style={{
                              ...props.style,
                              height: '40px',
                              width: '40px',
                              backgroundColor: '#fff',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: '50%',
                              border: '1px solid #2D3269'
                            }}
                            className="rangeRound"
                          >
                            <div style={{ position: 'absolute', top: '-38px', fontWeight: '600', fontSize: '24px', background: 'transparent', color: '#2F3A4E' }} className="rangeCount">
                              ${values[index].toFixed(1)}
                            </div>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <label className="form-label customLabel">What are your financial goals?</label>
                    <div className="loveBtnOuter">
                      {["Grow", "Protect", "Both"].map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          className={`loveBtn ${financialGoal === goal ? "active" : ""}`}
                          onClick={() => setFinancialGoal(goal)}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <label className="form-label customLabel">How would you describe your risk tolerance?</label>
                    <div className="loveBtnOuter">
                      {["Low", "Medium", "High"].map((risk) => (
                        <button
                          key={risk}
                          type="button"
                          className={`loveBtn ${riskTolerance === risk ? "active" : ""}`}
                          onClick={() => setRiskTolerance(risk)}
                        >
                          {risk}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="commonBtn mx-auto d-block">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container-fluid">
          <div className="row justify-content-center  mb-4">
            <div className="col-xl-8">
              <div className="row text-center">
                <div className="col-12">
                  <h2 className="heading54 mb-3">Intelligently Asked  <span className="sky">Questions</span></h2>
                </div>
              </div>
              
                  {faqData.map((item, index) => (
                    <div className="row  faqItem" key={index}>
                      <div className="col-lg-6">
                        <span className="icon me-2">+</span>
                        <strong className="question">{item.question}</strong>
                      </div>
                      <div className="col-lg-6">
                        <div className={`faq-content ${openIndex === index ? 'expanded' : ''}`}>
                          {item.answer}
                          <button
                            className="toggleBtn"
                            onClick={() =>
                              setOpenIndex(openIndex === index ? null : index)
                            }
                          >
                            {openIndex === index ? ' Read Less' : ' Read More'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
      </section>
      <section className="agent">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="row">
                <div className="col-lg-4">
                  <Image src={images.agent} alt="icon" className="img-fluid" />
                </div>
                <div className="col-lg-8">
                  <h2 className="heading54 mb-3">Find a local insurance  <span className="sky">agent</span></h2>
                  <p className="agentDetail"><span className="telWhiteOuter"><Image src={images.telWhite} alt="icon" className="telWhite" /></span>Call Us: +1 8447874652</p>
                  <button className="commonBtn">Get a Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home;