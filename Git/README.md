> `git --verion` git version 2.11.1

[github地址](https://github.com/lishan/OCProject/tree/master/Git)
[简书地址](http://www.jianshu.com/p/3f53db8b8f2f)

## 慎用`git push -f`

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

## 使用`git rebase`

> 经常可以发现很多人提交代码的时候有`Merge branch 'master'`的操作。
导致代码在开发中有非常乱的轨迹，使得代码的维护非常复杂。
其实在真正的开发过程中，合并代码是管理员操作的很小一部分操作,而不应该出现在日常的提交中。

![屏幕快照 2017-03-30 上午11.09.11.png](http://upload-images.jianshu.io/upload_images/4623363-49781a957a75026a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

处理方法：
1. 在代码提交前，使用`git pull --rebase`代替`git pull`, 把本地代码和远端pull的代码衍合，
> Tips: `git pull` = `git fetch` + `git merge`
2. 当代码提交后，不要执行远端的rebase操作，修改远端git repo上的提交树。
例如：

这是一个简单的merge操作。

![屏幕快照 2017-03-31 上午10.56.14.png](http://upload-images.jianshu.io/upload_images/4623363-efb88a627bea6e34.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
     Test -> Test1
       /            \ 
Master -> Master1 -> Master2(Test)
```

现在我在Master上执行`git rebase Test`，可以发现衍合之后如下

![屏幕快照 2017-03-31 上午11.06.08.png](http://upload-images.jianshu.io/upload_images/4623363-d070b787fc48f6cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
Master -> Test1 -> Master1
```

> Warning: 如果这是一个本地的分支，则做衍合是可以的；如果是一个远程分支，这个操作会覆盖合并历史，是不允许的

## 使用`git ignore`
.gitignore文件可以方便定义不需要提交的文件和文件夹，即使你使用`git add *`也不会放到提交区中。

```
/node_modules #依赖
/dist #build结果
/.idea #IDE设置目录
/.tmp
/.sass-cache
/bower_components
```

## 使用`git reset`

> `git reset`不会产生新的提交，这是和`git revert`不同的，`git revert`经常用来在远端进行代码回滚
而`git reset`往往是开发者本地进行代码比较和修改用的。

`git revert HEAD`产生一个提交，可以使用`git log`查看

```
commit faf26c107ab2edb2b43a8e0319e8ef3134a83f5f
Author: *
Date:   Fri Mar 31 11:13:28 2017 +0800

    Revert "commit1"
```

`git reset HEAD^1 --hard`会提示现在HEAD所在的地址，`git log`看不见最新的一次提交

```
HEAD is now at 5634c99 commit1
```

三种模式：
--hard 所有本地的修改，包括未跟踪的文件，add到提交区中的，全部消失
--soft 所有本地的修改保留，回退的代码修改会放到提交区中
--mixed(默认) 所有本地的修改和回退的代码都放到未跟踪的文件区，需要重新add

例如：现在的状态是2.txt在提交区中，3.txt在未跟踪区中，都是用`git reset`回退一步的区别。

```
git st
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   2.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	3.txt
```

运行`git reset HEAD^1 --mixed`，发现本地的2.txt和3.txt都放到了为跟踪区中，包括提交的回滚1.txt，需要重新add。
```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  1 add some
  
  (use "git checkout -- <file>..." to discard changes in working directory)
	modified:   1.txt
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	2.txt
	3.txt
```

如果运行`git reset HEAD^1 --soft`，发现本地的2.txt和3.txt都没有变化，回滚的1.txt放到了提交区中。

```
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   1.txt
	new file:   2.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	3.txt
```

## 使用`git stash`
`git stash`用来缓存本地代码，使用`git stash pop`来恢复stash中的代码

## 小结

+ 不要使用`git push -f`，使用`git push`，发现conflict需要解决。
+ `git pull --rebase`十分有用，可以用来从远程拉取代码，并且和本地的提交衍合，保证提交树的清晰。
+ `git reset`提供三种不同的模式。