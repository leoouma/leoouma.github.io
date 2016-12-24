var defaultFill = new ol.style.Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var defaultStroke = new ol.style.Stroke({
   color: '#3399CC',
   width: 1.25
 });
 var defaultSelectionFill = new ol.style.Fill({
   color: 'rgba(255,255,0,0.4)'
 });
 var defaultSelectionStroke = new ol.style.Stroke({
   color: '#FFFF00',
   width: 1.25
 });


var categories_wards = {"CORD": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(178,178,178,1.0)", lineDash: [6], width: 1}),
                        fill: new ol.style.Fill({color: "rgba(255,165,0,1.0)"})
                        })
                        ],
"Jubilee": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(178,178,178,1.0)", lineDash: [6], width: 1}),
                        fill: new ol.style.Fill({color: "rgba(255,34,0,1.0)"})
                        })
                        ],
"RBK": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(178,178,178,1.0)", lineDash: [6], width: 1}),
                        fill: new ol.style.Fill({color: "rgba(49,130,189,1.0)"})
                        })
                        ]};var categoriesSelected_wards = {"CORD": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: [6], width: 1}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Jubilee": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: [6], width: 1}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"RBK": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: [6], width: 1}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]};
                    var textStyleCache_wards={}
                    var clusterStyleCache_wards={}
                    var style_wards = function(feature, resolution){
                        
                        var value = feature.get("Coalition");
                        var style = categories_wards[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_wards = function(feature, resolution){
                        
                        var value = feature.get("Coalition");
                        var style = categoriesSelected_wards[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_pollingstation={}
                    var clusterStyleCache_pollingstation={}
                    var style_pollingstation = function(feature, resolution){
                        var features = feature.get('features');
                            var size = 0;
                            for (var i = 0, ii = features.length; i < ii; ++i) {
                              if (features[i].hide !== true) {
                                size++;
                              }
                            }
                            if (size === 0) {
                              return undefined;
                            }
                            if (size != 1){
                                var features = feature.get('features');
                                var numVisible = 0;
                                for (var i = 0; i < size; i++) {
                                    if (features[i].hide != true) {
                                        numVisible++;
                                    }
                                }
                                if (numVisible === 0) {
                                    return null;
                                }
                                if (numVisible != 1) {
                                    var color = '#3399CC'
                                    var style = clusterStyleCache_pollingstation[numVisible]
                                    if (!style) {
                                        style = [new ol.style.Style({
                                            image: new ol.style.Circle({
                                                radius: 14,
                                                stroke: new ol.style.Stroke({
                                                    color: '#fff'
                                                }),
                                                fill: new ol.style.Fill({
                                                    color: color
                                                })
                                            }),
                                            text: new ol.style.Text({
                                                text: numVisible.toString(),
                                                fill: new ol.style.Fill({
                                                    color: '#fff'
                                                }),
                                                stroke: new ol.style.Stroke({
                                                  color: 'rgba(0, 0, 0, 0.6)',
                                                  width: 3
                                                })
                                            })
                                        })];
                                        clusterStyleCache_pollingstation[numVisible] = style;
                                    }
                                    return style;
                                }
                            }
                            feature = feature.get('features')[0];
                            
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(56,168,0,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
        var labelText = feature.get("name");
        
        var key = value + "_" + labelText;
        if (!textStyleCache_pollingstation[key]){
            var text = new ol.style.Text({
                  font: '16.5px Calibri,sans-serif',
                  text: labelText,
                  fill: new ol.style.Fill({
                    color: "rgba(0, 0, 0, 255)"
                  }),
                  textBaseline: "middle",
                  textAlign: "center",
                  rotation: -0.0,
                  offsetX: 0,
                  offsetY: 0 
                });
            textStyleCache_pollingstation[key] = new ol.style.Style({"text": text});
        }
        allStyles.push(textStyleCache_pollingstation[key]);
        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_pollingstation = function(feature, resolution){
                        var features = feature.get('features');
                            var size = 0;
                            for (var i = 0, ii = features.length; i < ii; ++i) {
                              if (features[i].hide !== true) {
                                size++;
                              }
                            }
                            if (size === 0) {
                              return undefined;
                            }
                            if (size != 1){
                                var features = feature.get('features');
                                var numVisible = 0;
                                for (var i = 0; i < size; i++) {
                                    if (features[i].hide != true) {
                                        numVisible++;
                                    }
                                }
                                if (numVisible === 0) {
                                    return null;
                                }
                                if (numVisible != 1) {
                                    var color = '#3399CC'
                                    var style = clusterStyleCache_pollingstation[numVisible]
                                    if (!style) {
                                        style = [new ol.style.Style({
                                            image: new ol.style.Circle({
                                                radius: 14,
                                                stroke: new ol.style.Stroke({
                                                    color: '#fff'
                                                }),
                                                fill: new ol.style.Fill({
                                                    color: color
                                                })
                                            }),
                                            text: new ol.style.Text({
                                                text: numVisible.toString(),
                                                fill: new ol.style.Fill({
                                                    color: '#fff'
                                                }),
                                                stroke: new ol.style.Stroke({
                                                  color: 'rgba(0, 0, 0, 0.6)',
                                                  width: 3
                                                })
                                            })
                                        })];
                                        clusterStyleCache_pollingstation[numVisible] = style;
                                    }
                                    return style;
                                }
                            }
                            feature = feature.get('features')[0];
                            
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
        var labelText = feature.get("name");
        
        var key = value + "_" + labelText;
        if (!textStyleCache_pollingstation[key]){
            var text = new ol.style.Text({
                  font: '16.5px Calibri,sans-serif',
                  text: labelText,
                  fill: new ol.style.Fill({
                    color: "rgba(0, 0, 0, 255)"
                  }),
                  textBaseline: "middle",
                  textAlign: "center",
                  rotation: -0.0,
                  offsetX: 0,
                  offsetY: 0 
                });
            textStyleCache_pollingstation[key] = new ol.style.Style({"text": text});
        }
        allStyles.push(textStyleCache_pollingstation[key]);
        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
                        type: 'base',
                        title: 'No base layer'
                    }),new ol.layer.Tile({
    type: 'base',
    title: 'Stamen toner lite',
    source: new ol.source.Stamen({layer: 'toner-lite'}),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'OSM Mapnik',
    source: new ol.source.OSM(),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,'type':
                    'base-group', 'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [new ol.layer.Tile({
	type: 'base-overlay',
	title: 'OpenWeatherMap temperature',
	source: new ol.source.XYZ({
		url: 'http://s.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png',
		attributions: [new ol.Attribution({html:['Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>']})],
	}),
    projection: 'EPSG:3857'
})
];var overlaysGroup = new ol.layer.Group({showContent: true, 'title': 'Overlays', layers: overlayLayers});
var lyr_wards = new ol.layer.Vector({
                    opacity: 0.7,
                    source: new ol.source.Vector(),
                     
                    style: style_wards,
                    selectedStyle: selectionStyle_wards,
                    title: "Wards",
                    id: "wards_20161222122747413",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>CONST_CODE</td><td style='text-align:right'>[CONST_CODE]</td></tr><tr><td>Shape_Area</td><td style='text-align:right'>[Shape_Area]</td></tr><tr><td>OBJECTID_1</td><td style='text-align:right'>[OBJECTID_1]</td></tr><tr><td>NAME</td><td style='text-align:right'>[NAME]</td></tr><tr><td>OBJECTID</td><td style='text-align:right'>[OBJECTID]</td></tr><tr><td>CONSTITUEN</td><td style='text-align:right'>[CONSTITUEN]</td></tr><tr><td>COUNTY_ASS</td><td style='text-align:right'>[COUNTY_ASS]</td></tr><tr><td>SPOILT</td><td style='text-align:right'>[SPOILT]</td></tr><tr><td>COUNTY_A_1</td><td style='text-align:right'>[COUNTY_A_1]</td></tr><tr><td>REJECTED</td><td style='text-align:right'>[REJECTED]</td></tr><tr><td>REPORTED</td><td style='text-align:right'>[REPORTED]</td></tr><tr><td>SPOILT_VAL</td><td style='text-align:right'>[SPOILT_VAL]</td></tr><tr><td>VALID</td><td style='text-align:right'>[VALID]</td></tr><tr><td>DISPUTED</td><td style='text-align:right'>[DISPUTED]</td></tr><tr><td>RESULT</td><td style='text-align:right'>[RESULT]</td></tr><tr><td>COUNTY_COD</td><td style='text-align:right'>[COUNTY_COD]</td></tr><tr><td>Shape_Leng</td><td style='text-align:right'>[Shape_Leng]</td></tr><tr><td>COUNTY_NAM</td><td style='text-align:right'>[COUNTY_NAM]</td></tr><tr><td>Shape_Le_1</td><td style='text-align:right'>[Shape_Le_1]</td></tr><tr><td>REGISTERED</td><td style='text-align:right'>[REGISTERED]</td></tr><tr><td>PolParty</td><td style='text-align:right'>[PolParty]</td></tr><tr><td>Coalition</td><td style='text-align:right'>[Coalition]</td></tr><tr><td>Winner</td><td style='text-align:right'>[Winner]</td></tr></table>"
                });
wards_geojson_callback = function(geojson) {
                              lyr_wards.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var cluster_pollingstation = new ol.source.Cluster({
                    distance: 40.0,
                    source: new ol.source.Vector(),
                });
                var lyr_pollingstation = new ol.layer.Vector({
                    opacity: 1.0,
                    source: cluster_pollingstation,  
                    style: style_pollingstation,
                    selectedStyle: selectionStyle_pollingstation,
                    title: "Polling Station",
                    id: "pollingstation20161222120201967",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>county</td><td style='text-align:right'>[county]</td></tr><tr><td>ward</td><td style='text-align:right'>[ward]</td></tr><tr><td>constituen</td><td style='text-align:right'>[constituen]</td></tr><tr><td>name</td><td style='text-align:right'>[name]</td></tr></table>"
                });
pollingstation_geojson_callback = function(geojson) {
                              lyr_pollingstation.getSource().getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };

lyr_wards.setVisible(true);
lyr_pollingstation.setVisible(true);for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}baseLayers[1].setVisible(true);
var layersList = [lyr_wards,lyr_pollingstation];layersList.unshift(baseLayersGroup);layersList.push(overlaysGroup);
var charts = [{"categoryField": "PolParty", "layer": "wards_20161222122747413", "title": "Political Parties Share", "displayMode": 2, "valueFields": [], "operation": 0}];
var legendData = {"wards_20161222122747413": [{"href": "0_0.png", "title": "CORD"}, {"href": "0_1.png", "title": "Jubilee"}, {"href": "0_2.png", "title": "RBK"}], "pollingstation20161222120201967": [{"href": "1_0.png", "title": ""}]};
var view = new ol.View({extent: [3781026.498350, -240090.785486, 4115749.563913, -45815.290871], maxZoom: 32, minZoom: 8, projection: 'EPSG:3857'});
var originalExtent = [3781026.498350, -240090.785486, 4115749.563913, -45815.290871];

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.ZoomSlider(),
new ol.control.Rotate({autoHide: false}),
new ol.control.Zoom({"zoomOutTipLabel": "Zoom out", "zoomInTipLabel": "Zoom in", "delta": 1.2, "duration": 250, "zoomInLabel": "+", "zoomOutLabel": "-"})]
});



var BasicApp = React.createClass({
  componentDidMount() {
    map.setTarget(ReactDOM.findDOMNode(this.refs.map));
    view = map.getView();
    view.fit(originalExtent, map.getSize());
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_wards,lyr_pollingstation]}));
  },
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  },
  _toggleWFST() {
    this._toggle(document.getElementById('wfst'));
  },
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  },
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _toggleAboutPanel() {
    this._toggle(document.getElementById('about-panel'));
  },
  _toggleChartPanel(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  _navigationFunc() {
    ToolActions.activateTool(null, 'navigation');
  },
  render() {
    var options = [{jsx: React.createElement("div", {id:'geocoding', className:'pull-right'},
                                        React.createElement(Geocoding, {})),
                                exclude: true},
{jsx: React.createElement(Chart, {container:'chart-panel', charts:charts})},
{text: 'Query', icon: 'filter', onClick: this._toggleQuery.bind(this)},
{jsx: React.createElement(Measure, {toggleGroup:'navigation', map:map})},
{
                              jsx: React.createElement(Select, {toggleGroup: 'navigation', map:map})
                            }, {
                              text: 'Navigation',
                              icon: 'hand-paper-o',
                              onClick: this._navigationFunc.bind(this)
                            },
{exclude: true, jsx: React.createElement("a", {className:"navbar-brand", href:"#"}, "Narok 2013 Election Results")}];
    return React.createElement("article", null,
      React.createElement(Toolbar, {options: options}
      ),
      React.createElement("div", {id: 'content'},
        React.createElement("div", {id: 'map', ref: 'map'}
          ,
React.createElement("div", {id:'geocoding-results', className:'geocoding-results'},
                                    React.createElement(GeocodingResults, {map:map})
                                  ),
React.createElement("div", {id: 'query-panel', className:'query-panel'},
                                          React.createElement(QueryBuilder, {map: map})
                                        ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {map: map, hover: false})
                                  )
        )
        ,
React.createElement("div", {id: 'chart-panel', className: 'chart-panel'},
                                            React.createElement("a", {href:'#', id:'chart-panel-closer', className:'chart-panel-closer', onClick:this._toggleChartPanel.bind(this)},
                                                                  "X"
                                                            ),
                                            React.createElement("div", {id: 'chart'})
                                    ),
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:false, showDownload:false,
                                        showGroupContent:true, showZoomTo:false, allowReordering:false,
                                        allowFiltering:true, tipLabel:'layers', expandOnHover:true,
                                        downloadFormat:'GeoJSON', map:map})),
React.createElement("div", {id:'home-button', className:'ol-unselectable ol-control'},
                                    React.createElement(HomeButton, {map:map})
                                  ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, expandOnHover:true, legendData:legendData})
                            )
      )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));


