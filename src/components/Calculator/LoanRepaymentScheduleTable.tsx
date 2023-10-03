import { ChangeEvent } from "react";

import { CURRENCY_SYMBOL } from "@/utils/constants";
import {
  LoanRepaymentScheduleTableProps,
  Schedule,
  ISchedule,
  TProps,
} from "@/utils/types";
import { toCurrency, toNumber } from "@/utils";
import TextField from "./TextField";
import { format } from "date-fns";

function LoanRepaymentScheduleTable({
  onCalculate,
  state,
  setState,
}: LoanRepaymentScheduleTableProps) {
  // const state = useRecoilValue(stateAtom);
  // const setState = useSetRecoilState(stateAtom);

  const { prepayments, outcome } = state;

  const onPrepaymentsChange =
    (month: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const clonedPrepayments = Object.assign({}, prepayments);
      clonedPrepayments[month] = toNumber(value);

      setState({ ...state, prepayments: clonedPrepayments });
    };

  return (
    <div className="relative overflow-x-auto shadow-lg rounded-lg p-4">
      <table className="w-full text-sm text-left text-gray-500">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
          Зээлийн эргэн төлөлтийн хуваарь (Сараар)
        </caption>

        <thead className="text-xs text-white bg-primary">
          <tr>
            <Th>Огноо </Th>
            <Th>Зээлийн үлдэгдэл</Th>
            <Th>Бодогдсон хүү</Th>
            <Th>Үндсэн зээлээс хасах</Th>
            <Th>Сарын төлбөр</Th>
            <Th>Хоног</Th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {outcome?.schedule?.length > 0 ? (
            <>
              {outcome?.schedule.map((s: ISchedule) => (
                <Tr key={s.number}>
                  <Td>{format(s.date, "yyyy/dd/MM")}</Td>
                  <Td>{toCurrency(s.principal)}</Td>
                  <Td>{toCurrency(s.monthlyInterestPayment)}</Td>
                  <Td>{toCurrency(s.monthlyPrincipal)}</Td>
                  <Td>{toCurrency(s.monthlyPayment)}</Td>
                  <Td>{s.rangeOfMonth}</Td>
                </Tr>
              ))}
            </>
          ) : (
            <Tr>
              <Td colSpan={8}>Мэдээлэл олдсонгүй</Td>
            </Tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }: TProps) {
  return (
    <th scope="col" className="px-6 py-3 text-center">
      {children}
    </th>
  );
}

function Tr({ children }: TProps) {
  return (
    <tr className="bg-white border-b border-grey500 hover:bg-grey500">
      {children}
    </tr>
  );
}

function Td({ children, ...rest }: TProps) {
  return (
    <td
      className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap text-center border-l border-r border-grey500"
      {...rest}
    >
      {children}
    </td>
  );
}

export default LoanRepaymentScheduleTable;
