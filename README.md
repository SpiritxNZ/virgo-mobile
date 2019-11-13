# Readme

## 目录

### assets

放静态资源

### components

存放无状态视图组件(styledButton,styledText之类的)

### components/layout

存放layout组件

### contants

存放常量

### navigation

存放导航组件

### screen

存放有状态的组件

### action

存放redux的action

### reducer

存放redux的reducer

### service

存放通用方法

### service/api

存放api请求

## 命令

在package.json下的scripts里

## 插件

这是一个用expo管理的react native项目，不要使用expo不支持的react native插件。状态管理尽量用redux。新加插件时在下面列出

用到的expo插件:  
  expo-localization

用到的其他react插件：
  redux, react-redux, moment, axios, redux-logger, redux-thunk

用到的其他react-native插件：
  react-native-ui-kitten, react-native-css

## 注释

作用 + 参数 + 返回值

## todos

错误提示放到一起 模块划分 不同app不同project 共享方法的目录

添加stack

1. 选择语言stack
2. 主stack
3. 商城stack
4. 登录stack

## 需要确认的

1. 确定没有底部导航栏的组件
2. 进入商城页面后无法返回
3. 选择语言页面的边框和返回键要不要
4. 现在下面的Service和My Account点一下就返回主页了，实际效果应该是什么样子的？
5. 有些按钮比较小在手机上可能不好点
