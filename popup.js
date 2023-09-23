const speedInput = document.getElementById("speedInput")
const startStopButton = document.getElementById("startStopButton")

let speed = Number.parseInt(localStorage.getItem("speed")) || 10;
speedInput.value = speed

speedInput.addEventListener("change",(event)=> {
    speed = Number.parseInt(event.target.value)
    localStorage.setItem("speed",speed)
})
  
startStopButton.addEventListener("click", ()=>{
sendMessage({speed})

})

function sendMessage(message){
    chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id,message, (response)=>{
    
        })
    })

}