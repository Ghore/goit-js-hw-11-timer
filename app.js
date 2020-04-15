class CountdownTimer {
    constructor({
      selector,
      targetDate
    }) {
      this.targetDate = targetDate;
      this.selector = document.querySelector(`${selector}`);
      this.days = document.querySelector('span[data-value="days"]');
      this.hours = document.querySelector('span[data-value="hours"]');
      this.mins = document.querySelector('span[data-value="mins"]');
      this.secs = document.querySelector('span[data-value="secs"]');
      this.eventTime();
      this.timerId;
      this.deltaTime;
    }
    eventTime() {
      this.deltaTime = this.targetDate.getTime() - Date.now();
      const days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((this.deltaTime % (1000 * 60)) / 1000);
      this.days.textContent = days;
      this.hours.textContent = hours;
      this.mins.textContent = mins;
      this.secs.textContent = secs;
    
      if ((this.deltaTime <= 0)) {
        clearInterval(this.timerId);
        this.days.textContent = 0;
        this.hours.textContent = 0;
        this.mins.textContent = 0;
        this.secs.textContent = 0; 
      }
    }
    timer() {
      this.timerId = setInterval(() => this.eventTime(), 1000);
    }
  }
  
 const myTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2020' ),
  });
  
  myTimer.timer();
