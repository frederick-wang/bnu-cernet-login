# bnu-cernet-login

北师大校园网登录脚本

## 背景说明

- 在校内，只要插着网线，电脑都是连接着校内局域网的，可以通过校内局域网互访，局域网 IP 不会变。
- 在通过上网认证系统（[gw.bnu.edu.cn](http://gw.bnu.edu.cn/)）登录公网之后，每隔一定时间（长短不一）便会自动掉线。

这样，在一台连接到公网的电脑掉线后，我可以通过 SSH 连接到这台电脑，并且运行这个脚本，登录校园网。

## 安装

```bash
npm i
```

## 使用

首先编译：

```bash
npm run build
```

然后运行：

```bash
npm run start -- login -u <学号> -p <密码>
```

## 运行效果截图

![image](https://user-images.githubusercontent.com/6050869/136768678-e1556279-d167-41ca-b133-18aea59da462.png)
