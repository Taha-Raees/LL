# Use an official Node.js runtime as the base image
FROM node:17

# Set the working directory within the container
WORKDIR /Project

# Copy package.json and package-lock.json to the working directory
COPY . .

# Install project dependencies
RUN npm install

# Expose the port your Next.js app runs on
EXPOSE 3001

# Define the command to start your Next.js app
CMD ["npm", "run", "start"]
