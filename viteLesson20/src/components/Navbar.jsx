import React from 'react'

const Navbar = ({setTheme}) => {
    function changeThemeDark() {
        console.log("Theme is Changed");
        props.setTheme('Dark');
    }

    function changeThemeLight(){
        console.log("Theme is Changed");
        props.setTheme('Light');
    }
  return (
    <div>
      <button onClick={()=>{setTheme("Dark")}} className='bg-amber-200 px-3 py-4 rounded m-5 active:scale-95'>Change to Dark</button>
      <button onClick={()=>{setTheme("Light")}} className='bg-amber-200 px-3 py-4 rounded m-5 active:scale-95'>Change to Light</button>
    </div>
  )
}

export default Navbar
