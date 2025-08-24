function changeLinksItemColor(){
   let linksItem = document.getElementsByClassName("sidebar__links-item"); // get all links (<li></li>) in side bar
    for(let item of linksItem){ // for each link (<li></li>)
        let itemIcon = item.children.item(0); // get the icon
        item.addEventListener("mouseover", e => { // when mouse move to the link change color
            item.style.backgroundColor = "#e0e7ff"
            itemIcon.style.color = "#537fe7";
        });
        item.addEventListener("mouseout", e => { // when mouse move out return the color to normal
            item.style.backgroundColor = ""
            itemIcon.style.color = "";
        });
    }
}

function toggleSidebar(){
    let arrows = document.querySelector(".sidebar__arrow-wrapper"); // select the div that has the arrows in it
    for(let arrow of arrows.children){ // get the actual arrow inside the div
        arrows.addEventListener("click", e => { // when I click on the div toggle the hidden class for each arrow inside the div
            arrow.classList.contains("hidden")? arrow.classList.remove("hidden") : arrow.classList.add("hidden");
        })
    }
}

function collapseSidebar(){
    let arrows = document.querySelector(".sidebar__arrow-wrapper");
    let itemsText = document.querySelectorAll(".sidebar__links-item-text");
    let sidebar = document.querySelector(".sidebar");
    let logo = document.querySelector(".sidebar__logo");
    arrows.addEventListener("click", e => {
        if(arrows.firstElementChild.classList.contains("hidden")){
            itemsText.forEach(text => text.style.cssText = "opacity: 0;");
            logo.toggleAttribute("hidden")
            sidebar.style.width = "5rem"
            logo.parentElement.style.justifyContent = "center";
        } else{
            logo.toggleAttribute("hidden")
            sidebar.style.width = "20rem"
            itemsText.forEach(text => text.style.cssText = "opacity: 1;");
            logo.parentElement.style.justifyContent = "space-between";
            console.log("no hidden");
        };
    })
}

changeLinksItemColor();
toggleSidebar();
collapseSidebar();