import { ChangeEvent, FocusEvent } from "react";

interface Schedule {
  month: number;
  principalPayment: number;
  interestPayment: number;
  totalPayment: number;
  principalOutstanding: number;
  cumulativeInterest: number;
  cumulativePrincipal: number;
}

interface ISchedule {
  number: number;
  date: Date;
  rangeOfMonth: number;
  monthlyInterestRate: number;
  monthlyPayment: number;
  monthlyInterestPayment: number;
  monthlyPrincipal: number;
  principal: number;
}

interface Outcome {
  schedule: ISchedule[];
}

// Schedule[]

// emi: number;
// totalInterestPayable: number;
// principalAmount: number;
// totalPayment: number;

type Prepayments = {
  [key: number]: number;
};

interface Errors {
  loanAmount?: string;
  interestRate?: string;
  loanTenure?: string;
}

interface InitialState {
  loanAmount: number;
  interestRate: number;
  loanTenure: number;
  prepayments: Prepayments;
  outcome: Outcome;
  errors: Errors;
}

const initialState: InitialState = {
  loanAmount: 0,
  interestRate: 0,
  loanTenure: 0,
  prepayments: {},
  outcome: {
    schedule: [],
  },
  errors: {},
};

// emi: 0,
// totalInterestPayable: 0,
// principalAmount: 0,
// totalPayment: 0,

interface OutcomeProps {
  label: string;
  value: number | undefined;
}

interface TProps {
  children: any;
  colSpan?: number;
}

type LoanRepaymentScheduleTableProps = {
  onCalculate: () => void;
  state: InitialState;
  setState: (stata: any) => void;
};

interface TextFieldProps {
  label?: string;
  name: string;
  type?: string;
  unit?: string;
  placeholder: string;
  value?: any;
  error?: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

interface ValidationRule {
  test: (value: any) => boolean;
  message: string;
}

interface FieldValidation {
  [key: string]: ValidationRule[];
}

export type {
  Errors,
  Schedule,
  ISchedule,
  Outcome,
  Prepayments,
  TextFieldProps,
  OutcomeProps,
  TProps,
  InitialState,
  LoanRepaymentScheduleTableProps,
  ValidationRule,
  FieldValidation,
};

export { initialState };
