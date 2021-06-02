var size = 0;
var placement = 'point';

var style_ccja_andar0_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_ccja_andar0_1(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_ccja_andar0_1rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(99,201,241,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(241,234,224,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(225,211,233,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(247,239,156,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(248,190,142,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule5_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(162,164,163,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule6_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(98,150,213,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule7_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(162,164,163,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule8_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(102,180,139,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule9_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(234,137,147,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule10_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(174,138,194,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule11_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(243,164,199,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_ccja_andar0_1rule12_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,96,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(214,214,214,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_ccja_andar0_1(feature, value);
        ;

    return style;
};
