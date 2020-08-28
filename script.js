const menuContainer = document.getElementById('menu-container');

handleOpenMenu = (icon) => {
    menuContainer.classList.toggle('menu-open')
    icon.classList.toggle('menu-open')
}
