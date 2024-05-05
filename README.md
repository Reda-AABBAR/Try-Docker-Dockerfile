# To build your Docker image, use this command inside the directory containing the Dockerfile.
sudo docker build -t my-image:1.0 .

# To run the container use this command (mapping port 8080 -> 80)
sudo docker run -p8080:80 --name first-container my-image:1.0
