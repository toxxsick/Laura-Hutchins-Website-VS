
import '../styles/styles.scss';
import {elements, nodeToArray} from '../js/views/base';
import {view} from './views/view';





//waits for document to be ready before allowing js
document.addEventListener("DOMContentLoaded", function () {

     const controller = function() {

        let sectionsID = [elements.sectionOneID, elements.sectionTwoID, elements.sectionThreeID, elements.sectionFourID, elements.sectionFiveID, elements.sectionSixID]
        
        const illustrationArray = ['Cyberpunk', 'JJK', 'NikolaRomeoOSRS', 'Ninja', 'RossDraws', 'AudreyanaMichelle'];
        const photostudiesArray = ['GaryVaynerchuk', 'GinaTorres', 'MeghanMarkle', 'PatrickJAdams', 'SarahRafferty', 'SpaceDog'];
        const merchArray = ['Cheetah', 'Lion', 'Tiger', 'Untitled_Artwork', 'tigerBisexualFlag'];
        const oldWorkArray = ['BarackObama', 'GordonBrown', 'ConceptForChildrenBook', 'Retrofuturism', 'Retrofuturism2', 'SargoOSRS', 'Fetch'];
        const photographyArray = [];
        const tattooArray = ['BuzzWhite', 'cat', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'JapaneseMaskWhiteBg', 'LionKingwhitebg', 'rose1', 'rose2', 'rose3', 'StudioGhibliwhitebg', 'Woodywhitebg'];
        let seen = false;
        let indexPos;
        
        
        

        //-----------------------------miscellaneous--------------------------//

        
        //--------------------sroll navigation bar switch---------------------//
        window.onscroll = () =>  {

        if (document.documentElement.scrollTop >= 870) {

            view.bgChange(true);
            
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


    //category image clicked, turns on dataset, check data sets and enlarges one which has been turned on, turns off rest. 



    sectionsID.forEach(el => {
        el.addEventListener('click', categoryClicked)
    })
    
    function categoryClicked() {

        let eventTarget = event.target;

        if(eventTarget.closest('#sectionOneDiv')) {
            
            turnOnDataSet(elements.sectionOneID)
            
        } 
        if(eventTarget.closest('#sectionTwoDiv')) {
            
            turnOnDataSet(elements.sectionTwoID)

        }
        if(eventTarget.closest('#sectionThreeDiv')) {
            
            turnOnDataSet(elements.sectionThreeID)

        } 
        if(eventTarget.closest('#sectionFourDiv')) {
            
            turnOnDataSet(elements.sectionFourID)

        }
        if(eventTarget.closest('#sectionFiveDiv')) {
            
            turnOnDataSet(elements.sectionFiveID)

        } 
        if(eventTarget.closest('#sectionSixDiv')) {
           
            turnOnDataSet(elements.sectionSixID)

        }

        //function which checks data set and which one got turned on: turn off those which are not active
        checkDataSet(sectionsID);  

    }

    

    let turnOnDataSet = arg =>  {
        
        arg.dataset.clicked = 'true';
        
    }

    let turnOffDataSet = arg =>  {

        arg.forEach(el => {

            el.dataset.clicked = 'false';
        })

    }

   

    let checkDataSet = arg => {

        arg.forEach((el,index, Array) => {
            
            el.dataset.clicked == 'true' ? showClickedCategoryImg(el) : hideCategoryImg(Array)

        })

    }



    let showClickedCategoryImg = el => {
        
    //takes the element, sees what image it is, formats the name of the element src
    let categoryName = formattedName(el)
    
    //function which compares name to one of the arrays so it can use the smaller images of the array for the small category
    checkName(categoryName)

    }

    let hideCategoryImg = arg => {

        arg.forEach(el => el.style.display = 'none');

    }

    let showCategoryImg = arg => {

        arg.forEach(el => {
            el.style.display = 'block';
            
        });
        
    }
    
    let formattedName = (el) => {
        let formattedel = el.querySelector('img').src.split('/');
        let formattedAndSplicedel;
        let formattedSplicedString;
        let removedPNG;
        let convertedString;

        formattedel.forEach((el,index) => {

            if(el.includes('.jpg') || el.includes('.png')) {
                
                formattedAndSplicedel = formattedel.splice(index, 1);

            } 

        })

        
        formattedSplicedString = formattedAndSplicedel.toString();
        removedPNG = formattedSplicedString.split('.').splice(0, 1)
        
        convertedString = removedPNG.toString();

        return convertedString;

    }

    let checkName = (arg) => {

        const testName = arg;
        
        let foldername; 

        //find out which array the name belongs in

        illustrationArray.forEach(el => {
            if(el === testName) {
                
                foldername = 'illustration';

                enlargeImg(foldername, el)
                
                thumbnailImg(illustrationArray, foldername)
            
            } 
        })

        photostudiesArray.forEach(el => {
            if(el === testName) {
                
                foldername = 'photostudies';

                enlargeImg(foldername, el)

                thumbnailImg(photostudiesArray, foldername)
                
            } 
        })

        merchArray.forEach(el => {
            if(el === testName) {
                
                foldername = 'Merch';

                enlargeImg(foldername, el)

                thumbnailImg(merchArray, foldername)
                
            } 
        })

        oldWorkArray.forEach(el => {
            if(el === testName) {
                
                foldername = 'Oldwork';

                enlargeImg(foldername, el)

                thumbnailImg(oldWorkArray, foldername)
                
            } 
        })

        tattooArray.forEach(el => {
            if(el === testName) {
                
                foldername = 'Tattoo';

                enlargeImg(foldername, el)

                thumbnailImg(tattooArray, foldername)
                
            } 
        })
        
    }

    // let enlargeImg = (folder, arg) => {

    //     const leftArrow = elements.leftArrow
    //     let placeHolderName = `<img src="img/${folder}/${arg}.png" class="galleryDiv__enlargedImgDiv__img"></img>`

    //     leftArrow.insertAdjacentHTML('afterend', placeHolderName)

    // }

    let enlargeImg = (folder, arg) => {

        const leftArrow = elements.leftArrow
        let placeHolderName = document.createElement('img');
        placeHolderName.src = `img/${folder}/${arg}.png`;
        placeHolderName.classList.add('galleryDiv__enlargedImgDiv__img');

        //make a function which adds all the attributes of the img created above 
        
        leftArrow.insertAdjacentHTML('afterend', placeHolderName.outerHTML)

    }

    

    let thumbnailImg = (array, foldername) => {
        array.forEach(el => {

            const galleryDiv = elements.galleryDiv;

            let placeHolderName = `
            
                                <div class="galleryDiv__imgDiv col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
        
                                <img src="Img/${foldername}/${el}.png" class="galleryDiv__imgDiv__img">

                                </div>
                                
                                `

        galleryDiv.insertAdjacentHTML('beforeend', placeHolderName)

        })   
    }

    let removeEnlargeImg = () => {

        const div = elements.galleryDivEnlargedImgDiv;
        const enlargedImg = div.querySelector('img');
        enlargedImg.parentNode.removeChild(enlargedImg);
        
        
    }

    let deletethumbnailImg = () => {

    }

    //---------------------------------Arrow Functionality-------------------------------//
    elements.leftArrow.addEventListener('click', switchLeft);
    elements.rightArrow.addEventListener('click', switchRight);
    elements.crossArrow.addEventListener('click', clearAll);

    function clearAll() {

       
    
        //turn off dataset for that cataegory
        turnOffDataSet(sectionsID);

        //display all category 
        showCategoryImg(sectionsID);

        //delete enlargedImg
        removeEnlargeImg();

        //delete thumbnailImg


        
    }

    function switchLeft() {

        
        //find out what's being displayed
        let src = currentlyDisplayed();
        
        
        //find out what array is being and which position it's in. 
        let arrayItems = findArray(src);
        let arrayName = arrayItems[0];
        let arrayPos = arrayItems[1]; 
        

        
        if(seen === true) {

            arrayPos = indexPos;

        }

        //finds the prev index item name of the particular array
        let previousPosition = findPosition(arrayName, arrayPos, 'backward');
        

        //remove "array" from arrayName for switchEnlargeImg
        let removedArrayString = removeArrayString(arrayName);
        

        //switch enlargedImg
        switchEnlargeImg(removedArrayString, previousPosition);
        
    }

    

    function switchRight() {

        //find out what's being displayed
        let src = currentlyDisplayed();
        
        //find out what array is being and which position it's in. 
        let arrayItems = findArray(src);
        let arrayName = arrayItems[0];
        let arrayPos = arrayItems[1]; // 3 

        
        if(seen === true) {

            arrayPos = indexPos;

        }

        //finds the prev index item name of the particular array
        let previousPosition = findPosition(arrayName, arrayPos, 'forward');

        //remove "array" from arrayName for switchEnlargeImg
        let removedArrayString = removeArrayString(arrayName);

        //switch enlargedImg
        switchEnlargeImg(removedArrayString, previousPosition);
        
    }




    
    let findPosition = (arrayName, arrayPosition, direction) => {

        let arrayLength;
        let arrayPosMinusOne;
        let arrayPosPlusOne;
        
        if(arrayName === 'illustrationArray') {

            arrayLength = illustrationArray.length; 
            
            if(direction === 'backward') {

                arrayPosMinusOne = minusOne(arrayPosition, arrayLength);
                
                indexPos = arrayPosMinusOne;

                return illustrationArray[arrayPosMinusOne];

            } else {

                arrayPosPlusOne = plusOne(arrayPosition, arrayLength);
                
                indexPos = arrayPosPlusOne;

                return illustrationArray[arrayPosPlusOne];

            }
        }

        if(arrayName === 'tattooArray') {

            arrayLength = tattooArray.length; 
            
            if(direction === 'backward') {

                arrayPosMinusOne = minusOne(arrayPosition, arrayLength);
                
                indexPos = arrayPosMinusOne;

                return tattooArray[arrayPosMinusOne];

            } else {

                arrayPosPlusOne = plusOne(arrayPosition, arrayLength);
                
                indexPos = arrayPosPlusOne;

                return tattooArray[arrayPosPlusOne];

            }
        }

        if(arrayName === 'photostudiesArray') {

            arrayLength = photostudiesArray.length; 
            
            if(direction === 'backward') {

                arrayPosMinusOne = minusOne(arrayPosition, arrayLength);
                
                indexPos = arrayPosMinusOne;

                return photostudiesArray[arrayPosMinusOne];

            } else {

                arrayPosPlusOne = plusOne(arrayPosition, arrayLength);
                
                indexPos = arrayPosPlusOne;

                return photostudiesArray[arrayPosPlusOne];

            }
        }

        if(arrayName === 'merchArray') {

            arrayLength = merchArray.length; 
            
            if(direction === 'backward') {

                arrayPosMinusOne = minusOne(arrayPosition, arrayLength);
                
                indexPos = arrayPosMinusOne;

                return merchArray[arrayPosMinusOne];

            } else {

                arrayPosPlusOne = plusOne(arrayPosition, arrayLength);
                
                indexPos = arrayPosPlusOne;

                return merchArray[arrayPosPlusOne];

            }
        }

        if(arrayName === 'oldWorkArray') {

            arrayLength = oldWorkArray.length; 
            
            if(direction === 'backward') {

                arrayPosMinusOne = minusOne(arrayPosition, arrayLength);
                
                indexPos = arrayPosMinusOne;

                return oldWorkArray[arrayPosMinusOne];

            } else {

                arrayPosPlusOne = plusOne(arrayPosition, arrayLength);
                
                indexPos = arrayPosPlusOne;

                return oldWorkArray[arrayPosPlusOne];

            }
        }
    }
    
    let minusOne = (argIndex, argLength) => {

        let arrayPos;
        
        if(argIndex === 0) {

             arrayPos = argLength - 1;
            
        } else {

            arrayPos = argIndex - 1;

        }

        seen = true;
        return arrayPos;

    }

    let plusOne = (argIndex, argLength) => {

        let arrayPos;

        if(argIndex === argLength - 1) {

            arrayPos = 0;

        } else {

            arrayPos = argIndex + 1;

        }

        seen = true;
        return arrayPos;
        
    }
    
    let switchEnlargeImg = (arrayName, indexName) => {

        let src = elements.galleryDivEnlargedImgDiv
        src.querySelector('img').src = `img/${arrayName}/${indexName}.png`

    }
    
    let removeArrayString = (arrayName) => {

        let removedArrayString = arrayName.replace('Array', '');
        return removedArrayString;

    }

    let currentlyDisplayed = () => {
        
        let src = elements.galleryDivEnlargedImgDiv
        let formattedSrc = formattedName(src)
        return formattedSrc;

    }

    let findArray = (arg) => {
        let arrayPosition;
        let arrayTitle;
        let PosAndTitleArray = [];

        //use argument to for each array 
        illustrationArray.forEach((el, index, array) => {
            if(el === arg) {
                
                 arrayPosition = index;
                 arrayTitle = 'illustrationArray'
                 PosAndTitleArray.push(arrayTitle, arrayPosition);

            } 
        })

        photostudiesArray.forEach((el, index, array) => {
            if(el === arg) {
                
                 arrayPosition = index;
                 arrayTitle = 'photostudiesArray'
                 PosAndTitleArray.push(arrayTitle, arrayPosition);

            } 
        })

        merchArray.forEach((el, index, array) => {
            if(el === arg) {
                
                arrayPosition = index;
                arrayTitle = 'merchArray'
                PosAndTitleArray.push(arrayTitle, arrayPosition);
                
            } 
        })

        oldWorkArray.forEach((el, index, array) => {
            if(el === arg) {
                
                arrayPosition = index;
                arrayTitle = 'oldWorkArray'
                PosAndTitleArray.push(arrayTitle, arrayPosition);
                
            } 
        })

        tattooArray.forEach((el, index, array) => {
            if(el === arg) {
                
                arrayPosition = index;
                arrayTitle = 'tattooArray'
                PosAndTitleArray.push(arrayTitle, arrayPosition);
                
            } 
        })

        return PosAndTitleArray;

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

    

    


    //////////////////////About Me Section

    let contactIntroHeaderArr = nodeToArray(elements.contactIntroHeader);
    contactIntroHeaderArr.push(elements.contactIntroBtnDiv);
    
    
    

    //////////////////////Contact Section 

    $(document).on('scroll',() => {

        let scrollPositionY = window.pageYOffset;
        //console.log(scrollPositionY);
        if(scrollPositionY >= 225 && scrollPositionY <= 700) {
        
        // [sectionsIDImg[0], sectionsIDImg[1]].forEach(el => $(el).fadeIn(1000));
        // [sectionsCentered[0], sectionsCentered[1]].forEach(el => 

        //     $(el).delay(1000).animate({ 
        //         opacity: 1,
        //         top: '50%'
        //     }, 500)

            
        
        // );

        } 
        
        if (scrollPositionY >= 750 && scrollPositionY <= 1450) {

        // [sectionsIDImg[2], sectionsIDImg[3]].forEach(el => $(el).fadeIn(1000));
        // [sectionsCentered[2], sectionsCentered[3]].forEach(el => 

        //     $(el).delay(1000).animate({ 
        //         opacity: 1,
        //         top: '50%'
        //     }, 500)
        
        // );
                    
        }
         if (scrollPositionY >= 1500 && scrollPositionY <= 2000) {

            // [sectionsIDImg[4], sectionsIDImg[5]].forEach(el => $(el).fadeIn(1000));
        //     [sectionsCentered[4], sectionsCentered[5]].forEach(el => 

        //     $(el).delay(1000).animate({ 
        //         opacity: 1,
        //         top: '50%'
        //     }, 500)
        
        // );
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








