# Getting Started

## Issues to check when starting

The gitpod template causes the following error, when React is started, due to newer version of node:

`Error: digital envelope routines::unsupported`

Quick solution is to run the following two commands or the shortcut for both, everytime the workspace is started.

```
nvm install 16.13.0
nvm alias default 16.13.0

nvm install 16 && nvm use 16
```


### In the terminal do:
cd my-app
npm install

### You can then run the project with the command
npm start

### Items to be aware of
Inside the folder named src you will find a file named posts.json. This file will not be used until a challenge later in the content.  

For convenience react comes installed in this template. A package named axios has also been installed as it will be required in a challenge later.