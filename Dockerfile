# Use the Node base image with a specific version
FROM node:20.11.1

WORKDIR /

# Copy package.json and package-lock.json to /src
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

RUN npm run build

# Expose the port that Next.js uses
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
