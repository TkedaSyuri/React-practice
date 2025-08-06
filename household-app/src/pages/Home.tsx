import { Box} from "@mui/material";
import MonthlySummary from "../components/MonthlySummary";
import Calender from "../components/Calender";
import TransactionMenu from "../components/TransactionMenu";
import TransactionForm from "../components/TransactionForm";
import { Transaction } from "../types";

interface HomeProps {
  monthlyTaransactions: Transaction[]
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>
}

const Home = ({monthlyTaransactions,setCurrentMonth}: HomeProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexGrow: 1 }}>
        <MonthlySummary monthlyTaransactions={monthlyTaransactions} setCurrentMonth={setCurrentMonth} />
        <Calender  monthlyTaransactions={monthlyTaransactions} setCurrentMonth={setCurrentMonth}/>
      </Box>
      <Box>
        <TransactionMenu />
        <TransactionForm />
      </Box>
    </Box>
  );
};

export default Home;
