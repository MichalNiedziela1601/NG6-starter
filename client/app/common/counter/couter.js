import CounterComponent from './counter.component';
import CounterService from '../../services/counter.service';

let CounterModule = angular.module('counter',[])
.component('counterComponent',CounterComponent)
  .service('CounterService',CounterService).name;

export default CounterModule;
