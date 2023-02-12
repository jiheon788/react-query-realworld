export interface getArticlesParam {
  query: string;
}

export interface postArticleParam {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}
