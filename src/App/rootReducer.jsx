import { combineReducers } from 'redux'
// import { routerReducer as router } from 'react-router-redux'

import sample1 from './Sample-1'
import sample2 from './Sample-2'

const Sample1 = sample1.reducer
const Sample2 = sample2.reducer

export default combineReducers({
  Sample1,
  Sample2,
  // router,
})
