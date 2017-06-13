import React from 'react'

import sample1 from './Sample-1'
import sample2 from './Sample-2'

const App = () => (
  <div className="App" >
    <div className="sample-1-wrapper">
      <sample1.component />
    </div>
    <div className="sample-2-wrapper">
      <sample2.component />
    </div>
  </div >
)

export default App
