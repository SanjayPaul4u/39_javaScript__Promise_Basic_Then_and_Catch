console.log("This tutorial is for understand promises...");

// promise: harry: this video is the best
// 1> resolve
// 2> reject
// 3> pending

function func1() {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            let error = true;
            if (!error) {
                console.log("Function: your promise is resolve.");
                resolve();
            }
            else {
                console.log("Function: your promise is reject.");
                reject('sorry not fullfiled')
            }
        }, 2000);

    })
}

func1().then(function(){
    console.log("Thanks bro for fullfil your promise")
}).catch(function (reject) {
    console.log("It's to much bad bro."+" Reson:  "+reject)
});

// function then is run as - resolve;
// function catch is run as  -reject
