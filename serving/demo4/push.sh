#!/bin/bash

docker build . -t quay.io/csantanapr/kubecon-express
docker tag quay.io/csantanapr/kubecon-express dev.local/csantanapr/kubecon-express
docker push quay.io/csantanapr/kubecon-express
