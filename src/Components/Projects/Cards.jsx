import React from 'react'
import { Projects } from '../../data/ProjectsList'
import Card from './Card';

const Cards = () => {
    
  return (
    <div>
        <div className='flex flex-row gap-x-4 p-5 mt-5 md:p-0 max-sm:flex-col max-sm:gap-y-8 max-sm:justify-center'>
            {
                Projects.map((item,index)=>{
                    return(
                       
                            <a href={item.gitHub} key={index}>
                            <Card image={item.image} name={item.name} techStack={item.techStack}  />
                            </a>
                        
                    )
                })
            }

            {/* <Card image={Projects[0].image} name={Projects[0].name} techStack={Projects[0].techStack}></Card> */}
        </div>
    </div>
  )
}

export default Cards