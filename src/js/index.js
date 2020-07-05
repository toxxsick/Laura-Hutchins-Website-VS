
import '../styles/styles.scss';

import {elements, a} from '../js/views/base';

console.log(`this is ${a}`);




//waits for document to be ready before allowing js
document.addEventListener("DOMContentLoaded", function () {

    //on click makes modal css block
    elements.modalBtn.onclick = () => elements.modal.style.display = 'block';
    
    //on clicking the span button changes modal css to none;
    elements.span.onclick = () => elements.modal.style.display = 'none';

    //when clicking anywhere outside the modal, changes the model css to none;
    window.onclick = (event) => {
        if(event.target === elements.modal) {
            elements.modal.style.display = 'none';
        }
    };

    elements.clearBTN.onclick = () => {
        [elements.messageInput, elements.nameInput, elements.emailInput].forEach(el => el.value = ``)
    }
    

    elements.sectionOneID.onclick = () => {
        //rest of the categories disappear
        const sectionsID = [elements.sectionOneID, elements.sectionTwoID, elements.sectionThreeID, elements.sectionFourID, elements.sectionFiveID, elements.sectionSixID]
        
        //Hide all categories except the one clicked.
        sectionsID.forEach(el => {
            el === sectionsID[0] ? el.style.display = "block" : el.style.display = "none";
        });

        //change div attributes to fit size of browser screen
        sectionsID[0].classList.remove('col-xl-5');
        sectionsID[0].classList.add('col-xl-12');

        elements.sectionsContainerSection.style.height = '100%';
        
        //center image
        elements.cateImgOne.style.width = '50%';

        //adjust position of position__centered
        elements.sectionCentered.style.top = '3%';

        //remove blur 
        elements.cateImgOne.style.filter = 'none';

        //scrolls according to center of page where image is displayed clearly
        elements.cateImgOne.scrollIntoView();

        //all category images / forward / go back button appaers
        
       
        
        
        
        
        




        
    }
 
        
});








