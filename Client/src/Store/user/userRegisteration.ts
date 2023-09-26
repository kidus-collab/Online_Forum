/* interface registerationState {
  name: string;
  username: any;
  password: any;
  passwordconform: any;
  Email: any;
  resultMsg: string;
}
*/
//Reducer for registration
const registerationReducer = (state: any, action: any) => {
  switch (action.type) {
    case "Name":
      return { ...state, name: action.payload };
    case "userName":
      return { ...state, userName: action.payload };
    case "Password":
      return { ...state, password: action.payload };
    case "passwordConfirm":
      return { ...state, passwordconfirm: action.payload };
    case "Email":
      return { ...state, email: action.payload };
    case "resultMsg":
      return { ...state, resultmsg: action.payload };
    default:
      return { ...state, resultmsg: "A failute has occured" };
  }
};

export default registerationReducer;
