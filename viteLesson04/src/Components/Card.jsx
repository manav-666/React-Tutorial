import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
    
    return (
        <>
            <div className='parent'>

                <div className='card'>

                    <div className="top">
                        <img src={props.logo} alt="" />
                        <button type="button">Save <Bookmark size={12} /> </button>
                    </div>

                    <div className="center">
                        <h3>{props.company} <span>{props.datePost}</span></h3>
                        <h2>{props.post}</h2>
                        <div className='blocks'>
                            <span>{props.tag1}</span>
                            <span>{props.tag2}</span>
                            <span>{props.level}</span>
                        </div>
                        <hr />
                    </div>

                    <div className="bottom">
                        <div className='Payment'>
                            <h3>{props.pay}</h3>
                            <p>{props.location}</p>
                        </div>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
