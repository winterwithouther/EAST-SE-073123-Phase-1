# SENG-LIVE-Phase-1-JavaScript-Inventory-Tracking-Tool

## How to use this repository

![Git Flow Diagram](assets/git-flow-diagram.png)

## Day 1 Instructions
NOTE: Coding along to live lecture is NOT required. It can actually make following the lecture harder so we typically do not recommend it. The follow is for those who wish to code along or who wish to code along while watching the video after lecture. Please hold all questions about errors or issues you have in your code until break or after lecture.  

### Fork this repository

- Click on the Fork Icon at the top of the UI and wait for the forking operation to complete
- I needed to select my username here to indicate I want to fork to my account because I'm part of multiple organizations

![Forking a Repo animation](assets/forking-a-repo.gif)

### Clone your fork of the repository to your local machine

To do this there are a two main tasks we'll want to complete.

1. Get the SSH link for your fork of the repository
2. Clone the repository to a folder on your local machine

#### 1. Getting the SSH link to clone the repository

- Once the fork is complete, click on the green code button
- in the sub menu that appears, make sure that SSH is underlined
- click the clipboard button to copy the ssh link to your clipboard

![Getting the SSH clone link](assets/get-ssh-clone-link.gif)

#### 2. Cloning the forked repository to a folder on your local machine

- open up a terminal and navigate to the directory where you want to store your lecture code
  - In my case I'm creating the folder through the terminal using the `mkdir lecture-code` command
  - next, `cd lecture-code` to move my terminal's working directory into the `lecture-code` folder
- run `git clone <paste your ssh git repo link here>` in the terminal
- run `code SENG-LIVE-<paste your start date here>-phase-1` to open the repository within VSCode

> **PRO TIP** If you type the `tab` key on your keyboard while interacting with the terminal, you can autocomplete long file or folder names. In this case, I typed `code SENG` and then hit the `tab` key and it expanded the path to the only folder name matching `SENG` which was `SENG-LIVE-<paste your start date here>-phase-1`. So, you only need to type as many characters as can uniquely identify the file or folder name that you want to open and then you can use `tab` to complete the rest of the required typing without typos!

![Cloning to your machine](assets/cloning-to-your-machine.gif)

Now that you have the repository cloned to your local machine, you'll be able to following along with lecture inside of your own code editor if you wish.

## Syncing Forked Branches

If you are on the branch 01_starter, there may be additional content I have added before we start the 01_starter lecture.  In order to get my most recent changes for the 01_starter branch
1. In terminal add a new connection called "upstream" that will point to the original repository (my repository).
```
> git remote add upstream git@github.com:rachelAtFlatiron/EAST-SE-073123-Phase-1.git
```
2. When you want to sync your current branch with my current branch do the following:
```
> git pull upstream <rachels_branch>
```


## Getting New Branches

There may be new branches added to the lecture repo as we work through the material.  To get any new branches onto your local repo do the following:
1. Navigate to your phase repo in your github account
2. Navigate to all your branches

<img src='./assets/branches.png' width="600" />

3. Click on 'new branch'

<img src="./assets/new-branch.png" width="600" />

4. Fill out the form
<img src="./assets/source-branch.png" width="600" />

- red: your branch name
- blue: my repo (rachelAtFlatiron/EAST...)
- green: the branch from my repo that you want

5. In terminal navigate to your phase 1 lecture folder
6. Run `git fetch` to get all new branches from the remote repository
7. Run `git checkout <branch-name>` to switch to the new branch that was made in the remote repository

```
> git fetch
> git checkout example_branch
```


## Recommended VS Code Extension for Git

GitLens! See the GIF below for an example of how to install a VSCode extension.

![Installing GitLens](assets/installing-gitlens.gif)

The GitLens extension allows you an integrated Visual interface for viewing past commits, stashes and even file history over time. It adds options directly into the built in Version Control pane of the VSCode editor.

## Merge Conflicts

If all goes well, you should not encounter merge conflicts when you follow this workflow as part of participation in lecture. There is one scenario where they might come up, so I want to describe it here and how to address it.

### Scenario

Say these events happen in this order:

1. You go through the steps above and pull down the updated code to your machine.
2. You start taking some notes there and attempting to solve problems in the starter code.
3. The lecturer notices something in the lecture code that they want to change and pushes another commit to the lecture repo.

In this case, going through the `fetch & merge` and `git pull` workflow may result in what's called a merge conflict. The safest thing to do in this situation is to run `git stash` locally to hide your changes in your local repository so that the `pull` from GitHub goes off without a hitch. You can still view the code within your stash within VSCode and you can even return it to your machine with `git stash pop` if you like.

![Using Git Stash](assets/using-git-stash.gif)

If this scenario arises, your lecturer will generally communicate the change in advance, so this scenario should be rare. But, should it happen, this is one approach you can take to get around any potential problems.

If you have code stashed in your local repository, it won't be visible within the regular file structure (AKA your working directory). If you want to return the code to your machine, you can still do so by applying the stash.

![Applying a Stash](assets/applying-stash-to-add-change-back-to-folder.gif)

If you prefer, you can simply keep your code in the stash and it'll allow you to more clearly see the difference between your code and the starter code when you click on a stashed change within the Version Control Tab's Stashes dropdown. It will show you a visual diff with your additions highlighted in green and your removals highlighted in red.


