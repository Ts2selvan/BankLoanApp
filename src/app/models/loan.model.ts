export interface Loan {
    loanId?: number;
    customerId?: number;
    loanType?: string;
    loanDescription?: string;
    loanAmount?: number;
    maxLoanAmount?: number;
    loanTerm?: number;
    applicationDate?: Date;
    interestRate?: number;
    monthlyPayment?: number;
    loanStatus?: string;
    approvalDate?: Date;
    creditScore?: number;
    loanDocumentsVerified?: boolean;
  }
  