> `git --verion` git version 2.11.1

[github地址](https://github.com/lishan/OCProject/tree/master/Git)
[简书地址](http://www.jianshu.com/p/3f53db8b8f2f)

## 慎用git push -f

> Warning: 这是一个不安全的操作，会导致代码丢失。

作用：强行把自己的git repo推送到远端，忽略可能的merge和conflict.

可能的恢复方法：
1. 找到代码丢失者的git repo, 运行`git reflog`查看操作历史。

```
2e21737 HEAD@{0}: commit: commit1
787e1c4 HEAD@{1}: commit: commit1
ef4bece HEAD@{2}: commit: commit2
```
2. `git show 2e21737`查看详细的commit信息

```
commit 2e21737cff4d630558b30707f1a9087290d14fae
Author: ...
Date:   Mon Mar 27 16:00:13 2017 +0800

    commit1

diff --git a/Git/README.md b/Git/README.md
```
3. `git cherry-pick 2e21737`获得丢失的提交

## 使用git rebase

> 经常可以发现很多人提交代码的时候有`Merge branch 'master'`的操作，导致代码在开发中有非常乱的轨迹，使得代码的维护非常复杂，其实在真正的开发过程中，branch的merge是管理员操作的很小一部分操作。

![屏幕快照 2017-03-30 上午11.09.11.png](http://upload-images.jianshu.io/upload_images/4623363-49781a957a75026a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

处理方法：
1. 在代码提交前使用`git pull --rebase`, 把本地代码和远端pull的代码衍合，放弃使用`git pull`
> Tips: `git pull` = `git fetch` + `git merge`
2. 当代码提交后，不要执行远端的rebase操作，修改远端git repo上的提交树。

## 使用git ignore
.gitignore文件可以方便定义不需要提交的文件和文件夹，大部分常用的有

```
/node_modules #依赖
/dist #build结果
/.idea #IDE设置目录
/.tmp
/.sass-cache
/bower_components
```

## 使用git reset

三种模式：
--hard Warning: 所有的修改都会同步,包括stage的unstage的，有可能造成未提交本地代码丢失
--soft 不会造成代码丢失，回退的提交放到stage区域里，其余的都不变
--mixed(默认) 不会造成代码丢失，回退的提交放到unstage区域里，其余的都不变

## 使用git stash
`git stash`用来缓存本地代码，使用`git stash pop`来恢复stash中的代码