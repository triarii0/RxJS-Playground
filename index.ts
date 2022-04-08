import { Observable, fromEvent } from 'rxjs';

const btnEmit = document.getElementById('emit');
const btnError = document.getElementById('error');
const btnComplete = document.getElementById('complete');
const btnCancel = document.getElementById('cancel');
const btnPrint = document.getElementById('print');

btnPrint.onclick = () => console.log(subscription);

const observable = new Observable(function (subs) {
  subs.next('first value');
  btnEmit.onclick = function () {
    subs.next('hello hello');
  };
  btnError.onclick = function () {
    subs.error("i'have a bad feeling about this");
  };
  btnComplete.onclick = function () {
    subs.complete();
  };
});
const subscription = observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('completed'),
});

btnCancel.onclick = function () {
  subscription.unsubscribe();
};
