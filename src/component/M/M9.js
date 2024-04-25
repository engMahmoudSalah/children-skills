import React from 'react'

const M9 = ({tab}) => {

    var tabs = tab;

    var tabs = [
        {
          title: "1",
          img: require("../../maharat/مسح_الانف/1/1.jpg"),
          description: "مناخيري مش نضيفة",
          audio: require("../../maharat/مسح_الانف/1/1.mp3"),
        },
        {
          title: '2',
          img: require("../../maharat/مسح_الانف/2/2.jpg"),
          description: "آخد منديل",
          audio: require("../../maharat/مسح_الانف/2/2.mp3"),
        },
        {
          title: '3',
          img: require("../../maharat/مسح_الانف/3/3.jpg"),
          description:"انف",
          audio: require("../../maharat/مسح_الانف/3/3.mp3"),
        },
        {
          title: '4',
          img: require("../../maharat/مسح_الانف/4/4.jpg"),
          description: "احط المنديل في الباسكت",
          audio: require("../../maharat/مسح_الانف/4/4.mp3"),
        },
        {
          title: '5',
          img: require("../../maharat/مسح_الانف/5/5.jpg"),
          description: "خلصت ... مناخيري نضيفة",
          audio: require("../../maharat/مسح_الانف/5/5.mp3"),
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

export default M9
