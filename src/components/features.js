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

const TextCardGrid = ({ gridItems }) => (
  <div className='container'>
    <div className='row'>
    {gridItems.map((item, index) =>
        index % 2 === 0 ? (
          <TextCard item={item} />
        ) : (
          [<TextCard item={item} />, <div className='w-100' />]
        )
      )}
    </div>
  </div>
);
export const TextCard = ({ item }) => (
  <div className='serviceBox'>
    <div className='service-icon'>
      <div className='fa fa-money' />
    </div>
    <h3 className='title'>
      {item.title}
    </h3>
    <hr align='left' width={140} size={2} color='hotpink' />
    <p className='description'>
    {item.description}
    </p>
    <button type='button' class='btn btn-primary'>
      <strong>{item.button}</strong>
    </button>
  </div>
);
export default FeatureGrid;
 
