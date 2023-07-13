export const routes = {
  home: '/',
  blog: {
    home: '/blog',
    post: '/blog/{slug}'
  },
  dashboard: {
    home: '/dashboard',
    login: '/dash/login',
    logout: '/dash/logout',
    posts: {
      listPosts: '/dash/posts',
      createPost: '/dash/posts/new',
      editPost: '/dash/posts/edit/{slug}',
    }
  },
}
