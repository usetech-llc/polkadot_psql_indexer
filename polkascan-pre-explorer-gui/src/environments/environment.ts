// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//   jsonApiRootUrl: 'https://polkascan.io/kusama-cc3/api/v1/',
//   jsonApiRootUrl: 'https://localhost:44325/',

export const environment = {
  production: false,
  jsonApiRootUrl: 'https://polkascan.io/kusama-cc3/api/v1/',
  networkName: 'Kusama',
  networkTokenSymbol: 'KSM',
  networkTokenDecimals: 12
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
