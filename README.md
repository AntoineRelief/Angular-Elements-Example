# Angular Elements

Source : [Medium](https://medium.com/@smarth55/angular-elements-use-them-everywhere-including-your-angular-app-697f8e51e08d)

## Build component:

```
ng build click-tracker --tsConfig=projects/click-tracker/tsconfig.lib.prod.json
```

## Build App that renders component:

```
ng build click-tracker-element --aot --buildOptimizer --extractCss --extractLicenses --no-namedChunks --optimization --no-sourceMap --no-vendorChunk
```

## Generate Web Component:

```
cat dist/click-tracker-element/runtime-es5.js dist/click-tracker-element/polyfills-es5.js dist/click-tracker-element/main-es5.js > dist/ct-element.js
```

## Serve in Angular:

Put the Web component file into assets folder of src folder.

```
ng serve
```

## Serve in VanillaJS

Put the Web component file into assets folder of vanillajs folder.

```
php -S localhost:4200
```