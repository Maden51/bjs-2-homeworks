'use strict';


class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(alarmTime, alarmCall, alarmId) {
        if (alarmId === undefined) {
            throw new Error('Необходимо указать идентификационный номер будильника');
        } 
        if (this.alarmCollection.find(alarm => alarm[this.id] === alarmId)) {
            console.error(`Такой будильник с идентификатором ${alarmId} уже существует`);
            return false;
            }
          
        this.alarmCollection.push({[this.time]: alarmTime, [this.callback]: alarmCall, [this.id]: alarmId});
        return true;
    }
     
    removeClock(alarmId){
        const oldLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item[this.id] !== alarmId)
        return this.alarmCollection.length !== oldLength;
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString().substr(0,5);
    }

    addMinutesToCurrentFormattedTime(min) {
        return new Date(Date.now() + min * 60000).toLocaleTimeString().substr(0,5);
    }

    start(){
        const checkClock = (alarm) => {
            if(alarm[this.time] === this.getCurrentFormattedTime()) {
                alarm[this.callback]();
            }
        }    
    }
    
    stop(){
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} поставлен на ${item.time}`))
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const phoneAlarm = new AlarmClock();

    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log("wake up"), 1);
    phoneAlarm.addClock(phoneAlarm.addMinutesToCurrentFormattedTime(1), () => {console.log("wake up, Neo"); phoneAlarm.removeClock(2); }, 2);
    phoneAlarm.addClock(phoneAlarm.addMinutesToCurrentFormattedTime(2), () => {console.log("follow white rabbit"); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms(); }, 3);

    phoneAlarm.printAlarms();
    phoneAlarm.start();

}