function createTestCase(id,title,status,...steps){
    return {
        id,
        title,
        steps,
        status: "Pending"

    };
}

const test = createTestCase(
"Tc-001",
"login Test",
"Enter Email",
"Enter password",
"Click login"
);

console.log(test);