let envName = "prod"
const DEV = {
    baseURL: "https://dev-api.testingacademy.com",
    apiKey: "dev_key_xxxx",
    timeout: 5000,
    description: "DEV - Development environment"
}
const STAGING = {
    baseURL: "https://staging-api.testingacademy.com",
    apiKey: "stg_key_xxxx",
    timeout: 8000,
    description: "STAGING - Pre-production mirror"
}
const QA = {
    baseURL: "https://qa-api.testingacademy.com",
    apiKey: "qa_key_xxxx",
    timeout: 7000,
    description: "QA - Testing environment"
}
const PROD = {
    baseURL: "https://prod-api.testingacademy.com",
    apiKey: "prod_key_xxxx",
    timeout: 6000,
    description: "PROD - Live production"
}
let config;
switch (envName) {
    case "dev":
        config = DEV;
        break;
    case "staging":
        config = STAGING;
        break;
    case "qa":
        config = QA;
        break;
    case "prod":
    case "production":
        config = PROD;
        break;
    default:
        console.log("❌ Environment Not Found");
}
if (config) {
    console.log(`Environment: ${envName.toUpperCase()}`);
    console.log(`Base URL: ${config.baseURL}`);
    console.log(`API Key: ${config.apiKey}`);
    console.log(`TimeOut: ${config.timeout}`);
    console.log(`Description: ${config.description}`);
}