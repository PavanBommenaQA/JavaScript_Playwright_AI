let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

if (isPresent === false) {
    console.log("Status: NOT FOUND, Severity: CRITICAL")
} else if (isPresent === true && isDisplayed === false) {
    console.log("Status: HIDDEN, Severity: WARNING")
} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    console.log("Status: DISABLED, Severity: WARNING")
} else if (isPresent === true && isDisplayed === true && isEnabled === true) {
    console.log("Status: READY, Severity: OK")
}