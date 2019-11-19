# Node.js Knative Appsody Kubecon NA 2019 demos

# Knative Serving

## Demo 1: hello knative

Deploy knative app
```
kubectl apply -f service.yaml
```

## Demo 2: Node.js express

Build and Push container image:
```
./push.sh
```

Deploy App
```
kubectl apply -f service.yaml
```
## Demo 3: Build to manage nodejs-express

Add build to manage libs
```javascript
require('./health.js')(app);
require('./metrics.js')(app);
require('./logger.js')(app);
```

Run locally
```
npm run dev
```

Build and Push container image
```
push.sh
```

Deploy App
```
kubectl apply -f service.yaml
```

## Demo 4: Appsodify and Knativify

Appsodify and Knativify an existing node.js express App

1. Install appsody
    ```
    brew install appsody/appsody/appsody
    ```
1. Edit project file `.appsody-config.yaml` name to `express-appsody`
    File `.appsody-config.yaml` looks like this:
    ```yaml
    project-name: express-appsody
    stack: appsody/nodejs-express:0.2
    ```
1. Appsodify with ` incubator/nodejs-express` and template  `none` :
    ```
    appsody init incubator/nodejs-express none
    ```
1. Change `package.json` npm scripts :
    ```json
    {
    "start": "appsody run",
    "dev": "appsody debug",
    "deploy": "appsody deploy --knative -t quay.io/csantanapr/kubecon-express-appsody --push"
    }
   ```
1. Run locally
    ```
    npm start
    ```
    - Application endpoint: http://localhost:3000/
    - Health endpoint: http://localhost:3000/health
    - Liveness endpoint: http://localhost:3000/live
    - Readiness endpoint: http://localhost:3000/ready
    - Metrics endpoint: http://localhost:3000/metrics
    - Dashboard endpoint: http://localhost:3000/appmetrics-dash (development only)
1. Deploy Knative Appsody based App
    ```
    npm run deploy
    ```

