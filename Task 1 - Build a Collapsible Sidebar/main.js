// changes pages icons color and make the hover affect
function changeLinksItemColor() {
  // get all links (<li></li>) in side bar
  let linksItem = document.getElementsByClassName("sidebar__links-item");
  // for each link (<li></li>)
  for (let item of linksItem) {
    // get the icon
    let itemIcon = item.children.item(0);
    // when mouse move to the link change color
    item.addEventListener("mouseover", (e) => {
      item.style.backgroundColor = "#e0e7ff";
      itemIcon.style.color = "#537fe7";
    });
    // when mouse move out return the color to normal
    item.addEventListener("mouseout", (e) => {
      item.style.backgroundColor = "";
      itemIcon.style.color = "";
    });
  }
}

// rotates the arrow when you click it
function rotateSidebarArrow() {
  let arrow = document.querySelector(".sidebar__arrow"); // 
  arrow.addEventListener("click", e => {
    e.target.classList.toggle("rotate");
  });
}

// collapse
function collapseSidebar() {
  // get sidebar arrow
  let arrow = document.querySelector(".sidebar__arrow");
  // get pages text (Dashboard, Profile, ..., Settings)
  let itemsText = document.querySelectorAll(".sidebar__links-item-text");
  // get sidebar itself
  let sidebar = document.querySelector(".sidebar");
  // get sidebar logo
  let logo = document.querySelector(".sidebar__logo");
  // when you click the arrow rotateSidebarArrow() will toggle class "rotate"
  arrow.addEventListener("click", e => {
    // if arrow contains the "rotate" class
    if (arrow.classList.contains("rotate")) {
      // make pages text disappear (Dashboard, Profile, ..., Settings)
      itemsText.forEach(text => text.style.cssText = "opacity: 0;");
      // hide the logo
      logo.toggleAttribute("hidden")
      // reduce sidebar width
      sidebar.style.width = "5rem"
      // make .sidebar__logo-wrapper justifyContent center, to center the arrow
      logo.parentElement.style.justifyContent = "center";
    } else {
      // make the logo appear again
      logo.toggleAttribute("hidden")
      // revert sidebar width
      sidebar.style.width = ""
      // make pages text appear (Dashboard, Profile, ..., Settings)
      itemsText.forEach(text => text.style.cssText = "opacity: 1;");
      // return .sidebar__logo-wrapper justifyContent to it's normal value
      logo.parentElement.style.justifyContent = "space-between";
    };
  })
}

// highlight the page that you click in the sidebar
function changeCurrentPage() {
  // get all pages in the sidebar (Dashboard, Profile, ..., Settings)
  let pages = document.querySelectorAll(".sidebar__links-item");
  for (let page of pages) {
    // when you click on a page
    page.addEventListener("click", e => {
      // remove the highlight from the old one
      pages.forEach(page => page.classList.remove("active"));
      // add the highlight to the clicked page
      e.target.classList.add("active");
    });
  }
}


changeLinksItemColor();
rotateSidebarArrow();
collapseSidebar();
changeCurrentPage();
