import {createIcon, SkullSvg} from "./icons";

function skullInsert(){
	const skullInsert = document.querySelectorAll('.insertSkull')
	if (!skullInsert) return
	skullInsert.forEach(item => {
		item.append(createIcon(SkullSvg));
	});
}

export default skullInsert