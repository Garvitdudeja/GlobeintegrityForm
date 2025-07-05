"use client";
import React from "react";

import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
export default function Faq() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const bootstrap = require("bootstrap");
      new bootstrap.ScrollSpy(document.body, {
        target: "#navbar-example2",
        rootMargin: "0px 0px -40%",
        smoothScroll: true,
      });

      // Auto open dropdown if child is active
      const dropdownToggle = document.querySelector(
        "#navbar-example2 .dropdown-toggle"
      );
      const dropdownMenu = document.querySelector(
        "#navbar-example2 .dropdown-menu"
      );

      const interval = setInterval(() => {
        const anyActive = dropdownMenu.querySelector(".dropdown-item.active");
        if (anyActive) {
          dropdownToggle.classList.add("show");
          dropdownMenu.classList.add("show");
        } else {
          dropdownToggle.classList.remove("show");
          dropdownMenu.classList.remove("show");
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
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

      {/* ✅ Sticky Navbar under header */}
      <nav
        id="navbar-example2"
        className="navbar bg-light px-3 mb-3"
        style={{ position: "sticky", top: "121px", zIndex: 1000 }}
      >
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              First
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Second
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Third
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Fourth
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Fifth
                </a>
              </li>
            </ul>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading6">
              Second sdfdsfs
            </a>
          </li>
        </ul>
      </nav>

      {/* ✅ Content with only ONE scroll bar */}
      <div className="container prouctFaq mainFaqPage py-0">
        <div id="scrollspyHeading1" className="mainFaqItems">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-lg-4">
                  <h4 className="heading28">Get Started</h4>
                </div>
                <div className="col-lg-8">
                  <div className="accordion mb-5" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What Is Universal Life Insurance?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Universal Life Insurance is a type of Permanent Life
                          Insurance that provides flexible premiums and the
                          ability to adjust the death benefit. It combines the
                          features of Term Life Insurance, which provides
                          protection for a specific period of time, with the
                          savings element of Permanent Life Insurance, which
                          builds cash value over time. There are several types
                          of Universal Life Insurance, a couple of which we can
                          dive deeper on are:
                          <ul className="faqList">
                            <li>
                              <Link href="">
                                Indexed Universal Life Insurance
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                Variable Universal Life Insurance
                              </Link>
                            </li>
                          </ul>
                          See the individual FAQs for each type to learn more.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What is Variable Universal Life (VUL) Insurance?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          A type of Permanent Life Insurance that provides both
                          a death benefit and a savings or investment component.
                          It is similar to Indexed Universal Life Insurance but
                          with the added feature of allowing policyholders to
                          allocate their cash value into different investment
                          options, such as mutual funds. One of the main
                          advantages of VUL insurance is that it allows
                          policyholders to participate in the potential growth
                          of the stock market or other securities, and also
                          allows them to have more control over the investment
                          options of their cash value. Visit our VUL product
                          page to learn more.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          What are the advantages of Universal Life Insurance?
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Universal Life Insurance offers several advantages
                          over Term Life Insurance, including:
                          <ul className="faqList">
                            <li>
                              <strong>Flexible</strong>{" "}
                              <Link href="">Premiums</Link>: Unlike other types
                              of life insurance, Universal Life Insurance allows
                              policyholders to adjust the premium amount and
                              payment frequency based on their changing
                              financial situation.
                            </li>
                            <li>
                              <Link href="">Cash Value</Link>{" "}
                              <strong>Accumulation</strong> : Universal Life
                              Insurance policies have a cash value component
                              that grows over time, based on interest rates and
                              investment returns.
                            </li>
                            <li>
                              <strong>Tax Benefits</strong>: The cash value of a
                              Universal Life Insurance policy grows
                              tax-deferred, meaning that policyholders do not
                              pay taxes on the earnings until they withdraw
                              them.
                            </li>
                            <li>
                              <strong>Permanent Coverage</strong>: Universal
                              Life Insurance provides coverage for the insured's
                              entire lifetime*, as long as premiums are paid.
                            </li>
                            <li>
                              <strong>Customizable Death Benefit</strong>:
                              Universal Life Insurance policies typically allow
                              policyholders to adjust the death benefit amount
                              over time. This can be useful for those who want
                              to increase or decrease their coverage based on
                              changes in their financial situation.
                            </li>
                          </ul>
                          *Policies typically mature, meaning they pay out the
                          benefit amount, if the policyholder lives to be 120 or
                          121 years old (could be shorter, depending on the
                          policy). <br />
                          Learn more about how Universal Life Insurance compares
                          to other insurance and wealth building vehicles in our
                          Guide to Life Insurance.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse6"
                          aria-expanded="false"
                          aria-controls="collapse6"
                        >
                          When should I consider Universal Life Insurance as
                          part of my insurance plan?
                        </button>
                      </h2>
                      <div
                        id="collapse6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          There are several factors that can help determine
                          whether Universal Life Insurance is right for you at
                          this stage of your life, but here are the high-level
                          criteria to help you determine if this tool is right
                          for you:
                          <ul className="faqList">
                            <li>
                              <strong>Are you looking for a</strong>:{" "}
                              <Link href=""> death benefit? </Link> First and
                              foremost, Globe Integrity only recommends Universal Life
                              Insurance to those looking for some form of
                              coverage in the event of their death. If you’re
                              only considering Universal Life for its cash value
                              savings component then it’s probably not the best
                              option for you.
                            </li>
                            <li>
                              <strong>
                                Do you have sufficient free-cash flow?
                              </strong>{" "}
                              Because Universal Life Insurance has higher{" "}
                              <Link href="">premiums</Link> than{" "}
                              <Link href="">Term Life Insurance</Link>, Globe Integrity
                              typically only recommends Universal Life Insurance
                              to those who can afford the higher monthly
                              payments. If money is tight, or your income is
                              highly variable then there are other ways to get
                              coverage that might work better for you.
                            </li>
                            <li>
                              <strong>
                                Does it make sense for you at this stage of
                                life?
                              </strong>
                              : There are several tax-advantaged accounts that
                              are great tools for building wealth. Your life
                              situation typically determines which of these
                              accounts you can leverage. For example, if you are
                              able to contribute to a 401k through your
                              employer, Globe Integrity typically recommends you
                              contribute to that account first, especially if
                              your employer offers some kind of matching.
                              Ultimately, which tax-advantaged vehicles you
                              leverage as part of your holistic financial plan
                              really depends on your goals, risk tolerance,
                              stage of life, and several other factors.
                            </li>
                          </ul>
                          Ultimately, we’ve seen Universal Life Insurance work
                          well for clients of all different types. If you’re
                          unsure whether Universal Life is right for you, check
                          out our website or give us a call. We can offer
                          personalized recommendations that are right for you.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          Why save funds with life insurance? Why bundle
                          protection and growth?
                        </button>
                      </h2>
                      <div
                        id="collapse5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Cash value is a powerful savings and investment tool
                          offered within a Permanent Life Insurance policy that
                          can help you achieve your financial goals. Cash value
                          life insurance can be used to generate tax-efficient
                          growth, save for retirement, generate income, and
                          provide liquidity for future needs. Additionally, cash
                          value policies are an important aspect of succession
                          planning and offer protection against creditors and
                          legal cases in most states. With its many benefits,
                          cash value life insurance is an excellent choice for
                          those seeking long-term financial security.
                          <br />
                          Learn more about building wealth with life insurance
                          in our Guide to Life Insurance.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="scrollspyHeading2" className="mainFaqItems">
          <h4>Heading 2</h4>
          <p>Long content section 2...</p>
        </div>
        <div id="scrollspyHeading3" className="mainFaqItems">
          <h4>Heading 3</h4>
          <p>Long content section 3...</p>
        </div>
        <div id="scrollspyHeading4" className="mainFaqItems">
          <h4>Heading 4</h4>
          <p>Long content section 4...</p>
        </div>
        <div id="scrollspyHeading5" className="mainFaqItems">
          <h4>Heading 5</h4>
          <p>Long content section 5...</p>
        </div>
        <div id="scrollspyHeading6" className="mainFaqItems">
          <h4>Heading 5</h4>
          <p>Long content section 6...</p>
        </div>
      </div>
    </>
  );
}
