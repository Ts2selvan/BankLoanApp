

export interface Customer {
    customerId: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    dateOfBirth: string; 
    gender: string;
    maritalStatus: string;
    occupationType: string;
    addressId: number;
    address: Address;
  }
  
  export interface Address {
    addressId: number;
    houseNo: string;
    city: string;
    district: string;
    state: string;
    landmark: string;
    pincode: number;
    country: string;
  }
  