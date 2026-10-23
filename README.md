# Simone Garza — Portfolio

Landing page statica pronta per GitHub Pages, senza build né dipendenze JavaScript esterne.

## Aprire il sito

Aprire `index.html` in un browser. Font, stile, dati e interazioni sono locali e funzionano anche senza connessione. Per un'anteprima HTTP, dalla cartella del progetto eseguire `python -m http.server 8000` e aprire `http://localhost:8000`.

## GitHub Pages

Caricare il contenuto di questa cartella nella radice del repository destinato al sito, mantenendo `assets/` e `.nojekyll`. Configurare GitHub Pages per pubblicare il branch scelto dalla cartella radice. Nessun comando di build richiesto. Tutti i percorsi sono relativi, compatibili anche con repository pubblicati sotto un sottopercorso.

Repository di pubblicazione: https://github.com/simonegarza/executive-portfolio.

## File

- `index.html`: contenuti editoriali, 17 approfondimenti accessibili senza JavaScript, KPI, progetti, leadership, visione e sintesi.
- `styles.css`: griglia, tipografia, responsive e stampa; breakpoint a 1000 e 600 pixel.
- `data.js`: dati dei 17 nodi della mappa e collegamenti semantici.
- `app.js`: filtri, selezione, collegamenti e apertura degli approfondimenti.
- `assets/Inter.ttf` e `assets/OFL-Inter.txt`: font Inter variabile e licenza SIL Open Font License.
- `assets/favicon.svg`: monogramma SG.

Quando si modifica un ambito, aggiornare sia la sintesi in `data.js` sia il relativo approfondimento in `index.html`.

## Scelte editoriali

I contenuti sono una rielaborazione sintetica dei 17 ambiti e della conclusione forniti da Simone Garza. Le immagini ricevute sono riferimenti di composizione, non opere attribuite al portfolio né asset ripubblicati. Il layout riprende griglia, asimmetrie, contrasti di scala, annotazioni e spazio bianco.

Neue Haas Grotesk e ABC Diatype non sono inclusi: non è stata fornita una licenza. Inter è distribuito localmente dalla fonte ufficiale Google Fonts, con licenza inclusa. Non ci sono chiamate a Google Fonts, analytics, cookie, form o servizi remoti. Nessun contatto inventato.

Risultati, progetti in sviluppo, obiettivi e proposte sono indicati separatamente. I dati sono dichiarazioni professionali del titolare e non sono stati verificati indipendentemente. Le finestre temporali restano quelle del materiale fornito: nessun target del 2026 è trasformato automaticamente in risultato.

Riconciliazioni:

- Spesa Ads 2022–2025: 87.400 + 166.000 + 135.400 + 129.400 = 518.200 €, anziché il riepilogo approssimato di 517.000 €.
- Valore attribuito: 3.131.500 €; ROAS aggregato circa 6,0×. Non si somma ai ricavi e-commerce: sono misure con perimetri potenzialmente sovrapposti.
- Il materiale elenca sette canali Veepee/Privalia ma sei paesi distinti, contando la Spagna una sola volta.
- Il barter azzera i costi monetari diretti dello shooting ma impiega calzature aziendali.
- Il delta fotografico di 2.900 € non è coperto automaticamente da 10–11 ordini: serve considerare il margine, non solo il fatturato.
- Il team di cinque risorse è distinto dalle almeno sei figure coinvolte nel sistema Planner.

## Accessibilità e verifica

HTML semantico, lingua italiana, navigazione con ancore, skip link, focus visibile, pulsanti nativi con stato `aria-pressed`, pannello aggiornato con `aria-live`, preferenza di movimento ridotto e approfondimenti nativi `details/summary`. Tutti gli approfondimenti e i KPI sono leggibili senza JavaScript.

Verifiche eseguite: sintassi JavaScript, integrità di ancore e asset locali, 17 nodi e 17 approfondimenti, selezione filtro Contenuti (3 nodi), navigazione a una competenza collegata fuori filtro (ripristino 17 nodi), apertura del relativo approfondimento. Ispezione visiva nel browser desktop e in viewport incorporato da 390 px, inclusa mappa mobile. Non è un audit WCAG completo né un test su dispositivi fisici o tutti i browser.


## Approfondimenti integrali e macroaree

Le 17 pagine in `ambiti/` riproducono tutti i paragrafi dei rispettivi ambiti del documento Contributo professionale. Le note editoriali sono separate dal testo originale. L'indice offre una sintesi espandibile e un collegamento Approfondisci sempre visibile; le pagine integrali funzionano senza JavaScript e includono ritorno alla sintesi e navigazione precedente/successivo.

La classificazione riprende le tre macroaree della precedente versione del portfolio:
- Generazione del valore: 01, 04, 08, 11.
- Scalabilità e controllo: 06, 07, 09, 13, 14, 15.
- Ciclo di ottimizzazione: 02, 03, 05, 10, 12, 16, 17.

Verifica aggiuntiva: confronto di tutti i paragrafi con l'estrazione del documento; 18 pagine HTML con percorsi, ancore e ID validi; filtri 4/6/7 nodi; ritorno alla sintesi con apertura automatica; controllo visivo mobile e correzione dell'overflow della navigazione.
