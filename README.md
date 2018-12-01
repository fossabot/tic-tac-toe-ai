# tic-tac-toe-ai （三子棋版阿尔法狗）  
> 能够学习的三子棋程序。 ==> [English version](README.en.md)

[![Build Status](https://travis-ci.org/Jeff-Tian/tic-tac-toe-ai.svg?branch=master)](https://travis-ci.org/Jeff-Tian/tic-tac-toe-ai) 

这是我写的第一个 AI 程序。起源于在学习完 react js 的 [tic-tac-toe 教程](https://reactjs.org/tutorial/tutorial.html)后，我对自己说，为什么不把它升级成一个 AI 版本呢？

![截图](public/images/screenshot.png)

## 在线访问：
[https://jeff-tian.github.io/tic-tac-toe-ai/](https://jeff-tian.github.io/tic-tac-toe-ai/)

## 本地运行：
```bash
git clone https://github.com/Jeff-Tian/tic-tac-toe-ai.git
npm install -g create-react-app
npm install
npm start
```

## 测试：
```bash
npm test
npm run coverage
```

## 发布历史

* 1.0.0
    * 改动：实现了一个比较好的评估函数，能够使机器在处于后走子的劣势下，确保不输棋。但是如果启用学习，那么这个评估函数会变动，有可能被人为诱导进入蜜罐，被连续的胜利冲昏头脑，突然一下子变笨，但是会在输棋之后很快恢复。
    * 可以防御同时设置两个方向上的赢面的对手。
    * 在与随机走子的机器对手下棋时，胜率可达 93%，剩下 7% 为平局，也就是说，随机走子对手无法取胜了。

* 0.1.0
    * 实现了一个粗糙的评估函数，在输掉前 6 个回合之后变得聪明，但是如果人使用更高级的走法，同时设置两个方向上的赢面时，机器总是会输。
    * 在与随机走子的机器对手下棋的话，胜率可达 84%。
    
## 关于我
[Jeff Tian 在 Stackoverflow](https://stackoverflow.com/users/769900/jeff-tian)

[Jeff Tian 在 Github](https://github.com/Jeff-Tian)

## 贡献指南

1. Fork 这个项目（<https://github.com/Jeff-Tian/tic-tac-toe-ai>）
2. 创建你自己的特性分支（`git checkout -b feature/fooBar`）
3. 提交你的改动（`git commit -am '添加了 fooBar 功能'`）
4. 推送代码到分支（`git push origin feature/fooBar`）
5. 提交新的合并请求