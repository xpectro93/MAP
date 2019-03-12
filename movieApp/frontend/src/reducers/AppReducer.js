import {  } from '../actions/AppActions';


const initialState = {
  posts:[]

}


const AppReducer = (state = initialState , action) => {
  Object.freeze(state);
  switch (action.type) {

    // case LOAD_POSTS:
    //   return {
    //     ...state,
    //     posts:action.posts
    //   }
    default:
      return state
  }
}

export default AppReducer
