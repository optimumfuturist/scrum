import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import "./list.css";
import { staffs } from "../../options";

const List = () => {
  console.log(staffs);
  const ActiveParticipants = staffs.map((staff) => {
    return (
      <li className="item" key={uuidv4()}>
        <input type="checkbox" />
        <p>{staff}</p>
      </li>
    );
  });

  return (
    <section className="list-view page">
      <h1 className="title">List</h1>
      <ul className="inbox">{ActiveParticipants}</ul>
      <Link className="pushable" to="/slides">
        <span class="shadow"></span>
        <span class="edge"></span>
        <span class="front">Start</span>
      </Link>
    </section>
  );
};

export { List };
