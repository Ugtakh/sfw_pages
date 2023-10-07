import React, { useState, ChangeEvent, useEffect } from "react";
import { CURRENCY_SYMBOL } from "@/utils/constants";
import { calculateEmiOutcome, isNumber, validateForm } from "@/utils";
import { initialState } from "@/utils/types";
import TextField from "@/components/Calculator/TextField";
import PaymentChart from "@/components/Calculator/PaymentChart";
import LoanRepaymentScheduleTable from "@/components/Calculator/LoanRepaymentScheduleTable";

// import {
//   LoanRepaymentScheduleTable,
//   PaymentChart,
//   TextField,
//   Calc,
// } from "@/components/calculator";

const Calculator = () => {
  const [resetState, setReseState] = useState(false);

  const [state, setState] = useState(initialState);

  const formatValue = (value: string) => {
    const val = Number(value.replaceAll(",", ""));
    return isNaN(val)
      ? value.substring(0, value.length - 1)
      : val.toLocaleString("en-US");
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newVal = formatValue(value);
    setState({
      ...state,
      [name]: newVal,
    });
  };

  const onInputChangeInterest = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
    const newVal = formatValue(value).replaceAll(",", "");
    console.log(newVal);
    setState({
      ...state,
      [name]: newVal,
    });
  };

  const onCalculate = () => {
    const errors = validateForm(state);

    if (Object.keys(errors).length) {
      setState({ ...state, errors });
      return;
    }

    setState({
      ...state,
      outcome: calculateEmiOutcome(
        Number(state.loanAmount),
        Number(state.interestRate),
        Number(state.loanTenure),
        state.prepayments
      ),
      errors: {},
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="">
      <h2 className="text-center text-sm font-bold">ЗЭЭЛИЙН ТООЦООЛУУР</h2>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-4 ">
          <div className="py-6 px-6 lg:px-8">
            <form className="mx-auto max-w-xl" autoComplete="off">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <TextField
                  name="loanAmount"
                  type="tel"
                  label="Зээлийн хэмжээ"
                  placeholder="50,00,000"
                  unit={CURRENCY_SYMBOL}
                  value={formatValue(state.loanAmount.toString())}
                  error={state.errors?.loanAmount}
                  onChange={onInputChange}
                />
                <TextField
                  name="interestRate"
                  type="number"
                  label="Зээлийн хүү /сараар/"
                  placeholder="3.3"
                  unit="%"
                  value={state.interestRate}
                  error={state.errors?.interestRate}
                  onChange={onInputChangeInterest}
                />
                <TextField
                  name="loanTenure"
                  type="number"
                  label="Зээлийн хугацаа /сараар/"
                  placeholder="12"
                  unit="сар"
                  value={state.loanTenure}
                  error={state.errors?.loanTenure}
                  onChange={onInputChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
                <button
                  type="button"
                  onClick={() => {
                    onCalculate();
                  }}
                  className="uppercase text-sm border border-primary rounded-lg p-2 hover:bg-primary hover:text-white"
                >
                  Бодох
                </button>

                <button
                  type="button"
                  onClick={() => setReseState(true)}
                  className="uppercase border border-primary rounded-lg p-2 hover:bg-primary hover:text-white"
                  disabled={
                    !(
                      state.loanAmount !== 0 ||
                      state.interestRate !== 0 ||
                      state.loanTenure !== 0
                    )
                  }
                >
                  Эхлүүлэх
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <Calc state={state} /> */}
        {/* <PaymentChart outcome={state.outcome} /> */}
        <LoanRepaymentScheduleTable
          onCalculate={onCalculate}
          state={state}
          setState={setReseState}
        />
      </div>
    </div>
  );
};

export default Calculator;
