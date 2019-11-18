

## Demo 4: Appsodify and Knativify
Takes a normal express nodejs application and appsodify

Run appsody with stack ` incubator/nodejs-express` and template  `none` :
```
appsody init incubator/nodejs-express none
```

Edit project file `.appsody-config.yaml` name to `express-appsody`

File `.appsody-config.yaml` looks like this:
```yaml
project-name: express-appsody
stack: appsody/nodejs-express:0.2
```

appsody run
appsody debug
appsody build

appsody deploy --knative -t quay.io/csantanapr/kubecon-express-appsody --push
appsody deploy --knative -t quay.io/csantanapr/express-appsody


Application endpoint: http://localhost:3000/
Health endpoint: http://localhost:3000/health
Liveness endpoint: http://localhost:3000/live
Readiness endpoint: http://localhost:3000/ready
Metrics endpoint: http://localhost:3000/metrics
Dashboard endpoint: http://localhost:3000/appmetrics-dash (development only)

Change `package.json` scripts `start` and `dev`
Now update npm scripts:
```json
{
  "dev": "appsody debug",
  "start": "appsody run",
  "deploy": "appsody deploy --knative -t quay.io/csantanapr/kubecon-express-appsody --push"
}
```





note: doesn't work image too long? hu?

