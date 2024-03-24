let istatus = document.querySelector("h5")
let addFriend = document.querySelector("#add")
// let removeFriend = document.querySelector("#remove")
let check = 0

addFriend.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML = "Freinds"
        istatus.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        check = 1
    }else{
        istatus.innerHTML = "Starnger"
        istatus.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        check = 0
    }
})

// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "Starnger"
//     istatus.style.color = "red"
// })