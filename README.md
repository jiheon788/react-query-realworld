# ![로고-002](https://user-images.githubusercontent.com/90181028/217143286-a023dd4b-f3a7-4218-8802-39a3bd2b15a8.png)

> ### React + React Query codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://react-query-realworld.netlify.app)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with **React + React Query** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **React** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

# Features

- [x] Authenticate users via JWT (login/signup pages + logout button on settings page)
- [x] CRU- users (sign up & settings page - no deleting required)
- [x] CRUD Articles
- [ ] CR-D Comments on articles (no updating required)
- [x] GET and display paginated lists of articles
- [ ] Favorite articles
- [ ] Follow other users

# Routing Guidelines

- Home page (URL: /#/ )
  - List of tags
  - List of articles pulled from either Feed, Global, or by Tag
  - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
  - Uses JWT (store the token in localStorage)
  - Authentication can be easily switched to session/cookie based
- Settings page (URL: /#/settings )
  - Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
- Article page (URL: /#/article/article-slug-here )
  - Delete article button (only shown to article's author)
  - Render markdown from server client side
  - Comments section at bottom of page
  - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/profile/:username, /#/profile/:username/favorites )
  - Show basic user info
  - List of articles populated from author's created articles or author's favorited articles


# References
- TanStack Query Docs: [https://tanstack.com/query/latest](https://tanstack.com/query/latest)
- Swagger: [https://api.realworld.io/api-docs/](https://api.realworld.io/api-docs/)
- FE Specs: [https://realworld-docs.netlify.app/docs/specs/frontend-specs/templates](https://realworld-docs.netlify.app/docs/specs/frontend-specs/templates)

  [![Brought to you by Thinkster](https://raw.githubusercontent.com/gothinkster/realworld/master/media/end.png)](https://thinkster.io)
