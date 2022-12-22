import React from 'react'

const MybioData = () => {
    return (
        <>
            <div className="section-bio biodata">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 imgBiopart">
                            <img src="./img/bio-my-img.jpg" className='bioImage' alt="mybio" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <h2 class="common-heading ml-4">My Bio-Data </h2>
                            <p className='ml-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Cum mollitia dolorem ullam beatae. Labore, qui.
                                Error recusandae. </p>

                            <div className="progressbar-section">
                                <div className="progress-bio">
                                   <h3 className="skills-tech"> HTML </h3>
                                    <div className="progressbar pro-1">
                                        <span>90%</span>
                                    </div>
                                </div>

                                <div className="progress-bio">
                                   <h3 className="skills-tech"> CSS </h3>
                                    <div className="progressbar pro-2">
                                        <span>70%</span>
                                    </div>
                                </div>

                                <div className="progress-bio">
                                   <h3 className="skills-tech"> JS & REACT </h3>
                                    <div className="progressbar pro-3">
                                        <span>70%</span>
                                    </div>
                                </div>

                                <div className="progress-bio">
                                   <h3 className="skills-tech"> MERN </h3>
                                    <div className="progressbar pro-4">
                                        <span>50%</span>
                                    </div>
                                </div>

                                <div className="progress-bio">
                                   <h3 className="skills-tech"> Design </h3>
                                    <div className="progressbar pro-5">
                                        <span>60%</span>
                                    </div>
                                </div>
                            </div>

                            <button className='cv btn'>Download My CV</button>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MybioData
