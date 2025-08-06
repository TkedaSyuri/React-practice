import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocal from "@fullcalendar/core/locales/ja";
import { DatesSetArg, EventContentArg } from "@fullcalendar/core";
import "../carender.css";
import { caluculateDailyBalances } from "../utils/financeCaluculations";
import { Balance, CalenderContent, Transaction } from "../types";
import { formatCurrnecy } from "../utils/formatting";

interface CalenderProps {
  monthlyTaransactions: Transaction[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>
}

const Calender = ({ monthlyTaransactions,setCurrentMonth }: CalenderProps) => {
  const events = [
    { title: "My happy birthday", start: "2024-10-10" },
    { title: "My happy birthday", start: "2024-10-25" },
  ];
  const dailyBalances = caluculateDailyBalances(monthlyTaransactions);
  console.log(dailyBalances);

  const createCalenderEvents = (
    dailyBalances: Record<string, Balance>
  ): CalenderContent[] => {
   return  Object.keys(dailyBalances).map((date) => {
     const {income,expense,balance} = dailyBalances[date]
      return {
        start: date,
        income: formatCurrnecy(income),
        expense: formatCurrnecy(expense),
        balance: formatCurrnecy(balance),
      };
    });
  };

  const calenderEvents = createCalenderEvents(dailyBalances)
console.log(dailyBalances); 

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <div>
        <div className="money" id="event-income">
          {eventInfo.event.extendedProps.income}
        </div>
        <div className="money" id="event-expense">
          {eventInfo.event.extendedProps.expense}
        </div>
        <div className="money" id="event-balance">
          {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    );
  };

const handleDateSet=(datesetInfo:DatesSetArg)=>{
setCurrentMonth(datesetInfo.view.currentStart)
}

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      locale={jaLocal}
      events={events}
      eventContent={renderEventContent}
      datesSet={handleDateSet}
    />
  );
};

export default Calender;
