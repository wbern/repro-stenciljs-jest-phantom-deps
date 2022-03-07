* clone the repro repo
* run `node common/scripts/install-run-rush.js install`
* cd into `package-a`
* run `npm run test`

You should get this error:

```
[ ERROR ]  runJest: Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './build/cli/args' is not defined by
           "exports" in
           /home/whf962/Repos/repro-stenciljs-jest-phantom-deps/common/temp/node_modules/.pnpm/node_modules/jest-cli/package.json


The script failed with exit code 1
```

Which is because @stencil/core consumed jest v27, and not jest v26.

Jest was supposed to say "hey, you need to add jest [version] and jest-cli [version]"
