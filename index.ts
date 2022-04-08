import { Observable } from 'rxjs';

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');

const observable = new Observable(function (subs) {
  subs.next('first value');
  button1.onclick = () => subs.next('Hello');
  button2.onclick = () => subs.error('error');
  button3.onclick = () => subs.complete();
  button4.onclick = () => subs.unsubscribe();
  button5.onclick = () => console.log(subs);
});

observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('completed'),
});
