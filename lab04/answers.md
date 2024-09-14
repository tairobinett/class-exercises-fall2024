# Lab 4: Docker Tutorial

**Before you begin...**
1. Ensure that Docker is running and that you can access the Docker Dashboard
1. Open the command prompt
2. Run the following command: `docker run -dp 80:80 docker/getting-started`
3. Open [http://localhost](http://localhost) in your browser to complete the tutorial.


Complete the following tutorial sections (note that #4 and #9 are optional) and answer the questions below:

## 1. Getting Started
Consider the command you just ran: `docker run -d -p 80:80 docker/getting-started`

Answer the following:
1. Explain what the -p flag is doing (in your own words)
    The -p flag performs port mapping, mapping a port on the host computer to one on the container, making that port visible from outside the container.
2. How do you think [http://localhost](http://localhost) is communicating with Docker?
    Docker is running a container on my host computer. The port forwarding mentioned above allows me to access port 80 on the container by connecting to localhost:80 on my computer.

## 2. Our Application
When you download and unzip `app`, save it inside of the `lab04` directory (while on your `lab04` branch). Then follow the instructions for this section. When you're done, answer the following questions about the `Dockerfile` you just made:
1. What is `node:18-alpine` and where did it come from?
    node:18-alpine is an image, a template to create containers from.
2. Which commands in the Dockerfile instructed Docker to copy the code from `app` onto the Docker image? Explain.
    WORKDIR /app
    COPY . .
3. What do you think would happen if you forgot to add `CMD ["node", "src/index.js"]` in your Dockerfile? Why?
    When building the container, it would not have a default command to run. I don't know what the consequences of that would be.

## 3. Updating Our App
In this section, you learned that if you make a change to the code, you have to 
* Rebuild the Docker image,
* Delete the container that you previously made (which is still running), and
* Create a brand new container

Answer the following:
1. What are two ways you can delete a container?
    Command line
        docker ps
        docker stop <id>
        docker rm <id>
    Docker GUI
        trash can icon

## 4. Sharing Our App (Optional)
You don't have to complete this section, but I do want you to navigate to the Docker Image repository and take a look: [https://hub.docker.com/search?q=&type=image&image_filter=official](https://hub.docker.com/search?q=&type=image&image_filter=official). These are all of the potential Docker Images you can utilize to build your own containers (which will save you a lot of time)!

## 5. Persisting our DB

1. What is the difference between the `run` and the `exec` command?
    exec executes code within a terminal in a selected docker container.
    run is used to start up docker containers (?)
2. What does the `docker exec -it` command do, exactly. Try asking ChatGPT!
    docker exec lets you execute a command inside a running docker container. -i lets you interact with the command, if necessary, and -t gives you a terminal-like interface to do so with.
3. What was the purpose of creating a volume?
    Volumes act as persistent data storage, stored on the host and accessible to containers.
4. Optional: How does the TODO app code know to use the volume you just made? Hint: open `app/src/persistence/sqlite.js` and see if you can figure it out.
    It's less about the todo app code and more about the command to start the docker container. 
        docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started
    '-v todo-db:/etc/todos' takes out persistent storage, todo-db, and maps it to /etc/todos in the container.

## 6. Using Bind Mounts
1. Why are bind mounts useful? 
    They allow you to make changes to your code and see them take effect without restarting the container.
2. Note that the commands below can also be represented in a Dockerfile (instead of in one big string of commands on the terminal). What are the advantages of using a Dockerfile?

```
docker run -dp 3000:3000 \
    -w /app -v "$(pwd):/app" \
    node:18-alpine \
    sh -c "yarn install && yarn run dev"
```
    A dockerfile contains the instructions to automatically build an image, so you don't have to manually type the commands whenever you create a container.

## 7. Multi-Container Apps
If you have never worked with network applications, this section may be confusing. That said, try to answer this question as best you can:

1. If you have two containers running that are sandboxed (i.e., one container can't reach into another container and see its internal state or code), how did you get your two containers to communicate with one another? In other words, how was the web application container able to communicate with the database container?
    In this section, I first created a docker network, then ran two containers on that same network. Containers on the same network are able to communicate with each other.

## 8. Using Docker Compose
1. What is the purpose of the `docker-compose.yml` file?
    The docker compose file defines the components needed to run the docker compose command, which is used to start up a multi-container application in one command.

## 9. Image Building Best Practices (Optional)
Optional section. Only complete if you want to.


## What to turn in
After answering all of the questions above...
1. Make sure that your `app` folder is inside of your `lab04` folder (including your `Dockerfile` and `docker-compose.yml` files).
1. Then, stage, commit, and push your 'lab04' branch to GitHub. 
1. Create a Pull Request (but do not merge your pull request -- that doesn't happen until Sarah reviews it).
1. Paste a link to your pull request in the Lab04 submission
