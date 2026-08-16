const user  = [
    {name: "Ben", email: "ben@qa.test", role: "admin",password: "BEN10@QA!", status: "inactive" },
    {name: "Ada", email: "ada@qa.test", role: "admin",password: "Adaobi@qa#", status:"inactive"},
    {name: "Ola", email: "ola@qa.test", role: "viewer",password: "Olami@qa&", status: "active"},
    {name: "Ron", email: "ron@qa.test", role: "viewer",password: "Ron@qa*", status: "inactive"},
    {name: "Jon", email: "jon@qa.test", role: "editor",password: "Jonn@qa+", status: "active"},
    {name: "Paul", email: "paul@qa.test", role: "editor",password: "Paul@qa!#", status: "inactive"},
    {name: "Kelly", email: "kelly@qa.test", role: "instructor",password: "Kelly@qa#%", status: "active"},
    {name: "Diva", email: "diva@qa.test", role: "admin",password: "Diva@qa1#", status:"active"},


]


function getUsersByRole(role, status){
    if(status !== undefined){
         return (user.filter(u => u.role === role && u.status === status));

    }
    
    else{
        return user.filter(u => u.role === role);
    }
 }


const roleToFind = "editor"

let report = getUsersByRole(roleToFind).map((user) => `${roleToFind} : ${user.name} -- Email : ${user.email}`);


console.log(report);
