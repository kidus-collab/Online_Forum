export const UserProfileSetType = "USER_PROFILE_SET";

interface UserProfilePayload {
  userId: string;
  username: string;
  email: string;
}

interface userAction {
  type: typeof UserProfileSetType;
  payload: UserProfilePayload;
}

interface userProfileState {
  userId: string;
  username: string;
  email: string;
}

// intial state
const initalState: userProfileState = {
  userId: "",
  username: "",
  email: "",
  // set inital state when it comes
};

// Reducer
const userProfileReducer = (
  state: userProfileState = initalState,
  action: userAction
): userProfileState => {
  switch (action.type) {
    case UserProfileSetType:
      return {
        ...state,
        userId: action.payload.userId,
        username: action.payload.username,
      };

    default:
      return state;
  }
};

export default userProfileReducer;
