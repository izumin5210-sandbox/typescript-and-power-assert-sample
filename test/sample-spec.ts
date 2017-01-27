import 'node'
import 'mocha'
import * as assert from 'power-assert'

// $ mocha --compilers ts:espower-typescript/guess test[><]*-spec.ts
// /Users/izumin/src/github.com/izumin5210-sandbox/typescript-and-power-assert-sample/node_modules/typescript-simple/index.js:183
//             var text = file.text;
//                            ^
//
// TypeError: Cannot read property 'text' of undefined
//     at TypeScriptSimple.toJavaScript (/Users/izumin/src/github.com/izumin5210-sandbox/typescript-and-power-assert-sample/node_modules/typescript-simple/index.js:183:28)
//     at TypeScriptSimple.compile (/Users/izumin/src/github.com/izumin5210-sandbox/typescript-and-power-assert-sample/node_modules/typescript-simple/index.js:70:25)
//     at Object.loadTypeScript (/Users/izumin/src/github.com/izumin5210-sandbox/typescript-and-power-assert-sample/node_modules/espower-typescript/index.js:19:22)
//     at Module.load (module.js:487:32)
//     at tryModuleLoad (module.js:446:12)
//     at Function.Module._load (module.js:438:3)
//     at Module.require (module.js:497:17)
//     at require (internal/module.js:20:19)
//     at /Users/izumin/src/github.com/izumin5210-sandbox/typescript-and-power-assert-sample/node_modules/mocha/lib/mocha.js:222:27
//     at Array.forEach (native)
//     at Mocha.loadFiles (/Users/izumin/src/github.com/izumin5210-sandbox/typescript-and-power-assert-sample/node_modules/mocha/lib/mocha.js:219:14)
//     at Mocha.run (/Users/izumin/src/github.com/izumin5210-sandbox/typescript-and-power-assert-sample/node_modules/mocha/lib/mocha.js:487:10)
//     at Object.<anonymous> (/Users/izumin/src/github.com/izumin5210-sandbox/typescript-and-power-assert-sample/node_modules/mocha/bin/_mocha:459:18)
//     at Module._compile (module.js:570:32)
//     at Object.Module._extensions..js (module.js:579:10)
//     at Module.load (module.js:487:32)
//     at tryModuleLoad (module.js:446:12)
//     at Function.Module._load (module.js:438:3)
//     at Module.runMain (module.js:604:10)
//     at run (bootstrap_node.js:394:7)
//     at startup (bootstrap_node.js:149:9)

describe('test', () => {
  it('is expected to fail', () => {
    assert(1 + 2 === 5)
  })

  it('is expected to pass', () => {
    assert(1 + 2 === 5)
  })
})
