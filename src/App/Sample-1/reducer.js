import * as t from './actionTypes'
import Sample1Subcomponent from '../Sample-1-Subcomponent'

const initialState = {
  Sample1Subcomponent: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case t.SAMPLE:
      return Sample1Subcomponent.reducer(state.Sample1Subcomponent, action)
    case t.SAMPLE2:
      return Sample1Subcomponent.reducer(state.Sample1Subcomponent, action)
    default:
      return state
  }
}
