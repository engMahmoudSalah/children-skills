import React from 'react'

const M4 = ({tab}) => {

    var tabs = tab;

    var tabs = [
        {
          title: "1",
          img: require("../../maharat/دخول_الحمام/1/1.jpg"),
          description: "ادخل الحمام",
          audio: require("../../maharat/دخول_الحمام/1/1.mp3"),
        },
        {
          title: '2',
          img: require("../../maharat/دخول_الحمام/2/2.jpg"),
          description: "اقفل الباب ورايا",
          audio: require("../../maharat/دخول_الحمام/2/2.mp3"),
        },
        {
          title: '3',
          img: require("../../maharat/دخول_الحمام/3/3.jpg"),
          description:"افتح القاعدة",
          audio: require("../../maharat/دخول_الحمام/3/3.mp3"),
        },
        {
          title: '4',
          img: require("../../maharat/دخول_الحمام/4/4.jpg"),
          description: "اقلع",
          audio: require("../../maharat/دخول_الحمام/4/4.mp3"),
        },
        {
          title: "5",
          img: require("../../maharat/دخول_الحمام/5/5.jpg"),
          description: "اقعد",
          audio: require("../../maharat/دخول_الحمام/5/5.mp3"),
        },
        {
          title: '6',
          img: require("../../maharat/دخول_الحمام/6/6.jpg"),
          description: "اعمل حمام",
          audio: require("../../maharat/دخول_الحمام/6/6.mp3"),
        },
        {
          title: '7',
          img: require("../../maharat/دخول_الحمام/7/7.jpg"),
          description:"اقف",
          audio: require("../../maharat/دخول_الحمام/7/7.mp3"),
        },
        {
          title: '8',
          img: require("../../maharat/دخول_الحمام/8/8.jpg"),
          description: "انضف نفسي بالمناديل",
          audio: require("../../maharat/دخول_الحمام/8/8.mp3"),
        },
        {
          title: "9",
          img: require("../../maharat/دخول_الحمام/9/9.jpg"),
          description: "البس ",
          audio: require("../../maharat/دخول_الحمام/9/9.mp3"),
        },
        {
          title: '10',
          img: require("../../maharat/دخول_الحمام/10/10.jpg"),
          description: "ادوس علي السيفون",
          audio: require("../../maharat/دخول_الحمام/10/10.mp3"),
        },
        {
          title: '11',
          img: require("../../maharat/دخول_الحمام/11/11.jpg"),
          description:"اغسل ايدي بالمياه و الصابون",
          audio: require("../../maharat/دخول_الحمام/11/11.mp3"),
        },
        {
          title: '12',
          img: require("../../maharat/دخول_الحمام/12/12.jpg"),
          description: "انشف ايدي",
          audio: require("../../maharat/دخول_الحمام/12/12.mp3"),
        },
        {
          title: '13',
          img: require("../../maharat/دخول_الحمام/13/13.jpg"),
          description: "خلصت ... اخرج من الحمام",
          audio: require("../../maharat/دخول_الحمام/13/13.mp3"),
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

export default M4
