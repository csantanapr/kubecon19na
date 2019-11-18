

## demo 4
appsody init incubator/nodejs-express none

npm start
npm run dev


appsody run
appsody debug
appsody build

File `.appsody-config.yaml`
```yaml
project-name: demo4
stack: appsody/nodejs-express:0.2
```

appsody deploy --knative --push-url quay.io/csantanapr/kubecon-express-appsodify