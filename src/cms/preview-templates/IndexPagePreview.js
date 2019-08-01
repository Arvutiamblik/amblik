import React from 'react'
import { IndexPageTemplate } from '../../pages/index'

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()
  
    if (data) {
      return (
        <IndexPageTemplate
          intro={data.intro || { blurbs: [] }}
          TextCards={data.TextCards ||{TextCard: []}}
        />
      )
    } else {
      return <div>Loading...</div>
    }
  }
  export default IndexPagePreview