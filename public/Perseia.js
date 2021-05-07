class Perseia {

    constructor() {

        this.layersName = [
            'ccja_andar_1_0'
        ]

        this.createQgis2webPolyFill();
        this.initElements();
        this.registerEvents();

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

        this.q1Elm = document.getElementById('q1');
        this.q2Elm = document.getElementById('q2');
        this.q3Elm = document.getElementById('q3');

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
        data += `${this.q1Elm.value}\t`;
        data += `${this.q2Elm.value}\t`;
        data += `${this.q3Elm.value}\t`;


        return data;
    }

    saveSurvey() {

        let data = this.getSurveyDataAsTSV();
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/api', true);
        xhr.setRequestHeader('Content-type', 'text/plain');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        }
        xhr.send(data);

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
            this.startTime = Date.now();

        });

        this.cancelBtn.addEventListener('click', () => {
            this.boxElm.classList.add('d-none');
        });

        this.boxFinishBtn.addEventListener('click', () => {
            this.endTime = Date.now();
            this.boxElm.classList.add('d-none');
            this.surveyElm.classList.remove('d-none');
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

        return this.q1Elm.value && this.q1Elm.value && this.q1Elm.value;

    }

    createQgis2webPolyFill() {

        window.createTextStyle = function () { };

    }


}