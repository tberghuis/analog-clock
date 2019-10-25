import { Subject } from "rxjs";

const dateToTimeObject = date => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return { hours, minutes, seconds };
};

let time = dateToTimeObject(new Date());

export const timeSubject = new Subject();

export const getTime = () => time;

setInterval(() => {
  timeSubject.next(dateToTimeObject(new Date()));
}, 1000);
