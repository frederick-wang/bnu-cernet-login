# bnu-cernet-login

北师大校园网登录脚本

## 背景说明

- 在校内，只要插着网线，电脑都是连接着校内局域网的，可以通过校内局域网互访，局域网 IP 不会变。
- 在通过上网认证系统（[gw.bnu.edu.cn](http://gw.bnu.edu.cn/)）登录公网之后，每隔一定时间（长短不一）便会自动掉线。

这样，在一台连接到公网的电脑掉线后，我可以通过 SSH 连接到这台电脑，并且运行这个脚本，登录校园网。

## 安装

推荐使用 `pnpm` 包管理器代替 `npm`。

```bash
pnpm i
```

## 使用

首先编译：

```bash
pnpm run build
```

然后运行：

```bash
pnpm run start -- login -u <学号> -p <密码>
```
