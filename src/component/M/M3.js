import React from 'react'

const M3 = ({tab}) => {

    var tabs = tab;

    var tabs = [
        {
          title: "1",
          img: require("../../maharat/تسريح_الشعر/1/1.jpg"),
          description: "اجيب المشط ",
          audio: require("../../maharat/تسريح_الشعر/1/AUD-20240421-WA0042.mp3"),
        },
        {
          title: "2",
          img: require("../../maharat/تسريح_الشعر/2/2.jpg"),
          description: "اسرح شعري ",
          audio: require("../../maharat/تسريح_الشعر/2/AUD-20240421-WA0043.mp3"),
        },
        {
          title: "3",
          img: require("../../maharat/تسريح_الشعر/3/3.jpg"),
          description: "احط المشط مكانه ",
          audio: require("../../maharat/تسريح_الشعر/3/AUD-20240421-WA0044.mp3"),
        },
        {
          title: "4",
          img: require("../../maharat/تسريح_الشعر/4/4.jpg"),
          description: "خلصت ... شعري متسرح و جميل ",
          audio: require("../../maharat/تسريح_الشعر/4/AUD-20240421-WA0045.mp3"),
        },

      ];



    
  return (
    <div>
      
        <div className="text">
          <h1> {tab}</h1>
        </div>
        <div className="videos">
        {tabs.map((vid, index) => (
            <div key={index} className="d-video">
              <div className="d-img">

                <img className='img' src={vid.img} alt="" />
                <audio className='audio' controls>
                  <source src={vid.audio} type="audio/mp3"   />
                </audio>

              </div>
              <h5 className='h5'> {vid.title} </h5>
              <h4 className='h4'>
                {vid.description}
              </h4>

              
            </div>
          ))}
          </div>
      </div>
  )
}

export default M3
