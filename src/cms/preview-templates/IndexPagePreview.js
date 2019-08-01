import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../pages/index'

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()
  
    if (data) {
      return (
        <IndexPageTemplate
       
          intro={data.intro || { blurbs: [] }}
        
        />
      )
    } else {
      return <div>Loading...</div>
    }
  }
  export default IndexPagePreview