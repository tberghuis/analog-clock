import { Subject } from "rxjs";

let time; // = Date.now();

export const timeSubject = new Subject();

setInterval(() => {
  timeSubject.next(dateToTimeObject(new Date()));
}, 1000);

const dateToTimeObject = date => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return { hours, minutes, seconds };
};
