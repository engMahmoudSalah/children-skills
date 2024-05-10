import React from 'react'

const M1 = ({tab}) => {

    var tabs = tab;

    var tabs = [
        {
          title: "1",
          img: require("../../maharat/ترتيب_السرير/1/IMG-20240415-WA0078.jpg"),
          description: "أقوم من النوم",
          audio: require("../../maharat/ترتيب_السرير/1/AUD-20240421-WA0008.mp3"),
        },
        {
          title: '2',
          img: require("../../maharat/ترتيب_السرير/2/IMG-20240415-WA0079.jpg"),
          description: "أشيل الغطا",
          audio: require("../../maharat/ترتيب_السرير/2/AUD-20240421-WA0009.mp3"),
        },
        {
          title: '3',
          img: require("../../maharat/ترتيب_السرير/3/IMG-20240415-WA0081.jpg"),
          description:"أطبق الغطا",
          audio: require("../../maharat/ترتيب_السرير/3/AUD-20240421-WA0010.mp3"),
        },
        {
          title: '4',
          img: require("../../maharat/ترتيب_السرير/4/IMG-20240416-WA0000.jpg"),
          description: "خلصت... سريرى مترتب ",
          audio: require("../../maharat/ترتيب_السرير/4/AUD-20240421-WA0011.mp3"),
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

export default M1
