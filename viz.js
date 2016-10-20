$(document).ready(function() {

var sample = 'digraph g { idea-> b [label="eureka"]; antonio -> ideas [label="idea"]; antonio -> a [label="Etiqueta 0"]; antonio -> b [label="Etiqueta 1"]; a -> b [label="Etiqueta 1"]; b -> a [style=dashed]; a [style=bold]; b [style=red];}';

var options = {
  format: 'svg',
  engine: 'circo'
  // format: 'png-image-element'
}

var image = Viz(sample, options);
var main = document.getElementById('main');

main.innerHTML = image;        // SVG
main.appendChild(image);    // PNG

    
    
    
});
