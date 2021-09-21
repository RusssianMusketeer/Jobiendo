
import lottie from 'lottie-web';
import {defineLordIconElement} from 'lord-icon-element';

defineLordIconElement(lottie.loadAnimation);

const ConfettiIcon = ({hoover}) => {
return(
<lord-icon style={{"height" : "170px", "width" : "170px"}}  src="https://cdn.lordicon.com/lupuorrc.json"
    trigger={hoover}
    colors="primary:#121331,secondary:#e88c30" />
)
}
export default ConfettiIcon;