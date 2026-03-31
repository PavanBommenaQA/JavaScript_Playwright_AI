var totalusers = 8;
const roles = ["Admin", "Editor", "Viewer", "Tester", "Manager"];
for (let i = 1; i <= totalusers; i++) {
    let id = "USR-" + String(i).padStart(4, "0") //string.padStart(targetLength, padCharacter)
    let name = `TestUser_${i}`;
    let email = `testuser${i}@testingacademy.com`;
    let role = roles[(i - 1) % roles.length];
    let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";
    console.log(`${id} | ${name} | ${email} | ${role} | ${status}`)
}
