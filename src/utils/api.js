const api = 'http://localhost:3001';

const headers = {
  'Authorization': 'whatever-you-want',
  'Content-Type' : 'application/json'
}

// Fetch categories
export const fetchCategories = () =>
  fetch(`${api}/categories`, { method: 'GET', headers })
    .then(res => res.json())
    .then(data => data.categories);
         
// Fetch posts
export const fetchPosts = () =>
  fetch(`${api}/posts`, { method: 'GET', headers })
    .then(res => res.json());

// Fetch post by id
export const fetchPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { method: 'GET', headers })
    .then(res => res.json());

// Fetch comments for a post
export const fetchPostComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { method: 'GET', headers })
    .then(res => res.json());

// Vote for a comment
export const voteComment = (commentId, action) => {
  let body = JSON.stringify({ 'option': action });
  return fetch(`${api}/comments/${commentId}`, { body, method: 'POST', headers }
  ).then(res => res.json());
}

export const remove = (contact) =>
  fetch(`${api}/contacts/${contact.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.contact);