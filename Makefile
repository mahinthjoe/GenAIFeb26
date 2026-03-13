.PHONY: build run stop shell clean

# Build the Docker image
build:
	docker compose build

# Start the environment
run:
	docker compose up -d

# Access the container shell
shell:
	docker compose exec qa-env /bin/bash

# Stop the container
stop:
	docker compose down

# Clean up
clean:
	docker compose down --rmi all --volumes --remove-orphans

