import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  if (dateString === undefined) {
    return <></>
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "d LLLL yyyy")}</time>;
};

export default DateFormatter;
