import React from 'react'
import Sample1Subcomponent from '../Sample-1-Subcomponent'

const divStyle = {
  margin: 20,
}

const Sample1 = () => (
  <div className="Sample-2" >
    Sample-1
    <div style={divStyle}>
      <Sample1Subcomponent.component />
    </div>
  </div >
)

export default Sample1
