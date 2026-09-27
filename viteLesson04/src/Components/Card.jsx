import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = () => {
    return (
        <>
            <div className='parent'>

                <div className='card'>

                    <div className="top">
                        <img src="https://i.pinimg.com/736x/36/ff/72/36ff72fc8d310f1353ecb2e5862296ab.jpg" alt="" />
                        <button type="button">Save <Bookmark size={12} /> </button>
                    </div>

                    <div className="center">
                        <h3>Amazon <span>5 days ago</span></h3>
                        <h2>Senior UI/UX Designer</h2>
                        <div className='blocks'>
                            <span>Part-Time</span>
                            <span>Senior Level</span>
                        </div>
                        <hr />
                    </div>

                    <div className="bottom">
                        <div className='Payment'>
                            <h3>$120/hr</h3>
                            <p>Mumbai, India</p>
                        </div>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
