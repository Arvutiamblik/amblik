import React from 'react';
import PropTypes from 'prop-types';

const TextBlock = ({ item, delimiter, enableButton}) => (
  <div key={item.blockHeading} className={`col-lg-${12 / delimiter}  col-md-${12 / delimiter} col-xs-12`}>
    <h1 id="headerText">{item.title[0].text}</h1>
    <p >
      
        <strong>{item.description[0].text}</strong>
      
    </p>
     {enableButton == true &&
    <button id="paddingButton" type='button' className='btn btn-primary'>
      <strong>{item.button[0].text}</strong>
    </button>
    }
  </div>
);

const FeatureGrid = ({ gridItems, delimiter, enableButton }) => (
 
    <div className='row'>
      {gridItems.map((item, index) =>
        (index + 1) % delimiter === 0 ? (
          enableButton === true ? (
            [<TextBlock item={item} delimiter={delimiter} enableButton />]) :(
              [<TextBlock item={item} delimiter={delimiter}  />] )
        ) : (
          enableButton === true ? (
          [<TextBlock item={item} delimiter={delimiter} enableButton />])
          : ( 
          [<TextBlock item={item} delimiter={delimiter}  />])
           )
        )
      }
    </div>
 
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      blockHeading: PropTypes.string,
      blockDescription: PropTypes.string,
      buttonPlaceholder: PropTypes.string
    })
  )
};


export default FeatureGrid;
 
