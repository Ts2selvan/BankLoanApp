import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service'; 
import { empty } from 'rxjs';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer = {
    customerId: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    occupationType: '',
    addressId: 0,
    address: {
      addressId: 0,
      houseNo: '',
      city: '',
      district: '',
      state: '',
      landmark: '',
      pincode: 0,
      country: ''
    }
  };
  customers: Customer[] = [];


  constructor(private authService:AppService,private router:Router) { }

  ngOnInit(): void {
    this.loadCustomers();
  
  }
 
  loadCustomers() {
    debugger;
    this.authService.getCustomers().subscribe(
      
      (response: any) => {
        debugger;
        this.customers = response;
      },
      error => {
        debugger;
        console.error('Error fetching customers', error);
      }
    );
  }
  onSubmit() 
    

    {
      if (this.customer.customerId === 0){
    this.authService.addCustomer(this.customer).subscribe(
      response => {
         alert('Added successfully!');
         this.customer = {
          customerId: 0,
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: 0,
          dateOfBirth: '',
          gender: '',
          maritalStatus: '',
          occupationType: '',
          addressId: 0,
          address: {
            addressId: 0,
            houseNo: '',
            city: '',
            district: '',
            state: '',
            landmark: '',
            pincode: 0,
            country: ''
          
          }
         
        };
        this.router.navigate(['/loan']); 
      },
      error => {
        alert('Adding failed!');
      }
    );
  }
  else{
    this.authService.updateCustomer(this.customer).subscribe(
      response => {
        alert('Customer updated successfully!');
        this.resetForm();
        this.loadCustomers();
      },
      error => {
        alert('Failed to update customer!');
        console.error('Error updating customer', error);
      }
    );
  }
    
  }
  editCustomer(customer: Customer): void {
    this.customer = { ...customer };
  }

  deleteCustomer(customerId: number): void {
    debugger;
    this.authService.deleteCustomer(customerId).subscribe(
      response => {
        debugger;
        alert('Customer deleted successfully!');
        this.loadCustomers();
      },
      error => {
        debugger;
        alert('Failed to delete customer!');
        console.error('Error deleting customer', error);
      }
    );
  }

  resetForm(): void {
    this.customer = {
      customerId: 0,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: 0,
      dateOfBirth: '',
      gender: '',
      maritalStatus: '',
      occupationType: '',
      addressId: 0,
      address: {
        addressId: 0,
        houseNo: '',
        city: '',
        district: '',
        state: '',
        landmark: '',
        pincode: 0,
        country: ''
      }
    };
  }

}
