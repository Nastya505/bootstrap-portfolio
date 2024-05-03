import React from 'react'
import CardProject from '../components/card/card'

const ProjectsPage = () => {
  return (
    <div className='container'>
        <div className="flex row justify-content-center gap-5 mt-4 mb-4">
            <CardProject/>
            <CardProject/>
            <CardProject/>
            <CardProject/>
            <CardProject/>
            <CardProject/>
      </div>
    </div>
  )
}

export default ProjectsPage