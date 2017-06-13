import * as t from './actionTypes'

// Action creators.
// -------------------------------------
export function sample() {
  return {
    type: t.SAMPLE,
  }
}

export function sample2(payload) {
  return {
    type: t.SAMPLE2,
    payload,
  }
}

// Middleware action creators.
// -------------------------------------
