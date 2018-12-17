'use strict'

module.exports.app = (event, context, callback) =>
  callback(null, {
    statusCode: 200,
    body: `<html><head><title>Hello World</title></head><body>
            <h1>Hello World!</h1>
            <pre>${JSON.stringify(event, null, 2)}</pre>
            <script src="/script"></script>
            </body></html>`,
    headers: {
      'Content-Type': 'text/html',
    },
  })

module.exports.script = (event, _1, callback) =>
  callback(null, {
    statusCode: 200,
    body: 'alert(1)',
    headers: {
      'Content-Type': 'text/javascript',
    },
  })
