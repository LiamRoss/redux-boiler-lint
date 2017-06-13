import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Sample2 from './component'

const Sample2Container = () => (
  <Sample2 />
)

Sample2Container.propTypes = {

}

function mapStateToProps(/*state*/) {
  return {

  }
}

function mapDispatchToProps(/*dispatch*/) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample2Container)
