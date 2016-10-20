var imgData = 'data:image/jpeg;base64,[...]';

var doc = new jsPDF();

doc.setFontSize(40);            // Tamaño del texto (40px)
doc.text(75, 25, 'Nyan Cat');    // Posición X,Y = (75,25)
doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);    // Pos X,Y Tamaño W,H
doc.setFontSize(14);            // Tamaño del texto (14px)
doc.text(85, 215, 'Generado con jsPDF');
doc.save('sample.pdf');            // Descargar en PDF
