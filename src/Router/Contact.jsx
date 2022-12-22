import React from 'react'
import {useGlobalContext} from "../Context";

const Contact = () => {

    const data=useGlobalContext();
    return (
        <>
            <div className="contact-section">
                <div className="container py-5">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7540.361484596635!2d72.
                        86103113651556!3d19.09972523324832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be
                         7c8446b5170f9%3A0x9429c1c24c4c7a1f!2sSahar%20Village%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra
                       %20400099!5e0!3m2!1sen!2sin!4v1656585253453!5m2!1sen!2sin" style={{border:0}}
                        allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" className="py-5 map">
                    </iframe>

                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <h3>Get in touch {data}</h3>
                            <p className="contact-para">Let's work together. Submit your <br /> details in this form and I will get back <br /> to you ASAP.</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <form action="https://formspree.io/f/xbjwvqen" className="form" method="post">
                                <div className="form-group">
                                    <input type="text" name="name" id="name" className="form-control name input-Text" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" id="email" className="form-control email input-Text" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="Subject" id="Budget" className="form-control budget input-Text" placeholder="Subject" />
                                </div>
                                <div className="form-froup">
                                    <textarea name="comment" id="" cols="30" rows="6" className="form-control input-Text" placeholder="Give Your Review.."></textarea>
                                </div>
                                <button className="btn btn-light btn-css">Send Inquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
