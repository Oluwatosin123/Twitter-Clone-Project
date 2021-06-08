//  DOM Elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('middle-content');

/*******************************/
/*******************************/

// Main Page
const goToLoginPage = () => {
    mainPage.style.display = 'grid';
    loginPage.style.display = 'none';
};

middleContent.addEventListener('click', e => {
    if (e.target.classList[1] === 'main-btn') {
        goToLoginPage()
    }
})