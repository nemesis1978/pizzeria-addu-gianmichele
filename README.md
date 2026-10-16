# Pizzeria Addu Gianmichele — Sito vetrina

Sito web one-page per la **Pizzeria Addu Gianmichele**, Piazza Villapiana, 84035 Polla (SA).

Creato il 16 ottobre 2026 da Hermes One (profilo EgixCreative) su richiesta di Egix.

---

## Struttura

```
pizzeria-addu-gianmichele/
├── index.html          # pagina unica, tutto inline-section
├── css/
│   └── style.css       # styling completo, zero dipendenze esterne (solo font Google)
├── js/
│   └── main.js         # header scroll, mobile nav, reveal on scroll
├── images/             # 8 foto reali scaricate da Google Maps
├── favicon.svg         # icona generata (pizza stilizzata)
├── robots.txt
├── sitemap.xml
└── README.md
```

## Dati usati (fonte: allegato Google Maps di Egix)

| Dato | Valore |
|---|---|
| Nome | Pizzeria Addu Gianmichele |
| Indirizzo | Piazza Villapiana, 84035 Polla (SA) |
| Telefono | 345 039 2930 |
| Orario | tutti i giorni 19:00 – 00:00 (**verificato su Maps in data 16/10/2026**) |
| Fascia prezzo | 10–20 € a persona |
| Rating | 4,5 / 5 su 468 recensioni |
| Servizi | consumazione sul posto, asporto |
| Plus code | GF6V+J7 Polla |

### Orari — verifica importante
L'allegato riportava solo "Chiude alle ore 00". Gli orari nel sito sono: **tutti i giorni 19:00 – 00:00, tranne il mercoledì (chiuso, giorno di riposo)**. L'eccezione del mercoledì è stata **confermata direttamente dal titolare** il 16/10/2026 (Maps mostra ancora il mercoledì come aperto: segnalare a Google per correggere il profilo). Se ci sono altre variazioni stagionali, correggere la tabella in `index.html` e il blocco `openingHoursSpecification` nello Schema.org.

### Menù
Il menù completo è ora **incluso nel sito**: 71 pizze con ingredienti, 6 fritti, 7 antipasti, 9 birre, 4 bibite (97 voci totali), divise per categoria con filtri a chip. Estratto dal menù Google Maps incollato da Egix il 16/10/2026 e confrontato voce per voce: tutti i conteggi sono verificati (71+6+7+9+4 = 97).

**Prezzi:** non disponibili (Maps non li pubblica). Il sito indica solo la fascia 10–20 € a persona, come concordato con Egix.

**Nota su voci scartate:** nel testo estratto da Maps erano presenti due etichette isolate ("Varie" e "Coperto") che sono artefatti del testo estratto, non piatti: non sono state incluse.

---

## Pubblicazione (opzioni gratuite)

### Opzione A — Netlify Drop (2 minuti, la più semplice)
1. Vai su https://app.netlify.com/drop
2. Trascina la cartella `pizzeria-addu-gianmichele` nel browser
3. Il sito è online con URL temporaneo `xxxx.netlify.app`
4. Per dominio personalizzato: Domain settings → Add domain

### Opzione B — GitHub Pages (permanente, versionato)
```bash
cd pizzeria-addu-gianmichele
git init
git add .
git commit -m "Sito Pizzeria Addu Gianmichele"
gh repo create pizzeria-addu-gianmichele --public --push --source=.
# poi: Settings → Pages → Source: Deploy from a branch → main / root
```

### Opzione C — Cloudflare Pages
1. https://dash.cloudflare.com → Pages → Create → Direct Upload
2. Trascina la cartella

---

## Cose da fare prima/ora della pubblicazione

1. **Aprire il sito su desktop e telefono** (doppio click su `index.html`).
2. **Confermare gli orari col titolare** (vedi nota sopra).
3. **Delivery**: la pizzeria **non fa Glovo/Just Eat/Deliveroo** (confermato da Egix): il sito offre solo telefono e ritiro in locale. Nessun pulsante delivery da aggiungere.
4. **Dominio**: registrare un dominio (~10-12 €/anno) per un aspetto professionale. Nome consigliato: `pizzeriaaddugianmichele.it`.
5. **Google Business Profile**: una volta online, aggiungere il sito al profilo Google Maps in modo che gli utenti lo vedano. Il profilo dice esplicitamente "Aggiungi sito web" — è il punto d'ingresso naturale.

---

## Nota tecnica

- Zero build, zero framework, zero dipendenze npm: modificabile con Blocco note.
- Ogni immagine ha `alt` descrittivo, `width`/`height` per evitare layout shift.
- CSS mobile-first, testato a 390px (iPhone 12) e 1440px senza overflow.
- SEO locale: meta description, Open Graph, Schema.org `Restaurant` con indirizzo, telefono, orari e recensioni.
- Rispetta `prefers-reduced-motion` per utenti sensibili al movimento.
