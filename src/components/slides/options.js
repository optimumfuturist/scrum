import React from 'react';

const getStaffs = () => {

    const staffs = [
        'Aishan Shrestha',
        'Bijay Runiyar',
        'Diwan Adhikari',
        'Prashant Shrestha',
        'Praveen Sharma',
        'Pritishma Tuladhar',
        'Sanchita Tiwari',
        'Saroz K. Poddar',
        'Shekhar K. Sharma',
    ]

    let staff = '';
    const opts = staffs.sort(() => Math.random() - 0.5).map((staff, index)  => {
        const gap = index * Math.ceil(Math.random() * 1000);
        const rotate = Math.ceil(Math.random() * 400);
        const scale = Math.floor(Math.random() * (30 - 3 + 1) + 3);
        return {
            id: 'staff_' + index,
            className: "staffs",
            data: {
              x:1400 + gap,
              y:2200 + gap,
              z:-3000,
              rotateZ: rotate,
              scale: scale,
            },
            content: [
                <p>{staff}</p>,
            ]
        }
    });
    return opts;
}

export default [
  {
      id: "start",
      className:"slide brand",
      data:{
          x:1000,
          y:-1500,
      },
      content:[
          <p className="brand-of">Welcom to <h3 style={{textDecoration: 'line-through'}}>Jumanji</h3></p>,
          <h2 className="try"><strong>Catch</strong> Up <strong>Time</strong></h2>
      ]
  },
  {
      id:"title",
      className:"circle",
          data:{
          scale: 2
      },
      content:[
          <span className="try">New way to report - </span>,
          <h1>Randomly<sup></sup></h1>,
          <span className="footnote">called names</span>
      ]
  },
  {
      id: "its",
      data:{
          x:850,
          y:3000,
          rotateZ:90,
          scale:5
      },
      content:[
          <p><strong>What are you working on</strong> <br/>
          any <a>any blocks?</a> <br/>
          pss, next <strong>please</strong>?</p>
      ]
  },
  {
      id: "big",
      data:{
          x:3500,
          y:2100,
          rotateZ:180,
          scale:1
      },
      content:[
          <p>starting <b>now</b> <span className="thoughts">...</span></p>
      ]
  },
    ...getStaffs(),
 {
      id: "one-more-thing",
      data:{
          x:6000,
          y:4000,
          scale:2
      },
      content:[
          <p>one more thing...</p>
      ]
  },
  {
      id: "qsts",
      data:{
          x:6200,
          y:4300,
          z:-100,
          rotateX:-40,
          rotateY:10,
          scale:2
      },
      content:[
          <p><span className="have">Anybody</span> <span className="you">has</span> <span className="noticed">any</span> <b>questions<sup>*</sup></b>?</p>
      ]
  },
  {
      id: "okthen",
      className: "opacity",
      data:{
          x:6200,
          y:4500,
          z:-100,
          rotateX:-40,
          rotateY:10,
          scale:3
      },
      content:[
          <span className="footnote">* nope? all-righty then ;)</span>
      ]
  },  {
      id: "thankyou",
      className:"step opacity",
      data:{
          x:3000,
          y:1500,
          z:0,
          scale:10
      },
      content:[
          <h2><br /><br /><br /><strong>Thank</strong> you</h2>
      ]
  }
];