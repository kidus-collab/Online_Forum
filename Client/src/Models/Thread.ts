//import { IconType } from "react";
import {
  FaFish as CookingIcon,
  FaCode as ProgrammingIcon,
  FaMoneyBillWave as FinanceIcon,
  FaPlane as TravelIcon,
  FaGamepad as GamingIcon,
} from "react-icons/fa";

interface Category {
  id: number;
  name: string;
  Icons: any;
}

export interface Thread {
  id: number | null;
  userName: string;
  title: string;
  body: string;
  view: number | null;
  points: number;
  Threaditems: [];
  category: Category[];
}

export const threads: Thread = {
  id: null,
  userName: "",
  title: " ",
  body: "",
  view: 1,
  points: 2,
  Threaditems: [],
  category: [
    { id: 1, name: "Programming", Icons: ProgrammingIcon },
    { id: 2, name: "Cooking", Icons: CookingIcon },
    { id: 3, name: "Gaming", Icons: GamingIcon },
    { id: 4, name: "Finance", Icons: FinanceIcon },
    { id: 5, name: "Travel", Icons: TravelIcon },
  ],
};
