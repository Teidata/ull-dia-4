$(document).ready(function() {

var sample = 'digraph g { a -> b [label="Etiqueta 1"]; a -> b [style=dashed]; a [style=bold]; b [style=red];}';

 }';

var options = {
  format: 'svg'
  // format: 'png-image-element'
}

var image = Viz(sample, options);
var main = document.getElementById('main');

main.innerHTML = image;        // SVG
main.appendChild(image);    // PNG

    
    
    
});
