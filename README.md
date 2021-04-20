# Feed API

## Description

A simple rest api project to manage feeds

## Installation

Use the [kubectl](https://kubernetes.io/docs/tasks/tools/) command-line tool to deploy and manage the application.

## Usage

### Change Eks Cluster

```bash
aws eks --region {region} update-kubeconfig --name {eks-cluster}
```

### Apply deployment and service
```bash
kubectl apply -f deploy/deployment.yaml
kubectl apply -f deploy/service.yaml
```

### Check
```bash
kubectl get deployments
kubectl get services
```

