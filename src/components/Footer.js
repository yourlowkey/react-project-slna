import React from 'react'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-dark">
            <div className="container py-1">
                <div className="row">
                     <div className="col-md-6 col-12">
                        <div>
                            <span>Số điện thoại: <span> </span><a href="tel:0869.125.610" class="phone-number">0869.165.610</a></span>
                        </div>
                        <div>
                            <span>Email: <span> </span><a href="mailto:bosua12@gmail.com" class="email">bosua12@gmail.com</a></span>
                        </div>
                    </div> 
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">

                            <FaFacebookSquare className="connect text-primary" />

                            <FaLinkedin className="connect text-info" />

                            <AiFillInstagram className="connect text-warning" />

                            <IoLogoYoutube className="connect text-danger" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
