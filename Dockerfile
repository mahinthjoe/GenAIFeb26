# Use Ubuntu 24.04 as the base image
FROM ubuntu:24.04

# Avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install core tools
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    unzip \
    gnupg \
    software-properties-common \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install OpenJDK 21 and Maven
RUN apt-get update && apt-get install -y openjdk-21-jdk maven \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js LTS (v22.x)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Install Newman for Postman CLI
RUN npm install -g newman newman-reporter-htmlextra

# Install Playwright dependencies and Chromium
RUN npx -y playwright install-deps chromium \
    && npx -y playwright install chromium

WORKDIR /app
COPY . .

CMD ["/bin/bash"]

