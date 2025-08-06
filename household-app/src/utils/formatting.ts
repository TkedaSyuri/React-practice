import { format } from "date-fns";

export function formatMonth (date: Date):string{
return format(date, "yyyy-MM")
}

export function formatCurrnecy(amount: number):string{
return amount.toLocaleString("ja-JP")
}