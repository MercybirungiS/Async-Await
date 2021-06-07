// console.log ("Start");
// setTimeout(()=>{
// console.log("We are in timeout");
// },4000);
// console .log("End");



// console.log("mERCY");
// setTimeout(()=>{
//     console.log("come sfterfour seconds");

// },4000);
// console.log("come after mercy");

// const items=[2,4,6,8,19];
// items.forEach(item=>{
//     console.log(item);
// });
// callbacks


function userName(firstname , lastname){
    console.log(`${firstname},${lastname}`)
}

function loginUser(email,password,ID,callback){
    setTimeout(()=>{
        console.log("Now we have your information");
        callback({userEmail:email,userPassword:password,userID:ID});

    },3000)}
   
    function userVideos(email,callback){
        setTimeout(()=>{
            callback(["video1","video2","video3"]);

        },1000)
    }
    

    
    const user =loginUser("mercyb@gmail.com",68888,"103f",user=>{
        console.log(user);
        userVideos(user.userEmail,videos=>{
console.log(videos);
        });
    });
    userName("Mercy","Birungi")
    
