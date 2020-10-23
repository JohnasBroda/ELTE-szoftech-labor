# ELTE Szoftvertechnológia labor 1.

## 1. Előfeltételek

* Docker telepítése - [Docker hivatalos oldala](https://www.docker.com/products/docker-desktop "A Docker desktop hivatalos oldala")
* Minikube telepítése - cmd-ben futtatható parancssal: `choco install minikube`
  * A Chocolatey package manager telepítése windows-on - cmd-ben futtatható parancssal:
  ```
  @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
  ```
  * A Chocolatey megfelelő telepítésének ellenőrzése - cmd-ben futtaható parancssal: `choco`
* KubeCtl telepítése - cmd-ben futtatható paranccsal: `choco install kubernetes-cli`
  * Kubectl telepítésének ellenőrzése: `kubectl version --client`
* Minikube indítása lokálisan - cmd-ben futtatható paranccsal: `minikube start --vm-driver=hyperv --insecure-registry="gcr.io"`
  * [Hardware szintű virtualizáció engedélyezése](https://www.isumsoft.com/computer/enable-virtualization-technology-vt-x-in-bios-or-uefi.html)
  * [Hyper-V és Containers feature-ök engedélyezése windows-ban](https://www.spiria.com/en/blog/web-applications/enabling-windows-containers-windows-10/)
* Selenium grid beüzemelése a lokális clusterben:
  * Selenium hub deployment létrehozása - `kubectl apply -f kubectl/selenium-hub-deployment.yml`
  * Selenium-hub ingress létrehozása:
    * Ingress-ek engedélyezése a minikube-ban - `minikube addons enable ingress`
    * Ingress létrehozása - `kubectl apply -f kubectl/selenium-hub-deployment-ingress.yml`
  * Selenium node-chrome deployment létrehozása - `kubectl apply -f kubectl/selenium-node-chrome-deployment.yml`
  * Selenium node-firefox deployment létrehozása - `kubectl apply -f kubectl/selenium-node-firefox-deployment.yml`
  * Selenium node-opera deployment létrehozása - `kubectl apply -f kubectl/selenium-node-opera-deployment.yml`
* Kubectl dashboard indítása - cmd-ben futtatható paranccsal: `minikube dashboard`

# angular-e2e-sample

A short sample about how to make e2e tests for an Angular 2+ application.

## Getting Started

To get a copy of this project, please, pay attention on the instructions bellow. 

### Getting the project

What things do you need to get this source code and run the sample

`git clone https://github.com/guilhermeps/angular-e2e-sample.git`

###  Installing

Once you have the code you will must install the project dependencies to be able to run it. To do that execute the command bellow via terminal inside the project folder:

`npm install`

### Running the application

After all the dependencies installed you are finally able to run the application. To do that excecute the command bellow:

`ng serve`

## Executing e2e tests

To execute all e2e tests, the main purpose of this project, just run the command bellow:

`ng e2e`

## Authors

- Guilherme Silva - *initial work made until now*

## License

This project is used for learn purpose and is under MIT License (I know, just protocol) - see the [LICENSE.md](https://github.com/guilhermeps/angular-e2e-sample/blob/master/LICENSE)

## Contributions

All contributions are welcome, so, if you want to contribute doing some code review or making this sample greater, let me know. As I said,
you will be very welcome. After the job done, we can take some :beers: 
