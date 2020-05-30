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

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
