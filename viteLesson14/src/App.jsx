import React from 'react'

const App = () => {
  // localStorage.clear();
  // localStorage.setItem("user","sarthak");
  // localStorage.setItem("age",15);
  // const item = localStorage.getItem('user');
  // const age = localStorage.getItem('age')
  // console.log(item, age);

  // localStorage.clear()

  const user = {
    userName:'Sarthak',
    age:23,
    city:'Mumbai'
  }

  // console.log(user);

  // localStorage.setItem("user" , user);
  localStorage.setItem("userArray" , JSON.stringify(user));

  // const userkey = localStorage.getItem(localStorage.key(1))
  // console.log(userkey);

  const student = (localStorage.getItem('userArray'));

  console.log(student);

  console.log(typeof(student));

  const studentObj = JSON.parse(localStorage.getItem('userArray'));

  console.log(typeof(studentObj));
  
  console.log(studentObj);
  
  return (
    <div className='bg-gray-500 h-screen w-screen'>
      
    </div>
  )
}

export default App
