# Carousel

## O come direbbero dei cavernicoli 'Slider di immagini'

Per creare questo slider ho dovuto iniziare con la creazione di immagini iniziali:

-Ho dichiarato un array di nomi di file delle immagini ('images')

-Ho sekezionato gli elementi HTML del container dello slider ('slider') e dei bottoni sinistro ('left') e destro ('right').

Poi ho continuato con la creazione delle slides:

-Ho usato un ciclo 'for' per creare le slides in base all'array di immagini per rappresentare ogni immagine come slide

-Ho aggiungo la famosa classe 'active' per far si che se l'idice dell'array è 'currentSlide' viene aggiunta questa classe per indicare la pagina selezionata

-Ho creato un elemento 'img' per le immagini

Successivamente seleziono le slide:

-Vengono selezionate con 'document.querySelectorAll('.slide')' e memorizzate in 'domSlides'.

Ho aggiunto poi i controlli per lo slider

-Ho associato ai pulsanti sinistro (left) e destro (right) per navigare tra le immagini due eventi click.

-Nel gestore dell'evento del tasto destro, se l'immagine corrente non è la prima, ho fatto in modo che venga rimossa la classe "active" dalla slide corrente, e viene spostato l'indice all'immagine precedente. Viene quindi aggiunta la classe "active" alla nuova immagine corrente.

-Se l'immagine corrente è la prima, viene spostata all'ultima immagine.
Nel gestore dell'evento del tasto sinistro, la logica è identica, ma con la direzione opposta.

Ho gestito poi la questione delle miniature:

-Viene selezionato l'elemento HTML del container delle miniature ('thumbnailsContainer').

-Ho usato un ciclo 'for' per creare le miniature delle immagini in base all'array 'images'.

-Creo un 'div' per ciascuna immagine delle miniature

-Se l'indice della miniatura è uguale all'indice corrente ('currentSlide'), viene aggiunta la classe "active" per evidenziare la miniatura.

-Ho aggiunto un gestore di eventi click alla miniatura in modo che quando viene cliccata, cambia l'immagine principale.

Ho aggiunto infine la gestione dell'aggiornamento delle miniature quando cambio immagine con lo slider:

-Scansiona tutte le slides principali ('domSlides') e, se l'indice coincide con l'immagine corrente, aggiunge la classe "active" alla miniatura corrispondente, altrimenti la rimuove.

-Un ciclo 'forEach' attraversa tutte le slides principali ('domSlides') e aggiunge un gestore di eventi transitionend su ciascuna di esse.

-Questo gestore di eventi viene chiamato ogni volta che una transizione viene completata (come il passaggio tra le immagini principali), e chiama la funzione 'updateThumbnails' per aggiornare lo stato delle miniature in base all'immagine principale corrente.

Ho riscontrato un unico problema con le miniature, cioè che non riesco a far si che quando premo il tasto in alto scorrano verso l'alto anche le miniature, che attualmente scorrono verso il basso, cioè, quando scorro lo slider, le miniature scorrono in direzione inversa.

Ho provato a risolvere utilizzando nella creazione del ciclo questa strategia

for (let i = images.length - 1; i >= 0; i--)

ma l'unico risulatato che mi dava è che invertiva le immagini di background, e le immagini della thumbnail non corrispondevano allo slider.

Ho provato anche ad aggiungere updateTumbnails() direttamente agli eventi dei tasti ma non è cambiato nulla.
