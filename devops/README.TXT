mongodb://admin:abc123@mongodb-headless-service.labs.svc.cluster.local/platforms?authSource=admin


mongodb://rahul:1234@mongo-db-0.mongo-db.development.svc.cluster.local:27017


mongodb://admin:password123@10.108.116.116:27017


mongodb://admin:password123@mongo-service.development.svc.cluster.local:27017





wsl -l -v
wsl –shutdown

minkube start
minkube status
minkube stop

docker context ls
docker context use default


================================
================================
================================


Docker jenkins

docker run -u 0 --privileged --name jenkins -it -d -p 8080:8080 -p 50000:50000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $(which docker):/usr/bin/docker \
  -v /home/jenkins_home:/var/jenkins_home \
  jenkins/jenkins:latest

docker ps

Copy container id

docker logs -f ef97c2875af4(container id)

Check if there is any issue in log

Ip a 

To check ip address

Run Ipaddress:8080 in chrome for jenkins config

Entter initial password from logs

Click install suggested plugins

Admin name pwd
rahul 6542 rahulgupta 
================================
================================
================================



kubectl create namespace development

kubectl get namespaces

kubectl apply -f pvc.yaml -n development

kubectl get pod <pod_name> -o wide -n <namespace>

kubectl get pods -n development -l app=mongo-db

kubectl get all -n development
kubectl delete all --all -n development

kubectl describe pod mongo-db-0 -n development
kubectl get events -n development | grep mongo-db-0

kubectl get pvc -n development
kubectl describe pvc mongodb-pvc -n development
kubectl logs mongo-db-1 -c mongo-db -n development

kubectl delete pods -n development <pod-name-1> <pod-name-2>

kubectl -n development exec -it mongo-db-0 -- sh

kubectl delete pvc --all -n <namespace>

kubectl delete pvc <pvc-name> -n <namespace>

kubectl api-resources|grep StorageClass
kubectl api-resources|grep Statefulset
kubectl api-resources|grep PersistentVolumeclaim

-w is used to watch continuously
-f is used to watch logs continuously






======================================
======================================
docker build -t testnodejsdeploy .

docker images

docker run   --name=testnodejsdeploy   --rm   -p 3000:3000   -e MY_MONGO_URL=mongodb+srv://rahul:1234@cluster0.lvzmiqz.mongodb.net/   testnodejsdeploy

docker login
docker tag testnodejsdeploy rahul65422/testnodejsdeploy:1.0.0
docker push rahul65422/testnodejsdeploy:1.0.0

docker run -it --name my_container f1f2d9b12e57 sh

Docker rmi asdaadad

kubectl get pods --watch

minikube service servicename --url


docker build -t testreactdeploy .
docker run   --name=testreactdeploy   --rm   -p 3000:3000   -e REACT_APP_BASE_URL=http://192.168.49.2:31916/   testreactdeploy
	
docker tag testreactdeploy rahul65422/testreactdeploy:1.0.0
docker push rahul65422/testreactdeploy:1.0.0


sudo nano /etc/hosts

Minikube ip –. Get ip then replace ip

192.168.1.100    mywebsite.com

sudo systemctl restart systemd-resolved

https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/