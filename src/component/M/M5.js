import React from 'react'

const M5 = ({tab}) => {

    var tabs = tab;

    var tabs = [

      {
        title: "1",
        img: require("../../maharat/لبس_التيشرت/0/0.jpg"),
        description: " افتح الدولاب",
        audio: require("../../maharat/لبس_التيشرت/0/0.mp3"),
      },

        {
          title: "2",
          img: require("../../maharat/لبس_التيشرت/1/1.jpg"),
          description: "اجيب التيشرت من الدولاب",
          audio: require("../../maharat/لبس_التيشرت/1/AUD-20240421-WA0034.mp3"),
        },
        {
          title: '3',
          img: require("../../maharat/لبس_التيشرت/2/2.jpg"),
          description: "ادخل دراعي في الكم",
          audio: require("../../maharat/لبس_التيشرت/2/AUD-20240421-WA0035.mp3"),
        },
        {
          title: '4',
          img: require("../../maharat/لبس_التيشرت/3/3.jpg"),
          description:"ادخل دراعي تاني في الكم",
          audio: require("../../maharat/لبس_التيشرت/3/AUD-20240421-WA0036.mp3"),
        },
        {
          title: '5',
          img: require("../../maharat/لبس_التيشرت/4/4.jpg"),
          description: "ادخل راسي",
          audio: require("../../maharat/لبس_التيشرت/4/AUD-20240421-WA0037.mp3"),
        },
        {
          title: "6",
          img: require("../../maharat/لبس_التيشرت/5/5.jpg"),
          description: "افتح الدولاب",
          audio: require("../../maharat/لبس_التيشرت/5/5.mp3"),
        },

        {
          title: "7",
          img: require("../../maharat/لبس_التيشرت/plus5/plus5.jpg"),
          description: "اجيب البنطلون",
          audio: require("../../maharat/لبس_التيشرت/plus5/plus5.mp3"),
        },

        {
          title: '8',
          img: require("../../maharat/لبس_التيشرت/6/6.jpg"),
          description: "ادخل رجلي",
          audio: require("../../maharat/لبس_التيشرت/6/AUD-20240421-WA0039.mp3"),
        },
        {
          title: '9',
          img: require("../../maharat/لبس_التيشرت/7/7.jpg"),
          description:"ادخل رجلي التانية",
          audio: require("../../maharat/لبس_التيشرت/7/AUD-20240421-WA0040.mp3"),
        },
        {
          title: '10',
          img: require("../../maharat/لبس_التيشرت/8/8.jpg"),
          description: "خلصت ... لبست التيشرت و البنطلون",
          audio: require("../../maharat/لبس_التيشرت/8/AUD-20240421-WA0041.mp3"),
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

export default M5
