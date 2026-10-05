import { createStore, combineReducers } from "redux";
import BookingTicketReducer from "./reducers/BookingTicketReducer";

const rootReducer = combineReducers({
  BookingTicketReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
