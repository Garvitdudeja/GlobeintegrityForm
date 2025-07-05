'use client'
import React, { useMemo, useState } from 'react';
import Image from 'next/image'
import * as images from '.././../../utilities/images'
import Link from 'next/link'
import { HiArrowRight } from "react-icons/hi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import Hero from '@/Components/Product/hero';
const ProductTerm = () => {
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

    return (
        <>
            <Hero heading={"Term life insurance"} description={"A quick and affordable way to offer temporary protection for your loved ones in the event of your passing."}
                button={"GET AN ESTIMATE"} image={images.productTermsBanner} />

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
                                <Image src={images.benifit4} alt='image' className='img-fluid' />
                                <h3 className='heading28'>Safe</h3>
                                <p className='sub18'>Protect what's at stake in the next 10, 20, 30 years with max coverage.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 mb-4 mb-lg-0'>
                            <div className="benifitCard text-center">
                                <Image src={images.benifit1} alt='image' className='img-fluid' />
                                <h3 className='heading28'>Predictable</h3>
                                <p className='sub18'>You have predictable max coverage in the near term to protect your loved ones from unexpected catastrophes.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 mb-4 mb-lg-0'>
                            <div className="benifitCard text-center">
                                <Image src={images.benifit3} alt='image' className='img-fluid' />
                                <h3 className='heading28'>Affordable</h3>
                                <p className='sub18'>Get higher coverage for a typically lower price, but remember it's just temporary.</p>
                            </div>
                        </div>
                        <div className='col-12 text-center my-5'>
                            <button className='commonBtnBig text-uppercase'>get a quote</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='termsVs'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 mb-4 lg-mb-0'>
                            <div className='termsVsCard'>
                                <h1 className='heading54'>Term vs. Permanent</h1>
                                <p className='sub24 mb-4'>Have a newborn or a mortgage that you need to protect? Term life insurance can offer the most affordable temporary protection for a high coverage amount, while permanent insurance offers lifetime coverage and additional health and savings benefits.</p>
                                <button type='button' className='commonBtnBig'>GET A Quote</button>
                            </div>
                        </div>
                        <div className='col-lg-6 mb-4 lg-mb-0'>
                            <div className='termsVsCardOuter'>
                                <div className="row">
                                    <div className="col-lg-6 mb-4 lg-mb-0">
                                        <div className='termsVsCardRight'>
                                            <h4 className='heading28 mb-4'>Permanent life insurance</h4>
                                            <ul className='ps-0'>
                                                <li className='sub24'><div><IoCheckmarkCircle className='tickIcon' /></div>Lifelong coverage </li>
                                                <li className='sub24'><div><IoCheckmarkCircle className='tickIcon' /></div>Retirement benefits such as income or cash for health emergencies</li>
                                                <li className='sub24'> <div><RxCrossCircled className='tickIcon' /></div>More expensive monthly premium</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4 lg-mb-0">
                                        <div className='termsVsCardRight'>
                                            <h4 className='heading28 mb-4'>Term life insurance</h4>
                                            <ul className='ps-0'>
                                                <li className='sub24'><div><IoCheckmarkCircle className='tickIcon' /></div>Cheapest monthly premium </li>
                                                <li className='sub24'><div><RxCrossCircled className='tickIcon' /></div>Coverage expires after term period</li>
                                                <li className='sub24'><div><RxCrossCircled className='tickIcon' /></div>Premiums double or triple if coverage is renewed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='stedy'>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-md-8 orderTwo'>
                            <div className='stedyCardTop'>
                                <h1 className='heading54'>Max coverage for a <br /> temporary period of time</h1>
                                <p className='sub24 mb-4 w-75'>We offer term life insurance that provides max coverage for 10, 20, or 30 years allowing you to protect your loved ones from a financial burden in case you pass. The benefits are temporary and don't provide any potential for tax-efficient growth unlike our other products.</p>
                                <button type='button' className='commonBtnBig text-uppercase'>GET A Quote</button>
                            </div>
                        </div>
                        <div className='col-md-4 orderOne'>
                            <div className='stedyCard stedyCardIul'>
                                <Image src={images.benifit1} alt='image' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='prouctFaq'>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <h2 className='heading54 mb-5'>FAQ</h2>
                            <div className="accordion mb-5" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What is Term Life Insurance?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Term Life Insurance is a type of life insurance <Link href="">policy</Link> that provides coverage for a specific period of time, or "<Link href="">term</Link>." If the term dies during the term, the policy pays out a <Link href="">death benefit</Link> to the <Link href="">beneficiary</Link>. If the policyholder does not die during the term, the policy does not pay out and the coverage ends on the <Link href="">expiry date</Link>.
                                            <br />
                                            Term Life Insurance is typically less expensive than <Link href="">Permanent Life Insurance</Link>, however, it does not build <Link href="">cash value</Link> or offer tax-advantaged savings like certain types of Permanent Life Insurance.
                                            <br />
                                            Visit our <Link href="">Term Life product page</Link> to learn more.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What Is Universal Life Insurance?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Universal Life Insurance is a type of <Link href="">Permanent Life Insurance</Link> that provides flexible <Link href="">premiums</Link> and the ability to adjust the <Link href="">death benefit</Link>. It combines the features of <Link href="">Term Life Insurance</Link>, which provides protection for a specific period of time, with the savings element of Permanent Life Insurance, which builds <Link href="">cash value</Link> over time. There are several types of Universal Life Insurance, a couple of which we can dive deeper on are:
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
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            What is "Combination" Life Insurance?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <Link href="">Combination Life Insurance</Link> is a type of <Link href="">policy</Link>  that combines elements of both <Link href="">Term Life Insurance</Link> and <Link href="">Permanent Life Insurance</Link>. With a combination policy, you get the coverage of a Term Life Insurance policy for a specified period of time, typically 10, 20, or 30 years. The policy also includes a savings component, similar to a Permanent Life Insurance policy, that can accumulate <Link href="">cash value</Link> over time.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='commonBtnBig'>FAQS</button>
                        </div>
                        <div className='col-lg-6'>
                            <div className='faqCard text-end'>
                                <Image src={images.faqTerms} alt='image' className='img-fluid' />
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

export default ProductTerm