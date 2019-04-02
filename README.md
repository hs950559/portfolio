# Bootstrap 4 demo

## Setup

```
npm install bootstrap bootswatch font-awesome
npm i gulp gulp-minify-css gulp-notify gulp-sass gulp-server-livereload gulp-template gulp-util gulp-autoprefixer gulp-purifycss bootswatch -D

// OR ( for existing project )
ncu -a 
npm i
gulp
```

## Demo

http://localhost:8000/theme.html


## Fonts
- Copy all required fonts in fonts folder parallel to `scss` folder

## Configure npm

```
npm set init.author.name "Hemant"
npm set init.author.email "hemant.ajax@gmail.com"
npm set init.author.url "https://github.com/hesing"
```

## Publish to npm registry

```
npm adduser
npm config ls
npm publish
```

## Update Package

```
npm version patch // update last digit x.x.1
npm publish
```

## Use published package

https://www.npmjs.com/package/bs4-theme

```
npm install bs4-theme 
```
