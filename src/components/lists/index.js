import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from '../btn'
import "./list.css";
import { staffs } from "../../options";

const List = () => {
  const ActiveParticipants = staffs.map((staff) => {
    const keyId = uuidv4();

    return (
      <li className="item" key={keyId}>
        <input id={keyId} type="checkbox" />
        <label htmlFor={keyId}>{staff}</label>
      </li>
    );
  });

  return (
    <section className="list-view page">
      <h1 className="title">Choose Attendees</h1>
      <ul className="inbox">{ActiveParticipants}</ul>
      <Button to="/slides" text="Start" />
    </section>
  );
};

export { List };
