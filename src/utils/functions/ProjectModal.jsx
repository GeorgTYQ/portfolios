import Image from "next/image";
import { UilTimes,UilAngleLeft,UilAngleRightB } from '@iconscout/react-unicons';
import React from 'react';
export default function ProjectModal({project,onClose,onNext,onPrev}){

  const modalRef = React.useRef();

  const handleOutsideClick = (e) =>{
    if (modalRef.current === e.target) {
      onClose();
    }
  }
  return(
    <div className="fixed inset-0 bg-gray-800/80 flex items-center justify-center z-50" onClick={handleOutsideClick} ref={modalRef}>
      <div
        ref={modalRef}
        className="bg-gray-900/90 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-9 h-full"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex justify-between mb-3">
          <h2 className="text-2xl font-bold text-purple-50">
            {project.title}
          </h2>
            <button onClick={onClose} className="text-purple-50 hover:text-purple-400 rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
              <UilTimes size="24" className="text-pink-400" />
            
            </button>

        </div>
        <div className="flex flex-col md:flex-row gap-6 ">
          <div className="space-y-4 md:w-1/2">
            <p className="text-gray-300">{project.description}</p>
            <p className="text-gray-300">{project.fulldescription}</p>
            <div>
              <h3 className="font-semibold mb-2 text-purple">Tech Stack:</h3>
              <ul className="list-disc list-inside">
                {
                  project.tech.map((tech,index)=> (
                    <li key={index} className="text-gray-300 p-1">{tech}</li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="relative h-64 w-full md:w-1/2">
            <Image 
              src={project.url}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex gap-4 justify-between w-11/12 max-w-4xl">
              <button onClick={onPrev} className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-[80%]">
                <UilAngleLeft size="24" className="text-purple-400" />
              </button>

              <button onClick={onNext}  className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-[120%]">
                <UilAngleRightB size="24" className="text-purple-400" />
              </button>
          
          </div>

        </div>
      </div>
    </div>
  )
}