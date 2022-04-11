var wms_layers = [];


        var lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0 = new ol.layer.Tile({
            'title': 'Cambodia, Laos, Thailand, Vietnam, Malaysia, Myanmar bilingual',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.osm-tools.org">© osm-tools.org & OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://b.tile.osm-tools.org/osm/{z}/{x}/{y}.png'
            })
        });
var lyr_ndvi_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11383350.000000, 1342862.457067, 11442300.000000, 1399035.740648]
                            })
                        });

lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0.setVisible(true);lyr_ndvi_1.setVisible(true);
var layersList = [lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0,lyr_ndvi_1];
