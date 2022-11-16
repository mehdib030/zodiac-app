// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //API_REGISTRATION_URL: 'https://9acwyarpuc.execute-api.us-east-1.amazonaws.com/dev/registration-api',
  API_REGISTRATION_URL: 'https://a0uzk1m2rk.execute-api.us-east-1.amazonaws.com/dev/registration-api',
 // API_CONTACTS_URL: 'https://9acwyarpuc.execute-api.us-east-1.amazonaws.com/dev/contacts-api',
  API_CONTACTS_URL: 'https://a0uzk1m2rk.execute-api.us-east-1.amazonaws.com/dev/contacts-api',
  //API_REQUEST_URL:'https://9acwyarpuc.execute-api.us-east-1.amazonaws.com/dev/request-api',
  API_REQUEST_URL:'https://a0uzk1m2rk.execute-api.us-east-1.amazonaws.com/dev/request-api',
  //API_REQUESTOR_URL:'https://9acwyarpuc.execute-api.us-east-1.amazonaws.com/dev/requetor-api',
  API_REQUESTOR_URL:'https://a0uzk1m2rk.execute-api.us-east-1.amazonaws.com/dev/requestor-api',
  //API_UPLOAD_URL:'https://9acwyarpuc.execute-api.us-east-1.amazonaws.com/dev/famous_people/mb',
  API_UPLOAD_URL:'https://a0uzk1m2rk.execute-api.us-east-1.amazonaws.com/dev/upload-api',

  AWS_REGION: 'us-east-1',
  cognito: {
    userPoolId: 'us-east-1_RlsCVMbsQ',
    userPoolWebClientId: '6qu3pnb4e1c8vnnamncmtat65k',
  },
 
};

//const API_REGISTRAION_URL = 'https://9acwyarpuc.execute-api.us-east-1.amazonaws.com/dev';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
