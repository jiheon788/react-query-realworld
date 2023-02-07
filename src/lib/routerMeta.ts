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
    name: 'Sign un',
    path: '/signup',
    isShow: true,
  },
};

export default routerMeta;
