
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

        if (document.documentElement.scrollTop >= 870) {

            view.bgChange(true);
            checkShown()
            
        } else {
            
            view.bgChange(false);
            
        }
    };
    
    //-----------------------------navigation bar--------------------------//
    //on click makes modal css block
    elements.menuGrpBtnGrp.onclick = () => view.modalDisplay('block'); 
    
    //on clicking the span button changes modal css to none;
    elements.closeBtn.onclick = () => view.modalDisplay('none');

    //when clicking anywhere outside the modal, changes the model css to none;
    window.onclick = (event) => {

        if(event.target === elements.modal) {

            view.modalDisplay('none');

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
                displayGalleryImages(0);
               

            } else if (target.closest('#sectionTwoDiv')) {

                sectionsID[1].dataset.clicked = 'true';
                displayGalleryImages(1);
                
                
            } else if (target.closest('#sectionThreeDiv')) {

                sectionsID[2].dataset.clicked = 'true';
                displayGalleryImages(2);
                
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
            displayGalleryLayout(true);
             
            
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
        displayGalleryLayout(false); 
        removeGalleryImages();  
        
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

    function displayGalleryLayout(boolean) {

        if (boolean === true) {
            elements.clickedSectionsContainer.style.display = 'block';
        } else {
            elements.clickedSectionsContainer.style.display = 'none';
        }
    }

    function displayGalleryImages(num) {
        
        //alert(num)
        if (num === 0) {

            

            const illustrationArray = ['Cyberpunk', 'JJK', 'Nikola__Romeo_OSRS', 'Ninja', 'Ross_Draws'];
            
            const galleryDiv = elements.galleryDiv

            console.log(galleryDiv)

            illustrationArray.forEach(el => {
                

                const divWithImg = `
                                    <div class="galleryDiv__imgDiv">
                                        <img src="Img/Illustration/${el}.png" class="galleryDiv__imgDiv__img"> 
                                    </div>
                                    `

                galleryDiv.insertAdjacentHTML('afterbegin', divWithImg);

            })

        } else if (num === 1) {

            alert(`this is 1`)

            const photostudiesArray = ['GaryVaynerchuk', 'GinaTorres', 'MeghanMarkle', 'PatrickJAdams', 'SarahRafferty']

            const galleryDiv = elements.galleryDiv

            console.log(galleryDiv)

            photostudiesArray.forEach(el => {
                

                const divWithImg = `
                                    <div class="galleryDiv__imgDiv">
                                        <img src="Img/Photostudies/${el}.png" class="galleryDiv__imgDiv__img"> 
                                    </div>
                                    `

                galleryDiv.insertAdjacentHTML('afterbegin', divWithImg);

            })

        } else {

            alert(`nothing!`);


        }

    } 

    function removeGalleryImages() {

        let galleryDiv = elements.galleryDiv
        let galleryChildElementTotal = galleryDiv.childElementCount
        
        for (let i = 0; i < galleryChildElementTotal; i++) {
            galleryDiv.removeChild(galleryDiv.lastElementChild);
        }
        
    }
    
    


    //---------------------------------------------contact section clear button-----------------------------//
    elements.clearBTN.onclick = () => {

        [elements.messageInput, elements.nameInput, elements.emailInput].forEach(el => el.value = ``)

    }

    //----------------------------JQUERY ANIMATIONS------------------------//
    
    /////////////////////////Introsection
    
    $(elements.navbar).hide();
    $(elements.introSectionBg).hide();
    $(elements.introSectionBg).fadeIn(1000);
    
    

    $(elements.introSectionWrapper).delay(1000).animate({
        opacity: 1,
        top: '13rem'
    }, 500);
    

    $(elements.navbar).delay(1500).fadeIn(1000);

    ////////////////////////CategorySection

    let sectionsIDImg = $(sectionsID).children('img');
    let sectionsCentered = $(sectionsID).children('.section__centered');

    


    //////////////////////About Me Section

    let contactIntroHeaderArr = nodeToArray(elements.contactIntroHeader);
    contactIntroHeaderArr.push(elements.contactIntroBtnDiv);
    
    
    

    //////////////////////Contact Section 

    $(document).on('scroll',() => {

        let scrollPositionY = window.pageYOffset;
        //console.log(scrollPositionY);
        if(scrollPositionY >= 225 && scrollPositionY <= 700) {
        
        [sectionsIDImg[0], sectionsIDImg[1]].forEach(el => $(el).fadeIn(1000));
        [sectionsCentered[0], sectionsCentered[1]].forEach(el => 

            $(el).delay(1000).animate({ 
                opacity: 1,
                top: '50%'
            }, 500)

            
        
        );

        } 
        
        if (scrollPositionY >= 750 && scrollPositionY <= 1450) {

        [sectionsIDImg[2], sectionsIDImg[3]].forEach(el => $(el).fadeIn(1000));
        [sectionsCentered[2], sectionsCentered[3]].forEach(el => 

            $(el).delay(1000).animate({ 
                opacity: 1,
                top: '50%'
            }, 500)
        
        );
                    
        }
         if (scrollPositionY >= 1500 && scrollPositionY <= 2000) {

            [sectionsIDImg[4], sectionsIDImg[5]].forEach(el => $(el).fadeIn(1000));
            [sectionsCentered[4], sectionsCentered[5]].forEach(el => 

            $(el).delay(1000).animate({ 
                opacity: 1,
                top: '50%'
            }, 500)
        
        );
        } 

        
        if  (scrollPositionY >= 1800 && scrollPositionY <= 3000) {
            let startN = 500;
            let nextN = startN;
            let i;

            for(i = 0; i < contactIntroHeaderArr.length; i++) {
                
                $(contactIntroHeaderArr[i]).delay(startN += nextN).animate({ opacity: 1}, 500);
            }
        };

        if(scrollPositionY >= 3000 && scrollPositionY <= 3500) {

            [$(elements.leftContactSection), $(elements.rightContactSection)].forEach(el => el.animate({opacity: 1}, 500));

        }

        if(scrollPositionY >= 3575) {
            $(elements.footerfootContainer).animate({
                opacity: 1 
            }, 500);
        }

    });

    
    
    

    }();
});








