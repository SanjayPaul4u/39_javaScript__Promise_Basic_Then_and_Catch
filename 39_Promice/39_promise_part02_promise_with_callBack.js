
//===============================================================================================
//PROMISE WITH CALL BACK FUNCTION
//===============================================================================================


//pretend that it is come from server.
const students = [
    { "name": "rohon", "subject": "python" },
    { "name": "sanjay", "subject": "javaScript" }
];


function studentEnrollment(studentObj) {
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            students.push(studentObj);
            console.log("New student is success fully enrolled");

            const error = false;
            if(!error){
                resolve()
            }
            else{
                reject()
            }
            
        }, 5000);
    })

}

function getStudent() {
    setTimeout(function () {
        let html = "";
        students.forEach(function (element) {
            html += `<li>Name of student is : ${element.name}</li>`
        })
        let list = document.getElementById("list");
        list.innerHTML = html;
        console.log("Students are success fully fetched");
    }, 1000);
}


let newStudent = { "name": "mou", "subject": "java" };
studentEnrollment(newStudent).then(function(){
    getStudent()
}).catch(function(){
    console.log("sorry some error occured");
});


