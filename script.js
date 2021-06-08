//  DOM Elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i')

/*******************************/
/*******************************/

// Main Page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};


middleContent.addEventListener('click', e => {
    if (e.target.classList[0] === 'main-btn') {
        goToLoginPage()
    }
    console.log(e.target.classList);
});

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password')


    if (inputUserInfo.value !== "" && inputPassword.value !== "") {
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    } else {
        goToLoginPage();
        loginModal.style.display = 'block'
    }
});

// Login page
modalX.addEventListener('click', () => {
    loginModal.style.display = 'none';
})

