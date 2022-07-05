import React from 'react'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-dark">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
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
