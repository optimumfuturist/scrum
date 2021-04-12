import React from "react";
// import logo from '../../../public/color-logo.svg';
const logoUrl = `${process.env.PUBLIC_URL}/color-logo.svg`;

const nicknames = [
  "Bullet-Proof",
  "Ironsides",
  "Maximus",
  "Jesse James",
  "Bludgeon",
  "Sledgehammer",
  "Quarterstaff",
  "Claymore",
  "Wolf",
  "Boomslang",
  "Goshawk",
  "Enchantress",
  "Roulette",
  "Stiletto",
  "Artemis",
  "Marquess",
  "Malevolence",
  "Vainglory",
  "Crucible",
  "Spellbinder",
  "Kelpie",
  "Poltergeist",
  "Exorcist",
  "Kelpie",
  "Elemental",
  "Chromium",
  "Redox",
  "Serpent",
  "Supernova",
  "Snake Eyes",
  "Arbitrage",
  "Explosive",
  "Ratchet",
  "Roadkill",
  "Ronin",
  "Wardon",
];

const emojis = [ '🐧', '🎈', '🤓', '👀', '🧟‍♀️', '🐶', '🍎', '🏓', '🌈', '🦄', '🦾', '👑', '🪖', '🧳', '👠', '👞', '🥽', '🌾', '🦥', '⚡️', '🥒', '🥟', '🍕', '🍥', '🫑', '🌽', '🍾', '🧊', '🎽', '🎧', '🛵', '🏨', '🌌', '⚱️', '🧬', '🪑']
const staffs = [
  'Bijay',
  'Diwan',
  'Shyam',
  'Pritishma',
  'Sanchita',
  'Saroz',
  'Shekhar',
  'Suman',
  'Sabina',
  'Niranjan',
  'Praveen',
  'Sunil',
  'Kapoor',
  'Basanta',
  'Bibek',
  'Sandesh',
  'Prajwol'
];

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getStaffs = () => {
  const opts = staffs
    .sort(() => Math.random() - 0.5)
    .map((staff, index) => {
      // const gap = index * Math.ceil(Math.random() * 1000);
      // const scale = getRndInteger(6, 11);
      // const rotateZ = getRndInteger(15, 320)

      return {
        id: "staff_" + index,
        className: "staffs",
        data: {
          x: 2100, //+ gap,
          y: 2100, //+ gap,
          z: -2000,
          // rotateZ,
          scale: 1.4
        },
        content: [
          <h2> {staff} {emojis[getRndInteger(index, emojis.length - 1)]}<br /><strong>{nicknames[getRndInteger(index, nicknames.length - 1)]}</strong></h2>,
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
      x: 1000,
      y: -1500,
      scale: 2,
    },
    content: [
      <img src={logoUrl} alt="Optimum Futurist" />,
      <p className="brand-of">Workday</p>,
      <h2 className="try">
        Scrum
      </h2>,
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
      <h2>Thank You</h2>,
    ],
  },
];

export default options;
export { staffs, getStaffs };
