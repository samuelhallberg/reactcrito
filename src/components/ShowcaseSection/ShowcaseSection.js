import Button from '../Generics/Button'
import './ShowcaseSection.css'
import React from 'react'

const ShowcaseSection = () => {
  return ( 
    <section className="showcase-section">
    <div className="container">
       <div className="content-column">
         <h1>We Provide The <br /> Best Business Solutions</h1>
         <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
         <div className="button-links">
            <Button text ="Get Consulting" url="/services/get-consulting" />
            <Button text="Learn More" url="services/consulting" />
       </div>
   </div>
   <div className="image-column">
        <img src="images/showcase-image.svg" alt="image of a man in a suit with a tablet" />
        </div>
    </div>
   </section>
  )
}

export default ShowcaseSection