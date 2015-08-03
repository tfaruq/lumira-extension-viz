define([], function() {
    var previewData = {
        cross: {"data":{"analysisAxis":[{"index":1,"data":[{"type":"Dimension","name":"source","values":["Agricultural 'waste'","Bio-conversion","Bio-conversion","Bio-conversion","Bio-conversion","Biofuel imports","Biomass imports","Coal imports","Coal reserves","Coal","District heating","District heating","District heating","Electricity grid","Electricity grid","Electricity grid","Electricity grid","Electricity grid","Electricity grid","Electricity grid","Electricity grid","Electricity grid","Electricity grid","Electricity grid","Gas imports","Gas reserves","Gas","Gas","Gas","Gas","Gas","Geothermal","H2 conversion","H2 conversion","H2","Hydro","Liquid","Liquid","Liquid","Liquid","Liquid","Liquid","Liquid","Liquid","Marine algae","Ngas","Nuclear","Oil imports","Oil reserves","Oil","Other waste","Other waste","Pumped heat","Pumped heat","Solar PV","Solar Thermal","Solar","Solar","Solid","Solid","Solid","Thermal generation","Thermal generation","Thermal generation","Tidal","UK land based bioenergy","Wave","Wind"]},{"type":"Dimension","name":"target","values":["Bio-conversion","Liquid","Losses","Solid","Gas","Liquid","Solid","Coal","Coal","Solid","Industry","Heating and cooling - commercial","Heating and cooling - homes","Over generation / exports","Heating and cooling - homes","H2 conversion","Industry","Road transport","Agriculture","Heating and cooling - commercial","Losses","Rail transport","Lighting & appliances - commercial","Lighting & appliances - homes","Ngas","Ngas","Heating and cooling - commercial","Losses","Thermal generation","Agriculture","Industry","Electricity grid","H2","Losses","Road transport","Electricity grid","Industry","International shipping","Road transport","Domestic aviation","International aviation","Agriculture","National navigation","Rail transport","Bio-conversion","Gas","Thermal generation","Oil","Oil","Liquid","Solid","Bio-conversion","Heating and cooling - homes","Heating and cooling - commercial","Electricity grid","Heating and cooling - homes","Solar Thermal","Solar PV","Agriculture","Thermal generation","Industry","Electricity grid","Losses","District heating","Electricity grid","Bio-conversion","Electricity grid","Electricity grid"]}]}],"measureValuesGroup":[{"index":1,"data":[{"type":"Measure","name":"value","values":[[124.729,0.597,26.862,280.322,81.144,35,35,11.606,63.965,75.571,10.639,22.505,46.184,104.453,113.726,27.14,342.165,37.797,4.412,40.858,56.691,7.863,90.008,93.494,40.719,82.233,0.129,1.401,151.891,2.096,48.58,7.013,20.897,6.242,20.897,6.995,121.066,128.69,135.835,14.458,206.267,3.64,33.218,4.413,4.375,122.952,839.978,504.287,107.703,611.99,56.587,77.81,193.026,70.672,59.901,19.263,19.263,59.901,0.882,400.12,46.477,525.531,787.129,79.329,9.452,182.01,19.013,289.366]]}]}]},"bindings":[{"feed":"pan.viz.ext.sankey.PlotModule.DS1","source":[{"type":"analysisAxis","index":1}]},{"feed":"pan.viz.ext.sankey.PlotModule.MS1","source":[{"type":"measureValuesGroup","index":1}]}]},
        flat: {"metadata":{"dimensions":[{"name":"source","value":"{source}"},{"name":"target","value":"{target}"}],"measures":[{"name":"value","value":"{value}"}],"data":{"path":"/data"}},"feedItems":[{"uid":"pan.viz.ext.sankey.PlotModule.DS1","type":"Dimension","values":["source","target"]},{"uid":"pan.viz.ext.sankey.PlotModule.MS1","type":"Measure","values":["value"]}],"data":{"data":[{"source":"Agricultural 'waste'","target":"Bio-conversion","value":124.729},{"source":"Bio-conversion","target":"Liquid","value":0.597},{"source":"Bio-conversion","target":"Losses","value":26.862},{"source":"Bio-conversion","target":"Solid","value":280.322},{"source":"Bio-conversion","target":"Gas","value":81.144},{"source":"Biofuel imports","target":"Liquid","value":35},{"source":"Biomass imports","target":"Solid","value":35},{"source":"Coal imports","target":"Coal","value":11.606},{"source":"Coal reserves","target":"Coal","value":63.965},{"source":"Coal","target":"Solid","value":75.571},{"source":"District heating","target":"Industry","value":10.639},{"source":"District heating","target":"Heating and cooling - commercial","value":22.505},{"source":"District heating","target":"Heating and cooling - homes","value":46.184},{"source":"Electricity grid","target":"Over generation / exports","value":104.453},{"source":"Electricity grid","target":"Heating and cooling - homes","value":113.726},{"source":"Electricity grid","target":"H2 conversion","value":27.14},{"source":"Electricity grid","target":"Industry","value":342.165},{"source":"Electricity grid","target":"Road transport","value":37.797},{"source":"Electricity grid","target":"Agriculture","value":4.412},{"source":"Electricity grid","target":"Heating and cooling - commercial","value":40.858},{"source":"Electricity grid","target":"Losses","value":56.691},{"source":"Electricity grid","target":"Rail transport","value":7.863},{"source":"Electricity grid","target":"Lighting & appliances - commercial","value":90.008},{"source":"Electricity grid","target":"Lighting & appliances - homes","value":93.494},{"source":"Gas imports","target":"Ngas","value":40.719},{"source":"Gas reserves","target":"Ngas","value":82.233},{"source":"Gas","target":"Heating and cooling - commercial","value":0.129},{"source":"Gas","target":"Losses","value":1.401},{"source":"Gas","target":"Thermal generation","value":151.891},{"source":"Gas","target":"Agriculture","value":2.096},{"source":"Gas","target":"Industry","value":48.58},{"source":"Geothermal","target":"Electricity grid","value":7.013},{"source":"H2 conversion","target":"H2","value":20.897},{"source":"H2 conversion","target":"Losses","value":6.242},{"source":"H2","target":"Road transport","value":20.897},{"source":"Hydro","target":"Electricity grid","value":6.995},{"source":"Liquid","target":"Industry","value":121.066},{"source":"Liquid","target":"International shipping","value":128.69},{"source":"Liquid","target":"Road transport","value":135.835},{"source":"Liquid","target":"Domestic aviation","value":14.458},{"source":"Liquid","target":"International aviation","value":206.267},{"source":"Liquid","target":"Agriculture","value":3.64},{"source":"Liquid","target":"National navigation","value":33.218},{"source":"Liquid","target":"Rail transport","value":4.413},{"source":"Marine algae","target":"Bio-conversion","value":4.375},{"source":"Ngas","target":"Gas","value":122.952},{"source":"Nuclear","target":"Thermal generation","value":839.978},{"source":"Oil imports","target":"Oil","value":504.287},{"source":"Oil reserves","target":"Oil","value":107.703},{"source":"Oil","target":"Liquid","value":611.99},{"source":"Other waste","target":"Solid","value":56.587},{"source":"Other waste","target":"Bio-conversion","value":77.81},{"source":"Pumped heat","target":"Heating and cooling - homes","value":193.026},{"source":"Pumped heat","target":"Heating and cooling - commercial","value":70.672},{"source":"Solar PV","target":"Electricity grid","value":59.901},{"source":"Solar Thermal","target":"Heating and cooling - homes","value":19.263},{"source":"Solar","target":"Solar Thermal","value":19.263},{"source":"Solar","target":"Solar PV","value":59.901},{"source":"Solid","target":"Agriculture","value":0.882},{"source":"Solid","target":"Thermal generation","value":400.12},{"source":"Solid","target":"Industry","value":46.477},{"source":"Thermal generation","target":"Electricity grid","value":525.531},{"source":"Thermal generation","target":"Losses","value":787.129},{"source":"Thermal generation","target":"District heating","value":79.329},{"source":"Tidal","target":"Electricity grid","value":9.452},{"source":"UK land based bioenergy","target":"Bio-conversion","value":182.01},{"source":"Wave","target":"Electricity grid","value":19.013},{"source":"Wind","target":"Electricity grid","value":289.366}]}}
    };
    return previewData;
});