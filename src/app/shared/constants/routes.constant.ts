export const routes = {
  home: '/',
  blog: '/blog',
  dashboard: {
    dash: '/dash',
    login: '/dash/login',
    logout: '/dash/logout',
    posts: {
      listPosts: '/dash/posts',
      createPost: '/dash/posts/new',
      editPost: '/dash/posts/edit/{slug}',
    }
  },
}
