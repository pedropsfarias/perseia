class Perseia {

    constructor() {

        this.layersName = [
            'ccja_andar_1_0'
        ]

        this.createQgis2webPolyFill();
        this.initElements();
        this.initMap();
        this.createClickInteration();
        this.createLayers();
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
        this.disclaimerElm = document.getElementById('disclaimer');
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

    }

    startFullScreen() {

        document.documentElement.requestFullscreen();

    }

    showFeatureInfo(feature) {

        console.log(feature)

        if (this.overlay) this.map.removeOverlay(this.overlay);

        let width = getComputedStyle(this.mapElm).getPropertyValue("width").replace('px', '');
        let center = this.map.getView().getCenter();
        let boxElm = document.createElement('div');

        boxElm.style.width = width * 0.7 + 'px';
        boxElm.className = 'box';
        boxElm.innerHTML = `
            <h3>${feature.getProperties().ambiente}</h3>
            <p>Você selecionou como destino "${feature.getProperties().ambiente}".</p>
            <p>Deseja finalizar o teste?</p><br>
            <div>
                <a id="box-cancel" href="#">Cancelar</a> 
                <a id="box-finish" class="finish" href="#">Finalizar</a>
            </div>
        `;

        this.overlay = new ol.Overlay({
            element: boxElm,
            positioning: 'center-center',
            position: center
        });
        this.map.addOverlay(this.overlay);


        document.getElementById('box-cancel').addEventListener('click', () => {
            this.map.removeOverlay(this.overlay);
        });

        document.getElementById('box-finish').addEventListener('click', () => {
            this.map.removeOverlay(this.overlay);
        });


    }

    registerEvents() {

        this.startBtn.addEventListener('click', () => {

            this.disclaimerElm.style.display = 'none';
            this.startFullScreen();

        });

        this.clickInteration.on('select', evt => {

            this.showFeatureInfo(evt.selected[0]);
            this.clickInteration.getFeatures().clear();

        });


    }

    createQgis2webPolyFill() {

        window.createTextStyle = function () { };

    }


}