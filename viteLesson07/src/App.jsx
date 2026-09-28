import React from 'react'
import Card from '../src/components/Card.jsx'
const App = () => {
    const users = [
  {
    status: "Available",
    pay: "$45/hr",
    profilePhoto: "https://i.pravatar.cc/150?img=12",
    userName: "Wade Wilson",
    skill: "UI/UX Designer",
    company: "Epic Coders",
    skills: ["UI", "UX", "Photoshop", "Motion"],
    description:
      "Wade is 32 year old UI/UX designer, with an impressive portfolio behind him."
  },

  {
    status: "Not Available",
    pay: "$50/hr",
    profilePhoto: "https://i.pravatar.cc/150?img=11",
    userName: "Alex Carter",
    skill: "Frontend Developer",
    company: "Freelancer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "Alex is a frontend developer who creates responsive and interactive web experiences."
  },

  {
    status: "Available",
    pay: "$40/hr",
    profilePhoto: "https://i.pravatar.cc/150?img=5",
    userName: "Emma Watson",
    skill: "Graphic Designer",
    company: "Creative Studio",
    skills: ["Figma", "Photoshop", "Illustrator", "Branding"],
    description:
      "Emma is a creative graphic designer focused on modern branding and visual design."
  },

  {
    status: "Available",
    pay: "$55/hr",
    profilePhoto: "https://i.pravatar.cc/150?img=13",
    userName: "John Carter",
    skill: "Backend Developer",
    company: "Code Factory",
    skills: ["Java", "Spring", "MySQL", "API"],
    description:
      "John is a backend developer who builds scalable applications and reliable APIs."
  },

  {
    status: "Not Available",
    pay: "$35/hr",
    profilePhoto: "https://i.pravatar.cc/150?img=9",
    userName: "Sophia Miller",
    skill: "Motion Designer",
    company: "Pixel House",
    skills: ["After Effects", "Motion", "3D", "Animation"],
    description:
      "Sophia is a motion designer creating engaging animations and visual experiences."
  },

  {
    status: "Available",
    pay: "$60/hr",
    profilePhoto: "https://i.pravatar.cc/150?img=14",
    userName: "Michael Scott",
    skill: "Full Stack Developer",
    company: "Freelancer",
    skills: ["React", "Java", "Node.js", "MongoDB"],
    description:
      "Michael is a full stack developer who enjoys building complete web applications."
  },

  {
    status: "Available",
    pay: "$42/hr",
    profilePhoto: "https://i.pravatar.cc/150?img=16",
    userName: "Olivia Brown",
    skill: "Product Designer",
    company: "Design Hub",
    skills: ["Figma", "UI", "UX", "Prototyping"],
    description:
      "Olivia is a product designer specializing in user-friendly digital products."
  },

  {
    status: "Not Available",
    pay: "$48/hr",
    profilePhoto: "https://i.pravatar.cc/150?img=15",
    userName: "Daniel Smith",
    skill: "Mobile App Developer",
    company: "AppWorks",
    skills: ["Java", "Android", "Firebase", "UI"],
    description:
      "Daniel is a mobile developer who creates smooth and practical Android applications."
  }
];
    return(
        <>
        {users.map(function(elem,idx){
            return <div className='flex' key={idx}>
                <Card status={elem.status} pay={elem.pay} profilePhoto={elem.profilePhoto} userName={elem.userName} skill={elem.skill} company={elem.company}
                skill1= {elem.skills[0]} skill2= {elem.skills[1]} skill3= {elem.skills[2]} skill4= {elem.skills[3]}
                description={elem.description}/>
            </div>
        })}
        </>
    );
}

export default App
