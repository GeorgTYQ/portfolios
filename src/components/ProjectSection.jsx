'use client'
import React from 'react'
import ProjectModal from '@/utils/functions/ProjectModal'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
 const ProjectSection = () => {
const projects = React.useMemo(() => [
  {
    id: uuidv4(),
    url: "/webdisplay/Full_Logo1_V1.png",
    title: "World Clock Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptates debitis aliquam at repudiandae possimus labore sint architecto omnis accusamus distinctio obcaecati nulla sapiente, doloribus ad voluptate maxime suscipit quia.",
    fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic odio sint adipisci est! Quibusdam fugiat excepturi aperiam ratione, debitis voluptate delectus itaque necessitatibus minus nisi vero sequi et sunt.",
    tech:["JS", "React", "Zustand"],
    tags: ["JS", "React", "Zustand"]
  },
  {
    id: uuidv4(),
    url: "/webdisplay/Full_Logo1_V1.png",
    title: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptates debitis aliquam at repudiandae possimus labore sint architecto omnis accusamus distinctio obcaecati nulla sapiente, doloribus ad voluptate maxime suscipit quia.",
    fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic odio sint adipisci est! Quibusdam fugiat excepturi aperiam ratione, debitis voluptate delectus itaque necessitatibus minus nisi vero sequi et sunt.",
    tech:["JS", "React", "Zustand"],
    tags: ["Z", "Z", "Z"]
  },
  {
    id: uuidv4(),
    url: "/webdisplay/Full_Logo1_V1.png",
    title: "Project 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptates debitis aliquam at repudiandae possimus labore sint architecto omnis accusamus distinctio obcaecati nulla sapiente, doloribus ad voluptate maxime suscipit quia.",
    fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic odio sint adipisci est! Quibusdam fugiat excepturi aperiam ratione, debitis voluptate delectus itaque necessitatibus minus nisi vero sequi et sunt.",
    tech:["JS", "React", "Zustand"],
    tags: ["Z", "Z", "Z"]
  }
], []); 


  const [selectedProject,setSelectedProject] = React.useState(null);
  const handleProjectClick  = (id) =>{
    
    setSelectedProject(id)
    console.log(setSelectedProject);
    
  }

  const handleCloseModal = () =>{
    setSelectedProject(null)
  }

  const handlNextProject = () =>{
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject
    );

    if (currentIndex === -1) return; // safety check

    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex].id);
  }

  const handlePrevProject = () =>{ 
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject
    );

    if (currentIndex === -1) return;

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex].id);
  }

  return (
    <section id="projects" className='px-4 py-32 sm:px-6 lg:px-8'>
      <h2 className='text-3xl font-bold text-white mb-12 text-center'>Featured Project</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
        {
          projects.map((item,index) =>(

  
            <button onClick={()=> handleProjectClick(item.id)} key={index} className='bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500/50 transition-colors hover:shadow-sm text-left'>
              <div className="flex flex-col h-full">
                <h3 className='text-lg font-semibold text-white mb-2'>{item.title}</h3>
                <div className="flex flex-wrap gap-1 mt-auto">
                {
                  item.tags.map((tag,index) =>(
                    <span key={index} className="px-2 py-0.5 text-sm rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30">{tag}</span>
                  ))
                }
                </div>
              </div>


            </button>
          ))
        }
      </div>
{
  selectedProject && (
    <>
      <ProjectModal 
        project = {projects.find((project) => project.id === selectedProject)}
        onClose = {handleCloseModal}
        onNext={handlNextProject}
        onPrev={handlePrevProject}
      />
    </>
  )
}

    </section>
  )
}
 export default ProjectSection