const testcase = {
    id : "Tc-001",
    title : "login",
    steps : ["Enter email", "enter password", "click login button"],
    status : "pending"
}

function createTestCase(id,title, status, ...steps){
    return {
        id,
        title,
        steps,
        status
    }
};
const test  =  createTestCase(
    "Tc-001",
    "Login test",
    "status",
    "Enter email",
    "Enter password",
    "click login button"
)

console.log(...test,
    status = "passed"
);

