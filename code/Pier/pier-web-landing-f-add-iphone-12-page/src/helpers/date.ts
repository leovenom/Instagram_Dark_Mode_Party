import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export const CURRENT_DATE = new Date();

export const getDate = (date?: string) => dayjs(date);

export const format = (date: Date | string, formatter: string) =>
  dayjs(date).format(formatter);

export const dateIsBetween = (
  date: Date,
  range: {
    begin: Date;
    end: Date;
  }
): boolean => {
  return dayjs(date).isBetween(dayjs(range.begin), dayjs(range.end));
};
