# HELTH Dashboard

A PoC-kind of a health-Dashboard - Made with Redwood in only a few hours. Complete with Admin-Dashboard and Identitiy-Integration.

## Demo
[Click me!](https://helthapp.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e21241a5-d193-4048-a6da-71c143570727/deploy-status)](https://app.netlify.com/sites/helthapp/deploys)

## TODOs
- Service page with Incident Reports and Report Comments
- Implement dbAuth
- Add integration Endpoints for external systems
- Add automatic checks of endpoints

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

This project integrates Netlify Identity - You can use Netlify for free for deploying this site, just like we did at `https://helthapp.netlify.app/`!
