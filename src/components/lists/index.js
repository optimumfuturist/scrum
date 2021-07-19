import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import localforage from "localforage";

import { LF_KEYS } from '../../constants';
import { Button } from "../btn";
import "./list.css";

const List = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    localforage.getItem(LF_KEYS.PERSONS).then(v => {
      if(Array.isArray(v)) setPersons(v);
    });
  }, []);

  const ActiveParticipants = persons.map((staff) => {
    const keyId = uuidv4();

    return (
      <li className="item" key={keyId}>
        <label htmlFor={keyId}>{staff.name}</label>
        <button className="btn-remove" onClick={() => removePerson(staff.id)} id={keyId} type="button">&times;</button>
      </li>
    );
  });

  const updateStore = arr => {
    localforage.setItem(LF_KEYS.PERSONS, arr).then(v => {
      setPersons(v);
    });
  };

  const removePerson = id => {
    const filteredPersons = persons.filter(person => person.id !== id)
    updateStore(filteredPersons);
  }

  const addPerson = () => {
    const name = prompt();

    if(!name) return;
    const allPersons = [...persons, {name, id: persons.length + 1 }];
    updateStore(allPersons);
  };

  return (
    <section className="list-view page">
      <h1 className="title">Attendees</h1>
      <ul className="inbox">{!persons.length && <li className="item"><label title="No one available">No one available</label></li>}</ul>
      <ul className="inbox">{ActiveParticipants}</ul>
      <div className="btn-wrap">
        { persons.length > 0 && <Button to="/" text="Start Meeting" />}
        <Button text="Add" onClick={addPerson} />
      </div>
    </section>
  );
};

export { List };
