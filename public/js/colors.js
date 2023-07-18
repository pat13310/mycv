/*


* */
const codes = [
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#929496", "#bdc4cb", "#9fb1c4", "#626d79",],
    ["#944150", "#bd5366", "#e3667d", "#622c35",],
    ["#b9481f", "#d95626", "#ef5c27", "#8c3819",],
    ["#f89200", "#fda830", "#ffcc00", "#fccf8c",],
    ["#166c60", "#1d8879", "#27b29f", "#104b43",],
    ["#007d8b", "#019daf", "#05bace", "#01474f",],
    ["#102a73", "#1c40a9", "#3d6ef5", "#09173d",],
    ["#3f3f3f", "#646464", "#888888", "#1f1f1f",],
];

function loadColors(elem) {
    let child = document.createElement("div");
    child.style.background = codes[0][0];
    child.classList.add("color-select");
    child.addEventListener("click", (ele) => {
        colorsUnselectAll();
        if (ele.target.classList.contains("selected")) {
            child.classList.remove("selected");
        } else {
            child.classList.add("selected");
        }
    });
    elem.appendChild(child);
    for (let i = 1; i < codes.length; i++) {
        let child = document.createElement("div");
        child.style.background = codes[i][0];
        child.classList.add("color-select");

        child.addEventListener("mouseenter", (event) => {
            child.firstElementChild.classList.remove("collapse");
        });
        child.addEventListener("mousedown", (event) => {

        });

        elem.appendChild(child);
        let panel = document.createElement("div");
        panel.classList.add("color-select-popup");
        panel.classList.add("collapse");
        panel.addEventListener("mouseleave", (event) => {
            panel.classList.add("collapse");
        })
        child.appendChild(panel);
        for (let j = 0; j < 3; j++) {
            let color = document.createElement("div");
            color.style.background = codes[i][j];
            color.classList.add("color-select");
            color.classList.add("s-1");
            color.addEventListener("mouseup", (elem) => {
                elem.stopPropagation();
                let chooseColor = elem.target.parentElement.parentElement;
                let colorPanel = elem.target.parentElement;
                let colorSelected = elem.target;
                chooseColor.classList.remove("collapse")
                if (colorSelected.classList.contains("selected")) {
                    chooseColor.classList.remove("selected");
                } else {
                    colorsUnselectAll();
                    chooseColor.classList.add("selected");
                    chooseColor.style.background = colorSelected.style.background;
                    colorPanel.classList.add("collapse");
                }
            })
            panel.appendChild(color);
        }
    }
}

function colorsUnselectAll() {
    let colors_sel = document.querySelectorAll(".color-select");
    for (let i = 0; i < colors_sel.length; i++) {
        colors_sel[i].classList.remove("selected");
    }
}

function loadTemplates(templates) {
    let container = document.getElementById("template-container");
    for (let i = 0; i < templates.length; i++) {
        container.innerHTML += `<div onClick="onPush('${i}')" class="model">${templates[i].name}</div>`;
    }
    let models = document.querySelectorAll(".model");
    createTemplates(models);
}

function createTemplates(models) {

    for (let i = 0; i < models.length; i++) {

        let child = document.createElement("div");
        models[i].appendChild(child);
        child.classList.add("btn-model-select");
        child.classList.add("collapse");
        child.innerText = "Sélectionner ce modèle"
        let label = document.createElement("div");
        label.classList.add("label-model");
        label.innerHTML = "PDF | WORD";
        models[i].appendChild(label);
        models[i].addEventListener("mouseover", () => {
            models[i].firstElementChild.classList.remove("collapse");
        });
        models[i].addEventListener("mouseleave", () => {
            models[i].firstElementChild.classList.add("collapse");
        });
    }
}

function loadSteps(parent) {

    let steps = [
        {"name": "Sélectionner votre CV", "points": [{'name': "Vous pouvez à tout moment modifier le modèle"}]},
        {
            "name": "Renseigner votre CV", "points": [
                {'name': "Coordonnées"},
                {'name': "Expérience"},
                {'name': "Formation"},
                {'name': "Profil"},
                {'name': "Langues"},
                {'name': "Centre d'intérêt"},
                {'name': "Autres"},
            ]
        },
    ];
    for (let i = 0; i < steps.length; i++) {
        let section = document.createElement('div');
        section.innerHTML = `${steps[i].name}`;
        parent.appendChild(section);
        for (let j = 0; j < steps.points.length; j++) {
            let point = document.createElement('div');
            point.innerHTML = `${steps[i].points[j].name}`;
            section.appendChild(point);
        }
    }
}