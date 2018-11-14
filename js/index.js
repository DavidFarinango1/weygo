firebase.auth().onAuthStateChanged(function(user){
    console.log(user)
    if (user){
        console.log("tenemos usuario")
    }else{
        console.log("no tenemos usuario")
    }
})