# What's this?

Frontend WebApplication Boilerplate includes ...

* React & Redux
* webpack
* TypeScript
* PostCSS

## requirement

### on local
* node v10~

### on docker
* docker v17.03~
* docker-compose v1.10.0~

### how to build
* cp -p docker-compose.yml docker-compose.local.yml # edit as you like
* docker-compose -f docker-compose.local.yml build 
* docker-compose -f docker-compose.local.yml run -p 3000:3000 --rm --service-ports app
