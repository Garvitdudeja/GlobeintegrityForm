"use client";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "../bootstrap-client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Faq() {
  useEffect(() => {
    // Optional: Re-initialize scrollspy after mount
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(({ ScrollSpy }) => {
      const el = document.querySelector('[data-bs-spy="scroll"]');
      if (el && ScrollSpy) {
        new ScrollSpy(el, {
          target: '#navbar-example',
          offset: 100,
        });
      }
    });
  }, []);


  const FaqData = [
    {
      title: "Get Started",
      items: [
        {
          question: "What is Life Insurance?",
          answer: (
            <>
              Life insurance provides essential financial protection for your loved ones. It is a legally binding contract between you and an insurance company. In exchange for premium payments, your beneficiaries receive a <strong>death benefit</strong> if you pass away while the policy is active. Whether you choose Term Life or <strong>Whole Life Insurance</strong>, this coverage offers peace of mind and long-term security.
              <br />
              Learn more in our <Link href={"#"}>Guide to Life Insurance</Link>.
            </>
          ),
        },
        {
          question: "Do I Need Life Insurance?",
          answer: (
            <>
              If anyone depends on you financially, life insurance is a smart decision. <strong>Whole Life Insurance</strong> or Term Life Insurance can help ensure your family has the resources to cover living expenses, debts, and future goals in the event of your passing. It's a crucial tool for long-term financial planning.
            </>
          ),
        },
        {
          question: "What Type of Life Insurance Do I Need?",
          answer: (
            <>
              The right policy depends on your needs. <strong>Whole Life Insurance</strong> offers lifetime <strong>coverage</strong>, guaranteed <strong>death benefit</strong>, and builds <strong>cash value</strong> over time. If you prefer short-term, more affordable protection, Term Life Insurance may be suitable. Speak with our team to explore the best option for your goals.
            </>
          ),
        },
        {
          question: "I Have Life Insurance Through Work. Is That Enough?",
          answer: (
            <>
              Employer-provided life insurance often offers limited <strong>coverage</strong> and only lasts while you’re employed. Purchasing your own policy, like <strong>Whole Life Insurance</strong>, ensures long-term financial protection and full control over your <strong>death benefit</strong>.
            </>
          ),
        },
        {
          question: "What Is the 'Coverage Amount' in Life Insurance?",
          answer: (
            <>
              The <strong>coverage amount</strong> is the amount your life insurance policy pays to your beneficiaries upon your passing. It’s the foundation of your policy. Whether you're choosing Term Life or <strong>Whole Life Insurance</strong>, selecting the right <strong>coverage</strong> ensures your loved ones have financial support when they need it most.
            </>
          ),
        },
        {
          question: "How Much Life Insurance Coverage Do I Need?",
          answer: (
            <>
              Most financial experts suggest having life insurance <strong>coverage</strong> equal to <strong>5 to 10 times your annual income</strong>. <strong>Whole Life Insurance</strong> can help you meet this goal while also building long-term <strong>cash value</strong> for added financial flexibility.
            </>
          ),
        },
        {
          question: "What Does Life Insurance Cover?",
          answer: (
            <>
              Life insurance typically provides <strong>coverage</strong> for most causes of death, including:
              <ul className="faqList">
                <li><strong>Accidents:</strong> Car accidents, injuries, and unexpected events.</li>
                <li><strong>Illnesses:</strong> Conditions like cancer, heart disease, or other health issues.</li>
                <li><strong>Pandemics:</strong> Most life insurance, including <strong>Whole Life Insurance</strong>, provides protection in the event of death caused by a pandemic.</li>
              </ul>
            </>
          ),
        },
        {
          question: "What Is Not Covered by Life Insurance?",
          answer: (
            <>
              While life insurance offers broad <strong>coverage</strong>, exclusions may apply. Common situations not covered include:
              <ul className="faqList">
                <li>Suicide within the first two years (varies by state).</li>
                <li>False information provided during the application process.</li>
                <li>Insurance fraud.</li>
                <li>Carrier-specific exclusions, which may be addressed with policy riders.</li>
              </ul>
              Always review your policy details to fully understand what's covered and what's not.
            </>
          ),
        },
        {
          question: "When Is the Best Time to Buy Life Insurance?",
          answer: (
            <>
              The sooner, the better. Life insurance is more affordable when you’re young and healthy. Major life events, such as starting a family, buying a home, or launching a business, are perfect times to secure a <strong>Whole Life Insurance</strong> policy that provides lifelong <strong>coverage</strong> and builds <strong>cash value</strong>.
            </>
          ),
        },
        {
          question: "What Is a Beneficiary?",
          answer: (
            <>
              A beneficiary is the person or entity you designate to receive the <strong>death benefit</strong> from your life insurance policy. You can name individuals, multiple people, or organizations. With <strong>Whole Life Insurance</strong>, your chosen beneficiaries receive a guaranteed payout when you pass away.
            </>
          ),
        },
        {
          question: "What Is a Death Benefit?",
          answer: (
            <>
              The <strong>death benefit</strong> is the guaranteed payout your beneficiaries receive when you pass away, provided your policy is active. With <strong>Whole Life Insurance</strong>, the <strong>death benefit</strong> never decreases, offering financial peace of mind for your loved ones.
            </>
          ),
        },
        {
          question: "How Long Do I Need Life Insurance?",
          answer: (
            <>
              Many people maintain life insurance until major financial responsibilities, like a mortgage or supporting dependents, are met. <strong>Whole Life Insurance</strong> offers permanent <strong>coverage</strong> and builds <strong>cash value</strong>, ensuring protection for your entire life, no matter when you pass away.
            </>
          ),
        },
        {
          question: "How Much Does Life Insurance Cost?",
          answer: (
            <>
              Life insurance costs vary based on your age, health, and chosen <strong>coverage</strong> amount. <strong>Whole Life Insurance</strong> generally has higher premiums than Term Life but provides lifelong protection, guaranteed <strong>death benefits</strong>, and builds valuable <strong>cash value</strong>. Request a personalized quote to find a plan that fits your budget.
            </>
          ),
        },
      ]

    },
    {
      title: "Compare Products",
      items: [{
        question: "What are the different types of life insurance?",
        answer: <>There are many different types of life insurance to choose from. The most common types consumers purchase are Term Life Insurance, Permanent Life Insurance, or a Combination Policy. What you purchase ultimately depends on your needs and a variety of factors, including how long you need coverage for, how much you want to pay, and whether you’re looking to build cash value over time.</>
      },
      {
        question: "What is Term Life Insurance?",
        answer: <>Term Life Insurance is a type of life insurance policy that provides coverage for a specific period of time, or "term." If the policyholder dies during the term, the policy pays out a death benefit to the beneficiary. If the policyholder does not die during the term, the policy does not pay out and the coverage ends on the expiry date.
          <br />
          Term Life Insurance is typically less expensive than Permanent Life Insurance, however, it does not build cash value or offer tax-advantaged savings like certain types of Permanent Life Insurance.
          <br />
          Visit our <Link href={"/product/term"}>Term Life product page</Link> to learn more.</>
      }, {
        question: "",
        answer: <></>
      }, {
        question: "",
        answer: <></>
      }, {
        question: "",
        answer: <></>
      }, {
        question: "",
        answer: <></>
      }, {
        question: "",
        answer: <></>
      }, {
        question: "",
        answer: <></>
      }, {
        question: "",
        answer: <></>
      }, {
        question: "",
        answer: <></>
      }, {
        question: "",
        answer: <></>
      }, {
        question: "",
        answer: <></>
      }, {
        question: "",
        answer: <></>
      },]
    },
    { title: "Why Globe Integrity" },
    { title: "Why Bundle" },
    { title: "Apply" },
    { title: "Manage Policy" },
    { title: "Grow Wealth" },
    { title: "Access Funds" },
    { title: "Leverage Protection" },
    { title: "Expand Protection" },
  ]


  const navRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollNav = (direction) => {
    const items = navRef.current?.querySelectorAll(".nav-item");
    if (!items?.length) return;

    let newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
    newIndex = Math.max(0, Math.min(items.length - 1, newIndex)); // Clamp

    const targetItem = items[newIndex];
    targetItem?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });

    setCurrentIndex(newIndex);
  };



  return (
    <>
      <BootstrapClient />
      <section className="faqPage">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 text-center">
              <div className="faqHead">
                <h3 className="heading28">You Have Questions</h3>
                <p>We've got the answers you need to make a plan</p>
                <div className="faqSerch">
                  <button className="searchBtn">
                    <CiSearch style={{ width: "30px", height: "30px" }} />
                  </button>
                  <input
                    type="search"
                    placeholder="Search frequently asked question"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sticky Navbar */}
      <div className="mainFaqPageNav">
      <div className="faq-nav-wrapper position-relative">
        {/* Left arrow */}
        

        {/* Navbar */}
        <div className="d-flex align-items-center mx-3">
      <button onClick={() => scrollNav("left")} className="btn btn-sm me-2 leftRighArrow">
        ◀
      </button>

      <nav
        id="navbar-example2"
        className="navbar px-3  overflow-hidden flex-grow-1"
      >
        <ul
          ref={navRef}
          className="nav nav-pills flex-nowrap hide-scrollbar"
          style={{ overflowX: "auto", scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        >
          {FaqData.map((item, index) => (
            <li className="nav-item d-inline-block" key={index}>
              <a className="nav-link" href={`#scrollspyHeading${index}`}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button onClick={() => scrollNav("right")} className="btn btn-sm ms-2 leftRighArrow">
        ▶
      </button>
    </div>

        
      </div>
      </div>
      {/* <nav id="navbar-example2" className="navbar px-3 mb-3 mainFaqPageNav">
        <ul ref={navRef} className="nav nav-pills">
          {FaqData.map((item, index) =>
            <li className="nav-item">
              <a className="nav-link" href={"#scrollspyHeading" + index}>
                {item.title}
              </a>
            </li>)}
        </ul>
      </nav> */}

      {/* Content Sections */}
      <div className="container prouctFaq mainFaqPage py-0">
        <div
          className="container prouctFaq mainFaqPage py-0"
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="100"
          tabIndex="0"

        >
          {FaqData.map((faq, index) => <div id={"scrollspyHeading" + index} className="mainFaqItems">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="heading28">{faq.title}</h4>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion mb-0 mb-lg-5" id="accordionExample">
                      {faq?.items && faq.items.map((item, index) => <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#collapse" + index}
                            aria-expanded="false"
                            aria-controls={"collapse" + index}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={"collapse" + index}
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {item.answer}
                          </div>
                        </div>
                      </div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)}

        </div>
      </div>

      <section className="moreQueSection">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="row align-items-center text-center">
                <div className="col-md-12">
                  <h1 className="heading54">
                    Ready to get your estimate?
                  </h1>
                  <p className="sub24 mb-4">
                    A personalized plan for you.
                  </p>
                  <button type="button" className="commonBtnBig text-uppercase">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
