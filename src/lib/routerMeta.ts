export interface IRouterMeta {
  name: string;
  path: string;
  isShow: boolean;
  isAuth: boolean;
  icon?: string;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    name: 'Home',
    path: '/',
    isShow: false,
    isAuth: false,
  },
  NewArticlePage: {
    name: 'New Article',
    path: '/editor',
    isShow: true,
    isAuth: true,
    icon: 'ion-compose',
  },
  SettingPage: {
    name: 'Setting',
    path: '/settings',
    isShow: true,
    isAuth: true,
    icon: 'ion-gear-a',
  },
  ArticlePage: {
    name: 'Article',
    path: '/article/:slug',
    isShow: false,
    isAuth: true,
  },
  ProfilePage: {
    name: 'Profile',
    path: '/profile',
    isShow: true,
    isAuth: true,
  },
  SignInPage: {
    name: 'Sign in',
    path: '/login',
    isShow: true,
    isAuth: false,
  },
  SignUpPage: {
    name: 'Sign up',
    path: '/register',
    isShow: true,
    isAuth: false,
  },
};

export default routerMeta;
