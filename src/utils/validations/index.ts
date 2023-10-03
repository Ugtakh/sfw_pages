import { FieldValidation } from "../types";
import { isNumber } from "..";

const FIELD_VALIDATIONS: FieldValidation = {
  loanAmount: [
    {
      test: (value) => !!value,
      message: "Хүсч буй зээлийн хэмжээгээ оруулна уу",
    },
    {
      test: (value) => isNumber(value),
      message: "Зээлийн хэмжээгээ зөвхөн тоогоор оруулна уу",
    },
    {
      test: (value) => value > 0,
      message: "Хүсч буй зээлийн хэмжээ нь хамгийн багадаа 10.000 байна",
    },
  ],
  interestRate: [
    { test: (value) => !!value, message: "Зээлийн хүүгээ оруулна уу" },
    {
      test: (value) => isNumber(value),
      message: "Interest rate must be a numeric value",
    },
    {
      test: (value) => value > 0,
      message: "Interest rate must be greater than 0",
    },
  ],
  loanTenure: [
    { test: (value) => !!value, message: "Зээлийн хугацааг оруулна уу" },
    {
      test: (value) => isNumber(value),
      message: "Loan tenure must be a numeric value",
    },
    {
      test: (value) => value > 0,
      message: "Loan tenure must be greater than 0",
    },
    {
      test: (value) => value <= 50,
      message: "Loan tenure must be less than 50",
    },
  ],
};

export { FIELD_VALIDATIONS };
