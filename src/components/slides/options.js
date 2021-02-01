import React from 'react';

const staffs = [
    ['Bijay', 'Sleephead 🙂'],
    ['Diwan', 'Slacker 🥷'],
    ['Shyam', 'Kid from the past week 👨‍💻'],
    ['Pritishma', 'Taker 🤩'],
    ['Sanchita', 'Lady clamper 🐒'],
    ['Saroz', 'Willspire 🤑'],
    ['Shekhar', 'Wannabe ✌🏻'],
    ['Suman', 'New kid on the block ✌🏻'],
];

const getStaffs = () => {

    const opts = staffs.sort(() => Math.random() - 0.5).map((staff, index) => {
        const gap = index * Math.ceil(Math.random() * 1000);
        const scale = Math.floor(Math.random() * (11 - 6 + 1) + 6);

        return {
            id: 'staff_' + index,
            className: "staffs",
            data: {
                x: 1100 + gap,
                y: 1100 + gap,
                z: -2000,
                scale: scale,
            },
            content: [
                <h2>{staff[0]} <strong>{staff[1]}</strong></h2>,
            ]
        }
    });

    return opts;
}

const options = [
    {
        id: "start",
        className: "slide brand",
        data: {
            x: 1000,
            y: -1500,
            scale: 2
        },
        content: [
            <p className="brand-of">Welcome to</p>,
            <h2 className="try"><strong>Daily</strong> Scrum</h2>
        ]
    },
    {
        id: "its",
        data: {
            x: 850,
            y: 3000,
            rotateZ: 90,
            scale: 5
        },
        content: [
            <p style={{'textAlign': 'left'}}>How to report? <br /><strong> - Describe what you're working on</strong> <br/>
                and - <span className="btn-block">inform any roadblocks?</span> <br/></p>
        ]
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
            scale: 10
        },
        content: [
            <h1><strong><span className="have">Q</span></strong><span className="you">&</span><span
                className="noticed">A</span></h1>
        ]
    },
    {
        id: "thankyou",
        className: "step opacity",
        data: {
            x: 3000,
            y: 500,
            z: 0,
            scale: 10
        },
        content: [
            <h2><br/><br/><br/><strong>Thank</strong> you</h2>
        ]
    }
];

export default options;
export {staffs, getStaffs};