
import '../styles/styles.scss';

import {elements} from '../js/views/base';


//waits for document to be ready before allowing js
document.addEventListener("DOMContentLoaded", function () {

    let sectionsID = [elements.sectionOneID, elements.sectionTwoID, elements.sectionThreeID, elements.sectionFourID, elements.sectionFiveID, elements.sectionSixID]
    

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

    
    
    //-----------------------------------------------category sections image clicked-------------------------//

    //checks if dataset clickd is true: if true then display image
    function checkDataset() {
        sectionsID.forEach(el => {
            el.dataset.clicked === 'true' ? changeSize(el) : displayNone(el)
        });

    }

    function turnOffDataSet() {
        sectionsID.forEach(el => {
             el.dataset.clicked = 'false';
             
             
             
        });
    }

    function turnOnDataSet(id) {
        //console.log(id);
        sectionsID[id].dataset.clicked = 'true';
        checkDataset();
        changeSize(sectionsID[id]);

        
    }

    sectionsID.forEach(el => {
        el.onclick = () => {
            let target = event.target;

            if(target.closest('#sectionOneDiv')) {

                sectionsID[0].dataset.clicked = 'true';
                //console.log(el.dataset.clicked);

            } else if (target.closest('#sectionTwoDiv')) {

                sectionsID[1].dataset.clicked = 'true';
                
            } else if (target.closest('#sectionThreeDiv')) {

                sectionsID[2].dataset.clicked = 'true';
                
            } else if (target.closest('#sectionFourDiv')) {

                sectionsID[3].dataset.clicked = 'true';
                
            } else if (target.closest('#sectionFiveDiv')) {

                sectionsID[4].dataset.clicked = 'true';
                
            } else if (target.closest('#sectionSixDiv')) {

                sectionsID[5].dataset.clicked = 'true';
            }
            checkDataset();
                    
        }
    })
        
    elements.leftArrow.onclick = () => {
        

        let clickedOne;
        
        //find current image with clicked to be true
        sectionsID.forEach((el, index) => { 
            
             if(el.getAttribute('data-clicked') === 'true') {
                clickedOne = index;
            
             } else {
                
             };
        });

        //check if clickedOne is at 0 if it is then go to 6
        if(clickedOne === 0) {
            clickedOne = sectionsID.length;
        }

        //console.log(clickedOne + 1);

        turnOffDataSet();
        turnOnDataSet(clickedOne - 1);
        
           
    }

    elements.rightArrow.onclick = () => {

        let clickedOne;

        
        //find current image with clicked to be true
        sectionsID.forEach((el, index) => { 
            
             if(el.getAttribute('data-clicked') === 'true') {
                clickedOne = index;
            
             } else {
                
             };

        });

        
        //check if clickedOne is at position 5 if it is then go to 0
        if(clickedOne === sectionsID.length - 1) {
            clickedOne = 0;
            
        } else {
            clickedOne++;
        }
         
        turnOffDataSet();
        turnOnDataSet(clickedOne);
        
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


    //---------------------------------------------contact section clear button-----------------------------//
    elements.clearBTN.onclick = () => {
        [elements.messageInput, elements.nameInput, elements.emailInput].forEach(el => el.value = ``)
    }

    
 
        
});








