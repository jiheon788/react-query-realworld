export interface IRouterMeta {
  name: string;
  path: string;
  isShow: boolean;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    name: 'Home',
    path: '/',
    isShow: true,
  },

  SettingPage: {
    name: 'Setting',
    path: '/settings',
    isShow: true,
  },
  ArticlePage: {
    name: 'Article',
    path: '/article',
    isShow: true,
  },
  ProfilePage: {
    name: 'Profile',
    path: '/profile',
    isShow: true,
  },
  SignInPage: {
    name: 'Sign in',
    path: '/login',
    isShow: true,
  },
  SignUpPage: {
    name: 'Sign up',
    path: '/register',
    isShow: true,
  },
};

export default routerMeta;
