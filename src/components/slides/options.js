import React from "react";
const logoUrl = `${process.env.PUBLIC_URL}/color-logo.svg`;

const friday = (
  <div className="stepbox stepbox--large">
    <h2 className="tgif">TGIF </h2>
    <br />
    <span className="em-1" aria-label="Party Gilter" role="img">
      🎉
    </span>
    &nbsp;&nbsp;
    <span className="em-2" aria-label="Party Balloons" role="img">
      🎊
    </span>
    &nbsp;&nbsp;
    <span className="em-3" aria-label="Party Beer" role="img">
      🍻
    </span>
    &nbsp;&nbsp;
    <span className="em-4" aria-label="Pingpong" role="img">
      🏓
    </span>
  </div>
);

const isFriday = new Date().toDateString().indexOf("Fri") >= 0;

const lastPage = isFriday ? friday : <h2>Thank You</h2>;

const getPersons = (persons) => {
  const opts = persons
    .sort(() => Math.random() - 0.5)
    .map((staff, index) => {
      return {
        id: "staff_" + index,
        className: "persons",
        data: {
          x: 0,
          y: 0 + index * 40, //+ gap,
        },
        content: [
          <>
            <div className="stepbox">
              <h2> {staff.name} </h2>
            </div>
          </>,
        ],
      };
    });

  return opts;
};

const makeSteps = (persons) => {
  if (!persons) return;

  const obj = [
    {
      id: "start",
      className: "slide brand",
      data: {
        x: -1400,
        y: -1500,
      },
      content: [
        <img src={logoUrl} alt="Optimum Futurist" />,
        <p className="brand-of">Daily</p>,
        <h2 className="try">Scrum</h2>,
        <p>Total Attendees: #{persons.length}</p>,
      ],
    },
    {
      id: "its",
      data: {
        x: 0,
        y: -1500,
      },
      content: [
        <p style={{ textAlign: "left" }}>
          How to report? <br />
          <strong> - Describe what you're working on</strong> <br />
          and - <span className="btn-block">inform any roadblocks?</span> <br />
        </p>,
      ],
    },
    ...getPersons(persons),
    {
      id: "qsts",
      data: {
        x: 1200,
        y: 500,
        scale: 4,
        rotateZ: 90
      },
      content: [
        <h1>
          <strong>
            <span className="have">Any</span>
          </strong>
          <span className="noticed">&nbsp;Questions?</span>
        </h1>,
      ],
    },
    {
      id: "thankyou",
      className: "step opacity large-title",
      data: {
        x: 3000,
        y: 1500,
        z: 0,
        scale: 3,
      },
      content: [<>{lastPage}</>],
    },
  ];
  return obj;
};

export default makeSteps;
