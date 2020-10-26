


import {elements} from './base'

export const view = function() {

    let seen = false;

    function navbarBGChange(arg) {

        if(arg === true) {
            
            elements.navbar.style.backgroundColor = '#242943';
            elements.navbar.style.position = 'fixed';
            
        } else {
            
            elements.navbar.style.backgroundColor = 'transparent';
            elements.navbar.style.position = 'absolute';
            
        }
    }

    function modalDisplay(arg) {

        if(arg === 'block') {

            elements.modal.style.display = 'block';

        } else {

            elements.modal.style.display = 'none';

        }

    }

    function navbarDisplay(arg) {

        if(arg === true && seen === false) {
            
            elements.navbar.style.display = 'none';
            seen = true;

        }

        if (arg === false && seen === true) {
            elements.navbar.style.display = '';
            seen = false;
        }
    
    }

    

   
    


    return {

        navbarBGChange:navbarBGChange,
        modalDisplay:modalDisplay,
        navbarDisplay:navbarDisplay,

    }



}();










