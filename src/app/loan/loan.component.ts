import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private authService:AppService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }
  loadCustomers() {
    debugger;
    var customers1
    this.authService.getCustomers().subscribe(
      
      (response: any) => {
        debugger;
        this.customers = [response[response.length - 1]];
        customers1 = response;
      },
      error => {
        debugger;
        console.error('Error fetching customers', error);
      }
    );
  }
  // editCustomer(customer: Customer): void {
  //   this.customer = { ...customer };
  // }
  applyLoan() {
    // Logic for applying for a loan
    console.log('Applying for a loan');
  }

  approveLoan() {
    // Logic for approving a loan
    console.log('Approving a loan');
  }
}
