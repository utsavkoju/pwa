
function buildPageMarkup(mypage) {
    return `<div class="page_item">
        <h2 class='anime_name'>${mypage.title}</h2>
        </div>`
}



async function onLoadAsync() {
  
    let targetElementId = '#mainone'
    //let animeId = document.querySelector("#anime_id_input").value
    try {
        // const response = await fetch('http://admin.kronoshev.com/api/page/hello-world')
         const response = await  fetch('https://api.jikan.moe/anime/1000')
        

        if (!response.ok) {
            console.log('something is wrong')
            return
        }
        const result = await response.json()
        console.log("result", result)
        document.querySelector(targetElementId).innerHTML = buildPageMarkup(result)

    } catch (err) {
        console.error(`error:${err}`)
    }

    //Install the service worker
    if ('serviceWorker' in navigator) {
        try {
            let serviceWorker = navigator.serviceWorker.register('/sw.js')
            console.log(`Service worker registered ${serviceWorker}`)
        } catch (err) {
            console.error(`Failed to register service worker: ${err}`)
        }
    }
}