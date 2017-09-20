class CounterController {
  constructor(CounterService) {
    'ngInject';
    this.service = CounterService;
    this.count = this.service.getCounter();
  }

  add() {
    this.service.add();
  }

  minus(){
    if(this.count > 0)
    this.service.minus();
  }

  $doCheck() {
    this.count = this.service.getCounter();
  }

}

export default CounterController
