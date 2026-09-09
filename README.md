# Sito web — Studio di Geologia Tecnica (Dott. Geol. Massimo Pasquale Fedele)

Sito statico (solo HTML, CSS e un piccolo file JavaScript). **Nessuna build, nessun
framework, nessun database, nessun cookie.** Si può pubblicare gratuitamente su
GitHub Pages, Cloudflare Pages, Netlify o Vercel: l'unico costo è il dominio
(`geologofedele.it`, circa 8–15 €/anno).

---

## 1. Struttura dei file

```
geologofedele.it/
├── index.html                  Home
├── chi-sono.html               Chi sono
├── servizi.html                Servizi (con ancore #relazioni #geofisica …)
├── relazioni-geologiche.html   Pagina di approfondimento
├── invarianza-idraulica.html   Pagina di approfondimento
├── galleria.html               Galleria dei lavori (con lightbox)
├── contatti.html               Recapiti + modulo di contatto
├── grazie.html                 Pagina di conferma dopo l'invio del modulo
├── privacy.html                Informativa privacy (modello da completare)
├── 404.html                    Pagina "non trovata"
│
├── assets/
│   ├── css/style.css           Tutto lo stile del sito (impostazione chiara)
│   ├── js/main.js              Menu mobile, lightbox, riquadri foto, anno nel footer
│   └── img/
│       ├── logo.png            Logo originale dello studio
│       ├── favicon.svg  ·  og-image.svg
│       ├── schema-invarianza.svg   (unico schema disegnato, pagina Invarianza)
│       └── foto/               fotografie ed elaborati (vedi punto 3)
│
├── CNAME                       Dominio per GitHub Pages (www.geologofedele.it)
├── _redirects                  Redirect apex→www e 404 (Netlify / Cloudflare Pages)
├── _headers                    Intestazioni di sicurezza (Netlify / Cloudflare Pages)
├── netlify.toml                Configurazione Netlify
├── robots.txt  ·  sitemap.xml  ·  site.webmanifest
└── .nojekyll                   (necessario per GitHub Pages)
```

---

## 2. Anteprima in locale

**Modo rapido:** doppio clic su **`apri-anteprima.cmd`** in questa cartella:
si apre il browser su `http://localhost:8000`. Per fermare l'anteprima chiudi
la finestra nera.

**A mano:** apri un terminale in questa cartella ed esegui `py -m http.server 8000`,
poi vai su `http://localhost:8000`.

(Aprire `index.html` con doppio clic funziona quasi del tutto, ma il server locale
riproduce esattamente il comportamento online.)

---

## 3. Prima di pubblicare — controlli consigliati

Il testo del sito è completo (nessun riquadro-nota da compilare). Restano solo
alcune verifiche di merito:

| Dove | Cosa |
|---|---|
| `privacy.html` | Far validare l'informativa da un consulente (dati del titolare, tempi di conservazione, fornitori tecnici) |
| tutte le pagine (footer) | Verifica di P. IVA, numero d'Ordine, PEC |
| `contatti.html` | Conferma dell'indirizzo e-mail da mostrare al pubblico |
| `galleria.html` | Facoltativo: aggiungere Comune e anno alle didascalie delle 7 immagini |
| `assets/img/og-image.svg` | Anteprima social: per la massima compatibilità puoi sostituirla con un `og-image.png` 1200×630 e aggiornare i tag `og:image` |

### Le immagini del sito

Il logo (`logo.png`), le fotografie e gli elaborati che hai fornito sono già stati
elaborati e collegati in `assets/img/foto/`:

| File | Dove compare |
|---|---|
| `hero.jpg` | fotografia grande della home (stendimento sismico) |
| `lavoro-sul-campo.jpg` | home, "Il lavoro sul campo" (collage di indagini) |
| `srt-sezione.jpg` | pagina Servizi, sezione SRT (sezione tomografica) |
| `lavoro-1.jpg` … `lavoro-7.jpg` | griglia della **Galleria** (7 riquadri) |
| `ritratto.jpg` | pagina "Chi sono" (fotografia personale) |

**Per aggiungere altre immagini alla Galleria:** metti il file in `assets/img/foto/`,
apri `galleria.html`, copia un blocco `<button class="gallery-item">…</button>` e
cambia il nome del file e la didascalia. Evita foto con volti riconoscibili o dati
dei committenti (targhe, insegne, numeri civici).

### Sostituire il numero di telefono / e-mail ovunque

