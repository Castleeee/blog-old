---
title: part 1 linux的历史节点
date: 2022-04-29 14:10:10
categories:
- 课程
---

:::tip 📌Tip
自己写来复习用，会的很多都没写上，看鸟哥记的笔记比较全。
:::
<!--more-->

看的[尚硅谷的linux](https://www.bilibili.com/video/BV1WY4y1H7d3)  
Linux图标企鹅名字叫tux(晚礼服)，系统是linus Torvalds开发  
[这本书也不错](https://linuxtools-rst.readthedocs.io/zh_CN/latest/index.html)  

## linux的开发事件节点
### unix的过程
最开始世界都是批处理操作系统，贝尔实验室+MIT+GE联合开发多用户分时OS: Multics，失败了->unix是贝尔实验室开发<span style="background:greenyellow">Ken</span> Thompson牵头和Dennis<span style="background:greenyellow">Ritchie</span>吸取教训一块开发的

### C语言的过程
(全名: 肯尼斯·蓝·汤普森Kenneth Lane Thompson丹尼斯·里奇Dennis MacAlistair Ritchie)
unix 一开始用汇编，理念是保持高效和简洁，汇编复杂开发越来越难，当时流行的Fortran觉得不好用，所以K&R(Ken&Ritchie)就自己开发语言  

当时有这么几种语言。  
- 最开始是 ALGOL 60语言也称A语言，A语言不能对硬件直接操作不适合写操作系统
- 剑桥大学将ALGOL 60语言发展成为CPL(Combined Programming Language)语言
- 剑桥大学的Matin Richards 对CPL语言进行了简化，于是产生了BCPL语言 (解释型语言，无法满足要求失败了) 
- Ken Thompson将BCPL进行了修改，命名为[B语言](https://zh.wikipedia.org/wiki/B%E8%AA%9E%E8%A8%80)意思是将CPL语言煮干，提炼出它的精华。
- Dennis MacAlistair Ritchie再对B语言进行修改，取BCPL的第二个字母作语言名字，最终形成了C语言，并用C语言写了unix

unix一开始小范围内是开源的，但是商业化开发时候选择付费。  
- unix的变种:BSD,Solaris,IBM-AIX,HP-UX,主要用在单个大型服务器，对硬件依赖严重，在分布时代逐渐不行。
- 唯一比较强的是[BSD](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution)->FreeBSD->darwin->macOS，FreeBSD因为版权问题发布比较晚,遵循BSD协议，对商业化更友好见[开源协议](../代码之外/开源协议.md#^4fd49b)
### linux的过程
因为一般人用不起unix也没见过，为了方便研究荷兰教授Andrew Tanenbaum(大黑书计算机网络作者)写了不包含版权代码的类似unix的系统->minix开放源代码->linus觉得不好用，干脆重写->写了Linux  

Linus发布后越来越多的人贡献代码，当时集中式的SVN比较多->分布式的gitkeeper05年对他们收费->为了管理就写了Git(只用了一星期)->08年Github上线。  
[知乎一老哥整理的历史](https://www.zhihu.com/question/22826568/answer/318102471)
## GNU自由软件运动
当时软件越来越多注册专利，Richard Stallman是[自由软件运动](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%94%B1%E8%BD%AF%E4%BB%B6%E8%BF%90%E5%8A%A8)倡导者对此很气愤，1983年发起[GUN](https://zh.wikipedia.org/wiki/GNU)([GNU's Not Unix.](https://www.gnu.org/home.en.html)) 起草了[GPL](https://zh.wikipedia.org/wiki/GNU%E9%80%9A%E7%94%A8%E5%85%AC%E5%85%B1%E8%AE%B8%E5%8F%AF%E8%AF%81)见[GPL协议](../代码之外/开源协议.md#^b38a21).  
作为操作系统，GNU的发展仍未完成，其中最大的问题是具有完备功能的内核尚未被开发成功，linus1991年开发后直接加入了GUN，由此大多使用Linux=(GNU/Linux)
## 发行版
hardware->kernel->shell->Application  
**共同**:所有的发行版都遵循GPL使用Linux内核版本格式约定基本一样（主版本号.次版本号.发行号.修正号）  
**区别**: 继承不同版本的内核，库、程序,使用不同的包管理器，软件侧重方向不同  
linux 发行版分类: [Linux的发行版](https://www.cnblogs.com/kangfeng/articles/7990261.html)
- Debian
    - Linux Mint
    - Ubuntu
- Slackware
    - suse
    - OpenSUSE
    - SLES(SUSE Linux Enterprise Server(SLES)
- Redhat
    - RHEL(Red Hat Enterprise Linux)
    - Fedora 激进测试
    - Centos 稳定社区开源(已停止)
- 其他
    - Gentoo 极致定制
    - Arch 极客激进 

## POSIX 
[The Open Group Base Specifications Issue 7, 2018 edition](https://pubs.opengroup.org/onlinepubs/9699919799/)  
[POSIX规范wiki](https://zh.wikipedia.org/wiki/%E5%8F%AF%E7%A7%BB%E6%A4%8D%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%8E%A5%E5%8F%A3)  
[stallman的采访](https://zhuanlan.zhihu.com/p/78080748)<br/>
[热门博客的解释](https://github.com/cisen/blog/issues/701)

-----------
## 文件夹功能
/ #   
├── bin -> usr/bin #  默认加入系统路径的可执行文件软链接的存放处   
├── boot # 开机引导文件夹   
 │   ├── efi    
 │   ├── grub    
 │   └── grub2    
├── dev # 设备管理目录，每个设备都会被对应成一个文件或文件夹  
├── etc # 配置文件  
├── home # 普通用户文件夹  
 │   └── ooowl # 每人一个   
├── lib -> usr/lib # 存放库文件的目录   
├── lib64 -> usr/lib64 # 存放库文件的目录   
├── media # 挂在可移动媒体设备U盘光驱  
├── mnt # 外部存储和硬盘挂载   
├── opt # 可选目录，给第三方软件单独留的   
├── proc # 进程虚拟目录存放正在运行的内存文件   
├── root # root用户文件夹   
├── run # 存放系统运行起来的实时信息，临时的文件系统，重启就刷新   
├── sbin -> usr/sbin # 默认加入系统路径的系统级可执行文件软链接的存放处   
├── srv # 系统服务相关的文件  
├── sys # 系统硬件信息的相关文件，看意思知道大概   
 │   ├── block   
 │   ├── bus   
 │   ├── class   
 │   ├── dev   
 │   ├── devices   
 │   ├── firmware   
 │   ├── fs   
 │   ├── hypervisor   
 │   ├── kernel   
 │   ├── module   
 │   └── power   
├── system-update -> /var/lib/PackageKit/prepared-update #   
├── tmp # 系统和用户存放临时文件的目录   
├── usr #   
 │   ├── bin   
 │   ├── etc    
 │   ├── games   
 │   ├── include   
 │   ├── lib   
 │   ├── lib64   
 │   ├── libexec   
 │   ├── local   
 │   ├── sbin   
 │   ├── share   
 │   ├── src   
 │   └── tmp -> ../var/tmp #   
└── var # 可变目录，一直变动的东西会存放在这里   
    ├── account   
    ├── adm   
    ├── cache   
    ├── crash   
    ├── db   
    ├── empty   
    ├── games   
    ├── gopher   
    ├── kerberos   
    ├── lib   
    ├── local   
    ├── lock -> ../run/lock   
    ├── log   
    ├── mail -> spool/mail   
    ├── nis   
    ├── opt   
    ├── preserve   
    ├── run -> ../run   
    ├── spool   
    ├── target   
    ├── tmp   
    └── yp   

## vim操作
`/`或者`:` 进入命令模式,编辑模式按i，普通模式可以进行选中复制粘贴之类的操作。  
整理常用

| 键位     | 操作                                                           |
|:-------- |:-------------------------------------------------------------- |
| u        | undo/redo                                                      |
| 数字+yy  | 复制n行                                                        |
| 数字+p   | 粘贴几次                                                       |
| X/x      | 往前/后剪切一个字符                                            |
| d/y+$/^  | 从光标处删除/复制到行尾 / 从行头删除/复制到 光标处             |
| 数字+dd  | 删除一行                                                       |
| DW       | 从光标到词尾删除一个词，即以空格符号分开的词，后方空格也会删掉 |
| r/R+字符 | 替换掉当前处的字符/insert模式，会自动替换掉本行后面的字符      |
| $/^      | 移动到行头/尾                                                  |
| w/e      | 移动到下一个词的头/尾                                          |
| b        | 上一个词的头                                                   |
| gg/GG    | 文档的开头/结尾                                                |
| 数字+H   | 跳到某一行的行头，不加数字直接行头                                               |

编辑模式可以i或者o相当于新开一行.  
命令模式
不用说的w,q,!

| 命令         | 效果             |
|:------------ |:---------------- |
| noh          | 去掉高亮         |
| s/字符       | 查找             |
| s/old/new    | 替换当前第一个   |
| s/old/new/g  | 替换当前行所有的 |
| %s/old/new   | 替换每一行第一个 |
| %s/old/new/g | 替换文档中所有的 |

| 命令          | 效果      |
|:------------|:--------|
| set nu/nonu | 显示行号/关闭 |
| noh         | 关闭高亮    |
| syantx on   | 语法显示    |

/+字符，查找之后高亮，按enter保持，n/N是下/上一个

## 一些服务
hostname，返回主机名，hostnamectl set-hostname xxx 或者修改/etc/hostname可以改变，由hostnamectl提供服务
### service 和systemctl 
service 服务 start/stop/restart/status 管理系统服务,存放在/etc/init.d目录下  
centOS6之后使用的是systemctl，service命令都会被重定向到systemctl。systemctl的服务都存放在/usr/lib/systemd/system里面，system的命令分两种，service是服务，target是一组服务的集合。

network服务和networkManager的服务之保留一个就行，这俩是负责网络管理的，貌似在rocky中已经没有了network服务了

[setuptool](https://sysin.org/blog/rocky-linux-8-install/#Rocky-Linux-%E7%AE%80%E4%BB%8B) 已经没了，可以从这里面看看注意事项。那就跟着视频看看罢了,rocky有web界面管理  
### 运行级别 
init进程是初始化的第一个进程，init会根据不同的级别运行不同的服务脚本  
开机->BIOS->/boot分区->启动init进程->运行级别->运行对应的服务  
一共有7种级别(runlevel)，常用3，5  
- 运行级别 0：系统停机状态，系统默认运行级别不能设为 0，否则不能正常启动
- 运行级别 1：单用户工作状态，root权限，用于系统维护，禁止远程登陆类似于安全模式 
- 运行级别 2：多用户状态（没有 NFS网络文件系统），不支持网络
- 运行级别 3：完全的多用户状态（有 NFS），登陆后进入控制台命令行模式
- 运行级别 4：系您未使用，保留
- 运行级别 5：X11 控制台，登陆后进入图形 GUI模式
- 运行级别 6：系统正常关闭并重启，默认运行级别不能设为 6，否则不能正常启动

CentOS7 的运行级别简化为:
multi-user.target = 级别 3（多用户有网，无图形界面） 
graphical.target = 级别 5（多用户有网，有图形界面）

查看当前运行级别:
systemctl get-default
修改默认运行级别 systemctl set-default multi-user.target **or** graphical.target  
修改当前运行级别 init 0～6  

chkconfig --list 老centos6查看级别运行的服务，用到在去查
systemctl list-unit-files 是7以后的命令。
static是静态服务，其他服务可以调起它
systemctl start/stop/status/disable/enable

:::details Click to see more
systemctl status firewalld # 看防火墙的状态
systemctl enable firewalld # 防火墙开机自启
:::
### 开关机
shutdown默认一分钟之后关机    
-c是取消，-r是重启 -H 等于halt命令是关机但是不断电，内存里的数据会保持
shutdown now立刻关机  
shutdown +数字 多少分钟之后关机;+00:00今天几点关机;-h 几小时后关机
:::theorem quote
**man shutdown的一部分看看**<br/>
```

OPTIONS
       The following options are understood:

       --help
           Print a short help text and exit.

       -H, --halt
           Halt the machine.

       -P, --poweroff
           Power-off the machine (the default).

       -r, --reboot
           Reboot the machine.

       -h
           Equivalent to --poweroff, unless --halt is specified.

       -k
           Do not halt, power-off, reboot, just write wall message.

       --no-wall
           Do not send wall message before halt, power-off, reboot.

       -c
           Cancel a pending shutdown. This may be used cancel the
           effect of an invocation of shutdown with a time argument
           that is not "+0" or "now".
```

:::

linux会做预读和延迟写入，所以会用sync同步数据
实际上shutdown是一串命令的组合  
sync，poweroff，reboot，halt  
