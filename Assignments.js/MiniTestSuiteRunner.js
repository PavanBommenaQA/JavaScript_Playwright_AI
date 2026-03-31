// ✅ const → fixed test data
const testCases = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "Loose equality check", actual: "5", expected: 5, type: "looseEqual" },
    { name: "Type check number", actual: 100, expected: "number", type: "typeCheck" },
    { name: "Truthy value", actual: "hello", expected: true, type: "truthy" },
    { name: "Less than check", actual: 3, expected: 10, type: "lessThan" },
    { name: "Failure case", actual: 10, expected: 5, type: "lessThan" }
];

// ✅ var → global counters
var passCount = 0;
var failCount = 0;
var errorCount = 0;

// ✅ let → loop variables
let results = [];

// 🔹 FOR LOOP → run all tests
for (let i = 0; i < testCases.length; i++) {

    let test = testCases[i];
    let result;

    try {
        // 🔹 SWITCH → comparison type
        switch (test.type) {

            case "strictEqual":
                result = (test.actual === test.expected);
                break;

            case "looseEqual":
                result = (test.actual == test.expected);
                break;

            case "typeCheck":
                result = (typeof test.actual === test.expected);
                break;

            case "truthy":
                result = (!!test.actual === test.expected);
                break;

            case "lessThan":
                result = (test.actual < test.expected);
                break;

            default:
                throw new Error("Unknown test type");
        }

        // 🔹 IF-ELSE + ternary
        let status = result ? "PASS" : "FAIL";

        if (status === "PASS") {
            passCount++;
        } else {
            failCount++;
        }

        results.push({ name: test.name, status });

    } catch (e) {
        errorCount++;
        results.push({ name: test.name, status: "ERROR" });
    }
}

// 🔹 WHILE LOOP → consecutive passes from start
let consecutivePass = 0;
let j = 0;

while (j < results.length && results[j].status === "PASS") {
    consecutivePass++;
    j++;
}

// 🔹 DO...WHILE → find first failure
let k = 0;
let firstFailure = null;

do {
    if (results[k].status === "FAIL") {
        firstFailure = results[k].name;
        break;
    }
    k++;
} while (k < results.length);

// 🔹 FINAL REPORT
console.log("=== TEST SUITE REPORT ===");

// Individual results
for (let r of results) {
    console.log(`${r.name} → ${r.status}`);
}

// Summary
let total = passCount + failCount + errorCount;
let passRate = ((passCount / total) * 100).toFixed(2);

console.log("\n--- SUMMARY ---");
console.log("Total:", total);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
console.log("Errors:", errorCount);
console.log("Pass Rate:", passRate + "%");

// Extra insights
console.log("Consecutive Passes (from start):", consecutivePass);
console.log("First Failure:", firstFailure ?? "None");

// Final verdict using logical operators
let verdict = (failCount === 0 && errorCount === 0)
    ? "ALL TESTS PASSED 🚀"
    : (failCount <= 2 ? "REVIEW REQUIRED ⚠️" : "TEST SUITE FAILED ❌");

console.log("Verdict:", verdict);