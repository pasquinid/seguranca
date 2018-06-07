#!/bin/bash

sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
sudo apt-get update
sudo apt-get install -y docker-engine
sudo usermod -aG docker $(whoami)

echo "Logout and login to complete" 
#
#   docker build -t hashbreaker .
#   docker run -d -v ~/seguranca:/app -p 3000:3000 -p 3001:3001 hashbreaker
