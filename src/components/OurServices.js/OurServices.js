import React from 'react'
import ServiceBox from './ServiceBox'

const OurServices = () => {
  return (
    <section className="service-section">
        <img className="background-lines" src="images/background-lines-4.svg" alt="" />
        <div className="container">
            <div className="section-title">Our Services<div/>
            <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="service-boxes">

            <ServiceBox title="Business Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="services/businessadvice"/>
            <ServiceBox title="Startup Business" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="services/startupbusiness"/>
            <ServiceBox title="Financial Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="services/financialadvice"/>
            <ServiceBox title="Risk Management" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="services/riskmanagement"/>

            </div>
            <div className="browse-services">
                <a className="btn-transparent" href="services.html">Browse Services <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default OurServices