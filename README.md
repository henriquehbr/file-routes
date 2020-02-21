# file-routes
> Scan a filesystem for route files.

`file-routes` is the basis for convention based routing tools in node.  You can use
the output of `file-routes` to load route modules for any web framework.

## Highlights

* Generates routes based on directory structure.
* Caches the results for speed and consistency.
* Framework agnostic.

## Example

This directory strucutre

```
routes/
      `home.js
      |
      `users/
            `:id.js
            `index.js
```

when passed to `file-routes`

```typescript
import fileRoutes, { FileRoutes } from 'file-routes'

const output = fileRoutes('routes')
```

returns the following:

```javascript
var output = [
  {
    path: '/my/project/path/routes/home.js',
    route: '/home'
  },
  {
    path: '/my/project/path/routes/users/:id.js',
    route: '/users/:id'
  },
  {
    path: '/my/project/path/routes/users/index.js',
    route: '/users/'
  }
]
```

## LICENSE
``````
The MIT License (MIT)

Copyright (c) 2018 Kogo Software LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[npm-url]: https://npmjs.org/package/file-routes
[npm-image]: http://img.shields.io/npm/v/file-routes.svg