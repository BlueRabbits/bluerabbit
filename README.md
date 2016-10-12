# Blue Rabbit Framework

**Libraries used**

1. [React](https://facebook.github.io/react/) v15.2
2. [Webpack](https://webpack.github.io/) v1.13.2
3. [Webpack dev server](https://github.com/webpack/webpack-dev-server) v1.16.1
4. [Babel](http://babeljs.io/) v 6^
5. [koa](http://koajs.com/) v1.2

**Instructions**

1. clone the repo: ```git clone https://github.com/BlueRabbits/bluerabbit.git```

2. Run ```npm install```

3. For development version, follow these steps:-  
  a) ```npm run dev``` to start webpack dev server.  
  b) Hit ```http://localhost:8080``` and you app is served by webpack dev server. It uses hot reloading, so any chagne you make in your code with be built automatically and reflected in the browser.

4. For production build, follow these steps:-  
  a) ```npm run build``` to create a dist directory with production build. It has app.js, app.css and vendor.js code separated.  
  b) ```node server.js``` to run local node web server and hit ```http://localhost:8000```  
  c) For deployment, publish dist directory

**Notes**

We will be building the framework and looking forward to build an awesome framework

**LICENSE**

Apache License
