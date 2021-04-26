// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  POST_API_URL: 'http://18.189.21.84:5050',
  regexEmail:
    "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$",
  regexPassword:
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',

  firebaseConfig: {
    apiKey: 'AIzaSyDfM6_TQ84heSin7W3uqD8wdV1YsCKm40Y',
    authDomain: 'fakeface-63229.firebaseapp.com',
    projectId: 'fakeface-63229',
    storageBucket: 'fakeface-63229.appspot.com',
    messagingSenderId: '1007667273001',
    appId: '1:1007667273001:web:ee6b63bc2a4e854830eb38',
    measurementId: 'G-GMS1SW773F',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
