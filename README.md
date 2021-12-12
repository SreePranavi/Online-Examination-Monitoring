# Online-Examination-Monitoring-Microservices-Architecture-
Implementation of an online exam proctoring tool with the main focus on microservices architecture.

## Specs

OS : Windows
Requirements : Docker, minikube, kubectl
Run windows powershell as administrator
Enable the microsoft IIS

## Execution Steps

$ minikube start
$ minikube docker-env | Invoke-Expression
$ kubectl cluster-info

The above command gives the cluster-IP.

### In quiz folder,

$ docker build -t quiz-image:v3 .
$ docker run -dp 1000:80 quiz-image:v3

Now, the contents of this container can be accessed at http://localhost:1000/Quiz.html 

$ kubectl apply -f quiz.yaml

The pod and deployment are ready.

$ kubectl apply -f quiz_service.yaml

The service is now exposed, can be accessed at http://*cluster-ip*:30000/Quiz.html

### In authentication folder,

$ docker build -t login-image:v4 .
$ docker run -dp 2000:80 login-image:v4

Now, the contents of this container can be accessed at http://localhost:2000/Login.html 

$ kubectl apply -f login.yaml

The pod and deployment are ready.

$ kubectl apply -f login_service.yaml

The service is now exposed, can be accessed at http://*cluster-ip*:30002/Login.html

### In cam recording folder,

$ docker build -t rec-image:v2 .
$ docker run -dp 1000:80 rec-image:v2

Now, the contents of this container can be accessed at http://localhost:3000/camrec.html 

$ kubectl apply -f rec.yaml

The pod and deployment are ready.

$ kubectl apply -f rec_service.yaml

The service is now exposed, can be accessed at http://*cluster-ip*:30004/camrec.html


***It is to benoted that, the port numbers, docker image names and versions can be changed. The values mentioned here are just compatible with the contents in the YAML file. So just make sure when you change the values, remember to update the YAML files as well.***

### Orchestration commands

**To scale the service up and down, use the following command with the requuired number of replicas.**

$ kubectl scale deployments/*deployment name* --replicas=3

**To update a service, use the following commands on the rebuilt image.**

$ kubectl set image deployments/*deployment name* *deployment name*=*new image name*
$ kubectl rollout status deployments/*deployment name*


