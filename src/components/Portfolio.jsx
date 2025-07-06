import React from "react";
import portfolioProjects from "../data/portfolioProjects";
import PortfolioItem from "./PortfolioItem";

function Portfolio(){
    return(
        <div className="flex flex-col md:flex-row items-center justify-center" >
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>

                {portfolioProjects.map(project => (
                    <PortfolioItem 
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        desc={project.desc}
                        iconUrl={project.iconUrl}
                        iconUrlMac={project.iconUrlMac}
                        iconUrlLinux={project.iconUrlLinux}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;