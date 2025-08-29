function changeLinksItemColor() {
  let linksItem = document.getElementsByClassName("sidebar__links-item"); // get all links (<li></li>) in side bar
  for (let item of linksItem) { // for each link (<li></li>)
    let itemIcon = item.children.item(0); // get the icon
    // when mouse move to the link change color
    item.addEventListener("mouseover", e => {
      item.style.backgroundColor = "#e0e7ff"
      itemIcon.style.color = "#537fe7";
    });
    // when mouse move out return the color to normal
    item.addEventListener("mouseout", e => {
      item.style.backgroundColor = ""
      itemIcon.style.color = "";
    });
  }
}

function rotateSidebarArrow() {
  let arrow = document.querySelector(".sidebar__arrow"); // 
  arrow.addEventListener("click", e => {
    e.target.classList.toggle("rotate");
  });
}

function collapseSidebar() {
  let arrows = document.querySelector(".sidebar__arrow");
  let itemsText = document.querySelectorAll(".sidebar__links-item-text");
  let sidebar = document.querySelector(".sidebar");
  let logo = document.querySelector(".sidebar__logo");
  arrows.addEventListener("click", e => {
    if (arrows.classList.contains("rotate")) {
      itemsText.forEach(text => text.style.cssText = "opacity: 0;");
      logo.toggleAttribute("hidden")
      sidebar.style.width = "5rem"
      logo.parentElement.style.justifyContent = "center";
    } else {
      logo.toggleAttribute("hidden")
      sidebar.style.width = ""
      itemsText.forEach(text => text.style.cssText = "opacity: 1;");
      logo.parentElement.style.justifyContent = "space-between";
      console.log("no hidden");
    };
  })
}

function changeCurrentPage() {
  let pages = document.querySelectorAll(".sidebar__links-item");
  let arrow = document.querySelector(".sidebar__arrow");
  for (let page of pages) {
    page.addEventListener("click", e => {
      pages.forEach(page => page.classList.remove("active"));
      e.target.classList.add("active");
    });
  }
}


changeLinksItemColor();
rotateSidebarArrow();
collapseSidebar();
changeCurrentPage();
