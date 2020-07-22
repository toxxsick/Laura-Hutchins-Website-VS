export const elements = {
    
    modal: document.querySelector('.modal'),
    modalBtn: document.querySelector('.modalBtn'),
    span: document.querySelector('.close'),
    messageInput: document.querySelector('.message__input'),
    nameInput: document.querySelector('.name__input'),
    emailInput: document.querySelector('.email__input'),
    clearBTN: document.querySelector('.message__button'),
    sectionOneID: document.getElementById('sectionOneDiv'),
    sectionTwoID: document.getElementById('sectionTwoDiv'),
    sectionThreeID: document.getElementById('sectionThreeDiv'),
    sectionFourID: document.getElementById('sectionFourDiv'),
    sectionFiveID: document.getElementById('sectionFiveDiv'),
    sectionSixID: document.getElementById('sectionSixDiv'),
    sectionsContainerSection: document.querySelector('.sectionsContainer__section'),
    cateImgOne: document.getElementById('cateImgOne'),
    sectionCentered: document.querySelector('.section__centered'),
    sectionCenteredGrp: document.querySelectorAll('.section__centered'),
    centeredI: document.querySelector('.centered__i'),
    navbar: document.querySelector('.wrapper__navbar'),
    leftArrow: document.querySelector('.fa-arrow-left'),
    rightArrow: document.querySelector('.fa-arrow-right'),
    upArrow: document.querySelector('.fa-arrow-up'),
    menuGrpI: document.querySelectorAll('.menuGrp__i'),

};



export function nodeToArray(el) {

    let node = el;
    let array = Array.from(node);
    return array;
    
}








