// reducers/authReducer.js

const initialState = {
    isAuthenticated: false,
    errorMessage: ''
  };

  export const logout = () => {
    return {
      type: 'LOGOUT'
    };
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        errorMessage: ''
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: action.payload
      };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
export default authReducer;