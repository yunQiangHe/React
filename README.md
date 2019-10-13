# React

## 1. 项目结构
```
my-app
├── README.md
├── node_modules
├── package.json      ----这个文件是webpack配置和项目包管理文件，项目中依赖的第三方包（包的版本）和一些常用命令配置都在这个里边进行配置
├── package-lock.json ----锁定安装时的版本号，并且需要上传到git，以保证其他人再npm install 时大家的依赖能保证一致。
├── .gitignore        ----git的选择性上传的配置文件，比如一会要介绍的node_modules文件夹，就需要配置不上传
├── public            ----公共文件，里边有公用模板和图标等
│   ├── favicon.ico
│   ├── index.html    ------首页的模板文件
│   └── manifest.json  ----移动端配置文件
└── src                ----开放的源代码
    ├── App.css
    ├── App.js    ------这个文件相当于一个方法模块，也是一个简单的模块化编程
    ├── App.test.js
    ├── index.css
    ├── index.js   ----项目的入口文件
    ├── logo.svg
    └── serviceWorker.js   ----用于写移动端开发的，PWA必须用到这个文件，有了这个文件，就相当于有了离线浏览的功能。
```

## 2.响应式设计和数据的绑定

## 3.JSX
JavaScript 的语法扩展

## 4. 函数是式编程 functional Programming

## 5.React生命周期的四个大阶段：
- Initialization:初始化阶段。
- Mounting: 挂在阶段。
- Updation: 更新阶段。
- Unmounting: 销毁阶段

## 6.安装依赖
npm install xxx: 安装项目到项目目录下，不会将模块依赖写入devDependencies或dependencies。
npm install -g xxx: -g的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm cinfig prefix的位置
npm install --save xxx：--save的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
npm install --save-dev xxx：--save-dev的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。

## 7.react 官网动画库（react-transition-group）的新写法
npm install react-transition-group --save
