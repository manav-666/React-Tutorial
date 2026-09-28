import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './Components/Card'

const App = () => {
  // const arr = [
  //   {user: 'Sarathak',
  //     age: 12
  //   },
  //   {user: 'Harsh',
  //     age: 15
  //   },
  //   {user: 'Aman',
  //     age: 18
  //   }];

  const jobs = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tags: ["Full Time", "Remote"],
    level: "Senior Level",
    pay: "$45 - $60 / hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://i.pinimg.com/736x/76/77/61/767761985739e7daeb5cd0233d618179.jpg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Java Developer",
    tags: ["Full Time", "Hybrid"],
    level: "Junior Level",
    pay: "$30 - $45 / hour",
    location: "Pune, India"
  },

  {
    brandLogo: "https://i.pinimg.com/736x/36/ff/72/36ff72fc8d310f1353ecb2e5862296ab.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tags: ["Full Time", "On-site"],
    level: "Mid Level",
    pay: "$35 - $50 / hour",
    location: "Bangalore, India"
  },

  {
    brandLogo: "https://i.pinimg.com/236x/48/47/d3/4847d36df51617f3fe1fa2aa490c001f.jpg",
    companyName: "IBM",
    datePosted: "3 days ago",
    post: "Cyber Security Analyst",
    tags: ["Part Time", "Remote"],
    level: "Junior Level",
    pay: "$25 - $40 / hour",
    location: "Hyderabad, India"
  },

  {
    brandLogo: "https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg",
    companyName: "Adobe",
    datePosted: "10 weeks ago",
    post: "UI/UX Designer",
    tags: ["Full Time", "Hybrid"],
    level: "Mid Level",
    pay: "$30 - $45 / hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "4 days ago",
    post: "React Developer",
    tags: ["Full Time", "Remote"],
    level: "Senior Level",
    pay: "$50 - $70 / hour",
    location: "Delhi, India"
  },

  {
    brandLogo: "https://cdn.simpleicons.org/tcs",
    companyName: "TCS",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tags: ["Full Time", "On-site"],
    level: "Junior Level",
    pay: "$20 - $30 / hour",
    location: "Nagpur, India"
  },

  {
    brandLogo: "https://cdn.simpleicons.org/accenture",
    companyName: "Accenture",
    datePosted: "10 weeks ago",
    post: "Data Analyst",
    tags: ["Part Time", "Hybrid"],
    level: "Mid Level",
    pay: "$25 - $40 / hour",
    location: "Pune, India"
  }
];

  return(
    <>
    

    {jobs.map(function(elem, idx){
      return <div key={idx}>
        <Card
      logo = {elem.brandLogo} 
      company = {elem.companyName}
      datePost = {elem.datePosted}
      post = {elem.post}
      tag1= {elem.tags[0]}
      tag2= {elem.tags[1]}
      level= {elem.level}
      pay= {elem.pay}
      location={elem.location}/>
      </div>
    })}
    </>
  );
}

export default App
