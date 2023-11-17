import './NavSection.css'
import React from 'react'
import img_logotype from '../../assets/images/logotype.svg'
import Button from '../Generics/Button'

const NavSection = () => {
  return (
    <section className="nav-section">
            <div className="container">
            <a href="home.html"><img className="logotype" src={img_logotype} alt="" /></a>
         <nav>
             <div className="first-row">
                    <div className="company-info">
                        <span>< i className="fa fa-phone-volume"></i>+46 (8) 121 470 50</span>
                        <span>< i className="fa fa-envelope"></i>info@crito.com</span>
                        <span>< i className="fa fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM</span>
                    </div>
            <div className="socialmedia">
                <a href="https://facebook.com/"><i className="fa fa-facebook"></i></a>
                <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                <a href="https://instagram.com/"><i className="fa fa-instagram"></i></a>
                <a href="https://linkedin.com/"><i className="fa fa-linkedin"></i></a>
            </div>
            </div>
            <div className="second-row">
                <div className="navbar">
                <a className="active" href="home.html">Home</a>
                <a href="services.html">Service</a>
                <a href="news.html">News</a>
                <a href="contacts.html">Contact</a>
                </div>           
                <Button text="Login" url="login" />
                </div>
            </nav>
        </div>
    </section>
  )
}

export default NavSection