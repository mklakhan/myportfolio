import React from 'react'
import chicago from '../Assets/chicago.jpg'
import homebanner from '../Assets/homebanner.jpg'

export default function Home() {
    return (
        <div style={{ minHeight: "60rem" }}>
           <div className="hero-image" style={{ backgroundImage: `url(${homebanner})`, minHeight: "24rem" }} >
                <div className="hero-text">
                    <h1>Manpreet Lakhan</h1>
                    <p>Student in Full-Stack Web Developement Bootcamp @Northwestern</p>
                     <a style={{display: "inline-block", marginRight: "2rem"}} href="https://www.linkedin.com/in/manpreetlakhan/" className="fa fa-linkedin"></a>
                    <a style={{display: "inline-block", marginRight: "2rem"}} href="https://github.com/mklakhan" className="fa fa-github"></a>
                    <a style={{display: "inline-block", marginRight: "2rem"}} href="https://github.com/mklakhan" className="far fa-file-pdf"></a>
                    <a style={{display: "inline-block", marginRight: "2rem"}} href="https://drive.google.com/file/d/14drbg9B8qWWHeXKP-L9Jj14KRtV0L3G8/view?usp=sharing" className="fa fa-file-pdf-o"></a>
                </div>
            </div>
            <div className="portfolioRow">
                <div className="portfolioImage">
                    <img src={chicago} />
                </div>
                <div className="portfolioDescription">
                    <h4> About Me </h4>
                    <p>  Hello from Chicago! I am currently a product manager and enrolled in the Northwestern Full Stack Development Bootcamp Program. When not building products or learning to code, you can find me cooking and spending time with family and friends.</p>
                    {/* <div>
                    <a href="https://www.linkedin.com/in/manpreetlakhan/" className="fa fa-linkedin"></a>
                    <a href="https://github.com/mklakhan" className="fa fa-github"></a>
                    <a href="https://github.com/mklakhan" className="far fa-file-pdf"></a>
                    <a href="https://drive.google.com/file/d/14drbg9B8qWWHeXKP-L9Jj14KRtV0L3G8/view?usp=sharing" className="fa fa-file-pdf-o"></a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
