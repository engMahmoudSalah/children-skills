import React from 'react'
import './css/dark.css'
import 'font-awesome/css/font-awesome.min.css';


const Dark = () => {


const themeToggler = document.getElementById("theme-toggler");
const body = document.body;



//change theme
let hh =()=> {

    body.classList.toggle('dark-theme-variables');

    document.getElementById('i1').
    classList.toggle('active');

    document.getElementById('i2').
    classList.toggle('active');
}
    
 


  return (
    <div onClick={hh} id='theme-toggler' class="theme-toggler">
        <i id='i1' class="fa fa-sun active" ></i>
        <i id='i2' class="fa fa-moon"></i>
    </div>
  )
}

export default Dark
