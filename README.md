# kustomize-microservices

## JavaScript Node.js Microservices 

This repo is intended to display a basic setup of TypeScript/JavaScript microservices (in this case, a React SPA frontend with an Express.js API backend) for deployment to Kubernetes using Kustomize.

### Backend

Initial creation of the backend uses [express-generator-typescript](https://www.npmjs.com/package/express-generator-typescript) with [k8s probe handler](./server/src/routes/k8sProbes.ts).

#### Build
Backend will be containerized using the Node.js Docker base container, using a multi-step build - for specific steps see the [Dockerfile](./server/Dockerfile).

### Frontend

Initial creation of the frontend uses [create-react-app](https://www.npmjs.com/package/create-react-app) with the [TypeScript](https://create-react-app.dev/docs/adding-typescript/) flavor.

#### Build
Frontend will be containerized using a multi-step build, ultimately served using the Nginx Docker base container - for specific steps see the [Dockerfile](./client/Dockerfile).

Note here that our (Readiness Probe)[https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes] is the presence of our compiled index.html (being served by Nginx)[./environments/base/client/deployment.yaml#L31].