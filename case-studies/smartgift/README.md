<div align="center">

[![license](https://img.shields.io/github/license/mucahidyazar/smartgift?color=dfd)](LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
![](https://img.shields.io/github/repo-size/mucahidyazar/smartgift?label=Repo%20size&style=flat-square)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

[Demo](https://smartgift.vercel.app/) •
[Documentation](https://github.com/mucahidyazar/smartgift) •
[Installation Instructions](https://github.com/mucahidyazar/smartgift) •
[Reporting Issues](https://github.com/mucahidyazar/smartgift/pulls)

</div>

<br />

## 🚀 Installation

<hr />

1. Install [Node.js](https://nodejs.org/en/)
2. Add all environment variables (Which env for what I described them in
   .env.example)
3. After you add your env variables then run the codes on terminal

```bash
yarn && yarn dev
```

4. Go [localhost:3000/vineyardvines/196286139913](http://localhost:3000/vineyardvines/196286139913)

<br />

## ⭐️ Features

<hr />

1. Vite
   It is new Javascript tool and so powerful in build and start
2. LIGHT/DARK/DIM theme options
3. Husky Integration
   You can't send your code before passing the husky checks (tests, lint, prettier)
4. Commitizen Integration
   You can send you commits with semantic standarts
5. Prettier Integration
   Your codes will look amazing thanks to prettier
6. Eslint Integration
   You will follow best Javascript standarts and you won't write unusuless javascript codes thanks yo eslint
7. Test setup with Jest
   Everything is ready for writing unit tests
8. Redux Toolkit Integration
   You can follow the best practises of redux thanks to redux-toolkit
9. Styled Components integration
   You can use power of Javascript in styling
10. Profesional SASS product folder structure
11. @alias imports
    You can import your import by aliases. It is so nice and easy to use

<br />

## ⭐️ Tech Stacks

<hr />

1. vite (new power of javascript)
2. react v18
3. styled-components
4. redux-toolkit
5. eslint
6. prettier
7. husky
8. react-router v6
9. react-select
10. react-toastify
11. axios / axios-cache-adapter

<br />

## ⭐️ scripts

<hr />

- This will start dev. You can work with this
  yarn dev => "dev": "vite",
- You can get a build (It is so fast you won't believe it). You will see there is a folder which name is /dist after build done
  yarn build => "build": "vite build",
- You can preview your build
  yarn preview => "preview": "vite preview",
- You should get a commit with this script. By this way you can get semantic commit
  yarn commit => "commit": "cz",
- You can check lint error
  yarn lint:js => "lint:js": "eslint \"src/\*_/_.{js,jsx}\"",
- You can fix your lint errors
  yarn int:js:fix => "lint:js:fix": "eslint \"src/\*_/_.{js,jsx}\" --fix",
- You can check prettier errors
  yarn lint:prettier => "lint:prettier": "prettier --check './\*_/_.{js,jsx,css,md,json}' --config ./.prettierrc",
- You can fix yiur prettier errors
  yarn lint:prettier:fix => "lint:prettier:fix": "prettier --write './\*_/_.{js,jsx,css,md,json}' --config ./.prettierrc",
- It is a automatic script which husky need. You won't need to use this anytime
  yarn prepare => "prepare": "husky install",
- You can check your test. Also you can use this script for CI/CD process
  yarn test => "test": "jest",
- You can watch your test in live after your changes
  yarn test:watch => "test:watch": "jest --watch",
- You can see your test coverage
  yarn test:coverage => "test:coverage": "jest --coverage",

<br />

## 🎉 Credits & Sources

- [https://vitejs.dev/](https://vitejs.dev/)

- [https://react-select.com/](https://react-select.com/)

- [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)

- [https://testing-library.com/](https://testing-library.com/)

- [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)

- [https://fkhadra.github.io/react-toastify/introduction](https://fkhadra.github.io/react-toastify/introduction)

- [https://github.com/typicode/husky](https://github.com/typicode/husky)

- [https://github.com/mucahidyazar/smartgift](https://github.com/mucahidyazar/smartgift)

- [https://vueschool.io/articles/vuejs-tutorials/import-aliases-in-vite/](https://vueschool.io/articles/vuejs-tutorials/import-aliases-in-vite/)

- [https://www.geeksforgeeks.org/how-to-configure-eslint-for-react-projects/](https://www.geeksforgeeks.org/how-to-configure-eslint-for-react-projects/)

- [https://www.npmjs.com/package/eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)

<br />

## ⚡️ License

<hr />

Code released under GPL license. Please pull request to this source repo before
you make your changes public or commercial usage. All rights reserved by Lucas
Jin.

<br />

## ✨ Contributors

<hr />

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://mucahid.dev"><img src="https://avatars.githubusercontent.com/u/52811808?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mucahid Yazar</b></sub></a><br /><a href="#maintenance-mucahidyazar" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
