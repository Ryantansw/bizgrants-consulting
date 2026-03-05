function generateSuggestions(jd){

let suggestions = []

if(!jd.includes("SOP"))
suggestions.push("Develop and maintain operational SOPs")

if(!jd.includes("metrics"))
suggestions.push("Track operational performance metrics")

if(!jd.includes("stakeholder"))
suggestions.push("Manage stakeholder communication and coordination")

if(!jd.includes("review"))
suggestions.push("Conduct operational performance reviews")

if(!jd.includes("process"))
suggestions.push("Implement process improvement initiatives")

const container = document.getElementById("suggestions")

suggestions.forEach(s => {

const box = document.createElement("input")

box.type = "checkbox"

box.value = s

box.onclick = function(){

if(this.checked){

document.getElementById("jdText").value += "\n• " + s

}

}

container.appendChild(box)

container.appendChild(document.createTextNode(" " + s))

container.appendChild(document.createElement("br"))

})

}
