let maxRetries = 5;
let attempt = 0;
let success = false;

do {
    attempt++;

    let randomValue = Math.random();

    if (randomValue > 0.6) {
        success = true;
        console.log(`Attempt ${attempt}: ✅ SUCCESS (Response 200 OK)`);
    } else {
        console.log(`Attempt ${attempt}: ❌ FAILED (Timeout/Error)`);
    }

} while (!success && attempt < maxRetries);

// Final Result
if (success) {
    console.log(`API call PASSED after ${attempt} attempt(s).`);
} else {
    console.log(`API call FAILED after ${maxRetries} attempt(s).`);
}