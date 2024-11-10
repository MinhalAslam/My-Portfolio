import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [

    {
        id: 0,
        title: "Resume",
        desc: "A TypeScript-based resume built with HTML ans CSS, allowing users to showcase their skills dynamically.",
        img: '/Resume.jpeg',
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },

    {
        id: 1,
        title: "Simple Calculator",
        desc: "A basic HTML CSS and TypeScript calculator dor performing essential arithmetic operations.",
        img: '/calculator.png',
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },

    {
        id: 2,
        title: "Static Website" ,
        desc: "A static website for fundamental practices" ,   
        img: "/Figma.jpg" ,
        tags: ["HTML" , "CSS" , "TypeScript" , "Javascript"]
        },
    
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
     <Heading title='My Projects'/>
     <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
     </div>
    </div>
  )
}

export default Projects
