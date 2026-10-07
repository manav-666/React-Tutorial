import React from 'react'
import axios from 'axios'
import {useState} from 'react'
const App = () => {
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  //   console.log(response);
  // }

  // const getData = async () =>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
  //   console.log(response);

  //   const data = await response.json();

  //   console.log(data);    
  // }

  // const getData = async () =>{
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //   console.log(response);
  //   // console.log(response.data);

  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //   console.log(data);    
  // }

  const [data, setData] = useState([])
  const getData = async () =>{
    const response = await axios.get('https://picsum.photos/v2/list');
    console.log(response);
    // console.log(response.data);
    
    const {data} = await axios.get('https://picsum.photos/v2/list');
    console.log(data);

    setData(data) 
  }

  return (
    <div className='h-full w-full bg-gray-500'>
      <button className='active:bg-red-800 bg:text-red px-7 py-2 rounded-xl m-10' onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
          return <div className="p-5">
            <div className='bg-red-300 h-20 w-40 mt-5 text-center p-3'><span className='font-bold text-white '>Author Name: </span>{elem.author}</div>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
