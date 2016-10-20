$(document).ready(function() {

var sample = 'digraph g { antonio -> a [label="Etiqueta 0"]; antonio -> b [label="Etiqueta 1"]; a -> b [label="Etiqueta 1"]; b -> a [style=dashed]; a [style=bold]; b [style=red];}';

var options = {
  format: 'svg'
  // format: 'png-image-element'
}

var image = Viz(sample, options);
var main = document.getElementById('main');

main.innerHTML = image;        // SVG
main.appendChild(image);    // PNG

    
    
    
});
