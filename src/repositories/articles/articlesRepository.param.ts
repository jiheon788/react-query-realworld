export interface getArticlesParam {
  query: string;
}

export interface getArticleParam {
  slug: any;
}

export interface createArticleParam {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface updateArticleParam {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface deleteArticleParam {
  slug: string;
}

export interface getCommentsParam {
  slug: string;
}
