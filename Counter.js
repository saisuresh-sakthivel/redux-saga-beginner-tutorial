/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement,onIncrementAsync,onGettingPosts,onGetWeather  }) =>
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
          IncrementAsync
        </button>
        <hr />
        <button onClick={onGettingPosts}>
          getPosts
        </button> 
        <hr />
        <button onClick={onGetWeather}>
          getWeather
        </button>                
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
