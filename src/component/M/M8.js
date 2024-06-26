import React from 'react'

const M8 = ({tab}) => {

    var tabs = tab;

    var tabs = [
      {
        title: '1',
        img: require("../../maharat/الاكل/0/0.jpg"),
        description: "أجيب الاكل من المطبخ",
        audio: require("../../maharat/الاكل/0/0.mp3"),
      },
        {
          title: "2",
          img: require("../../maharat/الاكل/1/1.jpg"),
          description: "أحط الاكل قدامي",
          audio: require("../../maharat/الاكل/1/AUD-20240421-WA0022.mp3"),
        },
        {
          title: '3',
          img: require("../../maharat/الاكل/2/2.jpg"),
          description: "أمسك المعلقة",
          audio: require("../../maharat/الاكل/2/AUD-20240421-WA0023.mp3"),
        },
        {
          title: '4',
          img: require("../../maharat/الاكل/3/3.jpg"),
          description:"آكل",
          audio: require("../../maharat/الاكل/3/AUD-20240421-WA0024.mp3"),
        },
        {
          title: '5',
          img: require("../../maharat/الاكل/4/4.jpg"),
          description: "خلصت اكل",
          audio: require("../../maharat/الاكل/4/AUD-20240421-WA0025.mp3"),
        },
        {
          title: '6',
          img: require("../../maharat/الاكل/5/5.jpg"),
          description: "أشيل الطبق",
          audio: require("../../maharat/الاكل/5/AUD-20240421-WA0026.mp3"),
        },

        {
          title: '7',
          img: require("../../maharat/الاكل/6/6.jpg"),
          description: " أحط الطبق في الحوض ",
          audio: require("../../maharat/الاكل/6/6.mp3"),
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

export default M8
