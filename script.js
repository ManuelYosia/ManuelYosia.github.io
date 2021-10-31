// ham menu
const hamBtn = document.getElementsByClassName('menu-toggle') [0];
const menuSelect = document.querySelector('nav ul');
hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle('active')
    menuSelect.classList.toggle('slide');
});
const nav = document.getElementsByTagName('nav')[0]
const a = nav.getElementsByTagName('a');
for (let i in a) {
    a[i].addEventListener('click', () => {
        hamBtn.classList.remove('active');
        menuSelect.classList.remove('slide');
    }); 
}
