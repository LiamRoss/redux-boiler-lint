import * as t from './actionTypes'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case t.SAMPLE:
      return state
    case t.SAMPLE2:
      return state
    default:
      return state
  }
}
