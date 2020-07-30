
// export const view = function() {
//     //alert(`initialized from view`);

//     function alertAMessage() {
//         alert(`called from public function in view`)
//     }

//     return {
//         alertOne:alertAMessage
//     }

// }();

import {elements} from './base'

export const view = function() {

    function bgChange(arg) {
        
        if(arg === true) {
            //alert(`argument was true! ${arg}`)
            elements.navbar.style.backgroundColor = '#242943';
        } else {
            //alert(`argument was false! ${arg}`)
            elements.navbar.style.backgroundColor = 'transparent';
        }
    }

    return {
        bgChange:bgChange
    }

}();
  







