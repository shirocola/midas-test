function getClockAngle(hh_mm: string): number {
    let [hour, minute] = hh_mm.split(':').map(Number);

    if (hour >= 12) {
        hour -= 12;
    }

    let hourAngle = hour * 30 + minute * 0.5;

    let minuteAngle = minute * 6;

    let angle = Math.abs(hourAngle - minuteAngle);

    return Math.min(angle, 360 - angle);
}

console.log(getClockAngle("09:00"));
console.log(getClockAngle("17:30"));
