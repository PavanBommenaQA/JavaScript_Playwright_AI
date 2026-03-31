let frequency = "rarely";  // "always", "often", "rarely"
let impact = "minor";    // "blocker", "major", "minor"
let severity;

if (frequency === "always") {
    if (impact === "blocker") {
        severity = "P0";
    } else if (impact === "major") {
        severity = "P1";
    } else {
        severity = "P2";
    }
    console.log(`Bug Severity: ${severity}`);

} else if (frequency === "often") {
    if (impact === "blocker") {
        severity = "P1";
    } else if (impact === "major") {
        severity = "P2";
    } else {
        severity = "P3";
    }
    console.log(`Bug Severity: ${severity}`);

} else if (frequency === "rarely") {
    if (impact === "blocker") {
        severity = "P2";
    } else if (impact === "major") {
        severity = "P3";
    } else {
        severity = "P4";
    }
    console.log(`Bug Severity: ${severity}`);

}