# ELTE software technology laboratory project repository

## This repository contains a browser and test automation project and the tools related to it.



##### Note about the following checklist:
* Follow the instructions on this checklist to set up the project on your machine locally.
* These instructions are applicable on a windows machine, if your running a different Os then consult the internet for the OS specific way to solve the certain step.
* All highlighted texts are command that should be ran in a windows terminal (cmd) unless specified otherwise.

## Set up the project:

* Install Docker- [Docker official site](https://www.docker.com/products/docker-desktop "The official site of Docker desktop")
* Install Minikube - `choco install minikube`
  * Install Chocolatey package manager on windows - 
  ```
  @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
  ```
  * Verify Chocolatey installation - `choco`
* Install KubeCtl - `choco install kubernetes-cli`
  * Verify Kubectl installation: `kubectl version --client`
* Start Minikube locally - : `minikube start --vm-driver=hyperv`
  * [Enable Hardware level virtualization szintű](https://www.isumsoft.com/computer/enable-virtualization-technology-vt-x-in-bios-or-uefi.html)
  * [Enable Hyper-V & Containers features in windows](https://www.spiria.com/en/blog/web-applications/enabling-windows-containers-windows-10/)
* Set up Selenium grid on the local k8s cluster:
  * Create Selenium hub deployment- `kubectl apply -f kubectl/selenium-hub-deployment.yml`
  * Create Selenium-hub ingress:
    * Enable Ingress feature in Minikube - `minikube addons enable ingress`
    * Create an Ingress for the Selenium-hub - `kubectl apply -f kubectl/selenium-hub-deployment-ingress.yml`
  * Create Selenium node-chrome deployment - `kubectl apply -f kubectl/selenium-node-chrome-deployment.yml`
  * Create Selenium node-firefox deployment - `kubectl apply -f kubectl/selenium-node-firefox-deployment.yml`
  * Create Selenium node-opera deployment - `kubectl apply -f kubectl/selenium-node-opera-deployment.yml`
* Start kubectl dashboard - `minikube dashboard`
* Run e2e test with the selenium-hub in the k8s cluster - `npm run e2e`

...

* Stop Minikube - `minikube stop`


### Run the test application locally

To get a copy of this project, please, pay attention on the instructions bellow. 

#### Getting the project

What things do you need to get this source code and run the sample

`git clone https://github.com/guilhermeps/angular-e2e-sample.git`

####  Installing

Once you have the code you will must install the project dependencies to be able to run it. To do that execute the command bellow via terminal inside the project folder:

`npm install`

#### Running the application

After all the dependencies installed you are finally able to run the application. To do that excecute the command bellow:

`ng serve`

#### Executing e2e tests

To execute all e2e tests, the main purpose of this project, just run the command bellow:
This command assumes you have the k8s cluster set up and running locally on your machine, 
if not make sure to follow the instructions in the checklist.

`ng e2e`

##### Authors

- Ferenczfi Jonatán

##### License

This project is used for learn purpose and is under MIT License (I know, just protocol) - see the [LICENSE.md](https://github.com/JohnasBroda/ELTE-szoftech-labor/blob/main/LICENSE)

##### Contributions

All contributions from within the ELTE institution's tutors or students are welcome.
If you are not sure whether you can contribute or not ask: [Zoltán Zvara ](https://github.com/zzvara)
