
import '../styles/styles.scss';

import {elements} from '../js/views/base';


//waits for document to be ready before allowing js
document.addEventListener("DOMContentLoaded", function () {

    const sectionsID = [elements.sectionOneID, elements.sectionTwoID, elements.sectionThreeID, elements.sectionFourID, elements.sectionFiveID, elements.sectionSixID]
    

    //--------------------sroll navigation bar switch---------------------//
    window.onscroll = () =>  {
        
        if (document.documentElement.scrollTop >= 1075) {
            
            elements.navbar.style.backgroundColor = '#242943';
        } else {
            
            elements.navbar.style.backgroundColor = 'transparent';
        }
    };
    
    //-----------------------------navigation bar--------------------------//
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

    
    
    //------------------------------category sections image clicked-------------------//
    sectionsID.forEach(el => {
        el.onclick = (el) => {
            let target = event.target;

            if(target.closest('#sectionOneDiv')) {
                sectionsID[0].setAttribute('data-clicked', true)
                
            } else if (target.closest('#sectionTwoDiv')) {
                sectionsID[1].setAttribute('data-clicked', true)
                
            } else if (target.closest('#sectionThreeDiv')) {
                sectionsID[2].setAttribute('data-clicked', true)
                
            } else if (target.closest('#sectionFourDiv')) {
                sectionsID[3].setAttribute('data-clicked', true)
                
            } else if (target.closest('#sectionFiveDiv')) {
                sectionsID[4].setAttribute('data-clicked', true)
                
            } else if (target.closest('#sectionSixDiv')) {
                sectionsID[5].setAttribute('data-clicked', true)
                
            }
            checkDataset();
            

            


        }
    })
        
       

    //checks if dataset clickd is true: if true then display image
    function checkDataset() {
        sectionsID.forEach(el => {
            el.dataset.clicked === 'true' ? changeSize(el) : displayNone(el)
        });
    }

    

    //change div attributes to fit size of browser screen
    function changeSize(el)  {
        
        el.style.display = 'block';
        el.classList.remove('col-xl-5');
        el.classList.add('col-xl-12');
        el.style.height = '100%';
        el.getElementsByTagName('img')[0].style.filter = 'none';
        el.getElementsByTagName('img')[0].style.width = '50%';
        el.scrollIntoView();

        //disable title section of category images
        

        
    }

   
    function displayNone(el) {
        el.style.display = 'none'; 
    }


    //--------------------------------contact section clear button---------------//
    elements.clearBTN.onclick = () => {
        [elements.messageInput, elements.nameInput, elements.emailInput].forEach(el => el.value = ``)
    }

    
 
        
});








