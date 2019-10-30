import React from 'react';
import PropTypes from 'prop-types';
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const TextBlock = ({ item }) => (
  <div key={item.title[0].text} className='col-lg'>
    <h1 id="headerText">{item.title[0].text}</h1>
    <p id="headerText">
      <em>
        <strong>{item.description[0].text}</strong>
      </em>
    </p>
    <button type='button' class='btn btn-primary'>
      <strong>{item.button[0].text}</strong>
    </button>
  </div>
);

const FeatureGrid = ({ gridItems }) => (
  <div className='container'>
    <div className='row'>
      {gridItems.map((item, index) =>
        index % 2 === 0 ? (
          <TextBlock item={item} />
        ) : (
          [<TextBlock item={item} />, <div className='w-100' />]
        )
      )}
    </div>
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
 
