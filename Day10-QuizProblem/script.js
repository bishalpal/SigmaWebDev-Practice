const targetVideo = document.querySelector(".display");
console.log(targetVideo);
const vselected = document.querySelector("#vcategory");
vselected.addEventListener("click", ()=>{
    if(vselected.value == "none") {
        targetVideo.innerHTML = "";
    }
    else if(vselected.value == "sigmawebdev") {
        targetVideo.innerHTML = `<iframe width="520" height="315" src="https://www.youtube.com/embed/tVzUXW6siu0?si=twdBIUAwXzKcZM4i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        
    }
    else if(vselected.value == "python") {
        targetVideo.innerHTML = `<iframe width="520" height="315" src="https://www.youtube.com/embed/7wnove7K-ZQ?si=VxHpReFLeCKOm20g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        
    }
    else if(vselected.value == "javascript") {
        targetVideo.innerHTML = `<iframe width="520" height="315" src="https://www.youtube.com/embed/ER9SspLe4Hg?si=57nsCYcrZBGHC4iu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        
    }
    else if(vselected.value == "Nextjs") {
        targetVideo.innerHTML = `<iframe width="520" height="315" src="https://www.youtube.com/embed/DZKOunP-WLQ?si=SvSHvmt-4Rd5lrau" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        
    }

});