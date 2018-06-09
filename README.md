**Requierements**

Node 6.9.0 or higher

```
$ node -v
```

NPM 3.0.0 or higher

```
$ npm -v
```

**Install Node (and npm) with a Node version manager.**

```
$ npm install -g n

$ n stable
```

**Typescript**

`$ npm install -g typescript`

**Angular CLI**

`$ npm install -g @angular/cli`

**Create first project with cli tool**

`ng new angular-hello-world`

**Run app with default values**

```
$ ng serve
```

**Or specify custome default values**

```
$ ng serve --host 192.168.1.4 --port 80
```

**Alternatively, you can set the `port` and `host` values in `.angular-cli.json`**

```json
"defaults": {
    "serve": {
      "port": 80,
      "host": "192.168.1.4"
    }
}
```