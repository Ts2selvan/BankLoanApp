// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    apiUrlRegister: 'http://localhost:5270/api/User/Register',
    apiUrlLogin: 'http://localhost:5270/api/User/Login/',
    apiUrlAddCustomer: 'http://localhost:5270/api/Customer/AddNewCustomer',
    apiUrlUpdateCustomer: 'http://localhost:5270/api/Customer/UpdateCustomer',
    apiUrlDeleteCustomer: 'http://localhost:5270/api/Customer/DeleteCustomer',
    apiUrl: 'http://localhost:5270/api',
    apiUrlforGet: 'http://localhost:5270/GetAll'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
