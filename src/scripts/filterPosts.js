export function filterPosts(posts) {
  const type = localStorage.getItem('postType');
  return posts.filter(post => post.data.type === type);
}
