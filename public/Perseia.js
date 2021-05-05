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
                // new ol.layer.Image({
                //     source: new ol.source.ImageWMS({
                //         url: 'http://mapas.geomatica.ufpr.br/geoserver/wms',
                //         params: { 'LAYERS': 'UCM-BASE:ccja_base_campus,UCM-BASE:ccja_andar_0' },
                //         ratio: 1,
                //         serverType: 'geoserver',
                //     }),
                // }),
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
        this.finishBtn = document.getElementById('box-finish');
        this.disclaimerElm = document.getElementById('disclaimer');
        this.instructionsElm = document.getElementById('instructions');
        this.mainElm = document.getElementById('main');
        this.boxElm = document.getElementById('box');
        this.thanksElm = document.getElementById('thanks');
        this.boxContentElm = document.getElementById('box-content');
        this.mapElm = document.getElementById('map');

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


    registerEvents() {

        this.agreeBtn.addEventListener('click', () => {
            this.disclaimerElm.classList.add('d-none');
            this.instructionsElm.classList.remove('d-none');
        });

        this.startBtn.addEventListener('click', () => {

            this.instructionsElm.classList.add('d-none');
            this.mainElm.classList.remove('d-none');
            this.initMap();
            this.createClickInteration();
            this.createLayers();

        });

        this.cancelBtn.addEventListener('click', () => {
            this.boxElm.classList.add('d-none');
        });

        this.finishBtn.addEventListener('click', () => {
            this.boxElm.classList.add('d-none');
            this.thanksElm.classList.remove('d-none');
            this.endFullScreen()
        });

    }

    createQgis2webPolyFill() {

        window.createTextStyle = function () { };

    }


}