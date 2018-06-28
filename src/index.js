import { createStore, applyMiddleware ,combineReducers } from "redux";
// Middleware from redux package for logging the changes.
import { createLogger } from "redux-logger";

// initial state for profileReducer
const initialStage = {
  name: "rajesh",
  age: 21,
  gender: "male"
};

//initial state for mathReducer

const data={
  value:10
}



const profileReducer = (state = initialStage, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      state = {
        ...state,
        name: action.payload
      };

      break;

    case "CHANGE_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

const mathReducer=(state=data,action)=>{

  switch(action.type) {
    case "ADD":
            state={
              value:state.value + action.payload

            }
            return state;
            break;
    default :break;
  }

  return state;


}
//creating a store
const store = createStore(combineReducers({profileReducer,mathReducer}), {}, applyMiddleware(createLogger()));



const action = {
  type: "CHANGE_NAME",
  payload: "mohan sai"
};

const action2 = {
  type: "CHANGE_AGE",
  payload: 20
};

const add={
  type:"ADD",
  payload:100
}

store.dispatch(action);
store.dispatch(action2);
store.dispatch(add);

store.subscribe(() => {
  console.log("store updated", store.getState());
});
