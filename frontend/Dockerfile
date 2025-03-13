# frontend/Dockerfile
# ---- Step 1: Build Stage ----
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- Step 2: Run Stage ----
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


#EXPOSE 3000
#CMD ["npm", "start"]

