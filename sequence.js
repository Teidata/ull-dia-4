$(document).ready(function() {

var sample = 'A->B: Mensaje';
var sample1 = 'Title: Esto es un título';
var sample2 = 'B-->C: Línea a rayas';
var sample3 = 'C->>D: Línea con flecha hueca';
var sample4 = 'D-->>E: Línea a rayas con flecha hueca';
var sample5 = 'A->C: Uno \n B->C: Dos';

//-------------------------------------------------
var diagram = Diagram.parse(sample);
diagram.drawSVG('diagram', {
    theme: 'hand'    // o 'simple'
});
//-------------------------------------------------
//-------------------------------------------------
var diagram1 = Diagram.parse(sample1);
diagram1.drawSVG('diagram1', {
    theme: 'hand'    // o 'simple'
});
//-------------------------------------------------
var diagram2 = Diagram.parse(sample2);
diagram.drawSVG('diagram2', {
    theme: 'hand'    // o 'simple'
});
//-------------------------------------------------
var diagram3 = Diagram.parse(sample3);
diagram.drawSVG('diagram3', {
    theme: 'hand'    // o 'simple'
});
//-------------------------------------------------
var diagram4 = Diagram.parse(sample4);
diagram.drawSVG('diagram4', {
    theme: 'hand'    // o 'simple'
});
//-------------------------------------------------
var diagram5 = Diagram.parse(sample5);
diagram.drawSVG('diagram5', {
    theme: 'hand'    // o 'simple'
});
//-------------------------------------------------
    
    
    
    
    
});
