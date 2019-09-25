import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Counter from './Counter'
import Posts from './Posts'
import reducer from './reducers'
import Weather from './components/Weather'
import createSagaMiddleware from 'redux-saga'

import rootsaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootsaga);
const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
      <div>
       <Posts allposts={store.getState().posts}/>
      <Counter
        value={store.getState().counter}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')} 
        onIncrementAsync = {() => action('INCREMENT_ASYNC')}
        onGettingPosts = {() => action('GET_POSTS')}
        onGetWeather = {() => action('GET_WEATHER')}/>
        <input defaultValue = ""/>
        <Weather weatherinfo={store.getState().weather}/>
        </div>,

    document.getElementById('root')
  )
}

render()
store.subscribe(render)
