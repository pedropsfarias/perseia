class Perseia {

    constructor() {

        this.layersName = [
            'ccja_andar_1_0'
        ];

        this.routes = [
            {
                test: 'sem_rel_esp',
                name: 'rota1',
                type: 'complete',
                title: 'Sem RelEsp',
                survey: [
                    {
                        description: 'VOCÊ COSTUMA SE PERDER EM AMBIENTES INDOOR?',
                        type: 'stars'
                    },
                    {
                        description: 'TEVE DIFICULDADE?',
                        type: 'stars'
                    },
                    {
                        description: 'OLHOU INSTRUÇÕES ANTERIORES PARA TER CERTEZA QUE ESTAVA NO LOCAL CORRETO?',
                        type: 'yesno'
                    },
                    {
                        description: 'TEM NOÇÃO DE DISTANCIA?',
                        type: 'stars'
                    },
                    {
                        description: 'PR DE REFERENCIA TE AJUDARIAM? CAMINHE POR 16M ATÉ A CANTINA?',
                        type: 'yesno'
                    },
                    {
                        description: 'DESCREVA A ROTA?',
                        type: 'textarea'
                    },
                    {
                        description: 'QUAIS SIMBOLOS VC SE LEMBRA?',
                        type: 'textarea'
                    },
                    {
                        image: 'p1.png',
                        description: 'QUAL DESCRIÇÃO VOCÊ PREFERE?',
                        type: 'ab'
                    },
                ]
            },
            {
                name: 'rota2',
                type: 'complete',
                title: 'RelEslp + MR + POI',
                test: 'com_rel_esp_mr_poi',
                survey: [
                    {
                        description: 'Pegunta 1',
                        type: 'stars'
                    },
                    {
                        image: 'p1.png',
                        description: 'QUAL DESCRIÇÃO VOCÊ PREFERE?',
                        type: 'ab'
                    },
                ]
            }

        ];

        this.routeNumber = prompt("--- Isso vai sair ----\nDigite o número da rota: (1 ou 2)", "1")

        this.createQgis2webPolyFill();
        this.initElements();
        this.registerEvents();

        //this.initMap(); //remove
        //this.initRouteLayer();
        //this.createRoute();

        //this.routeDefinition = this.routes[0];
        //this.startSurvey();

    }

    initMap() {

        this.map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: 'map',
            view: new ol.View({
                center: [-5480575.337250389, -2931337.0036498797],
                zoom: 17
            })
        })

    }

    initRouteLayer() {

        this.routeLayer = new ol.layer.Vector({
            source: new ol.source.Vector()
        });
        this.map.addLayer(this.routeLayer);


    }

    initElements() {

        this.startBtn = document.getElementById('start');
        this.agreeBtn = document.getElementById('agree');
        this.cancelBtn = document.getElementById('box-cancel');
        this.boxFinishBtn = document.getElementById('box-finish');
        this.surveyFinishBtn = document.getElementById('survey-finish');
        this.disclaimerElm = document.getElementById('disclaimer');
        this.instructionsElm = document.getElementById('instructions');
        this.mainElm = document.getElementById('main');
        this.boxElm = document.getElementById('box');
        this.surveyElm = document.getElementById('survey');
        this.thanksElm = document.getElementById('thanks');
        this.boxContentElm = document.getElementById('box-content');
        this.mapElm = document.getElementById('map');
        this.descriptionElm = document.getElementById('description');
        this.titleElm = document.getElementById('title');
        this.surveyContentElm = document.getElementById('survey-content');



    }


    createLayers() {

        for (let i = 0; i < this.layersName.length; i++) {
            const layerName = this.layersName[i];
            this.createGsonLayer(layerName);
        }

    }

    createGsonLayer(layerName) {

        let format = new ol.format.GeoJSON();
        let features = format.readFeatures(window[`json_${layerName}`], {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        });
        let source = new ol.source.Vector();
        source.addFeatures(features);
        let layer = new ol.layer.Vector({
            source: source,
            style: window[`style_${layerName}`],
            interactive: true
        });
        this.map.addLayer(layer);

    }

    createClickInteration() {

        this.clickInteration = new ol.interaction.Select();
        this.map.addInteraction(this.clickInteration);
        this.clickInteration.on('select', evt => {

            this.showFeatureInfo(evt.selected[0]);
            this.clickInteration.getFeatures().clear();

        });

    }

    startFullScreen() {

        let elem = document.documentElement;

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }

    }

    endFullScreen() {

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }

    }

    showFeatureInfo(feature) {

        this.boxElm.classList.remove('d-none');
        this.boxContentElm.innerHTML = `
            <h3>${feature.getProperties().ambiente}</h3>
            <p>Você selecionou como destino "${feature.getProperties().ambiente}".</p>
            <p>Deseja finalizar o teste?</p>
        `;

    }

    getSurveyDataAsTSV() {

        let data = '';
        data += `${this.startTime}\t`;
        data += `${this.endTime}\t`;
        data += `${(this.endTime - this.startTime) / 1000}\t`;

        let survey = this.routeDefinition.survey;
        for (let i = 0; i < survey.length; i++) {

            const question = survey[i];
            switch (question.type) {
                case 'stars':
                case 'yesno':
                case 'ab':

                    let input = document.querySelectorAll(`input[name='${question.name}']:checked`)[0];
                    data += input.value + '\t';
                    break;

                case 'textarea':
                    data += question.input.value + '\t';
                    break;

                default:
                    break;
            }

        }

        return data;

    }

    saveSurvey() {

        let data = this.getSurveyDataAsTSV();
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/' + this.routeDefinition.test, true);
        xhr.setRequestHeader('Content-type', 'text/plain');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        }
        xhr.send(data);

    }

    createRoute() {

        this.routeDefinition = this.routes[this.routeNumber - 1];
        if (this.routeDefinition.type == 'complete') {
            this.createCompleteRoute();
        }

    }

    createCompleteRoute() {

        this.descriptionElm.innerHTML = '';
        this.titleElm.innerHTML = this.routeDefinition.title;

        let route = window[this.routeDefinition.name];
        this.routeLayer.getSource().clear();

        console.log(this.routeLayer)

        for (let i = 0; i < route.features.length; i++) {

            const f = route.features[i];
            const color = "red";

            this.drawSegment(f, color, 2);
            this.descriptionElm.innerHTML += this.getRouteHtml(f);

        }

        this.map.getView().fit(this.routeLayer.getSource().getExtent(), {
            padding: [33, 33, 33, 33]
        });


    }

    getRouteHtml(feature) {

        let refer = '';
        if (feature.properties.referencia) {
            refer = `<span style="background: url(imgs/${feature.properties.icone}) no-repeat;">
                    ${feature.properties.referencia}
                </span >`;
        }

        return `
            <div class="description-item active">
                <div class="description-text">
                    ${feature.properties.ordem}) ${feature.properties.descricao}
                    ${refer}
                </div>
            </div>
        `;

    }

    getStepedRouteUI() {

        /*
        <div class="description-item active">
                <div class="description-text">
                    Vire a direita na <span style="background: url(imgs/lanchonete.png) no-repeat;">
                        Lanchonete</span>
                    <button>Próximo</button>
                </div>
            </div>
        */

    }

    drawSegment(s, color, width) {

        let format = new ol.format.GeoJSON();
        let feature = format.readFeature(s, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        });
        feature.setStyle(new ol.style.Style({
            stroke: new ol.style.Stroke({
                color, width
            })
        }));
        this.routeLayer.getSource().addFeature(feature);

    }

    getRadioElm(name, value) {

        let container = document.createElement('div');

        let star = document.createElement('input');
        star.type = 'radio';
        star.value = value;
        star.name = name;

        let label = document.createElement('label');
        label.innerHTML = value;

        container.append(star);
        container.append(label);

        return container;

    }

    getImageElm(name) {

        let image = document.createElement('img');
        if (name) {
            image.src = `imgs/${name}`;
            return image;
        }
        return document.createElement('div');

    }

    createUUID() {

        let dt = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    startSurvey() {

        this.surveyElm.classList.remove('d-none');
        this.surveyContentElm.innerHTML = '';

        let survey = this.routeDefinition.survey;
        for (let i = 0; i < survey.length; i++) {

            let question = survey[i];
            question.label = document.createElement('label');
            question.label.innerHTML = question.description;
            this.surveyContentElm.append(question.label);
            this.surveyContentElm.append(this.getImageElm(question.image));

            switch (question.type) {
                case 'stars':

                    question.name = this.createUUID();
                    question.s1 = this.getRadioElm(question.name, 1);
                    question.s2 = this.getRadioElm(question.name, 2);
                    question.s3 = this.getRadioElm(question.name, 3);
                    question.s4 = this.getRadioElm(question.name, 4);
                    question.s5 = this.getRadioElm(question.name, 5);

                    this.surveyContentElm.append(question.s1);
                    this.surveyContentElm.append(question.s2);
                    this.surveyContentElm.append(question.s3);
                    this.surveyContentElm.append(question.s4);
                    this.surveyContentElm.append(question.s5);

                    break;

                case 'yesno':

                    question.name = this.createUUID();
                    question.s1 = this.getRadioElm(question.name, 'Sim');
                    question.s2 = this.getRadioElm(question.name, 'Não');

                    this.surveyContentElm.append(question.s1);
                    this.surveyContentElm.append(question.s2);

                    break;

                case 'ab':

                    question.name = this.createUUID();
                    question.s1 = this.getRadioElm(question.name, 'A');
                    question.s2 = this.getRadioElm(question.name, 'B');

                    this.surveyContentElm.append(question.s1);
                    this.surveyContentElm.append(question.s2);

                    break;


                case 'textarea':


                    question.input = document.createElement('textarea');
                    question.input.rows = 5;

                    this.surveyContentElm.append(question.input);

                    break;

                default:
                    break;
            }

            this.surveyContentElm.append(document.createElement('br'));


        }



    }


    registerEvents() {

        this.agreeBtn.addEventListener('click', () => {
            this.disclaimerElm.classList.add('d-none');
            this.instructionsElm.classList.remove('d-none');
        });

        this.startBtn.addEventListener('click', () => {

            this.instructionsElm.classList.add('d-none');
            this.mainElm.classList.remove('d-none');
            this.startFullScreen();
            this.initMap();
            this.createClickInteration();
            this.createLayers();
            this.initRouteLayer();
            this.createRoute();
            this.startTime = Date.now();

        });

        this.cancelBtn.addEventListener('click', () => {
            this.boxElm.classList.add('d-none');
        });

        this.boxFinishBtn.addEventListener('click', () => {
            this.endTime = Date.now();
            this.boxElm.classList.add('d-none');
            this.startSurvey();
            this.endFullScreen()


        });

        this.surveyFinishBtn.addEventListener('click', () => {

            if (this.validateSurvey()) {

                this.surveyElm.classList.add('d-none');
                this.thanksElm.classList.remove('d-none');
                this.saveSurvey();

            } else {

                alert('Para continuar, preencha os campos obrigatórios.');

            }

        });

    }

    validateSurvey() {

        let isOk = [];
        let checker = arr => arr.every(Boolean);
        let survey = this.routeDefinition.survey;
        for (let i = 0; i < survey.length; i++) {

            const question = survey[i];
            switch (question.type) {
                case 'stars':
                case 'yesno':
                case 'ab':
                    isOk.push(document.querySelectorAll(`input[name='${question.name}']:checked`).length > 0);
                    break;

                case 'textarea':
                    isOk.push(Boolean(question.input.value));
                    break;

                default:
                    break;
            }

        }

        return checker(isOk);

    }

    createQgis2webPolyFill() {

        window.createTextStyle = function () { };

    }


}