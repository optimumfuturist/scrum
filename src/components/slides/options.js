import React from 'react';

const staffs = [
    'Aishan Shrestha',
    'Bijay Rauniyar',
    'Diwan Adhikari',
    // 'Praveen Sharma',
    'Pritishma Tuladhar',
    'Sanchita Tiwari',
    'Saroz K. Poddar',
    'Shekhar K. Sharma',
];

const getStaffs = () => {

    let staff = '';
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
                <h2>{staff}</h2>,
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
            <p><strong>What are you working on?</strong> <br/>
                any <a>any blocks?</a> <br/></p>
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