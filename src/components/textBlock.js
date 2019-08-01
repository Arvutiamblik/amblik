import React from 'react';
import PropTypes from 'prop-types';
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const TextBlock = ({ item }) => (
  <div key={item.blockHeading} className='col-lg'>
    <h1>{item.blockHeading}</h1>
    <p>
      <em>
        <strong>{item.blockDescription}</strong>
      </em>
    </p>
    <button type='button' class='btn btn-primary'>
      <strong>{item.buttonPlaceholder}</strong>
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
 