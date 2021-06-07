import React from "react";
// import logo from '../../../public/color-logo.svg';
const logoUrl = `${process.env.PUBLIC_URL}/color-logo.svg`;


const staffs = [
  'Bijay',
  'Diwan',
  'Shyam',
  'Sanchita',
  'Shekhar',
  'Suman',
  'Niranjan',
  'Praveen',
  'Sunil',
  'Kapoor',
  'Basanta',
  'Bibek',
  'Sandesh',
  'Prajwol'
];

const friday = <div className="stepbox stepbox--large"><h2 className="tgif">TGIF </h2><br /><span className="em-1" aria-label="Party Gilter" role="img">🎉</span>&nbsp;&nbsp;<span className="em-2" aria-label="Party Balloons" role="img">🎊</span>&nbsp;&nbsp;<span className="em-3" aria-label="Party Beer" role="img">🍻</span>&nbsp;&nbsp;<span className="em-4" aria-label="Pingpong" role="img">🏓</span></div>;

const isFriday = (new Date()).toDateString().indexOf('Fri') >= 0;

const lastPage = isFriday ? friday : <h2>Thank You</h2>

const getStaffs = () => {
  const opts = staffs
    .sort(() => Math.random() - 0.5)
    .map((staff, index) => {

      return {
        id: "staff_" + index,
        className: "staffs",
        data: {
          x: 2100 + (index * 3 + 210), //+ gap,
          y: 1100 + (index * 150), //+ gap,
          z: -2000,
          rotateY: 30 + (index * 3 + 210),
          rotateX: 120 + (index * 1 + 210),
          scale: 1.8,
        },
        content: [
          <><div className="stepbox"><h2> {staff} </h2></div></>,
        ],
      };
    });

  return opts;
};

const options = [
  {
    id: "start",
    className: "slide brand",
    data: {
      x: 300,
      y: -200,
      scale: 2,
    },
    content: [
      <img src={logoUrl} alt="Optimum Futurist" />,
      <p className="brand-of">Daily</p>,
      <h2 className="try">
        Scrum
      </h2>,
      <p>Total Attendees: #{staffs.length}</p>
    ],
  },
  {
    id: "its",
    data: {
      x: 850,
      y: 3000,
      rotateZ: 90,
      scale: 5,
    },
    content: [
      <p style={{ textAlign: "left" }}>
        How to report? <br />
        <strong> - Describe what you're working on</strong> <br />
        and - <span className="btn-block">inform any roadblocks?</span> <br />
      </p>,
    ],
  },
  ...getStaffs(),
  {
    id: "qsts",
    data: {
      x: 6200,
      y: 4300,
      z: -100,
      rotateX: -40,
      rotateY: 10,
      scale: 10,
    },
    content: [
      <h1>
        <strong>
          <span className="have">Q</span>
        </strong>
        <span className="you">&</span>
        <span className="noticed">A</span>
      </h1>,
    ],
  },
  {
    id: "thankyou",
    className: "step opacity large-title",
    data: {
      x: 3000,
      y: 500,
      z: 0,
      scale: 3,
    },
    content: [
      <>{lastPage}</>,
    ],
  },
];

export default options;
export { staffs, getStaffs };
