export enum DaysOfTheWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export const START_OF_WORKING_TIME = 10;
export const START_OF_WORKING_TIME_ON_WEEKEND = 16;
export const END_OF_WORKING_TIME = 20;

function isWorkingDay(day: number): boolean {
  return day !== DaysOfTheWeek.SATURDAY;
}

function isWorkingTime(day: number, hour: number): boolean {
  if (day === DaysOfTheWeek.SUNDAY) {
    return (
      hour >= START_OF_WORKING_TIME_ON_WEEKEND && hour < END_OF_WORKING_TIME
    );
  }

  return hour >= START_OF_WORKING_TIME && hour < END_OF_WORKING_TIME;
}

function getDayOfTheWeekAndHour(): [number, number] {
  const date = new Date(Date.now());
  return [date.getDay(), date.getHours()];
}

export function isOnline(): boolean {
  const [day, hour] = getDayOfTheWeekAndHour();

  return isWorkingDay(day) && isWorkingTime(day, hour);
}
