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
#### a.k.a. source control
<br />
- tracking and managing changes to software

<aside class="notes">
- view past version of project, entire history of every file <br />
- create sandbox areas to try coding something new while maintaining a working draft <br />
- collaborate: write your own code and combine it with others
</aside>

---

## Repository

- A directory of files that are tracked by Git.

---

## Fork vs Clone

- fork: make a copy of the repo into your own account
- clone: copy the repo onto your computer

---

## 1. Fork

- make a copy of the lecture repo into your own account
<img src="./forking-a-repo.gif" />

<aside class="notes">
- how do we get the link to clone the repo?  what is the address at which the repo is stored? <br />
- UNCHECK UNCHECK UNCHECK CLONE ONLY MAIN BRANCH
</aside>

---

## 2. SSH
- get the link to clone the repo to your local machine
<img src="./get-ssh-clone-link.gif" />

<aside class="notes">
- under the clone button: ssh/https - USE SSH (its more secure than https)
</aside>

---

## 3. Clone

- clone that copy onto your computer using the SSH link
<img src="./cloning-to-your-machine.gif" />

<aside class="notes">
- demo forking into personal account <br />
</aside>

---

## Branches

<img src="https://wac-cdn.atlassian.com/dam/jcr:c6db91c1-1343-4d45-8c93-bdba910b9506/02%20Branch-1%20kopiera.png?cdnVersion=1133" />

<small>Image source: <a href="https://www.atlassian.com/git/tutorials/using-branches/git-merge" rel="noopener noreferrer" target="_blank">Atlassian</a></small>

<aside class="notes">
- once you are satisfied with the experiment you can integrate it back into the main branch with a "merge" <br />
- show different branches on remote for this repo <br />
- main branch should be your working version, it should be the version of code that you may see on an actual website <br />
- the branch called "feature" is initially a version of the main branch that you can then experiment with <br />
- show branches in personal account

- EXPLORE THE BRANCHES IN REPO
</aside>

---

## Saving Changes 

- Whenever you make changes to the files and you are satisfied with those changes, save a version of your code as a commit.

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

## Github.com (Remote)

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