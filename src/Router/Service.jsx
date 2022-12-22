import React from 'react'
import { useState } from 'react';

const Service = () => {

    const items = [
        {
            id: 1,
            skills: "Web Design",
            about: "It is not because things are difficult that we do not dare it is because we do not dare that tey are difficult.",
            icon:"desktop-outline"
        },
        {
            id: 2,
            skills: "PhotoGraphy",
            about: "It is not because things are difficult that we do not dare it is because we do not dare that tey are difficult.",
            icon:"camera-outline"

        },
        {
            id: 3,
            skills: "Mobile Apps",
            about: "It is not because things are difficult that we do not dare it is because we do not dare that tey are difficult.",
            icon:"phone-portrait-outline"
        },
        {
            id: 4,
            skills: "Apps Interface",
            about: "It is not because things are difficult that we do not dare it is because we do not dare that tey are difficult.",
            icon:"laptop-outline"

        },
        {
            id: 5,
            skills: "Graphics Design",
            about: "It is not because things are difficult that we do not dare it is because we do not dare that tey are difficult.",
            icon:"desktop-outline"

        },
        {
            id: 6,
            skills: "Web Development",
            about: "It is not because things are difficult that we do not dare it is because we do not dare that tey are difficult.",
            icon:"logo-web-component"

        }
    ];

    const [item, setItem] = useState(items);


    return (
        <>
            <div className="service-section" id='service'>
                <div className="container-fluid partService">

                    <h2 class="common-heading ml-4">Services Offers</h2>
                    <p className='ml-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Cum mollitia dolorem ullam beatae. Labore, qui.
                        Error recusandae. </p>

                    <div class="row services-row">
                    {item.map((val) => {
                        return(
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                                    <div class="service-box" id={val.id} key={val.id}>
                                        <ion-icon name={val.icon} class="service-icon"></ion-icon>

                                        <h3>{val.skills}</h3>
                                        <p>{val.about}</p>
                                    </div>
                        </div>);
                     })}


                    </div>
                </div>


            </div>
        </>
    )
}

export default Service
