import {ADD_REMINDER,DELETE_REMINDER,CLEAR_ALL} from '../constants.js'

export const addReminder = (text,dueDate) => {
  const action  = {
    type: ADD_REMINDER,
    text:text,
    dueDate:dueDate
  }
  console.log("Action:",action);
  return action;
}

export const deleteReminder = (id) =>{
  const action = {
    type: DELETE_REMINDER,
    id:id
  }
  console.log("Action:",action);
  return action;
}

export const clearAllReminder =  () => {
  const action = {
    type:CLEAR_ALL
  }
  return action;
}
