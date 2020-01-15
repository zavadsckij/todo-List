

const ADD_TODO = "ADD_TODO";
const DELETE_ITEM = "DELETE_ITEM";
const SHOW_ALERT = "SHOW_ALERT";

let initialState = {
  list: [],
  success: null
};

const inputReducer = (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    let newItem = {
      id: state.list.length+1,
      message: action.message,
      time: new Date().toLocaleTimeString()
    }
    return {
      ...state,
      list: [newItem , ...state.list]
    }
  }
  else if (action.type === DELETE_ITEM) {
    
    return {
      ...state,
      list: [ ...state.list.filter(item=>item.id !== action.id)]
    }
  } else if (action.type === SHOW_ALERT) {
      const alert = {
          boolean: action.boolean,
          message: action.message,
          className: action.className
      }
    return {
      ...state,
     success: alert
    }
  }

  return state;
};
export const addtodo = message => ({ type: ADD_TODO, message });
export const deleteItem = id => ({ type: DELETE_ITEM, id });
export const showAlert = (boolean, message, className) => ({ type: SHOW_ALERT, boolean, message, className });



export default inputReducer;
