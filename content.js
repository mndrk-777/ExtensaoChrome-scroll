let isRunning = false;

function startStop(speed) {
    isRunning = !isRunning;
    if (isRunning) {
        move(speed);
    }
}

function move(speed) {
    // Use requestAnimationFrame para animação suave
    const animation = () => {
        if (isRunning) {
            window.scrollBy(0, speed);
            requestAnimationFrame(animation);
        }
    };
    requestAnimationFrame(animation);
}

// Exemplo de como iniciar a animação após 2 segundos
setTimeout(() => {
    isRunning = true;
    move(3);
}, 2000);

chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{

    startStop(request.speed)

})