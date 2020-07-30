
import '../styles/styles.scss';
import {elements, nodeToArray} from '../js/views/base';
import {view} from './views/view';





//waits for document to be ready before allowing js
document.addEventListener("DOMContentLoaded", function () {

    


     const controller = function() {

        let sectionsID = [elements.sectionOneID, elements.sectionTwoID, elements.sectionThreeID, elements.sectionFourID, elements.sectionFiveID, elements.sectionSixID]
        let shown = false;

        
        //--------------------sroll navigation bar switch---------------------//
        window.onscroll = () =>  {

        if (document.documentElement.scrollTop >= 1075) {

            view.bgChange(true);
            checkShown()
            
        } else {
            
            view.bgChange(false);
            
        }
    };
    
    //-----------------------------navigation bar--------------------------//
    //on click makes modal css block
    elements.menuGrpBtnGrp.onclick = () => elements.modal.style.display = 'block';
    
    //on clicking the span button changes modal css to none;
    elements.closeBtn.onclick = () => elements.modal.style.display = 'none';

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

        sectionsID[id].dataset.clicked = 'true';
        checkDataset();
        changeSize(sectionsID[id]);

    }

    function displayCtrlBtns() {

        let nodeList = elements.menuGrpI
        let arrayList = Array.from(nodeList)

        arrayList.forEach(el => el.style.display = 'inline');
        
    }

    

    function toggleShown(arg) {

        if(arg === true) {

            shown = true;

        } else {

            shown = false;

        }

    }

    function checkShown() {

        if(shown === true) {

            nodeToArray(elements.menuGrpI).forEach(el => el.style.display = 'inline'); 

        } else {

            nodeToArray(elements.menuGrpI).forEach(el => el.style.display = 'none');

        }

    }

    function toggleCateTitles(arg) {

        if(arg === true) {

            nodeToArray(elements.sectionCenteredGrp).forEach(el => el.style.display = 'none');

        } else {

            nodeToArray(elements.sectionCenteredGrp).forEach(el => el.style.display = 'block');

        }

    }

    
    sectionsID.forEach(el => {

        el.onclick = () => {

            let target = event.target;

            if(target.closest('#sectionOneDiv')) {

                sectionsID[0].dataset.clicked = 'true';
               

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
            toggleShown(true)
            displayCtrlBtns();
            toggleCateTitles(true); 
            
        }

    })
        
    elements.leftArrow.onclick = () => {

        let clickedOne;
        //find current image with clicked to be true
        sectionsID.forEach((el, index) => { 
            
             if(el.getAttribute('data-clicked') === 'true') {
                 
                clickedOne = index;
        
             } 

        });

        //check if clickedOne is at 0 if it is then go to 6
        if(clickedOne === 0) {
            clickedOne = sectionsID.length;
        }

        turnOffDataSet();
        turnOnDataSet(clickedOne - 1);
        
    }

    elements.rightArrow.onclick = () => {

        let clickedOne;
        //find current image with clicked to be true
        sectionsID.forEach((el, index) => { 
            
             if(el.getAttribute('data-clicked') === 'true') {

                clickedOne = index;
            
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

    elements.upArrow.onclick = () => {

        //make category sections as false
        turnOffDataSet();

        //displaySize back to normal layout to the one which was true
        defaultSize()
        toggleShown(false);
        checkShown();
        toggleCateTitles(false); 
        
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

    function defaultSize() {

        sectionsID.forEach((el,index) => {

            el.style.display = 'block'
            el.style.height = '35rem'
            el.getElementsByTagName('img')[0].style.width = '100%';
            el.getElementsByTagName('img')[0].style.filter = '';
            
            if(index === 0 || index === 3 || index === 4) {
                
                sectionsID[index].classList.remove('col-xl-12');
                sectionsID[index].classList.add('col-xl-5');

            } else {

                sectionsID[index].classList.remove('col-xl-12');
        
            }

        });
        
    }

    function displayNone(el) {

        el.style.display = 'none'; 

    }


    //---------------------------------------------contact section clear button-----------------------------//
    elements.clearBTN.onclick = () => {

        [elements.messageInput, elements.nameInput, elements.emailInput].forEach(el => el.value = ``)

    }

    }();

});








