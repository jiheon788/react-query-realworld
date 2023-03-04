export interface IRouterMeta {
  name?: string;
  path: string;
  isShow: boolean;
  isCommon?: boolean;
  isAuth?: boolean;
  icon?: string;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    name: 'Home',
    path: '/',
    isShow: true,
    isCommon: true,
  },
  NewArticlePage: {
    name: 'New Article',
    path: '/editor',
    isShow: true,
    isAuth: true,
    icon: 'ion-compose',
  },
  EditArticlePage: {
    name: 'Edit Article',
    path: '/editor/:slug',
    isShow: false,
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
  },
  ProfilePage: {
    name: 'Profile',
    path: '/profile/:username/*',
    isShow: false,
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
  NotFoundPage: {
    path: '/*',
    isShow: false,
  },
};

export default routerMeta;
