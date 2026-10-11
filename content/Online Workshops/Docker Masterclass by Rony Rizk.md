This is a beginner-friendly session.

## Introduction

- **Speaker:** Rony Rizk
- **Experience:** Software engineer with 25 years of experience in software development. He works in web development, mobile development, databases, APIs, integrations, AI, and more. He has spent 16 years providing full-stack training.
- **Session Topic:** What is Docker? Why is it needed in a practical way? (This session is hands-on and not theoretical).

## Why Docker?

Docker is not just for web development or software development; it is everywhere (AI, cloud solutions like AWS or Azure, etc.).

To understand Docker's value, any technology being learned must have a clear problem it solves, otherwise, you won't enjoy practicing it.

### The Problem: Local Setup & Dependencies

Imagine the scenario of installing an Oracle database on your machine. Even though it's well-documented software with step-by-step instructions, the process might take an hour to finish. It requires modifying registries and environment variables. Uninstallation is another tedious process that might leave traces on the system. What's the point of this detail?

If you're required to install Redis on your computer, you'd also have to go step-by-step.

If an application requires a MongoDB database, Node.js API, React.js frontend, and a caching server with Memcached, you would need to install:

- A web server for React
- MongoDB on your machine
- Node.js
- A Memcached server

All of this setup can take half a day. The actual development might last for 2-3 weeks. However, the purpose of development isn't just to keep it on your computer; it's to provide the application for someone else.

If this person wants to run your application, they will also need all of your setup software installed. Consider these variables that could cause issues:

- Their operating system
- Their software versions
- A lack of specific setups or software on their machine

This leads to a huge issue: *"It works on my machine but it doesn't on the client's machine."*

Another scenario: A new team member joins an ongoing project that has been running for 6 months with a lot of setup software. They might spend a whole week not being able to run the source code due to these setup issues.

**Conclusion:** Not everyone will have the same versions or even the same software currently set up on their machine. This will cause perfectly working code to not run on other devices.

### Initial Solution: Virtual Machines (VMs)

Virtual machines were and are still used by many companies in the market. They are a smart way to create a machine within your machine (e.g., VMware or Oracle VM VirtualBox).

- **What it solves:** The ability to have different OSes and setups inside virtual machines.
- **Drawbacks:** Huge storage requirements (many GBs), takes a long time to set up, and eats up a lot of memory.

## The Docker Solution

Docker provides the ability to run software virtually on your machine without the huge resource consumption drawbacks of VMs.

- Docker was originally targeted at Linux/Unix developers, not Windows developers.
- Starting with Windows 10 and some Windows Server versions, it became available on Windows due to WSL (Windows Subsystem for Linux).
- Docker gives you the ability to use many software applications without installing them directly on your machine.
- It comes as an executable with a user interface and can also be manipulated through the Command Prompt (CMD).

## Practical Usage

### Running Your First Docker Image

Let's try to run the first Docker image:

```bash
docker --version
Docker version 27.5.1, build 9f9e405

docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
4f55086f7dd0: Pull complete
Digest: sha256:5e23090353324d887c48ad5e5c56d294eab81588df9605b07d1afe895f9cc8f8
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

Notice how the image isn't available locally, so it's pulled from the remote server. When the command is run again, it will execute without having to pull the image again.

There's a website called **Docker Hub** that has tons of images for many software applications and their different flavors. It can be used to download and run any of them.

### Images vs. Containers

When Docker runs an image, it doesn't actually "run" the image itself; it runs a **container**, which is the running version of the image.

- An **image** is not manipulable and cannot be edited. Its size can be in MBs or GBs depending on the software inside.
- A **container** is isolated from any other container.

### Working with Nginx

What is Nginx? It is the fastest and most used web server by the Linux community to host static files like React.js, Angular, etc.

Command to run Nginx on Windows:

```bash
docker run -d -p 8080:80 --name web nginx
```

Note that you can also directly pull it without running:

```bash
docker pull nginx
```

To check all your downloaded images:

```bash
docker images
```

### Port Publishing

Inside the image, there's a whole computer functioning. It might be using port 80, so if it's isolated, how does it reach outside the container? Through **port publishing**. If a container uses port `8080` locally, another container requiring the same internal port will need to use a different external port, like `8081`.

After running the container, it will be occupying the specified port. To forcefully remove it:

```bash
docker rm -f web
```

To check running Docker containers:

```bash
docker ps
```

If a Docker container is run on an already-occupied port, it will give an error:

```bash
docker run -d -p 8082:80 --name web-c nginx
3c39338b9a3660dbbfd790206e10011e4fdc6a6a0ab1a82735dcac7d82d210d0
docker: Error response from daemon: driver failed programming external connectivity on endpoint web-c (7cb2da4c318aad5abb03912e60827c840b34cf59c48791ef2e6f03b8ddfbd84f): Bind for 0.0.0.0:8082 failed: port is already allocated.
```

You can check the logs in each container:

```bash
docker logs web
```

*(Note: `web` changes based on your container name)*

To interact inside the container:

```bash
docker exec -it web sh
```

To stop the running container:

```bash
docker stop web
```

Both a container can be run, stopped, and removed, as well as the image which can be pulled or removed.

### Creating Your Own Image

To create your own image:

1. Go into the source code directory.
2. Create a `Dockerfile` file.
3. Example code:

```bash
# 1. Start FROM an official Node image. "alpine" = tiny Linux base.
FROM node:22-alpine

# 2. Work inside /app from here on.
WORKDIR /app

# 3. Copy ONLY the manifest first, then install. (Copying the manifest first lets Docker reuse the install cache)
COPY package.json ./
RUN npm install --omit=dev

# 4. Now copy the rest of the source.
COPY . .

# 5. Document the port (informational).
EXPOSE 3000

# 6. The command that runs when the container starts.
CMD ["node", "server.js"]
```

**Commands explanation:**

- Starting point. You can't make a Docker image from scratch without a base.
- Make an `app` folder inside this image and set it as the working directory.
- Copy `package.json` inside the folder.
- Run the installation command inside.
- Copy the rest of the files inside the folder.
- Choose a specific port to expose.
- Run the last command that will actually start the container.

To complete creating the image, run this from inside the folder:

```bash
docker build -t shipbox-api .
```

*(Note: `shipbox-api` changes based on your needs).*

To push the image, you need to have a Docker account and use a valid tag name for the image, then use:

```bash
docker push shipbox-api
```

## Orchestration and Alternatives

There are many capabilities like running containers in order, stopping them in order, or making them communicate. All of this is achievable through **Docker Compose**.

Online, there is something called **Kubernetes** (aka K8s), which is a controller for containers.

**Podman** is an alternative to Docker, but the images are universal and usable across any containerization service. The difference lies in ease of use or usability; Podman makes it easier to control multiple containers as Docker handles it more poorly.

## Q&A

**Q:** If I have a deployed application that crashes under heavy load, can I make multiple cloned containers?

**A:** Yes, this is called load balancing. Though, this just makes the issue bigger if the application is not prepared to handle the load it is being introduced to.

*JMeter can be used to simulate thousands of users to check the application under pressure.*