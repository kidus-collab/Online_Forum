import { FaCode as PIcon } from "react-icons/fa";

export const SelectType = "SELECTED_ACTION";

interface actionPayload {
  id: number;
  name: string;
  Icons: JSX.Element | null;
}

interface actionType {
  type: typeof SelectType;
  payload: actionPayload;
}

interface InitalState {
  id: number;
  name: string;
  //Icons: JSX.Element;
}

export const initalState: InitalState = {
  id: 1,
  name: "Programming",
  //Icons: PIcon,
};

const selectedCategoryReducer = (
  state: InitalState = initalState,
  action: actionType
) => {
  switch (action.type) {
    case SelectType:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        //Icons: action.payload.Icons,
      };
    default:
      return state;
  }
};

export default selectedCategoryReducer;
