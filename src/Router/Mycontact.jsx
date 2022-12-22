import React from 'react';
import Contact from './Contact';
import Footer from './Footer';

const Mycontact = () => {
  return (
    <>
        <div className="my-contact">
            <div className="contact">
                <h2 className="contact-head">
                    Contact Me
                </h2>
            </div>

            <Contact/>
            <Footer/>
        </div>
    </>
  )
}

export default Mycontact;
