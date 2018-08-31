var wms_layers = [];

        var lyr_MapSurferOSMRoads_0 = new ol.layer.Tile({
            'title': 'MapSurferOSMRoads_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">©OpenStreetMap contributors, ODbL, Imagery GIScience Research Group @ Heidelberg University</a>'})],
                url: 'http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}'
            })
        });var format_KENYA_1 = new ol.format.GeoJSON();
var features_KENYA_1 = format_KENYA_1.readFeatures(json_KENYA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KENYA_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KENYA_1.addFeatures(features_KENYA_1);var lyr_KENYA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KENYA_1, 
                style: style_KENYA_1,
                title: '<img src="styles/legend/KENYA_1.png" /> KENYA'
            });var format_KETRACO_LINES_2 = new ol.format.GeoJSON();
var features_KETRACO_LINES_2 = format_KETRACO_LINES_2.readFeatures(json_KETRACO_LINES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETRACO_LINES_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KETRACO_LINES_2.addFeatures(features_KETRACO_LINES_2);var lyr_KETRACO_LINES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KETRACO_LINES_2, 
                style: style_KETRACO_LINES_2,
    title: 'KETRACO_LINES<br />\
    <img src="styles/legend/KETRACO_LINES_2_0.png" /> 132kV<br />\
    <img src="styles/legend/KETRACO_LINES_2_1.png" /> 220kV<br />\
    <img src="styles/legend/KETRACO_LINES_2_2.png" /> 400kV<br />\
    <img src="styles/legend/KETRACO_LINES_2_3.png" /> 500HVDC<br />'
        });var format_KETRACO_SUBSTATIONS_3 = new ol.format.GeoJSON();
var features_KETRACO_SUBSTATIONS_3 = format_KETRACO_SUBSTATIONS_3.readFeatures(json_KETRACO_SUBSTATIONS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETRACO_SUBSTATIONS_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KETRACO_SUBSTATIONS_3.addFeatures(features_KETRACO_SUBSTATIONS_3);cluster_KETRACO_SUBSTATIONS_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_KETRACO_SUBSTATIONS_3
});var lyr_KETRACO_SUBSTATIONS_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_KETRACO_SUBSTATIONS_3, 
                style: style_KETRACO_SUBSTATIONS_3,
                title: '<img src="styles/legend/KETRACO_SUBSTATIONS_3.png" /> KETRACO_SUBSTATIONS'
            });var format_PowerInput_AGI_4 = new ol.format.GeoJSON();
var features_PowerInput_AGI_4 = format_PowerInput_AGI_4.readFeatures(json_PowerInput_AGI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerInput_AGI_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PowerInput_AGI_4.addFeatures(features_PowerInput_AGI_4);cluster_PowerInput_AGI_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PowerInput_AGI_4
});var lyr_PowerInput_AGI_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PowerInput_AGI_4, 
                style: style_PowerInput_AGI_4,
                title: '<img src="styles/legend/PowerInput_AGI_4.png" /> PowerInput_AGI'
            });

lyr_KENYA_1.setVisible(true);lyr_KETRACO_LINES_2.setVisible(true);lyr_KETRACO_SUBSTATIONS_3.setVisible(true);lyr_PowerInput_AGI_4.setVisible(true);
var layersList = [lyr_MapSurferOSMRoads_0,lyr_KENYA_1,lyr_KETRACO_LINES_2,lyr_KETRACO_SUBSTATIONS_3,lyr_PowerInput_AGI_4];
lyr_KENYA_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KETRACO_LINES_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LINE_NAME': 'LINE_NAME', 'Length': 'Length', 'STATUS': 'STATUS', 'VOLTAGE_1': 'VOLTAGE_1', 'COMM_DATE': 'COMM_DATE', });
lyr_KETRACO_SUBSTATIONS_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'Substation': 'Substation', 'VOLTAGE': 'VOLTAGE', 'COMM_DATE_': 'COMM_DATE_', 'SUB_NAME': 'SUB_NAME', });
lyr_PowerInput_AGI_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_KENYA_1.set('fieldImages', {'OBJECTID': '', 'AREA': '', 'PERIMETER': '', 'COUNTY3_': '', 'COUNTY3_ID': '', 'COUNTY': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_KETRACO_LINES_2.set('fieldImages', {'OBJECTID': '', 'LINE_NAME': '', 'Length': '', 'STATUS': '', 'VOLTAGE_1': '', 'COMM_DATE': '', });
lyr_KETRACO_SUBSTATIONS_3.set('fieldImages', {'OBJECTID': '', 'NAME': 'TextEdit', 'Substation': '', 'VOLTAGE': '', 'COMM_DATE_': '', 'SUB_NAME': '', });
lyr_PowerInput_AGI_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_KENYA_1.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COUNTY3_': 'no label', 'COUNTY3_ID': 'no label', 'COUNTY': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KETRACO_LINES_2.set('fieldLabels', {'OBJECTID': 'no label', 'LINE_NAME': 'no label', 'Length': 'no label', 'STATUS': 'no label', 'VOLTAGE_1': 'no label', 'COMM_DATE': 'no label', });
lyr_KETRACO_SUBSTATIONS_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'Substation': 'no label', 'VOLTAGE': 'no label', 'COMM_DATE_': 'no label', 'SUB_NAME': 'no label', });
lyr_PowerInput_AGI_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_PowerInput_AGI_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});