import React from 'react'
import Heading from "../components/Heading.jsx";
import PhotoGrid from "../components/PhotoGrid.jsx";

export default function Portfolio() {
    return (
        <div className="pt-5 mt-16">
            <Heading title={"Portfolio"}/>
            {/*<PhotoGrid/>*/}
            <PhotoGrid photos={["/assets/presence/mumbai.png", "/assets/Grand slam.gif", "/assets/bg1.jpg", "/assets/bg2.jpg", "/assets/bg.jpg", "/assets/bg-latest.jpg"]}/>
        </div>
    )
}
