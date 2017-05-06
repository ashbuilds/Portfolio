# Deploy Loopback App on Azure

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

[Loopback](http://loopback.io/) is pretty awesome. [Azure](https://azure.microsoft.com/en-us/) is also pretty awesome. Getting them to play together nicely is not awesome. This repo will help you get your app up and running quickly.

### How the app was created

I scaffolded the app using the standard ```slc``` CLI.

```
slc loopback

```

This app is on node version 5.0.0 but it should work with lower versions.

### Changes to the app

When you deploy an app to an Azure Site, it looks for an entry point in the root folder. Loopback's entry point is in the server folder (server/server.js). This causes problems for the Azure (despite the NPM main value being set correctly. 

Azure allows you to change the deployment command, deployment settings, IISNode settings, and so on. I couldn't not figure out the right combination of changes that made the site run.

The easiest way is to provide an entry point in the root folder.

In the root folder, create ```app.js``
```js
var app = require('./server/server.js');

app.start();

```

That's it. It should work now.
