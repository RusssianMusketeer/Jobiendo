
import lottie from 'lottie-web';
import {defineLordIconElement} from 'lord-icon-element';

defineLordIconElement(lottie.loadAnimation);

const LordIcon = ({hoover}) => {
return(
<lord-icon style={{"height" : "170px", "width" : "170px"}}  trigger={hoover} src="https://cdn.lordicon.com/msoeawqm.json"
colors="primary:#121331,secondary:#e88c30" 
/>
)
}
export default LordIcon