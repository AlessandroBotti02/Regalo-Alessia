# Per te ♥ — sorpresa di compleanno

Sito statico (HTML/CSS/JS vanilla) per GitHub Pages. Nessun build, nessuna dipendenza.

## Struttura

```
index.html        5 sezioni, sbloccate una alla volta (niente spoiler scrollando)
style.css         tutto lo stile, mobile-first
script.js         CONFIG in cima = l'unica parte da modificare
musica/           facoltativo: un MP3
```

Flusso: **Gratta e vinci** (torta, le candeline si spengono, "Buon compleanno, amore", scorre da sola giù) → **Lettera** (busta che si muove con "clicca qui", poi "Scorri giù") → **Biglietto** che si gira (Lago di Como, 6–8 nov) + countdown + .ics → **Itinerario** (mappa, 3 giorni, toggle sole/pioggia la domenica, note, link) → **Finale** (cuore gigante "schiacciami": 5 tocchi = esplosione di cuori + messaggio segreto).

## 1. Personalizza (30–60 min)

1. Apri `script.js` e modifica `CONFIG`: `nome`, `firma`, `lettera`, `segreto`, `finale`.
2. **Cerca `[` nel file**: tutti i testi tra parentesi quadre sono segnaposto da sostituire.
3. Facoltativo: `musica: "musica/canzone.mp3"`.

## 2. Prova in locale

```bash
python3 -m http.server 8000
```
Poi apri http://localhost:8000 (o dal telefono, sulla stessa Wi-Fi: http://IP-DEL-MAC:8000).

## 3. Pubblica su GitHub Pages

1. github.com → **New repository** → nome poco ovvio (es. `ottobre-9-xk3`), **Public** (Pages gratis richiede repo pubblico; il sito ha `noindex`, quindi non finisce su Google).
2. **Add file → Upload files** → trascina *il contenuto* della cartella (index.html deve stare nella radice) → Commit.
3. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. Dopo 1–2 minuti il sito è su `https://TUO-UTENTE.github.io/NOME-REPO/`.
5. Ogni modifica successiva: carica di nuovo il file, aspetta ~1 min, ricarica con la cache svuotata.

## 4. Checklist pre-lancio (da fare su iPhone **e** Android)

- [ ] Link aperto da WhatsApp/iMessage (browser interno!) e da Safari/Chrome
- [ ] Gratta e vinci: si gratta col dito, la pagina **non** scorre mentre gratti, si rivela da solo oltre ~50%
- [ ] Dopo 12 s compare "Non riesci? Tocca qui" e funziona
- [ ] Musica (se presente): parte al primo tocco, il pulsante ♪ la ferma; prova con telefono **non** in silenzioso
- [ ] Dopo il gratta: torta → candeline che si spengono → "Buon compleanno, amore" → scorre da sola alla busta
- [ ] Busta: si muove, "clicca qui" visibile; si apre e la lettera compare paragrafo per paragrafo
- [ ] A fine lettera compare "Scorri giù" e sotto c'è il biglietto
- [ ] Nessun `[segnaposto]` rimasto nella lettera
- [ ] Biglietto: si gira, retro leggibile, coriandoli
- [ ] Countdown corretto (≈ giorni al 6 novembre)
- [ ] "Segnalo in calendario" apre/aggiunge l'evento 6–8 novembre
- [ ] Itinerario: toggle domenica ☀️/🌧️, mappa (toccando un punto va al giorno), note apribili, tutti i link si aprono
- [ ] Finale: 5 tocchi sul cuore → messaggio segreto
- [ ] Rotazione orizzontale del telefono: niente si rompe
- [ ] Prova in 4G (Wi-Fi spento): la prima schermata appare in < 3 s
- [ ] Fai provare tutto a un amico/a fidato/a **senza** spiegazioni
