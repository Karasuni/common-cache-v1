<!-- [![Build Status](https://travis-ci.org/mgechev/ngresizable.svg?branch=master)](https://travis-ci.org/mgechev/ngresizable) -->

# Common Cache

Simple, tree-shakable, AoT, Universal and Web Worker friendly common cache service for Angular (2 and beyond).
Offers MemoryStorage, LocalStorage, SessionStorage and IndexedDB services.

# How to use?

```
$ npm i common-cache --save
```

# Integration

Should work out of the box with webpack, respectively angular-cli. All you need to do is to include `NgResizableModule`:

```ts
import { CommonCache } from 'common-cache';

@NgModule({
  imports: [CommonCacheModule],
  ...
})
class AppModule {}
```

## Angular Seed

```ts
// tools/config/project.config.ts

...
// Add packages (e.g. common-cache)
let additionalPackages: ExtendPackages[] = [{
  name: 'common-cache',
  path: 'node_modules/common-cache/common-cache.bundle.js'
}];

this.addPackagesBundles(additionalPackages);
...
```

# Acknowledgements
This package is based on mgechv's [ngresizable](https://github.com/mgechev/ngresizable) and [module publishing guide](http://blog.mgechev.com/2017/01/21/distributing-an-angular-library-aot-ngc-types/).

# License

MIT

