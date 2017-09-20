export default class CounterService {
  constructor(){
    this.counter = 5;
  }

  getCounter(){
    return this.counter;
  }

  add(){
    this.counter++;
  }

  minus(){
    this.counter--;
  }


}
