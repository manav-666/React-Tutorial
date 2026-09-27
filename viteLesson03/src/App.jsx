import React from 'react'
import Card from './Compo/Card'

//Props Understanding

const App = () => {
  return (
    <>
     <Card userName = 'Aman Sharma' age={15} img="https://images.unsplash.com/photo-1659787587568-ad8213249ae7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"/>

     <Card userName = 'Rohit Kali' age={18} img="https://images.unsplash.com/photo-1708893634094-f6604d94e43f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"/>

     <Card userName = 'Vishal Chaudhari' age={20} img="https://images.unsplash.com/photo-1627283391728-701007067e7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"/>
    </>
  )
}

export default App
