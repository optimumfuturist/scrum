import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Impress, Step } from "react-impressjs";
import "react-impressjs/styles/react-impressjs.css";
import localforage from "localforage";
import { LF_KEYS } from "../../constants";

import "./slides.css";
import makeSteps from "./options";

const rootOptions = {
  width: 1600,
  height: 900,
  maxScale: 1,
  minScale: 0,
  perspective: 1400,
  transitionDuration: 1000,
};

const Slides = () => {
  const [persons, setPersons] = useState([]);
  let history = useHistory();


  useEffect(() => {
    localforage.getItem(LF_KEYS.PERSONS).then((v) => {
      setPersons(v);
      if(!v || v.length === 0) {
        history.push('/list');
      }

    });
  }, []);

  const allSteps = makeSteps(persons);
  
  
  if(!persons || persons.length === 0) {
    return <div>Loading</div>
  } 

  return (
    <Impress progress={true} rootData={rootOptions} hint={true}>
      {allSteps.map((opt, index) => {
        return React.createElement(
          Step,
          {
            id: opt.id,
            className: opt.className,
            data: opt.data,
            key: index,
          },

          opt.content.map((child, index) => {
            return React.cloneElement(child, {
              id: child.id,
              className: child.className,
              key: index,
            });
          })
        );
      })}
    </Impress>
  );
};

export { Slides };
