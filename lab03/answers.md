# Lab 3 Answers

## Part 1: Git

### 1.1. List the contents of the lab03-exercises repo immediately after initialization
```
.  ..  .git  README.md


```

### 1.2. Paste the output of your `git status` command
```
tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)

```

### 1.3. Paste the output of the state of your repository after committing your README.md file
```
tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git add README.md
tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md

tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git commit -m "add README.md to the repository"
[master (root-commit) d346454] add README.md to the repository
 1 file changed, 18 insertions(+)
 create mode 100644 README.md
tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git status
On branch master
nothing to commit, working tree clean

```

### 1.4. Copy your `git log` output
```
tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git log
commit d34645419c0c4ebedfcec08281668d2f77edb7e8 (HEAD -> master)
Author: Tai Robinett <tairobinett@gmail.com>
Date:   Thu Sep 5 10:34:45 2024 -0400

    add README.md to the repository


#Add to README.md
##Find All Duplicates

Write a function (or static method in the case of Java) that accepts a list of integers and returns a list of only those integers that appear more than once.

```

### 1.5. Copy your `git diff` output
```
tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git diff
diff --git a/README.md b/README.md
index 464d51d..55148cc 100644
--- a/README.md
+++ b/README.md
@@ -6,7 +6,9 @@ Running the git init command adds the .git folder to the working directory. In m
 .  ..  HEAD  branches  config  description  hooks  info  objects  refs
 Above are the contents of the .git folder.

-1.2
+
+1.2 + 1.3
+tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git status
 On branch master

 No commits yet
@@ -15,4 +17,37 @@ Untracked files:
   (use "git add <file>..." to include in what will be committed)
         README.md

-nothing added to commit but untracked files present (use "git add" to track)
\ No newline at end of file
+nothing added to commit but untracked files present (use "git add" to track)
+tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git add README.md
+tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git status
+On branch master
+
+No commits yet
+
+Changes to be committed:
+  (use "git rm --cached <file>..." to unstage)
+        new file:   README.md
+
+tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git commit -m "add README.md to the repository"
+[master (root-commit) d346454] add README.md to the repository
+ 1 file changed, 18 insertions(+)
+ create mode 100644 README.md
+tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git status
+On branch master
+nothing to commit, working tree clean
+
+
+1.4
+tairo@LAPTOP-7MBITRAI:~/csci338/lab03-exercises$ git log
+commit d34645419c0c4ebedfcec08281668d2f77edb7e8 (HEAD -> master)
+Author: Tai Robinett <tairobinett@gmail.com>
+Date:   Thu Sep 5 10:34:45 2024 -0400
+
+    add README.md to the repository
+
:

```


### 1.6. Reflection

We've learned 6 git subcommands now. Describe each of them in your own words in the section below:

* git init: Initilaize git repository in current working directory
* git status: Displays information about working directory, including current branch and modified file (staged and unstaged for commit)
* git add: Add file(s) to staging area, preparing them to be committed.
* git commit: Commit staged files. -m to include a message.
* git log: Shows past commits
* git diff: Compares changes between current working tree and commits


### 1.7. Practice: Find All Duplicates (Java)
Make sure you implement the `FindDuplicates.java` class as specified in the instructions (with the nested loops implementation).

## Part 2: GitHub

### 2.1. Practice: Find All Duplicates (Python)
Make sure you implement the `find_duplicates.py` file as specified in the instructions (with the nested loops implementation).


## Part 3: Branching

### 3.1. Implement the More Efficient Version of the "Find Duplicates" problem
Implement the more efficient Version of the "Find Duplicates" problem using a dictionary (or hashmap) data structure instead of nested loops. You may do this in either your Python file or in the Java file that you’ve already made. Do this by adding a second function/method to your Java/Python file with a slightly different name.


### 3.2. Link to Repo
Please make sure that the new repo that you made today on GitHub is public, and paste a link to it below.

```
https://github.com/tairobinett/lab03_exercises
```

### 3.3. What do the three "Merge pull request" options mean? 
Describe each of them in your own words.

Merge commit: Merges changes onto main branch without altering commit history. Have to manually resolve conflicts.
Squash: Combines all commits from branch into one commit on the main branch.
Rebase: Applies all changes onto a new target commit, usually a new, up to date version of main.