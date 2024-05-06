import React from 'react'

const M2 = ({tab}) => {

    var tabs = tab;

    var tabs = [
        {
          title: '1',
          img: require("../../maharat/غسيل_الاسنان/1/1.jpg"),
          description: " ادخل الحمام",
          audio: require("../../maharat/غسيل_الاسنان/1/AUD-20240421-WA0012.mp3"),
        },
        {
          title: '2',
          img: require("../../maharat/غسيل_الاسنان/2/2.jpg"),
          description:"امسك فرشة الاسنان",
          audio: require("../../maharat/غسيل_الاسنان/2/AUD-20240421-WA0013.mp3"),
        },
        {
          title: '3',
          img: require("../../maharat/غسيل_الاسنان/3/3.jpg"),
          description: "امسك المعجون",
          audio: require("../../maharat/غسيل_الاسنان/3/AUD-20240421-WA0014.mp3"),
        },
        {
          title: '4',
          img: require("../../maharat/غسيل_الاسنان/4/4.jpg"),
          description: " احط المعجون علي فرشة الاسنان ",
          audio: require("../../maharat/غسيل_الاسنان/4/AUD-20240421-WA0015.mp3"),
        },
        {
          title: '5',
          img: require("../../maharat/غسيل_الاسنان/5/5.jpg"),
          description: " احط فرشة الاسنان علي سناني ",
          audio: require("../../maharat/غسيل_الاسنان/5/AUD-20240421-WA0016.mp3"),
        },
        {
          title: '6',
          img: require("../../maharat/غسيل_الاسنان/6/6.jpg"),
          description: " اغسل سناني ",
          audio: require("../../maharat/غسيل_الاسنان/6/AUD-20240421-WA0017.mp3"),
        },
        {
          title: '7',
          img: require("../../maharat/غسيل_الاسنان/7/7.jpg"),
          description: " اغسل بوئي من المعجون ",
          audio: require("../../maharat/غسيل_الاسنان/7/AUD-20240421-WA0018.mp3"),
        },

        {
          title: '8',
          img: require("../../maharat/غسيل_الاسنان/plus7/plus7.jpg"),
          description: " انشف بوءي ",
          audio: require("../../maharat/غسيل_الاسنان/plus7/plus7.mp3"),
        },

        {
          title: '9',
          img: require("../../maharat/غسيل_الاسنان/8/8.jpg"),
          description: " اغسل فرشة الاسنان من المعجون ",
          audio: require("../../maharat/غسيل_الاسنان/8/AUD-20240421-WA0019.mp3"),
        },

        {
          title: '10',
          img: require("../../maharat/غسيل_الاسنان/plus8/plus8.jpg"),
          description: " انشف ايدي ",
          audio: require("../../maharat/غسيل_الاسنان/plus8/plus8.mp3"),
        },

        {
          title: '11',
          img: require("../../maharat/غسيل_الاسنان/9/9.jpg"),
          description: " احط فرشة الاسنان مكانها ",
          audio: require("../../maharat/غسيل_الاسنان/9/AUD-20240421-WA0020.mp3"),
        },
        {
          title: '12',
          img: require("../../maharat/غسيل_الاسنان/10/10.jpg"),
          description: "خلصت ... سناني نضيفة",
          audio: require("../../maharat/غسيل_الاسنان/10/AUD-20240421-WA0021.mp3"),
        },

        {
          title: '13',
          img: require("../../maharat/غسيل_الاسنان/plus10/plus10.jpg"),
          description: " اخرج من الحمام ",
          audio: require("../../maharat/غسيل_الاسنان/plus10/plus10.mp3"),
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

export default M2
