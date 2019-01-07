export function sortByCategories(posts) {
  return posts.reduce((categories, post) => {
    // If categories doesn't have a category of incomming post - create it
    if (!categories[post.category])
      return { ...categories, [post.category]: [post] };

    // Otherwise just add post to an existing category
    return {
      ...categories,
      [post.category]: [...categories[post.category], post],
    };
  }, {});
}

export function pickFirstOfEachCategory(sortedPosts) {
  // Walk through each category and pick up the first post object from it
  return Object.entries(sortedPosts).reduce(
    (result, [category, posts]) => ({ ...result, [category]: posts[0] }),
    {}
  );
}
