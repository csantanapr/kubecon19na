#!/bin/bash

docker build . -t quay.io/csantanapr/kubecon-express
docker push quay.io/csantanapr/kubecon-express
