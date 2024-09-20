# Lab 5: Package Management Tutorial
Please complete the hands-on activities associated with this lab outlined in the <a href="https://csci338.github.io/fall2024/assignments/lab05" target="_blank">Lab 5 Instructions</a> (on the course website). When you're done, answer the following questions. Feel free to use Google / ChatGPT to help you think about these questions (but keep in mind that you'll need to know them for the midterm exam).

## Part 1. Operating System Package Managers
Answer the questions for either Homebrew or apt (depending on whether you're using Linux / WSL or Windows)
1. What is Homebrew / apt, and why is it useful?
    apt is a package manager, which makes it simple to install/update packages.

2. What does the `update` command do (either `brew update` or `apt-get update`)?
    Updates the local package manager with information about packages (e.g. latest available version)

3. Where are the packages that are managed by Homebrew / apt stored on your local computer?
    You can find out where a specific package is being stored with the command 'dpkg -L <package>'


## Part 2.
1. What is a python virtual environment?
    An isolated python environment where you can install dependencies for a python project without polluting your main installation.

2. What is Poetry, and how is it different from other Python package managers like pip?
    Poetry is an advanced package manager for python. It uses pip under the hood and has some additional functionality, such as managing virtual environments for you.

3. What happened when you issued the `poetry new poetry-demo` command?
    Created a new directory 'poetry-demo' in the lab05 directory.

4. How do you run a python file using the poetry virtual environment?
    poetry run python file.py

5. What is the purpose of the `poetry.lock` file?
    .lock files are typically used to keep dependencies at the version stated in the .lock file.


## Part 3.
1. What are some of the things that `package.json` is used for?
    It contains vital information for a node project, including dependencies, license info, scripts, and more.

2. Why wouldn't you want to check in the `node_modules` directory into GitHub?
    It is a truly massive directory containing the files for every installed package.


