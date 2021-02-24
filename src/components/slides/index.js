import React from 'react';
import {Impress, Step} from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';


import './slides.css';
import options from './options';

const rootOptions = {
    width: 1600,
    height: 900,
    maxScale: 1,
    minScale: 0,
    perspective: 1400,
    transitionDuration: 1000
};

const Slides = () => {
    return (
        <Impress progress={true} rootData={rootOptions} hint={true}>
      {
        options.map( (opt, index ) => {
          return (
            React.createElement( Step, {
              id: opt.id,
              className: opt.className,
              data: opt.data,
              key: index
            },

            opt.content.map( (child, index) => {
              return (
                React.cloneElement( child, {
                  id: child.id,
                  className: child.className,
                  key: index
                })
              );
            }))
          );
        })
      }
      </Impress>
    );
}

export { Slides };