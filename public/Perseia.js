class Perseia {

    constructor() {

        this.initMap();

    }

    initMap() {

        this.map = new ol.Map({
            layers: [
                new ol.layer.Image({
                    source: new ol.source.ImageWMS({
                        url: 'http://mapas.geomatica.ufpr.br/geoserver/UCM-BASE/wms',
                        params: { 'LAYERS': 'UCM-BASE:ccja_base_campus,UCM-BASE:ccja_andar_0' },
                        ratio: 1,
                        serverType: 'geoserver',
                    }),
                }),
                // new ol.layer.Tile({
                //     source: new ol.source.OSM()
                // })
            ],
            target: 'map',
            view: new ol.View({
                center: [-5480575.337250389, -2931337.0036498797],
                zoom: 17
            })
        })

    }


}