import React from 'react'

const M7 = ({tab}) => {

    var tabs = tab;

    var tabs = [
        {
          title: "1",
          img: require("../../maharat/الاستحمام/1/1.jpg"),
          description: " أدخل الحمام ",
          audio: require("../../maharat/الاستحمام/1/AUD-20240421-WA0046.mp3"),
        },
        {
          title: '2',
          img: require("../../maharat/الاستحمام/2/2.jpg"),
          description: "أقفل الباب ورايا",
          audio: require("../../maharat/الاستحمام/2/AUD-20240421-WA0047.mp3"),
        },
        {
          title: '3',
          img: require("../../maharat/الاستحمام/3/3.jpg"),
          description:" أقلع هدومي",
          audio: require("../../maharat/الاستحمام/3/AUD-20240421-WA0048.mp3"),
        },
        {
          title: '4',
          img: require("../../maharat/الاستحمام/4/4.jpg"),
          description: " قلعت هدومي",
          audio: require("../../maharat/الاستحمام/4/AUD-20240421-WA0049.mp3"),
        },
        {
          title: "5",
          img: require("../../maharat/الاستحمام/5/5.jpg"),
          description: "أفتح الدش",
          audio: require("../../maharat/الاستحمام/5/AUD-20240421-WA0050.mp3"),
        },


        {
          title: "6",
          img: require("../../maharat/الاستحمام/plus5/plus5.jpg"),
          description: "أجيب الشامبو",
          audio: require("../../maharat/الاستحمام/plus5/plus5.mp3"),
        },

        {
          title: "7",
          img: require("../../maharat/الاستحمام/plus5-1/plus5-1.jpg"),
          description: "أحط الشامبو علي شعري",
          audio: require("../../maharat/الاستحمام/plus5-1/plus5-1.mp3"),
        },

        {
          title: "8",
          img: require("../../maharat/الاستحمام/plus5-2/plus5-2.jpg"),
          description: "أجيب الليفة",
          audio: require("../../maharat/الاستحمام/plus5-2/plus5-2.mp3"),
        },

        {
          title: "9",
          img: require("../../maharat/الاستحمام/plus5-3/plus5-3.jpg"),
          description: "أحط الصابون علي الليفة",
          audio: require("../../maharat/الاستحمام/plus5-3/plus5-3.mp3"),
        },



        {
          title: '10',
          img: require("../../maharat/الاستحمام/6/6.jpg"),
          description: "أغسل جسمي بالصابون",
          audio: require("../../maharat/الاستحمام/6/AUD-20240421-WA0051.mp3"),
        },
        {
          title: '11',
          img: require("../../maharat/الاستحمام/7/7.jpg"),
          description:" أغسل جسمي بالمايه",
          audio: require("../../maharat/الاستحمام/7/AUD-20240421-WA0052.mp3"),
        },
        {
          title: '12',
          img: require("../../maharat/الاستحمام/8/8.jpg"),
          description: "أقفل الدش",
          audio: require("../../maharat/الاستحمام/8/AUD-20240421-WA0053.mp3"),
        },
        {
          title: "13",
          img: require("../../maharat/الاستحمام/9/9.jpg"),
          description: "أنشف نفسي",
          audio: require("../../maharat/الاستحمام/9/AUD-20240421-WA0054.mp3"),
        },
        {
          title: '14',
          img: require("../../maharat/الاستحمام/10/10.jpg"),
          description: "ألبس البرنص",
          audio: require("../../maharat/الاستحمام/10/AUD-20240421-WA0055.mp3"),
        },
        {
          title: '15',
          img: require("../../maharat/الاستحمام/11/11.jpg"),
          description:"أنا خلصت ... استحميت",
          audio: require("../../maharat/الاستحمام/11/AUD-20240421-WA0056.mp3"),
        },
        {
          title: '16',
          img: require("../../maharat/الاستحمام/12/12.jpg"),
          description: "أخرج من الحمام",
          audio: require("../../maharat/الاستحمام/12/AUD-20240421-WA0057.mp3"),
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

export default M7
