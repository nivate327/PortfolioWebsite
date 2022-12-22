import React from 'react'
import Footer from './Footer';

const About = () => {
  return (
    <>
    <div className="about">
      <h2 className='about-head'>About Me</h2>
    </div>

      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-sm-6 col-md-6 col-12 py-5">
                <h3 className="born">Born to build</h3>
                <p className="born-p">I am Rohan Maruti Nivate and I am complete diploma in information technology from mumbai university. and  I am very passionate in web development and web designing Fresher. and I am complete lots of Projects on development. we also work on frontend technology like html css bootstrap sass Javascript and react, and also know about MERN STACK..</p>
                </div>

            <div className="col-xl-6 col-lg-6 col-sm-6 col-md-6 col-12 about-Image">
              <div alt="" className="myImage">

              </div>
            </div>
          </div>
        </div>

           
      </div>
      <Footer/>
    </>
  )
}

export default About;
