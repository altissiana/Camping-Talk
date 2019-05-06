import store from "../store";

const initialState = {
  messages: [],
  username: '',
  isTyping: false,
  users: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] }
    case 'SET_USERNAME':
      return { ...state, username: action.payload }
    case 'TOGGLE_TYPING':
      return { ...state, isTyping: action.payload }
    case 'LIST_USERS':
      return { ...state, users: action.payload }
    default:
      return state
  }
}