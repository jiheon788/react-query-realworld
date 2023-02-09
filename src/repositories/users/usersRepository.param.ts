export interface postLoginParam {
  email: string;
  password: string;
}

export interface postRegisterParam {
  username: string;
  email: string;
  password: string;
}

export interface putUserParam {
  email: string;
  username: string;
  bio: string;
  image: string;
  password: string;
}
