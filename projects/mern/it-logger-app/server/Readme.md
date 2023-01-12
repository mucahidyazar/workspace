<p align="center">
 <img src="https://img.shields.io/badge/License-MIT-blue.svg">
  <a href="#"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)"></a>
   <a href="#"><img src="https://travis-ci.org/taniarascia/takenote.svg?branch=master"></a>
</p>

<div align="center">
<img src="./public/assets/gif/it-logger.gif">
</div>

## View the demo

<a href="https://it-logger-app.herokuapp.com/">It Logger</a>

## Description

I bought Brad Traversy's course to do some practise by building a project. And I had great time with the project. This was the last project of the couse. Brad built this project with json server package but I built this with NodeJS and MongoDB and React. And we also used Redux and redux-thunk with this project

### Boilerplate

create-react-app

### NPM Modules

mongoose
express
config
express-validator
nodemon
concurrently
axios
redux
redux-thunk

## Setup

### Install

```bash
git clone git@github.com:mucahidyazar/it-logger
cd it-logger
npm i or yarn
```

### Development

In the development environment, an Express server is running on port `5000` to handle all API calls, and a hot Webpack dev server is running on port `3000` for the React front end. To run both of these servers concurrently, run the `dev` command.

```bash
# Run client and server concurrently
npm run dev
```

Go to `localhost:3000` to view the app.

API requests will be proxied to port `5000` automatically.

### Production

<!-- In production, the React app is built, and Express redirects all incoming requests to the `dist` directory on port `5000`. -->

```bash
# Build client for production and start server
# npm run build &&
npm run start
```

Go to `localhost:5000` to view the app.

## Contributing

it-logger is an open source project, and contributions of any kind are welcome!

## Author

- [Mucahid Yazar](https://github.com/mucahidyazar)

## Udemy Course

https://www.udemy.com/course/modern-react-front-to-back/learn/

## License

This project is open source and available under the [MIT License](LICENSE).
