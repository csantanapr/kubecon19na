#!/bin/bash

docker build . -t quay.io/csantanapr/kubecon-hello
docker push quay.io/csantanapr/kubecon-hello