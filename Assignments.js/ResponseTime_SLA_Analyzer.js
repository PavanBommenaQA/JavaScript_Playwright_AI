let responseTime = [120, 230, 450, 510, 180, 620];
let i = 0;
let min = responseTime[0];
let max = responseTime[0];
let sum = 0;
let breachCount = 0;

while (i < responseTime.length) {

    let current = responseTime[i];

    //MinTime Tracking
    if (current < min) {
        min = current;
    }
    //MaxTime Tracking
    if (current > max) {
        max = current;
    }
    if (current > 500) {
        breachCount++;
    }
    sum = sum + current;
    i++;
}
let avg = (sum / responseTime.length).toFixed(2);
console.log("=== PERFORMANCE REPORT ===");
console.log("Min:", min);
console.log("Max:", max);
console.log("Average:", avg);
console.log("SLA Breaches (>500ms):", breachCount);