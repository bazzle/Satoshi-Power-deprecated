import {createIcon, SkullSvg} from "./icons.js";

function skullInsert(){
	skullInsert = document.querySelectorAll('.insertSkull')
	skullInsert.forEach(item => {
		item.append(createIcon(SkullSvg));
	});
}

export default skullInsert