$(document).ready(function() {

var sample = 'digraph g { a -> b
[label="Etiqueta 1"]
[style=dashed]
[style=bold]



 ; }';

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
