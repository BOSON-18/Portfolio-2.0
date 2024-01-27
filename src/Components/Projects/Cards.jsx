import React from 'react'
import { Projects } from '../../data/ProjectsList'
import Card from './Card';

const Cards = () => {
    
  return (
    <div>
        <div className='grid grid-flow-col gap-8 p-5 mt-5 md:p-0 '>
            {
                Projects.map((item,index)=>{
                    return(
                        <div>
                            <a href={item.gitHub}>
                            <Card image={item.image} name={item.name} techStack={item.techStack} key={index} />
                            </a>
                        </div>
                    )
                })
            }

            {/* <Card image={Projects[0].image} name={Projects[0].name} techStack={Projects[0].techStack}></Card> */}
        </div>
    </div>
  )
}

export default Cards