
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
        elements.messageInput.value = ``;
        elements.nameInput.value = ``;
        elements.emailInput.value = ``;
    
    }
        
    

});









