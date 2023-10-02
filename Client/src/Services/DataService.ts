// remove when backend api call is established
import Category from "../Models/Category";
import Thread from "../Models/Thread";
import CategoryThread from "../Models/CategoryThread";

import {
  FaFish,
  FaCode,
  FaMoneyBillWave,
  FaPlane,
  FaGamepad,
} from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

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

export async function getCategories(catId?: string): Promise<Array<Category>> {
  const promise = new Promise<Array<Category>>((res, rej) => {
    const categories = [];
    const programming = new Category("1", "Programming", FaCode);
    categories.push(programming);
    const cooking = new Category("2", "Cooking", FaFish);
    categories.push(cooking);
    const sports = new Category("3", "Sports", FaGamepad);
    categories.push(sports);
    const entertainment = new Category("4", "Entertainment", FaMoneyBillWave);
    categories.push(entertainment);
    const travel = new Category("5", "Travel", FaPlane);
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
        lastModifiedOn: new Date(),
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
        category: new Category("1", "Programming", FaCode),
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
        lastModifiedOn: new Date(),
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

// This Sample data for the right menu

export async function getTopCategories(): Promise<Array<CategoryThread>> {
  const promise = new Promise<Array<CategoryThread>>((res, rej) => {
    setTimeout(() => {
      const topCategory: Array<CategoryThread> = [];
      const js = new CategoryThread(
        "1",
        "Programming",
        "How can I learn JavaScript"
      );
      topCategory.push(js);
      const node = new CategoryThread(
        "2",
        "Programming",
        "How can I learn Node"
      );
      topCategory.push(node);
      const react = new CategoryThread(
        "3",
        "Programming",
        "How can I learn React"
      );
      topCategory.push(react);
      const french = new CategoryThread(
        "4",
        "Cooking",
        "How do I learn French cuisine?"
      );
      topCategory.push(french);
      const italian = new CategoryThread(
        "5",
        "Cooking",
        "How do I learn Italian cuisine?"
      );
      topCategory.push(italian);
      const soccer = new CategoryThread(
        "6",
        "Sports",
        "How can I learn to play Soccer"
      );
      topCategory.push(soccer);
      const basketball = new CategoryThread(
        "7",
        "Sports",
        "How can I learn to play Basketball"
      );
      topCategory.push(basketball);
      res(topCategory);
    }, 2000);
  });
  return promise;
}

export async function getThreadbyId(Id: string): Promise<Thread> {
  const promise = new Promise<Thread>((res, rej) => {
    setTimeout(() => {
      const thread = {
        id: "1",
        views: 22,
        title: "Thread 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
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
          {
            id: "2",
            views: 11,
            points: 14,
            body: "ThreadItem 2",
            userName: "linda",
            userId: "4",
            createdOn: new Date(),
            threadId: "1",
          },
        ],
        category: new Category("1", "Programming", FaCode),
      };
      res(thread);
    }, 2000);
  });
  return promise;
}
