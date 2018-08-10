var wms_layers = [];
var format_PowerInput_AGIHV_Overhead_0 = new ol.format.GeoJSON();
var features_PowerInput_AGIHV_Overhead_0 = format_PowerInput_AGIHV_Overhead_0.readFeatures(json_PowerInput_AGIHV_Overhead_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerInput_AGIHV_Overhead_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PowerInput_AGIHV_Overhead_0.addFeatures(features_PowerInput_AGIHV_Overhead_0);var lyr_PowerInput_AGIHV_Overhead_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PowerInput_AGIHV_Overhead_0, 
                style: style_PowerInput_AGIHV_Overhead_0,
                title: '<img src="styles/legend/PowerInput_AGIHV_Overhead_0.png" /> PowerInput_AGI HV_Overhead'
            });var format_PowerInput_AGIAGI_Labels_1 = new ol.format.GeoJSON();
var features_PowerInput_AGIAGI_Labels_1 = format_PowerInput_AGIAGI_Labels_1.readFeatures(json_PowerInput_AGIAGI_Labels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerInput_AGIAGI_Labels_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PowerInput_AGIAGI_Labels_1.addFeatures(features_PowerInput_AGIAGI_Labels_1);var lyr_PowerInput_AGIAGI_Labels_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PowerInput_AGIAGI_Labels_1, 
                style: style_PowerInput_AGIAGI_Labels_1,
                title: '<img src="styles/legend/PowerInput_AGIAGI_Labels_1.png" /> PowerInput_AGI AGI_Labels'
            });
        var lyr_MapSurferOSMRoads_2 = new ol.layer.Tile({
            'title': 'MapSurferOSMRoads_2',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">©OpenStreetMap contributors, ODbL, Imagery GIScience Research Group @ Heidelberg University</a>'})],
                url: 'http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}'
            })
        });var format_KETRACO_LINES_3 = new ol.format.GeoJSON();
var features_KETRACO_LINES_3 = format_KETRACO_LINES_3.readFeatures(json_KETRACO_LINES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETRACO_LINES_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KETRACO_LINES_3.addFeatures(features_KETRACO_LINES_3);var lyr_KETRACO_LINES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KETRACO_LINES_3, 
                style: style_KETRACO_LINES_3,
    title: 'KETRACO_LINES<br />\
    <img src="styles/legend/KETRACO_LINES_3_0.png" /> 132kV<br />\
    <img src="styles/legend/KETRACO_LINES_3_1.png" /> 220kV<br />\
    <img src="styles/legend/KETRACO_LINES_3_2.png" /> 400kV<br />\
    <img src="styles/legend/KETRACO_LINES_3_3.png" /> 500HVDC<br />\
    <img src="styles/legend/KETRACO_LINES_3_4.png" /> <br />'
        });var format_KENYA_4 = new ol.format.GeoJSON();
var features_KENYA_4 = format_KENYA_4.readFeatures(json_KENYA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KENYA_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KENYA_4.addFeatures(features_KENYA_4);var lyr_KENYA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KENYA_4, 
                style: style_KENYA_4,
                title: '<img src="styles/legend/KENYA_4.png" /> KENYA'
            });var format_KETRACO_SUBSTATIONS_5 = new ol.format.GeoJSON();
var features_KETRACO_SUBSTATIONS_5 = format_KETRACO_SUBSTATIONS_5.readFeatures(json_KETRACO_SUBSTATIONS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETRACO_SUBSTATIONS_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KETRACO_SUBSTATIONS_5.addFeatures(features_KETRACO_SUBSTATIONS_5);cluster_KETRACO_SUBSTATIONS_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_KETRACO_SUBSTATIONS_5
});var lyr_KETRACO_SUBSTATIONS_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_KETRACO_SUBSTATIONS_5, 
                style: style_KETRACO_SUBSTATIONS_5,
                title: '<img src="styles/legend/KETRACO_SUBSTATIONS_5.png" /> KETRACO_SUBSTATIONS'
            });
var group_PowerInput_AGI = new ol.layer.Group({
                                layers: [lyr_PowerInput_AGIHV_Overhead_0,lyr_PowerInput_AGIAGI_Labels_1,],
                                title: "PowerInput_AGI"});

lyr_PowerInput_AGIAGI_Labels_1.setVisible(true);lyr_MapSurferOSMRoads_2.setVisible(true);lyr_KETRACO_LINES_3.setVisible(true);lyr_KENYA_4.setVisible(true);lyr_KETRACO_SUBSTATIONS_5.setVisible(true);
var layersList = [group_PowerInput_AGI,lyr_MapSurferOSMRoads_2,lyr_KETRACO_LINES_3,lyr_KENYA_4,lyr_KETRACO_SUBSTATIONS_5];
lyr_PowerInput_AGIHV_Overhead_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_PowerInput_AGIAGI_Labels_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_KETRACO_LINES_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LINE_NAME': 'LINE_NAME', 'Length': 'Length', 'STATUS': 'STATUS', 'VOLTAGE_1': 'VOLTAGE_1', 'COMM_DATE': 'COMM_DATE', });
lyr_KENYA_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KETRACO_SUBSTATIONS_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'Substation': 'Substation', 'VOLTAGE': 'VOLTAGE', 'COMM_DATE_': 'COMM_DATE_', 'SUB_NAME': 'SUB_NAME', });
lyr_PowerInput_AGIHV_Overhead_0.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_PowerInput_AGIAGI_Labels_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_KETRACO_LINES_3.set('fieldImages', {'OBJECTID': '', 'LINE_NAME': '', 'Length': '', 'STATUS': '', 'VOLTAGE_1': '', 'COMM_DATE': '', });
lyr_KENYA_4.set('fieldImages', {'OBJECTID': '', 'AREA': '', 'PERIMETER': '', 'COUNTY3_': '', 'COUNTY3_ID': '', 'COUNTY': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_KETRACO_SUBSTATIONS_5.set('fieldImages', {'OBJECTID': '', 'NAME': 'TextEdit', 'Substation': '', 'VOLTAGE': '', 'COMM_DATE_': '', 'SUB_NAME': '', });
lyr_PowerInput_AGIHV_Overhead_0.set('fieldLabels', {});
lyr_PowerInput_AGIAGI_Labels_1.set('fieldLabels', {});
lyr_KETRACO_LINES_3.set('fieldLabels', {'OBJECTID': 'no label', 'LINE_NAME': 'inline label', 'Length': 'no label', 'STATUS': 'no label', 'VOLTAGE_1': 'no label', 'COMM_DATE': 'no label', });
lyr_KENYA_4.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COUNTY3_': 'no label', 'COUNTY3_ID': 'no label', 'COUNTY': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KETRACO_SUBSTATIONS_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'Substation': 'no label', 'VOLTAGE': 'no label', 'COMM_DATE_': 'no label', 'SUB_NAME': 'no label', });
lyr_KETRACO_SUBSTATIONS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});