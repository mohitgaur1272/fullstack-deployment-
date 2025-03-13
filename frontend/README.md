## first of all go inside the /pages folder and then in 
```
EmployeeForm.js
```
```
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
