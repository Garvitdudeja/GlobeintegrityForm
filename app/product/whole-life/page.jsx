'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image'
import * as images from '../../../utilities/images'
import Link from 'next/link'
import { HiArrowRight } from "react-icons/hi";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import Hero from '@/Components/Product/hero';
import { IoIosStar } from "react-icons/io";
import KeyBenifits from '@/Components/Product/KeyBenifits';
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
                    <div className="col-lg-6 mb-4 lg-mb-0">
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


    const benifits = {
        heading: "Key Benefits",
        Cards: [{
            heading: "Lifetime Coverage",
            description: "As long as premiums are paid, your coverage never expires.",
            image: images.benifit1
        },
        {
            heading: "Guaranteed Payout",
            description: "Your beneficiaries receive a guaranteed sum when the time comes.",
            image: images.benifit2
        },
        {
            heading: "Cash Value Growth",
            description: "Build cash value over time that you can borrow against.",
            image: images.benifit3
        },
        ],
        buttonText: "GET AN ESTIMATE",
        cta: "#"
    };


    const faqData = [
        {
            question: "What Is Whole Life Insurance?",
            answer:
                "Whole Life Insurance is a type of permanent life insurance that provides lifetime coverage and guaranteed benefits. It offers fixed premiums, a guaranteed death benefit, and builds cash value over time that you can borrow against if needed. Whole Life Insurance is ideal for long-term protection and financial planning.",
        },
        {
            question: "How Does Whole Life Insurance Work?",
            answer:
                "Whole Life Insurance combines lifelong protection with a savings element. Part of your premium goes toward the insurance coverage, and part builds cash value you can use while you're alive. Your premiums remain the same throughout the life of the policy, and your beneficiaries receive a guaranteed payout when you pass away.",
        },
        {
            question: "What Are the Advantages of Whole Life Insurance?",
            answer: (
                <>
                    Whole Life Insurance offers several key benefits:
                    <ul className="faqList">
                        <li><strong>Lifetime Coverage:</strong> Your policy lasts for your entire life, as long as premiums are paid.</li>
                        <li><strong>Guaranteed Death Benefit:</strong> Your loved ones will receive a guaranteed payout when you pass away.</li>
                        <li><strong>Cash Value Growth:</strong> The policy builds cash value over time, which you can borrow against if needed.</li>
                        <li><strong>Fixed Premiums:</strong> Your payments stay consistent throughout the life of the policy.</li>
                        <li><strong>Tax Advantages:</strong> Cash value grows tax-deferred, and death benefits are generally tax-free to your beneficiaries.</li>
                    </ul>
                </>
            ),
        },
        {
            question: "When Should I Consider Whole Life Insurance?",
            answer: (
                <>
                    Whole Life Insurance is a good option if:
                    <ul className="faqList">
                        <li><strong>You Want Lifetime Protection:</strong> Ideal for those who want coverage that never expires.</li>
                        <li><strong>You’re Focused on Long-Term Planning:</strong> Helps build wealth and secure a financial legacy for your family.</li>
                        <li><strong>You’re Looking for Predictable Costs:</strong> Fixed premiums make budgeting easier over the long run.</li>
                        <li><strong>You Value Cash Access:</strong> The cash value component provides financial flexibility if you ever need it.</li>
                    </ul>
                    If you’re unsure whether Whole Life Insurance fits your needs, contact us today for a personalized recommendation.
                </>
            ),
        },
        {
            question: "Why Use Life Insurance for Saving and Wealth Building?",
            answer:
                "Whole Life Insurance isn’t just for protection — it’s a smart savings tool too. The cash value in your policy grows tax-deferred and can provide funds for emergencies, retirement, or other goals. It also offers asset protection benefits in many states and can be a useful part of estate planning. Bundling protection and savings in one policy provides long-term financial security with added flexibility.",
        },
    ];

    return (
        <>
            <Hero heading={"Whole Life Insurance"} description={"Life insurance that's as flexible as you are. Imagine that."}
                button={"GET AN ESTIMATE"} image={images.child} />
            <KeyBenifits data={benifits} />
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
                                            className={`tabBox z-10 cursor-pointer transition-opacity duration-300 ${activeIndex === idx ? 'opacity-100' : 'opacity-60'
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
                    <h1 className='heading54'>Guaranteed Growth <br />& Lifelong Protection</h1>
                    <p className='sub24 mb-4'>
                        Our Whole Life Insurance policies provide guaranteed protection for life, fixed premiums, and steady, tax-deferred cash value growth. Your policy not only safeguards your loved ones with a guaranteed death benefit, but also builds cash value you can access during your lifetime.
                    </p>
                    <p className='sub18 fw-normal'>
                        Many of our policyholders use the cash value from their Whole Life Insurance to support key life goals. Here are just a few examples:
                    </p>
                    <ul className='taxList'>
                        <li>Supplement Retirement Income</li>
                        <li>Pay Off Debts</li>
                        <li>Make a Down Payment on a Home</li>
                        <li>Fund a Child’s Education</li>
                    </ul>
                    <button type='button' className='commonBtnBig text-uppercase'>GET A Quote</button>
                </div>
            </div>
            <div className='col-md-4 orderOne'>
                <div className='stedyCard'>
                    <Image src={images.benifit2} alt='Whole Life Insurance Benefits' className='img-fluid' />
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
                                {faqData.map((item, index)=><div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+index} aria-expanded="false" aria-controls={"collapse"+index}>
                                            {item.question}
                                        </button>
                                    </h2>
                                    <div id={"collapse"+index} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">{item.answer}</div>
                                    </div>
                                </div>)}
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