import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import * as images from './../../utilities/images'
const Footer = () => {
  return (
    <section className='footer'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-lg-4'>
                <h6 className='sub16 text-uppercase'>Products</h6>
                <ul className='ps-0'>
                  <li><Link href="" className='sub16'>All Products</Link></li>
                  <li><Link href="" className='sub16'>Variable Universal Life</Link></li>
                </ul>
              </div>
              <div className='col-lg-4'>
                <h6 className='sub16 text-uppercase'>Learn</h6>
                <ul className='ps-0'>
                <li><Link href="" className='sub16'>Education</Link></li>
                <li><Link href="" className='sub16'>FAQ</Link></li>
                <li><Link href="" className='sub16'>Glossary</Link></li>
                </ul>

              </div>
              <div className='col-lg-4'>
                <h6 className='sub16 text-uppercase'>Contact</h6>
                <ul className='ps-0'>
                <li><Link href="" className='sub16 text-break'>support@globeintegrity.com</Link></li>
                <li><Link href="" className='sub16'>1-855-687-4300</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
          <div className='row'>
              <div className='col-lg-4'>
                <h6 className='sub16 text-uppercase'>Company</h6>
                <ul className='ps-0'>
                  <li><Link href="" className='sub16'>About Us</Link></li>
                  <li><Link href="" className='sub16'>Join the Team</Link></li>
                  <li><Link href="" className='sub16'>Partner Program</Link></li>
                </ul>
              </div>
              <div className='col-lg-4'>
                <h6 className='sub16 text-uppercase'>LEGAL</h6>
                <ul className='ps-0'>
                <li><Link href="" className='sub16'>Privacy Policy</Link></li>
                <li><Link href="" className='sub16'>Terms & Conditions</Link></li>
                <li><Link href="" className='sub16'>Licenses</Link></li>
                </ul>

              </div>
              <div className='col-lg-4 text-uppercase'>
                <Link href="" className='mb-3 d-block'><Image src={images.logoWhite} alt='logo' className='footerLogo img-fluid' width={241} height={63}/></Link>
                <ul className='social'>
                  <li><Link href="" className='sub16'><Image src={images.facebookIcon} alt='icon' className='img-fluid'/></Link></li>
                  <li><Link href="" className='sub16'><Image src={images.instaIcon} alt='icon' className='img-fluid'/></Link></li>
                  <li><Link href="" className='sub16'><Image src={images.pIcon} alt='icon' className='img-fluid'/></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='col-lg-12'>
          <p className='sub16'>© 2024 by Globe Integrity Life Insurance Company. All rights reserved. Globe Integrity Life Insurance operates in California as Globe Integrity Life Insurance Services (CA license # 6002158).</p>
          <p className='sub16'>NAIC Guide to Buying Life Insurance</p>
          <p className='sub16 mb-0'>Securities offered through The Leaders Group, Inc. Member FINRA/SIPC 26 W Dry Creek Circle, Suite 800, Littleton, CO 80120, 303-797-9080. Globe Integrity Life Insurance Company is not affiliated with The Leaders Group, Inc (https://leadersgroup.net/). Globe Integrity Life Insurance Company offers variable life insurance policies underwritten by Nationwide Mutual Insurance Company and Equitable Financial Life Insurance Company of America.
Check the background of your financial professional or broker/dealer with FINRA BrokerCheck.</p>
        </div> */}
      </div>
    </section>
  )
}

export default Footer