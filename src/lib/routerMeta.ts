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
  SignInPage: {
    name: 'Sign in',
    path: '/signin',
    isShow: true,
  },
  SignUpPage: {
    name: 'Sign up',
    path: '/signup',
    isShow: true,
  },
  SettingPage: {
    name: 'Setting',
    path: '/setting',
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
};

export default routerMeta;
