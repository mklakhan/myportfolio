import React from 'react'
import portfolio from '../Assets/portfolio.json'
import chicago from '../Assets/partaytracker.jpg'
import dailyplanner from '../Assets/dailyplanner.jpg'
import {data} from '../Assets/portfolio'

export default function Portfolio(project) {

    console.log(portfolio);

    const myProjects = portfolio.projects.map((project) => {
        return(<>
            <div className="row">
                <div className="side-content-sm">

                </div>
            </div>
            <div className="portfolioSection">
                <div className="portfolioRow">
                    <div className="portfolioImage">
                        <img src={`../Assets/${project.img}`} alt="an image" />
                    </div>
                    <div className="portfolioDescription">
                        <h4>{project.title} </h4>
                        <p>{project.description}</p>
                        <a href={project.repo}> Link to GitHub </a>
                    </div>
                </div>
            </div>
        </>)
    })
    return (
        <div>
            {myProjects}  
        </div>       
    )
}
