# fullstack-deployment
## first of all go inside the /frontend/src/pages folder and then in 
```
EmployeeForm.js
EmployeeList.js
```
## in this file change the public ip of your instance for connect with backend service
### then create network then build your image with 
```
docker create network my-network
docker build -t my-frontend:1 .
```
### then run the container with this command
```
docker run -d --name frontend-container --network my-network -p 80:80 my-frontend:1
```
### then acces your frontend service with the 
```
<public-ip:80>
```
## then create database container of mongodb by this command 
### create folder for save data 
```
mkdir -p ~/mongo_data
docker run -d --name mongo --network my-network -p 27017:27017 -v ~/mongo_data:/data/db mongo
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
