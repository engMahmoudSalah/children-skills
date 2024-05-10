import React from 'react'

const M6 = ({tab}) => {

    var tabs = tab;

    var tabs = [
        {
          title: "1",
          img: require("../../maharat/لبس_الشراب/0/0.jpg"),
          description: "أفتح درج الشرابات",
          audio: require("../../maharat/لبس_الشراب/1/AUD-20240421-WA0027.mp3"),
        },
        {
          title: "2",
          img: require("../../maharat/لبس_الشراب/1/1.jpg"),
          description: "أجيب الشراب",
          audio: require("../../maharat/لبس_الشراب/1/AUD-20240421-WA0027.mp3"),
        },
        {
          title: '3',
          img: require("../../maharat/لبس_الشراب/2/2.jpg"),
          description: "ألبس الشراب في رجلي",
          audio: require("../../maharat/لبس_الشراب/2/AUD-20240421-WA0028.mp3"),
        },
        {
          title: '4',
          img: require("../../maharat/لبس_الشراب/3/3.jpg"),
          description:"ألبس الشراب في رجلي التانية",
          audio: require("../../maharat/لبس_الشراب/3/AUD-20240421-WA0029.mp3"),
        },
        {
          title: '5',
          img: require("../../maharat/لبس_الشراب/55/55.jpg"),
          description: "أجيب الجزمة",
          audio: require("../../maharat/لبس_الشراب/4/AUD-20240421-WA0030.mp3"),
        },
        {
          title: '6',
          img: require("../../maharat/لبس_الشراب/5/5.jpg"),
          description: "البس الجزمة في رجلي",
          audio: require("../../maharat/لبس_الشراب/5/AUD-20240421-WA0031.mp3"),
        },
        {
          title: '7',
          img: require("../../maharat/لبس_الشراب/6/6.jpg"),
          description: "البس الجزمة في رجلي التانية",
          audio: require("../../maharat/لبس_الشراب/6/AUD-20240421-WA0032.mp3"),
        },
        {
          title: '8',
          img: require("../../maharat/لبس_الشراب/7/7.jpg"),
          description: "خلصت ... لبست الشراب و الجزمة",
          audio: require("../../maharat/لبس_الشراب/7/AUD-20240421-WA0033.mp3"),
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

export default M6
