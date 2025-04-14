export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: true;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: true;
  };
}

export interface IArticleRevision {
  id: number;
  articleId: number;
  createdAt: string;
  updatedAt: string;
  articleData: {
    id: number;
    slug: string;
    title: string;
    description: string;
    body: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface IComment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}