Il telefono è scritto come `+393345719897` (nei link `tel:`) e come `334 571 9897`
(testo visibile); l'e-mail come `geologofedele@gmail.com`. Usa "trova e sostituisci"
del tuo editor su tutti i file `.html` se cambiano.
Suggerimento: una volta attivo il dominio puoi crearti un indirizzo tipo
`info@geologofedele.it` e usarlo al posto di quello Gmail.

---

## 4. Attivare il modulo di contatto

Il modulo in `contatti.html` è già predisposto per **Web3Forms** — servizio gratuito,
senza account, con server nell'Unione Europea e conforme al GDPR.

1. Vai su **https://web3forms.com**, inserisci la tua e-mail e ottieni una *Access Key*.
2. In `contatti.html` sostituisci `INSERISCI-QUI-LA-TUA-ACCESS-KEY-WEB3FORMS`
   con la chiave ricevuta.

Fatto: i messaggi arrivano alla tua e-mail e l'utente viene portato su `grazie.html`.

> **In alternativa, se pubblichi su Netlify** puoi usare i *Netlify Forms* (100 invii/mese
> gratis) senza servizi esterni: le istruzioni sono nel commento all'inizio del `<form>`
> in `contatti.html`.

Finché la chiave non è impostata, il modulo non invia nulla: in quel caso lascia
comunque ben visibile l'indirizzo e-mail (già presente sotto il pulsante).

---

## 5. Pubblicazione gratuita

Tutte e quattro le piattaforme offrono hosting gratuito, HTTPS automatico e dominio
personalizzato. Di seguito, in ordine di comodità per questo caso.

### Passo comune: mettere il sito su GitHub (consigliato per tutte le opzioni tranne il caricamento manuale)

1. Crea un account su **https://github.com** (gratuito).
2. Crea un nuovo repository, ad esempio `geologofedele.it`, **pubblico**, vuoto.
3. Carica il contenuto di questa cartella. Da terminale, in questa cartella:

   ```bash
   git init
   git add .
   git commit -m "Sito Studio di Geologia Tecnica Fedele"
   git branch -M main
   git remote add origin https://github.com/TUO-UTENTE/geologofedele.it.git
   git push -u origin main
   ```

   Oppure, senza terminale: su GitHub usa "uploading an existing file" e trascina
   tutti i file.

---

### Opzione A — Cloudflare Pages *(consigliata)*

Rete veloce, gestione del dominio `.it` semplice, statistiche senza cookie incluse.

1. Crea un account su **https://dash.cloudflare.com**.
2. **Workers & Pages → Create → Pages → Connect to Git**, seleziona il repository.
3. Impostazioni di build:
   - *Framework preset*: **None**
   - *Build command*: (vuoto)
   - *Build output directory*: `/`
4. **Save and Deploy**. Dopo un minuto il sito è online su `nome-progetto.pages.dev`.
5. Collega il dominio: vedi §6, "Cloudflare".

---

### Opzione B — Netlify

Il modo più rapido, anche senza GitHub.

- **Con GitHub**: su **https://app.netlify.com** → *Add new site → Import from Git*,
  seleziona il repo. *Build command* vuoto, *Publish directory* `.`.
- **Senza GitHub**: vai su **https://app.netlify.com/drop** e trascina l'intera
  cartella. (Per aggiornare in futuro dovrai ri-trascinarla.)

Poi *Domain management → Add a domain* → `www.geologofedele.it`: vedi §6, "Netlify".

---

### Opzione C — GitHub Pages

Tutto dentro GitHub, nessun servizio in più.

1. Nel repository: **Settings → Pages**.
2. *Source*: **Deploy from a branch** → branch `main`, cartella `/ (root)` → **Save**.
3. Dopo qualche minuto il sito è su `https://TUO-UTENTE.github.io/geologofedele.it/`.
4. In **Settings → Pages → Custom domain** scrivi `www.geologofedele.it` e salva
   (il file `CNAME` in questa cartella serve proprio a questo).
5. Configura il DNS: vedi §6, "GitHub Pages". Infine spunta **Enforce HTTPS**.

> Nota: il file `.nojekyll` (già presente) evita che GitHub ignori le cartelle.

---

### Opzione D — Vercel

1. **https://vercel.com** → *Add New → Project* → importa il repository.
2. *Framework preset*: **Other**. Nessun'altra impostazione.
3. **Deploy**. Poi *Settings → Domains → Add* `www.geologofedele.it`: vedi §6, "Vercel".

