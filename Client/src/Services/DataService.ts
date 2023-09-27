// remove when backend api call is established
import Category from "../Models/Category";
import Thread from "../Models/Thread";

import {
  FaFish as CookingIcon,
  FaCode as ProgrammingIcon,
  FaMoneyBillWave as FinanceIcon,
  FaPlane as TravelIcon,
  FaGamepad as GamingIcon,
} from "react-icons/fa";

/*
category: [
    { id: 1, name: "Programming", Icons:  },
    { id: 2, name: "Cooking", Icons: },
    { id: 3, name: "Gaming", Icons:  },
    { id: 4, name: "Finance",  },
    { id: 5, name: "Travel",  },
  ],
*/

// pushing categories in the category.ts

export async function getCategories(catId: string): Promise<Array<Category>> {
  const promise = new Promise<Array<Category>>((res, rej) => {
    const categories = [];
    const programming = new Category("1", "Programming", ProgrammingIcon);
    categories.push(programming);
    const cooking = new Category("2", "Cooking", CookingIcon);
    categories.push(cooking);
    const sports = new Category("3", "Sports", GamingIcon);
    categories.push(sports);
    const entertainment = new Category("4", "Entertainment", FinanceIcon);
    categories.push(entertainment);
    const travel = new Category("5", "Travel", TravelIcon);
    categories.push(travel);

    res(categories);
  });
  return promise;
}

// sample category data to stimulate db that is written in the post card

export async function getThreadsByCategory(
  catId: string
): Promise<Array<Thread>> {
  const promise = new Promise<Array<Thread>>((res, rej) => {
    setTimeout(() => {
      const threads: Array<Thread> = [];
      threads.push({
        id: "1",
        views: 22,
        title: "Thread 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "1",
          },
        ],
        category: new Category("1", "Programming", ProgrammingIcon),
      });
      threads.push({
        id: "2",
        views: 2,
        title: "Thread 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "tim",
        userId: "2",
        points: 55,
        createdOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "2",
          },
        ],
        category: new Category("1", "Programming", ProgrammingIcon),
      });

      res(threads);
    }, 2000);
  });
  return promise;
}
