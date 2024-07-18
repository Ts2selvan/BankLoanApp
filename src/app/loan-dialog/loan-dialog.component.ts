import { Component, OnInit ,Inject} from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loan } from '../models/loan.model';
@Component({
  selector: 'app-loan-dialog',
  templateUrl: './loan-dialog.component.html',
  styleUrls: ['./loan-dialog.component.scss']
})
export class LoanDialogComponent implements OnInit {
  loanForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { customerId: number }
  ) {
    this.loanForm = this.fb.group({
      loanType: ['', Validators.required],
      loanDescription: [''],
      loanAmount: [null, Validators.required],
      maxLoanAmount: [null],
      loanTerm: [null],
      applicationDate: [new Date()],
      interestRate: [null],
      monthlyPayment: [null],
      loanStatus: ['Pending'],
      approvalDate: [null],
      creditScore: [null, Validators.required],
      loanDocumentsVerified: [false]
    });
  }


  ngOnInit(): void {
  }
  onCancel(): void {
    this.dialogRef.close();
  }

  onApplyLoan(): void {
    if (this.loanForm.valid) {
      const loan: Loan = {
        customerId: this.data.customerId,
        ...this.loanForm.value
      };
      this.dialogRef.close(loan);
    }
  }
}
