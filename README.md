# Cellar
AEM Vault wrapper for node

## Install

CLI:
```shell
npm install -g aem-cellar
```

Module:
```shell
npm install --save-dev aem-cellar
```

## #pull
```
cellar pull -h

cellar pull --source content/example --dest .vaulted-content

```
### options
#### source
Type: `string`

Directory path on AEM/CRX instance.
#### dest
Type: `string`

Destination path on local filesystem.
#### host
Type: `string`
Default: `localhost`

hostname to running AEM instance.
#### port
Type: `number`
Default: `4502`

Port for running AEM instance.
#### username
Type: `string`
Default: `admin`

Username for authentication.
#### password
Type: `string`
Default: `admin`

Password for authentication.

## #push
```
cellar push -h

cellar push --source content/example --dest /

```
### options
#### source
Type: `string`

Directory path of local environment
#### dest
Type: `string`
Default: `/`

Destination path to push to, usually just `/`
#### host
Type: `string`
Default: `localhost`

hostname to running AEM instance.
#### port
Type: `number`
Default: `4502`

Port for running AEM instance.
#### username
Type: `string`
Default: `admin`

Username for authentication.
#### password
Type: `string`
Default: `admin`

Password for authentication.

## #clean
```
cellar clean -h

cellar clean example-folder/

```
This is for cleaning up a local path and removing the folder. Basically a wrapper around `rm -rf`
