import jsonData from '../logements.json';



function CreateTags() {
    for (let i = 0; i < jsonData.tags.length; i++) {
		const tag = document.createElement("p");
		const textNode = document.createTextNode("selectedData.tags");
        tag.appendChild(textNode);
        const container = document.getElementsByClassName("tags");
        container.appendChild(tag);
    }
}