export interface IRouterMeta {
  name?: string;
  path: string;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    name: 'Home',
    path: '/',
  },
  NewArticlePage: {
    name: 'New Article',
    path: '/editor',
  },
  SettingPage: {
    name: 'Setting',
    path: '/settings',
  },
  ArticlePage: {
    name: 'Article',
    path: '/article/:slug',
  },
  ProfilePage: {
    name: 'Profile',
    path: '/profile',
  },
  SignInPage: {
    name: 'Sign in',
    path: '/login',
  },
  SignUpPage: {
    name: 'Sign up',
    path: '/register',
  },
  NotFoundPage: {
    path: '/*',
  },
};

export default routerMeta;