---

## 6. Collegare il dominio `geologofedele.it`

### Dove registrarlo

Registrar che vendono il `.it` (circa 8–15 €/anno): **Aruba, Netsons, Register.it,
OVHcloud, Namecheap**. Compra **solo il dominio** (niente hosting, niente e-mail a
pagamento se non ti serve).

Il sito è configurato per rispondere su **`www.geologofedele.it`**, con
reindirizzamento automatico da `geologofedele.it` (senza www).

### Record DNS da impostare presso il registrar

> Sostituisci `nome-progetto` / `TUO-UTENTE` con i valori reali della piattaforma.

**Cloudflare Pages**
: Il modo più semplice: in Cloudflare *Add a site* → `geologofedele.it`, poi cambia i
  *nameserver* presso il registrar con quelli indicati da Cloudflare. Dopodiché, in
  *Workers & Pages → il tuo progetto → Custom domains*, aggiungi sia
  `www.geologofedele.it` sia `geologofedele.it`: Cloudflare crea i record da solo.
  Aggiungi infine una *Redirect Rule* da `geologofedele.it/*` a
  `https://www.geologofedele.it/$1` (301).

**Netlify**
: Consigliato: *Domain management → Set up Netlify DNS* e cambia i *nameserver*
  presso il registrar con quelli di Netlify. In alternativa, con il DNS del registrar:
  - `www` → tipo **CNAME** → `nome-progetto.netlify.app`
  - `@` (apex) → tipo **A** → `75.2.60.5`  *(oppure ALIAS/ANAME → `apex-loadbalancer.netlify.com`)*
  Imposta `www.geologofedele.it` come *primary domain* (Netlify redirige l'apex).

**GitHub Pages**
: Presso il DNS del registrar:
  - `www` → tipo **CNAME** → `TUO-UTENTE.github.io`
  - `@` (apex) → **quattro record A**:
    `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - (facoltativi, IPv6) `@` → **AAAA** →
    `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
  GitHub reindirizza automaticamente l'apex verso `www`.

**Vercel**
: Presso il DNS del registrar:
  - `www` → tipo **CNAME** → `cname.vercel-dns.com`
  - `@` (apex) → tipo **A** → `76.76.21.21`
  In Vercel imposta `www.geologofedele.it` come dominio primario.

La propagazione DNS e l'emissione del certificato HTTPS richiedono da pochi minuti
a qualche ora.

---

## 7. Dopo la pubblicazione

- Apri il sito in HTTPS e controlla tutte le pagine e il menu su telefono.
- Invia una prova dal modulo di contatto e verifica di ricevere l'e-mail.
- (Facoltativo) Registra il sito su **Google Search Console**
  (https://search.google.com/search-console) e invia `sitemap.xml`.
- (Facoltativo) Statistiche **senza cookie**: Cloudflare Web Analytics (se usi
  Cloudflare) o Plausible. In tal caso aggiorna il §6 di `privacy.html`.
- Verifica l'anteprima social incollando l'URL in
  https://www.opengraph.xyz .

---

## 8. Aggiornare il sito in futuro

- **Con GitHub** (Cloudflare/Netlify/GitHub Pages/Vercel collegati al repo):
  modifica i file, poi

  ```bash
  git add .
  git commit -m "Aggiornamento contenuti"
  git push
  ```

  La pubblicazione è automatica in un minuto.
- **Netlify Drop senza GitHub**: ri-trascina la cartella su
  https://app.netlify.com/drop .

Per aggiungere un lavoro alla galleria: metti l'immagine in `assets/img/`, copia un
blocco `<button class="gallery-item">…</button>` in `galleria.html` e cambia
`src`, `data-full`, `data-caption` e il testo.

---

## 9. Riepilogo costi

| Voce | Costo |
|---|---|
| Dominio `geologofedele.it` | ~ 8–15 €/anno |
| Hosting (una delle 4 piattaforme) | **0 €** |
| HTTPS / certificato | **0 €** (incluso) |
| Modulo di contatto (Web3Forms free o Netlify Forms) | **0 €** |

---

## 10. Licenza e crediti

Contenuti, testi e dati professionali: © Massimo Pasquale Fedele.
Codice del sito: liberamente modificabile dal committente.
Nessuna libreria di terze parti: font di sistema, nessuna richiesta esterna,
nessun cookie di profilazione.
