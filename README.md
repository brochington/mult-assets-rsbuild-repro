# Repro

The repo is a repro of a an error with Rsbuild hmr (to my limited understanding)


### Requirements:

- node (LTS probably)
- [rust](https://www.rust-lang.org/)
- [wasm-pack](https://github.com/rustwasm/wasm-pack)

### 

```bash
# At project root

# build wasm bundle
$ npm run build:wasm

# make sure local deps are connected/symlinked
$ npm install 

# run client, start up rsbuild dev
$ npm run client:dev

# In a separate terminal, rebuild wasm

$ npm run build:wasm
```

### Result

Console error:

```
start   Compiling...
error   Compile error: 
Failed to compile, check the errors for troubleshooting.
File: undefined
  × Conflict: Multiple assets emit different content to the same filename index.6123e4e6b3c4c907.hot-update.js
```