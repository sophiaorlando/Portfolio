import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import {myProjects} from '../../components/Projects/ProjectsData'


function ProjectPage(props) {

let {id} = useParams()

console.log(props)
console.log(myProjects.fullStack[id])
console.log(myProjects.id)





  return (
    <div>
      <h1>This is the Project page</h1>
    </div>
  )
}

export default ProjectPage
