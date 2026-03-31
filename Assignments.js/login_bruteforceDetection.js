// ✅ const → fixed credentials and threshold
const validEmail = "admin@testingacademy.com";
const validPassword = "Test@1234";
const MAX_ATTEMPTS = 3;

// Input attempts
let attempts = ["wrong", "wrong", "wrong", "correct"];

// ✅ var → global counter
var failedAttempts = 0;

// ✅ let → loop variables
let i = 0;
let isLoggedIn = false;

do {
    let currentAttempt = attempts[i];

    // Simulate credentials based on attempt
    let email = (currentAttempt === "correct") ? validEmail : "wrong@mail.com";
    let password = (currentAttempt === "correct") ? validPassword : "123";

    // Validate using === and &&
    if (email === validEmail && password === validPassword) {
        console.log(`Attempt ${i + 1}: ✅ Login Successful`);
        isLoggedIn = true;
        break;
    } else {
        failedAttempts++;
        console.log(`Attempt ${i + 1}: ❌ Failed`);

        // Lock condition
        if (failedAttempts === MAX_ATTEMPTS) {
            console.log(`🔒 Account Locked after ${MAX_ATTEMPTS} failed attempts`);
            break;
        }
    }

    i++;

} while (!isLoggedIn && failedAttempts < MAX_ATTEMPTS && i < attempts.length);