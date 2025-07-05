import React from 'react'
import Image from 'next/image'
import * as images from './../../utilities/images'
import Link from 'next/link'
import { MdKeyboardArrowDown } from "react-icons/md";

const NavItems = {
  products: [
    // {
    //   heading: "Compare Our Products",
    //   description: "Explore and compare our life insurance policies",
    //   path: "#",
    //   image: images.productMenu
    // },
    {
      heading: "Whole Life Insurance",
      description: "Highest level of tax advantaged growth with low fees",
      path: "/product/whole-life",
      image: images.veriable
    },
    {
      heading: "Indexed Universal Life",
      description: "Tax advantaged, moderate growth with downside protection",
      path: "/product/iul",
      image: images.universal
    },
    {
      heading: "Term Life",
      description: "Fast and affordable term policies",
      path: "/product/term",
      image: images.life
    },
    // {
    //   heading: "Combination Life",
    //   description: "Custom insurance plans to meet protection needs and access tax-advantaged growth",
    //   path: "#",
    //   image: images.combinationLife
    // },
  ],
  Learn: [
    // {
    //   heading: "Guide to Life Insurance",
    //   description: "A quick yet comprehensive overview of life insurance",
    //   path: "#",
    //   image: images.guide
    // },
    {
      heading: "Life Insurance Calculator",
      description: "Determine your coverage need and ideal product fit in a few quick steps",
      path: "/calculator",
      image: images.lifeCal
    },
    {
      heading: "FAQs",
      description: "Expert answers to your top questions",
      path: "/faq",
      image: images.faqs
    },
    // {
    //   heading: "Education",
    //   description: "Knowledge articles and resources from our blog",
    //   path: "#",
    //   image: images.life
    // },
  ]
}

const Header = () => {
  const NavSections = [
    { label: "Products", items: NavItems.products },
    { label: "Learn", items: NavItems.Learn }
  ]

  return (
    <>
      <section className='header'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
                <nav>
                  <div className="logo">
                    <Link href=""><Image src={images.logo} alt='logo' width={231} height={60} /></Link>
                  </div>
                  <div className='btnToggleOuter'>
                    <button type='button' className='commonBtn'>
                      <Image src={images.telIcon} alt='phone' width={20} height={20} className='me-1 mb-1' />
                      855-496-9338
                    </button>
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
                    <ul className="menu">
                      {NavSections.map(section => (
                        <li key={section.label}>
                          <Link href="#" className='headerLabel'>{section.label} </Link>
                          <MdKeyboardArrowDown className='downArrow_' />
                          <div className='subMenuDiv'>
                            {section.items.map(item => (
                              <Link href={item.path} key={item.heading}>
                                <div className='subMenuInner'>
                                  <div className='subMenuImg'>
                                    <Image src={item.image} alt='icon' />
                                  </div>
                                  <div className='subMenuTxt'>
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
