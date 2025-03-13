## first of all create database container of mongodb by this command 
```
docker run -d --name mongo --network my-network -p 27017:27017 mongo
```
### then open ```server.js``` file and in the database url use like this  
```
const mongoURI = 'mongodb://mongo:27017/employeedb'; // Docker network ke andar connect hoga
```
### then create docker image with 
```
docker build -t my-backend:1 .
```
### then run the container 
```
docker run -d --name backend-container --network my-network -p 5000:5000 my-backend:1
```
