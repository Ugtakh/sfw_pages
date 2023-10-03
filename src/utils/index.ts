import { CURRENCY, MONTHS_IN_YEAR } from "./constants";
import {
  Errors,
  InitialState,
  initialState,
  Prepayments,
  Schedule,
} from "./types";
import { FIELD_VALIDATIONS } from "./validations";
import { eachMonthOfInterval, getDaysInMonth } from "date-fns";

function toNumber(value: any) {
  const number = parseFloat(value.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(number)) {
    return 0;
  }
  return number;
}

function toRoundNumber(value: number) {
  return Math.round(value);
}

function toCurrency(value: number | undefined): string {
  if (!value || value <= 0) return "-";

  const formattedValue = Math.round(Number(value) * 100) / 100;

  return formattedValue.toLocaleString("en-US", {
    // currency: CURRENCY,
    // style: "currency",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

function calculateEmiOutcome(
  loanAmount: number,
  interestRate: number,
  loanTenure: number,
  prepayments: Prepayments
) {
  // EMI Details

  const monthlyInterestRate = interestRate / 100;
  const totalPayments = loanTenure * MONTHS_IN_YEAR;
  const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
  // ((( 1 + F10  ) ^ F9) - 1) / (F10 * (1 + F10) ^ F9)
  // DF = (( 1 + r ) ^ n) - 1 / (r * (1 + r) ^ n)
  const discountFactor =
    (Math.pow(1 + monthlyInterestRate, loanTenure) - 1) /
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure));

  const monthlyPayment = loanAmount / discountFactor;
  const date = eachMonthOfInterval({
    start: new Date("2023-7-21"),
    end: new Date("2024-6-21"),
  });

  const schedule = [];
  let principal = loanAmount;
  for (let i = 0; i < loanTenure; i++) {
    let monthlyInterest = principal * monthlyInterestRate;
    let monthlyPrincipal = monthlyPayment - monthlyInterest;
    schedule.push({
      number: i + 1,
      date: date[i],
      rangeOfMonth: getDaysInMonth(date[i]),
      monthlyInterestRate,
      monthlyPayment,
      monthlyInterestPayment: monthlyInterest,
      monthlyPrincipal: monthlyPrincipal,
      principal: principal,
    });
    principal = principal - monthlyPrincipal;
  }

  // schedule.push({
  //   month: i,
  //   principalPayment,
  //   interestPayment,
  //   totalPayment,
  //   principalOutstanding,
  //   cumulativeInterest: cumulativeInterest,
  //   cumulativePrincipal: cumulativePrincipal,
  // });

  return {
    schedule,
  };
}

function isNumber(value: any) {
  return !isNaN(Number(value));
}

function validateField(
  state: InitialState,
  fieldName: keyof Errors
): string | undefined {
  const fieldValidationRules = FIELD_VALIDATIONS[fieldName];
  if (!fieldValidationRules) {
    return undefined;
  }

  const fieldValue = state[fieldName];
  const failedValidationRule = fieldValidationRules.find(
    (rule) => !rule.test(fieldValue)
  );

  if (failedValidationRule) {
    return failedValidationRule.message;
  }

  return undefined;
}

function validateForm(state: typeof initialState) {
  const errors: Errors = {};

  for (const fieldName of Object.keys(FIELD_VALIDATIONS) as Array<
    keyof Errors
  >) {
    const errorMessage = validateField(state, fieldName);
    if (errorMessage) {
      errors[fieldName] = errorMessage;
    }
  }

  return errors;
}

const formatter = (value: any) => toCurrency(value);

const pieFormatter = ({ percent }: any) => `${(percent * 100).toFixed(0)}%`;

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export {
  toCurrency,
  calculateEmiOutcome,
  toNumber,
  toRoundNumber,
  isNumber,
  formatter,
  pieFormatter,
  validateForm,
  classNames,
};
