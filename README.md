# NASA API Serverless Demo

Demonstrates Claudia.js, Claudia API Builder, AWS API Gateway, and AWS Lambda to access NASA's public APIs.

Requires your own personal [NASA API Key](https://api.nasa.gov/index.html#apply-for-an-api-key).

## Module Usage

Requires [nasa-api-module](https://github.com/garystafford/nasa-api-module). There are two ways to add this dependency. Add to `package.json`

To install module from your private npm repository

```bash
npm install nasa-api-module
```

```text
{
  "dependencies": {
    "nasa-api-module": "^1.0.19"
  }
}
```

To install module from the existing GitHub project

```text
{
  "dependencies": {
    "nasa-api-module": "github:garystafford/nasa-api-module#semver:1.0.19"
  }
}
```

Add to JavaScript file

```javascript
const nasa = require('nasa-api-module');

return new Promise((resolve, reject) => {
    nasa.getAstronomyPicOfDay((err, body) => {
        if (err) {
            return reject(err)
        }

        return resolve(body)
    })
})
```
