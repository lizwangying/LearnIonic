import { Component } from '@angular/core';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {
 
  }

  track1() {
    alert('track(String eventId)');
  }

  track2() {
    alert('track(String eventId, Number number)');
  }

  track3() {
    alert('track(String eventId, Object eventLevelVariable)');
  }

  track4() {
    alert('track(String eventId, Number number, Object eventLevelVariable)');
  }

  trackWithNumber() {
    alert('trackWithNumber');
  }

  setEvar() {
    alert('setEvar');
  }

  setPeopleVariable() {
    alert('setPeopleVariable');
  }

  setUserId() {
    alert('setUserId');
  }

  clearUserId() {
    alert('clearUserId');
  }
  

  page() {
    alert('page');
  }

}
