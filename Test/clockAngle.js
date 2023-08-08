function getClockAngle(hh_mm) {
    var _a = hh_mm.split(':').map(Number), hour = _a[0], minute = _a[1];
    if (hour >= 12) {
        hour -= 12;
    }
    var hourAngle = hour * 30 + minute * 0.5;
    var minuteAngle = minute * 6;
    var angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
}
console.log(getClockAngle("09:00"));
console.log(getClockAngle("17:30"));
