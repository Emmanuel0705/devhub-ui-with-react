import {REGISTER_FAILED,REGISTER_SUCCESS, USER_LOADED,AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../actions/types'
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated:null,
    isLoading:true,
    user:null
}

export default function(state = initialState,action){
    const {type,payload} = action;
    switch(type){
      case USER_LOADED:
          return {
              ...state,
              isAuthenticated:true,
              isLoading: false,
              user:payload
          }
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
          localStorage.setItem('token',payload.token);
          return {
              ...state,
              ...payload,
              isAuthenticated:true,
              isLoading:false,

          }
     case AUTH_ERROR:
     case LOGIN_FAIL:
     case REGISTER_FAILED:
     case LOGOUT:
         localStorage.removeItem('token');
         return {
             ...state,
             token:null,
             isAuthenticated:false,
             isLoading:false,
             user:null
           }
    default:
        return state;
    }
}