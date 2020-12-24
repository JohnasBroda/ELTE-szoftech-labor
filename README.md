# ELTE software technology laboratory project repository

## This repository contains a browser and test automation project and the tools related to it

##### Note about the following checklist

* Follow the instructions on this checklist to set up the project on your machine locally.
* These instructions are applicable on a windows machine, if your running a different Os then consult the internet for the OS specific way to solve the certain step.
* All highlighted texts are command that should be ran in a windows terminal (cmd) unless specified otherwise.

## Set up the project

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
  * [Enable Hardware level virtualization](https://www.isumsoft.com/computer/enable-virtualization-technology-vt-x-in-bios-or-uefi.html)
  * [Enable Hyper-V & Containers features in windows](https://www.spiria.com/en/blog/web-applications/enabling-windows-containers-windows-10/)
* Set up Selenium grid on the local k8s cluster:
  * Create Selenium hub deployment- `kubectl apply -f kubectl/selenium-hub-deployment.yml`
  * Create Selenium-hub ingress:
    * Enable Ingress feature in Minikube - `minikube addons enable ingress`
    * Create an Ingress for the Selenium-hub - `kubectl apply -f kubectl/selenium-hub-deployment-ingress.yml`
    * Expose The selenium-hub deployment - `npm run expose-selenium-grid`
  * Create Selenium node-chrome deployment - `kubectl apply -f kubectl/selenium-node-chrome-deployment.yml`
  * Create Selenium node-firefox deployment - `kubectl apply -f kubectl/selenium-node-firefox-deployment.yml`
  * Create Selenium node-opera deployment - `kubectl apply -f kubectl/selenium-node-opera-deployment.yml`
* Start kubectl dashboard - `minikube dashboard`
* Run e2e test with the selenium-hub in the k8s cluster - `npm run e2e`

You can run the .side projects with either `npm run side-test` or `npm run github-side`
These test suites were recorded using the [SELENIUM IDE browser extension](https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd)
These .side projects will be run on your local k8s cluster so make sure its running beforehand.
The selenium-side-runner cli is used to execute these test suites, this should be installed in you project folder by running `npm i` but you can also you a global install of the cli to execute these test suites `npm i -g selenium-side-runner`
The cli uses the .side.yml config file by default, although you can specify a different config file by providing the --config flag.

Login to docker so you can push your locally built docker image to the github package registry.
Run the following command: `docker login -u <github-username> -p <github-access-token> docker.pkg.github.com`
Important note: The access token that you create on github for this operation must have all packages related permissions.

Create and configure a secret that will be used by k8s when pulling the docker image for the deployment's pod.
Rune the following command: `kubectl create secret docker-registry regcred --docker-server=https://docker.pkg.github.com --docker-username=<your-github-username> --docker-password=<your-access-token> --docker-email=<your-github-user-email>`
Important note: The github account that you use here should have permission to read and write the project's repository also when you create an access token for this secret you must provide all package related permissions for the token.

Build the docker image of the angular project.
Run `docker build .` from the project's root directory.

Tag the locally built docker image so that you can push it into the github package registry.
Run the following command: `docker tag <docker-image-ID> docker.pkg.github.com/johnasbroda/elte-szoftech-labor/angular-e2e-app:<new-version>`
Important note: If you want to see your changes in the cluster you must specify version as 'latest'.
To obtain the Id of the docker image you eant to tag you can you run 'docker image ls' command and browse the displayed table.

Push the locally built and tagged docker image into github's package registry so it can be used by the k8s cluster.
Run the following command: `docker push docker.pkg.github.com/johnasbroda/elte-szoftech-labor/angular-e2e-app:latest`
Important note: you can specify versions other than 'latest' but the pre configured k8s deployment always tries to pull the 'latest' image from the github package registry.

Run command: `kubectl get pod` and search for the pod which you want to open a shell into,
copy its name into `kubectl exec --stdin --tty <pod-name> -- /bin/bash` command and run it.
Now ur current terminal session is switch from your machine to the selected pod's terminal.

...

* Stop Minikube - `minikube stop`

### Run the test application locally

To get a copy of this project, please, pay attention on the instructions bellow.

#### Getting the project

What things do you need to get this source code and run the sample

`git clone https://github.com/guilhermeps/angular-e2e-sample.git`

#### Installing

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
If you are not sure whether you can contribute or not ask: [Zoltán Zvara](https://github.com/zzvara)
