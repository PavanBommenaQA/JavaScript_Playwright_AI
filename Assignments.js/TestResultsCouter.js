let testResults = ["pass", "pass", "fail", "fail", "skip", "pass", "fail", "pass"];
let passCount = 0;
let failCount = 0;
let skipCount = 0;
//Count Results
for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    } else if (testResults[i] === "fail") {
        failCount++;
    } else if (testResults[i] === "skip") {
        skipCount++;
    }
}
//Total Tests
let totalTests = testResults.length;
//Pass Rate
let passRate = ((passCount / totalTests) * 100).toFixed(2);
//verdictLogic
let verdict;
if (failCount === 0) {
    verdict = "READY FOR RELEASE";
} else if (failCount <= 2) {
    verdict = "REVIEW REQUIRED";
} else {
    verdict = "BLOCK RELEASE";
}

//Print the Report
console.log("=== Test Report===")
console.log("Total Tests:", totalTests);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
console.log("Skipped:", skipCount);
console.log("PassRate:", passRate + "%");
console.log("verdict:", verdict);

