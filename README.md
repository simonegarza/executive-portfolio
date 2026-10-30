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

## Verifica KPI marketplace — 30 ottobre 2026

Verifica di coerenza editoriale sul codice del repository al commit `062866fd62d3dff06e57b8767950d3f5aab9357f` (24 ottobre 2026). Gli importi restano quelli dichiarati nel portfolio: non è una verifica contabile su rendiconti del partner.

| KPI | Natura e periodo documentati | Perimetro e limiti |
| --- | --- | --- |
| 150.000 € netti, circa 1.500 paia a prezzo di listino | Obiettivo originario della prima stagione completa, estate 2026 | Il testo dell’ambito 17 lo associa a Zalando ZFS. Non specifica la ripartizione per brand, le date contabili della stagione o un target separato About You. Non è un risultato acquisito. |
| Circa 290.000 € di incassi netti | Consuntivo cumulato da novembre 2025 agli ultimi dati condivisi a ottobre 2026; aggiornamento del portfolio al 24 ottobre | Collaborazione con The Agent, che comprende lo sviluppo Zalando e About You per A.S.98/MJUS secondo le attivazioni descritte. Mancano ripartizioni per stagione, brand e marketplace; non è una chiusura documentata al 31 ottobre. Incassi netti, non utile. |
| Circa 50.000 € netti e 400 paia | Dato parziale storico nei primi quattro mesi da novembre 2025 | Zalando ZFS tramite The Agent. La homepage specifica netto dopo IVA, commissioni e logistica. Le date esatte non sono documentate; non attribuirlo automaticamente all’estate 2026 e non sommarlo al cumulato. Non è documentata l’omogeneità del criterio di netto con il dato di 290.000 €. |

Inventario delle occorrenze nel codice esaminato:

| File / posizione | Occorrenze pertinenti |
| --- | --- |
| `index.html`, progetto P—02 | Circa 400 paia e 50.000 € netti, The Agent, Zalando ZFS, successiva estensione About You. |
| `index.html`, ambito 11 | Zalando/About You/The Agent, attivazione About You da aprile 2026, MJUS su Zalando dal 10 agosto 2026, circa 290.000 € cumulati. |
| `index.html`, ambito 17 | Target originario 150.000 € / circa 1.500 paia e priorità Zalando/About You. |
| `index.html`, sezione Visione | Seconda presentazione del target 150.000 € / circa 1.500 paia. |
| `data.js`, nodo 11 | Sintesi della collaborazione e del cumulato di circa 290.000 €, mostrata nella mappa interattiva. |
| `data.js`, nodo 17 | Sintesi del target 150.000 € / circa 1.500 paia, mostrata nella mappa interattiva. |
| `ambiti/11.html` | Approfondimento Zalando/About You/The Agent, cumulato di circa 290.000 €, avvio novembre 2025 e attivazione MJUS del 10 agosto 2026. |
| `ambiti/17.html` | Fonte del riferimento alla prima stagione completa estate 2026, target 150.000 € / circa 1.500 paia e attivazione About You da aprile 2026. |
| `index1.html` e `redblue.html` | In ciascuna versione alternativa: riquadro KPI di circa 50K€; caso `zfs` nello script con circa 400 paia, 50K€, quattro mesi e The Agent; pulsante del caso Zalando. |
| `ambiti/10.html` e `ambiti/12.html` | Soli titoli nei collegamenti precedente/successivo all’ambito Zalando/About You, senza valori. |
| `app.js` | Etichetta generica Marketplace; i valori sono letti da `data.js`, senza KPI autonomi. |

Le descrizioni sono state allineate in homepage, dati della mappa, approfondimenti e versioni alternative, mantenendo i valori originari. Nei due approfondimenti le precisazioni editoriali e il confronto sono espliciti.

**Dato mancante per il confronto:** rendiconto della sola estate 2026 riferito al perimetro originario Zalando ZFS, con incassi netti e paia vendute, date di inizio/fine e criterio di attribuzione stagionale, brand inclusi e trattamento omogeneo di IVA, resi, commissioni e logistica. Il repository non contiene rendiconti o transazioni dai quali ricostruirlo. Non è quindi possibile calcolare scostamento o percentuale di raggiungimento del target; la differenza aritmetica tra cumulato e obiettivo non sarebbe uno scostamento stagionale.
