export default function counter(state = {'counter':0,posts:[
  {
    "id": 1,
    "title": "test"
  }],weather:{}}, action) {
  let modState = {};
  switch (action.type) {
    case 'INCREMENT':
        modState = {...state}
        modState.counter+=1;
        return modState;
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      modState = {...state}
      modState.counter-=1;
      return modState;
    case 'POSTS_RECEIVED':
        modState = {...state}
        modState.posts = action.posts;
        return modState;
    case 'WEATHER_RECEIVED':
        modState = {...state}
        modState.weather = action.weather;
        return modState;
    default:
      return state;
  }
}
