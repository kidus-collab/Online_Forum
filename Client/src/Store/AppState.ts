import { combineReducers } from "@reduxjs/toolkit";
// reducers
import userProfileReducer from "./user/UserProfileReducer";
import registerationReducer from "./user/userRegisteration";
import selectedCategoryReducer from "./user/SelectedCategory";
/* 
 Created this file to save all the states in the app
 Combinereducers : feature in redux to save all app 
 states in object like manner

*/

// saved the auth state in the combinedreducer object
export const rootReducer = combineReducers({
  userProfile: userProfileReducer,
  Registeration: registerationReducer,
  selectedCategory: selectedCategoryReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
