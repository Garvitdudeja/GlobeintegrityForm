'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image'
import * as images from '../../../utilities/images'
import Link from 'next/link'
import { HiArrowRight } from "react-icons/hi";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import Hero from '@/Components/Product/hero';
import { IoIosStar } from "react-icons/io";
const tabData = [
    {
      title: 'Low volatility',
      dots: [true, false, false],
      content: () => (
        <>
          <div className="row mt-5">
            <div className="col-lg-6">
              <p className="sub18 mb-2">EXAMPLE FUND: LOW VOLATILITY</p>
              <h3 className="heading36">Vanguard® VIF Conservative Allocation</h3>
              <p className="sub18 fw-normal mb-5">Inception Date: 10/2011</p>
  
              <p className="sub18 fw-normal mb-2">TOP HOLDINGS</p>
              <ul className="taxList mb-5">
                <li>Retirement</li>
                <li>Pay off student loans</li>
                <li>Down payment on a house</li>
                <li>Pay for college</li>
              </ul>
  
              <p className="sub18 fw-normal mb-2">
                * Top holdings accurate as of April 30, 2023
              </p>
            </div>
  
            <div className="col-lg-6">
              <div className="mb-4">
                <h3 className="heading36 tracking-wider">Overall Morningstar Rating</h3>
                <p>
                  <IoIosStar className="starIcon" />
                  <IoIosStar className="starIcon" />
                  <IoIosStar className="starIcon" />
                </p>
              </div>
              <div className="mb-4">
                <h3 className="heading36 tracking-wider">Volatility Assessment</h3>
                <p className="sub18">Low</p>
              </div>
              <div className="mb-4">
                <h3 className="heading36 tracking-wider">Annualized Return Since Inception</h3>
                <p className="sub18">5.40%</p>
              </div>
              <div className="mb-4">
                <h3 className="heading36 tracking-wider">Gross Operating Expense</h3>
                <p className="sub18">0.13%</p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Average volatility',
      dots: [true, true, false],
      content: () => (
        <>
        <div className="row mt-5">
          <div className="col-lg-6">
            <p className="sub18 mb-2">EXAMPLE FUND: AVERAGE VOLATILITY</p>
            <h3 className="heading36">Vanguard® Real Estate Index Fund</h3>
            <p className="sub18 fw-normal mb-5">Inception Date: 11/2001</p>

            <p className="sub18 fw-normal mb-2">TOP HOLDINGS</p>
            <ul className="taxList mb-5">
              <li>8.07% Prologis Inc.</li>
              <li>6.65% American Tower Corp.</li>
              <li>4.68% Equinix Inc.</li>
            </ul>

            <p className="sub18 fw-normal mb-2">
            * Top holdings accurate as of April 30, 2023
            </p>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <h3 className="heading36 tracking-wider">Overall Morningstar Rating</h3>
              <p>
                <IoIosStar className="starIcon" />
                <IoIosStar className="starIcon" />
                <IoIosStar className="starIcon" />
              </p>
            </div>
            <div className="mb-4">
              <h3 className="heading36 tracking-wider">Volatility Assessment</h3>
              <p className="sub18">Moderate</p>
            </div>
            <div className="mb-4">
              <h3 className="heading36 tracking-wider">Annualized Return Since Inception</h3>
              <p className="sub18">8.97%</p>
            </div>
            <div className="mb-4">
              <h3 className="heading36 tracking-wider">Gross Operating Expense</h3>
              <p className="sub18">0.12%</p>
            </div>
          </div>
        </div>
      </>
      ),
    },
    {
      title: 'High volatility',
      dots: [true, true, true],
      content: () => (
        <>
        <div className="row mt-5">
          <div className="col-lg-6">
            <p className="sub18 mb-2">EXAMPLE FUND: HIGH VOLATILITY</p>
            <h3 className="heading36">Vanguard® Growth Index Admiral</h3>
            <p className="sub18 fw-normal mb-5">Inception Date: 11/2000</p>

            <p className="sub18 fw-normal mb-2">TOP HOLDINGS</p>
            <ul className="taxList mb-5">
              <li>13.67% Apple Inc</li>
              <li>12.26% Microsoft Corp</li>
              <li>4.92% Amazon.com Inc</li>
            </ul>

            <p className="sub18 fw-normal mb-2">
            * Top holdings accurate as of April 30, 2023
            </p>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <h3 className="heading36 tracking-wider">Overall Morningstar Rating</h3>
              <p>
                <IoIosStar className="starIcon" />
                <IoIosStar className="starIcon" />
                <IoIosStar className="starIcon" />
                <IoIosStar className="starIcon" />
                <IoIosStar className="starIcon" />
                <IoIosStar className="starIcon" />
              </p>
            </div>
            <div className="mb-4">
              <h3 className="heading36 tracking-wider">Volatility Assessment</h3>
              <p className="sub18">High</p>
            </div>
            <div className="mb-4">
              <h3 className="heading36 tracking-wider">Annualized Return Since Inception</h3>
              <p className="sub18">7.43%</p>
            </div>
            <div className="mb-4">
              <h3 className="heading36 tracking-wider">Gross Operating Expense</h3>
              <p className="sub18">0.05%</p>
            </div>
          </div>
        </div>
      </>
      ),
    },
  ];
  


const Uvl = () => {
    const [premium, setPremium] = useState(100); // starting from $100
    const years = 60;
    const conservativeReturn = 0.0171;
    const optimisticReturn = 0.064;

    // Move the data generation logic to a function
    const generateData = (premium) => {
        return Array.from({ length: years + 1 }, (_, year) => {
            const conservativeValue = Math.round(
                premium * 12 * (((Math.pow(1 + conservativeReturn, year) - 1) / conservativeReturn) || 0)
            );
            const optimisticValue = Math.round(
                premium * 12 * (((Math.pow(1 + optimisticReturn, year) - 1) / optimisticReturn) || 0)
            );
            return {
                year,
                Conservative: conservativeValue,
                Optimistic: optimisticValue,
            };
        });
    };
    // Now only declare data once using useMemo
    const data = useMemo(() => generateData(premium), [premium]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [moveStyle, setMoveStyle] = useState({});
    const tabRefs = useRef([]);
    useEffect(() => {
        const tabEl = tabRefs.current[activeIndex];
        if (tabEl) {
            const rect = tabEl.getBoundingClientRect();
            const containerRect = tabEl.parentNode.getBoundingClientRect();
            const left = rect.left - containerRect.left;
            setMoveStyle({
                width: `${rect.width}px`,
                left: `${left}px`,
            });
        }
    }, [activeIndex]);


    return (
        <>
            <Hero heading={"Variable Universal Life Insurance"} description={"Life insurance that's as flexible as you are. Imagine that."}
                button={"GET AN ESTIMATE"} image={images.child} />
            <section className="benifit">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='heading54 text-center'>
                                Key Benefits
                            </h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 mb-4 mb-lg-0'>
                            <div className="benifitCard text-center">
                                <Image src={images.benifit1} alt='image' className='img-fluid' />
                                <h3 className='heading28'>Flexible</h3>
                                <p className='sub18'>It’s your policy - that means you can access your policy’s cash value.*</p>
                            </div>
                        </div>
                        <div className='col-lg-4 mb-4 mb-lg-0'>
                            <div className="benifitCard text-center">
                                <Image src={images.benifit2} alt='image' className='img-fluid' />
                                <h3 className='heading28'>Protective</h3>
                                <p className='sub18'>Get lifelong coverage with the option to protect you and your loved ones in a variety of scenarios.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 mb-4 mb-lg-0'>
                            <div className="benifitCard text-center">
                                <Image src={images.benifit3} alt='image' className='img-fluid' />
                                <h3 className='heading28'>Tax-Efficient Growth</h3>
                                <p className='sub18'>Have the potential to grow tax-efficient wealth by allocating a portion of your premiums to accumulate based on returns of an index like the S&P 500.</p>
                            </div>
                        </div>
                        <div className='col-12 text-center my-5'>
                            <button className='commonBtnBig text-uppercase'>get an estimate</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='premiumGraph'>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-10'>
                            <h2 className='heading54 text-center text-white mb-4'>VUL Policy Example</h2>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    {/* <p className='sub18 text-white mb-5'>IUL policies typically allow you to grow a portion of your premiums based on returns of an index like the S&P 500.  Insurers often offer a growth cap of 8-9% and floor of 0%.  This allows for upside potential with downside protection. Did I mention it’s all tax-efficient?</p> */}
                                    <h3 className='sub18 text-white text-uppercase'>MONTHLY PREMIUM</h3>

                                    <div className="slider-wrapper mb-5">
                                        <div
                                            className="slider-label-box"
                                            style={{ left: `calc(${((premium - 50) / (1000 - 50)) * 100}%)` }}
                                        >
                                            ${premium}
                                            <div className="slider-label-pointer"></div>
                                        </div>

                                        <input
                                            type="range"
                                            min="50"
                                            max="1000"
                                            step="10"
                                            value={premium}
                                            onChange={(e) => setPremium(Number(e.target.value))}
                                            className="custom-range"
                                        />
                                    </div>
                                    <h3 className='sub18 text-white'>TOTAL PREMIUMS</h3>
                                    <p className='sub24 text-white fw-bold mb-2'>$48,000</p>
                                    <p className='sub20 text-white mb-4'>Over 40 number of years</p>

                                    <h3 className='sub18 text-white'>VUL ACCOUNT</h3>
                                    <p className='sub24 text-white fw-bold'>$337,121</p>
                                    <p className='sub20 text-white mb-4'>8.17% IRR for 40 years</p>

                                    <p className='sub20 text-white'>S&P 500 TAXABLE ACCOUNT*</p>
                                    <p className='sub24 text-white fw-bold'>$207,105</p>
                                    <h3 className='sub18 text-white mb-4'>6.32% IRR for 40 years</h3>

                                    <h3 className='sub18 text-white'>DEATH BENEFIT</h3>
                                    <p className='sub18 text-white mb-5'>A death benefit will be associated with the policy based on an individual's age and health.</p>
                                    <button className='commonBtnBig w-100 mw-100 mb-4'>GET AN ESTIMATE</button>
                                </div>
                                <div className='col-lg-8'>
                                    <ResponsiveContainer width="100%" height={400}>
                                        <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 80 }}>

                                            {/* ✅ Move grid inside AreaChart */}
                                            <CartesianGrid
                                                stroke="#ffffff"
                                                strokeWidth={1}
                                                strokeDasharray="0"
                                                vertical={false} // only horizontal lines
                                            />

                                            <XAxis
                                                dataKey="year"
                                                stroke="#ccc"
                                                ticks={[10, 20, 30, 40, 50, 60]}
                                                width={130}
                                            />

                                            <YAxis
                                                width={10} // space for Y-axis text and full grid line
                                                tick={{ dx: -3 }}
                                                tickFormatter={(v) => `$${v.toLocaleString()}`}
                                                stroke="#ccc"
                                                tickCount={9}
                                                tickLine={false}
                                            />

                                            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />

                                            <Area
                                                type="monotone"
                                                dataKey="Conservative"
                                                stroke="#FFD369"
                                                fill="#FFD369"
                                                fillOpacity={0.6}
                                            />

                                            <Area
                                                type="monotone"
                                                dataKey="Optimistic"
                                                stroke="#32E6A9"
                                                fill="#32E6A9"
                                                fillOpacity={0.6}
                                            />

                                        </AreaChart>
                                    </ResponsiveContainer>
                                    <div className='uldata mb-4'>
                                        <div><div className='ulBox'></div></div>
                                        Example of an IUL policy that achieves a 6.4% annual return with tax deferral and reinvested dividends*
                                    </div>
                                    <div className='cddata'>
                                        <div><div className='cdBox'></div></div>
                                        Bank Savings CD account averages 1.71% annual return with taxable interest payments at 35%*
                                    </div>
                                </div>
                            </div>
                            <p className='sub16 text-white fw-lighter'>*Tables and charts are for illustrative purposes only and are not based on any specific policy example. Please reference your specific policy for additional details. All guarantees and contractual obligations are based solely on the claims-paying ability of the issuing life insurance company.

                                Steady returns and long-</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='stedy'>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-md-12'>
                            <h1 className='heading54 text-center mb-5'>High-Performance Funds</h1>
                        </div>
                        <div className="col-12">
                            <div>
                            <div className="tabsOuter">
                                <div className="moveCard" style={moveStyle}></div>

                                {tabData.map((tab, idx) => (
                                    <div
                                    key={idx}
                                    className={`tabBox z-10 cursor-pointer transition-opacity duration-300 ${
                                        activeIndex === idx ? 'opacity-100' : 'opacity-60'
                                    }`}
                                    onClick={() => setActiveIndex(idx)}
                                    ref={(el) => (tabRefs.current[idx] = el)}
                                    >
                                    <ul className="dotList mb-2">
                                        {tab.dots.map((filled, i) => (
                                        <li key={i} className={filled ? 'dotFill' : 'dotFade'}></li>
                                        ))}
                                    </ul>
                                    <h4>{tab.title}</h4>
                                    </div>
                                ))}
                                </div>
                                <div className="tabContent mt-6 text-green-900 font-medium">
                                    {tabData[activeIndex].content()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='bg-white py-5'></div>
            <section className='stedy'>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-md-8 orderTwo'>
                            <div className='stedyCardTop'>
                                <h1 className='heading54'>Tax-efficient growth <br />& lifelong protection</h1>
                                <p className='sub24 mb-4'>We offer VUL policies that allow you to grow your premiums in funds such as S&P 500, REITs, global funds, and many others. You can access your cash value and tax-deferred growth as long as your policy is in-force and your death benefit will pass to your loved ones upon your passing.</p>
                                <p className='sub18 fw-normal'>Choose how you want to use your policy returns. See what our customers have used it for:</p>
                                <ul className='taxList'>
                                    <li>Retirement</li>
                                    <li>Pay off student loans</li>
                                    <li>Down payment on a house</li>
                                    <li> Pay for college</li>
                                </ul>
                                <button type='button' className='commonBtnBig text-uppercase'>GET A Quote</button>
                            </div>
                        </div>
                        <div className='col-md-4 orderOne'>
                            <div className='stedyCard'>
                                <Image src={images.benifit2} alt='image' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='prouctFaq'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2 className='heading54 mb-5'>FAQ</h2>
                            <div className="accordion mb-5" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What Is Universal Life Insurance?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Universal Life Insurance is a type of Permanent Life Insurance that provides flexible premiums and the ability to adjust the death benefit. It combines the features of Term Life Insurance, which provides protection for a specific period of time, with the savings element of Permanent Life Insurance, which builds cash value over time. There are several types of Universal Life Insurance, a couple of which we can dive deeper on are:
                                            <ul className='faqList'>
                                                <li>
                                                    <Link href="">Indexed Universal Life Insurance</Link>
                                                </li>
                                                <li>
                                                    <Link href="">Variable Universal Life Insurance</Link>
                                                </li>
                                            </ul>
                                            See the individual FAQs for each type to learn more.

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What is Variable Universal Life (VUL) Insurance?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A type of Permanent Life Insurance that provides both a death benefit and a savings or investment component. It is similar to Indexed Universal Life Insurance but with the added feature of allowing policyholders to allocate their cash value into different investment options, such as mutual funds. One of the main advantages of VUL insurance is that it allows policyholders to participate in the potential growth of the stock market or other securities, and also allows them to have more control over the investment options of their cash value.

                                            Visit our VUL product page to learn more.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            What are the advantages of Universal Life Insurance?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Universal Life Insurance offers several advantages over Term Life Insurance, including:
                                            <ul className='faqList'>
                                                <li>
                                                    <strong>Flexible</strong> <Link href="">Premiums</Link>: Unlike other types of life insurance, Universal Life Insurance allows policyholders to adjust the premium amount and payment frequency based on their changing financial situation.
                                                </li>
                                                <li>
                                                    <Link href="">Cash Value</Link> <strong>Accumulation</strong> : Universal Life Insurance policies have a cash value component that grows over time, based on interest rates and investment returns.
                                                </li>
                                                <li>
                                                    <strong>Tax Benefits</strong>: The cash value of a Universal Life Insurance policy grows tax-deferred, meaning that policyholders do not pay taxes on the earnings until they withdraw them.
                                                </li>
                                                <li>
                                                    <strong>Permanent Coverage</strong>: Universal Life Insurance provides coverage for the insured's entire lifetime*, as long as premiums are paid.
                                                </li>
                                                <li>
                                                    <strong>Customizable Death Benefit</strong>: Universal Life Insurance policies typically allow policyholders to adjust the death benefit amount over time. This can be useful for those who want to increase or decrease their coverage based on changes in their financial situation.
                                                </li>
                                            </ul>
                                            *Policies typically mature, meaning they pay out the benefit amount, if the policyholder lives to be 120 or 121 years old (could be shorter, depending on the policy). <br />
                                            Learn more about how Universal Life Insurance compares to other insurance and wealth building vehicles in our Guide to Life Insurance.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                            When should I consider Universal Life Insurance as part of my insurance plan?
                                        </button>
                                    </h2>
                                    <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            There are several factors that can help determine whether Universal Life Insurance is right for you at this stage of your life, but here are the high-level criteria to help you determine if this tool is right for you:
                                            <ul className='faqList'>
                                                <li>
                                                    <strong>Are you looking for a</strong>: <Link href=""> death benefit? </Link> First and foremost, Amplify only recommends Universal Life Insurance to those looking for some form of coverage in the event of their death. If you’re only considering Universal Life for its cash value savings component then it’s probably not the best option for you.
                                                </li>
                                                <li>
                                                    <strong>Do you have sufficient free-cash flow?</strong>  Because Universal Life Insurance has higher <Link href="">premiums</Link>  than <Link href="">Term Life Insurance</Link>, Amplify typically only recommends Universal Life Insurance to those who can afford the higher monthly payments. If money is tight, or your income is highly variable then there are other ways to get coverage that might work better for you.
                                                </li>
                                                <li>
                                                    <strong>Does it make sense for you at this stage of life?</strong>: There are several tax-advantaged accounts that are great tools for building wealth. Your life situation typically determines which of these accounts you can leverage. For example, if you are able to contribute to a 401k through your employer, Amplify typically recommends you contribute to that account first, especially if your employer offers some kind of matching. Ultimately, which tax-advantaged vehicles you leverage as part of your holistic financial plan really depends on your goals, risk tolerance, stage of life, and several other factors.
                                                </li>
                                            </ul>
                                            Ultimately, we’ve seen Universal Life Insurance work well for clients of all different types. If you’re unsure whether Universal Life is right for you, check out our website or give us a call. We can offer personalized recommendations that are right for you.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Why save funds with life insurance? Why bundle protection and growth?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Cash value is a powerful savings and investment tool offered within a Permanent Life Insurance policy that can help you achieve your financial goals. Cash value life insurance can be used to generate tax-efficient growth, save for retirement, generate income, and provide liquidity for future needs. Additionally, cash value policies are an important aspect of succession planning and offer protection against creditors and legal cases in most states. With its many benefits, cash value life insurance is an excellent choice for those seeking long-term financial security.<br />

                                            Learn more about building wealth with life insurance in our Guide to Life Insurance.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='commonBtnBig'>FAQS</button>
                        </div>
                        <div className='col-lg-6'>
                            <div className='faqCard text-end'>
                                <Image src={images.faq} alt='image' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='moreQueSection'>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8'>
                            <div className='row align-items-center'>
                                <div className='col-md-6'>
                                    <div className='moreQue'>
                                        <Image src={images.moreQue} className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <h1 className='heading54'>
                                        More questions?
                                        We have answers.</h1>
                                    <p className='sub24 mb-4'>Life insurance can be complicated. Luckily, we're always here to help.</p>
                                    <button type='button' className='commonBtnBig'>FAQS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='productStay'>
                <div className='container-fluid'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h1 className='heading54'> Let's stay in touch</h1>
                            <p className='sub16 mb-4'>Get access to the latest in life insurance and personal finance insights.</p>
                            <div className='formstay'>
                                <input type='text' placeholder='your email here' />
                                <button className='productArrow'><HiArrowRight style={{ width: '2rem', height: '2rem' }} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Uvl