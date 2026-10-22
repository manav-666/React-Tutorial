import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {
    const params = useParams ();
    console.log(params);
    
  return (
    <div>
      <h3 >{params.courseId} Course Details</h3>
    </div>
  )
}

export default CoursesDetails
