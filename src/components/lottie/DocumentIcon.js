
import lottie from 'lottie-web';
import {defineLordIconElement} from 'lord-icon-element';

defineLordIconElement(lottie.loadAnimation);

const DocumentIcon = ({hoover}) => {
return(
<lord-icon style={{"height" : "170px", "width" : "170px"}}  src="https://cdn.lordicon.com/nocovwne.json"
    trigger={hoover}
    colors="primary:#121331,secondary:#e88c30" />
)
}
export default DocumentIcon;