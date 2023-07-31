---
theme: "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "04_communicate_server"
---

<style>
input {
  font-size: 2rem;
  padding: 1rem;
}
</style>

# Github
<img src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png" style="width: 50%"/>

<aside class="notes">
favorite documentation: [atlassian](https://www.atlassian.com/git/tutorials)
</aside>

---

## What is Github?

<aside class="notes">
- as you go through slides show it in relation to the lecture repo
</aside>

---

## Version Control
<br />

#### Tracking and managing changes to software

<img src="https://media.tenor.com/S7ztCa0y3nQAAAAC/one-does-not-simply-vcs.gif" />

<aside class="notes">
- view past version of project, entire history of every file <br />
- create sandbox areas to try coding something new while maintaining a working draft <br />
- collaborate: write your own code and combine it with others
</aside>

---

## Repository

#### A directory of files that are tracked by Git.

<aside class="notes">
</aside>

---

## Fork vs Clone

- fork: make a copy of the repo into your own account
- clone: copy the repo onto your computer

<aside class="notes">

- you will be using these two actions to get the lecture repo onto your computer
</aside>

---

## 1. Fork

#### make a copy of the lecture repo into your own account
<img src="./forking-a-repo.gif" />

<aside class="notes">
- how do we get the link to clone the repo?  what is the address at which the repo is stored? <br />
</aside>

---

## 2. SSH
#### get the link to clone the repo to your local machine
<img src="./get-ssh-clone-link.gif" />

<aside class="notes">
- under the clone button: ssh/https - USE SSH (its more secure than https)
</aside>

---

## 3. Clone

#### clone that copy onto your computer using the SSH link
<img src="./cloning-to-your-machine.gif" />

<aside class="notes">

</aside>

---

## Branches
#### "An independent line of development"

<img src="https://wac-cdn.atlassian.com/dam/jcr:389059a7-214c-46a3-bc52-7781b4730301/hero.svg?cdnVersion=1134" />

<small>Image source: <a href="https://www.atlassian.com/git/tutorials/using-branches" rel="noopener noreferrer" target="_blank">Atlassian</a></small>

<aside class="notes">


- show different branches on remote for this repo <br />
- main branch should be your working version, it should be the version of code that you may see on an actual website <br />
- the branch called "feature" is initially a version of the main branch that you can then experiment with <br />
- show branches in personal account <br />
- once you are satisfied with the experiment you can integrate it back into the main branch with a "merge" <br />

- EXPLORE THE BRANCHES IN REPO
</aside>

---

## Saving Changes 

#### Whenever you make changes to the files and you are satisfied with those changes, save a version of your code as a commit.

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Si7ksd-d--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/800/1%2AdiRLm1S5hkVoh5qeArND0Q.png" />

```
> git add .
> git commit -m "Some message here"
```
<aside class="notes">
- staging area: can think of it as a rough draft space, middle ground between changes and commit <br />
- you can add specific files to the staging area and omit others in preparation for the commit <br />
- only things in the staging area will be included in the commit <br />
- `git status` <br />
- `git log` <br />

- DEMO THIS, MAKE SOME CHANGES
</aside>


---

## Merge

#### Takes different branches or versions of files and tries to combine them

<img src="https://media.tenor.com/bz2lD_WtMwEAAAAd/git-merge.gif" />

<aside class="notes">
- when you pull or push any differences in code will be merged together
</aside>

---

## Merge Conflicts

<img src="https://miro.medium.com/v2/resize:fit:1336/1*wB7JgylIlmmDjrbYkBOJDw.jpeg" />

<small>Image source: <a href="https://medium.com/mindorks/understanding-git-merge-git-rebase-88e2afd42671">Medium</a></small>

```
> git stash 
> git pull 
> git stash pop 
```

<aside class="notes">

- git stash #store current changes
- git pull #attempt to get code from remote again
- git stash pop #if you want to see the code that was previous stashed
</aside>

---

## Merge Conflicts

#### You can also manually edit merge conflicts 

<img src="https://learn.microsoft.com/en-us/visualstudio/version-control/media/vs-2022/git-conflicts-status-ui.png?view=vs-2022" />

<small>Source: <a href="https://learn.microsoft.com/en-us/visualstudio/version-control/git-resolve-conflicts?view=vs-2022">Microsoft</a></small>

---

## Merge Conflicts

#### You can also manually edit merge conflicts 

<img src="https://learn.microsoft.com/en-us/visualstudio/version-control/media/vs-2022/git-conflicts-resolve-conflict.png?view=vs-2022" />

<small>Source: <a href="https://learn.microsoft.com/en-us/visualstudio/version-control/git-resolve-conflicts?view=vs-2022">Microsoft</a></small>

<aside class="notes">

1. Go over your conflicts line by line, and choose between keeping the right or the left side by selecting the checkboxes.
2. Keep or ignore all of your conflicting changes.
3. Manually edit your code in the Result window.
</aside>


---

## Remote vs Local

- local: the repo on your computer
- remote (origin): the repo on Github.com
- push: get changes from local to remote
- pull: get changes from remote to local

```
> git add .
> git commit -m 'Some message here'
> git push origin main
```

```
> git pull origin main
```

<aside class="notes">
- git pull will immediately merge with current branch <br />
- origin refers to the remote repo, main refers to the branch you want to interact with (git remote, git remote -v) <br />

- DEMO THIS 
</aside>