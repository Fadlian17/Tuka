import { createStore } from "redux";
import reducer from "./reducers/index";

const initialState = {
  posts: [
    {
      title: "title",
      description: "description",
      postedBy: "Alfa",
      category: {
        categoryName: "coding",
      },
    },
    {
      title: "title2",
      description: "description2",
      postedBy: "bejo",
      category: {
        categoryName: "review",
      },
    },
    {
      title: "title3",
      description: "description3",
      postedBy: "deni",
      category: {
        categoryName: "gadget",
      },
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
