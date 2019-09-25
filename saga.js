import { put, takeEvery, all, call } from 'redux-saga/effects'
export const delay = (ms) => new Promise(res => setTimeout(res, ms));
let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=db3b0f6cdc6640410c65a329826bb24c'
const fetchPosts = function(){
    return fetch(weatherApi).then(function(response){
  return response.json();
}).then(function(myJson){
console.log(JSON.stringify(myJson))
  return myJson;
});
}

export function* incrementAsync(){
    yield call(delay,1000)
    yield put({type:'INCREMENT'})
}

export function* getPosts(){
    const posts = yield call(fetchPosts);
    yield put({type:'POSTS_RECEIVED',posts})
}

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* watchIncrementAsync(){
    yield takeEvery('INCREMENT_ASYNC',incrementAsync);
}

export function* watchForPosts(){
    yield takeEvery('GET_POSTS',getPosts);
}

export function* getWeather(){
    const weather = yield call(fetchPosts);
    yield put({type:'WEATHER_RECEIVED',weather})
}

export function* watchForWeather(){
    yield takeEvery('GET_WEATHER',getWeather);
}


export default function* rootsaga(){
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        watchForPosts(),
        watchForWeather()
    ])
}