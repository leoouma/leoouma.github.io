var size = 0;
var placement = 'point';

var style_PowerInput_AGI_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    var clusteredFeatures = feature.get("features");
    var labelFont = "6.5px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    size = clusteredFeatures.length;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    if (size == 1) {
        textAlign = "left"
        offsetX = 8
        offsetY = 3
        var feature = clusteredFeatures[0];
        if (feature.get("Name") !== null) {
            labelText = String(feature.get("Name"));
        }
        key = value + "_" + labelText
    } else {
        labelText = size.toString()
        size = 2*(Math.log(size)/ Math.log(2))
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.0 + size, points: 5,
            radius2: 2.5, stroke: new ol.style.Stroke({color: 'rgba(246,9,9,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(248,49,4,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
