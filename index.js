/* snake-i18n.js — Deutsch + traduzioni EN complete + pulsante "Torna all'Hub"
   Includilo DOPO lo <script> principale:  <script src="snake-i18n.js"></script> */
(function () {
  const HUB_URL = 'https://noskynhk.github.io/projecthub/'; // <-- metti qui il link esatto del tuo hub

  // Una riga = italiano|inglese|tedesco   (inglese vuoto = già gestito dal gioco)
  const RAW = `
 Inizia Gioco|| Spiel starten
 Ricomincia|| Neustart
 Pausa|| Pause
 In Gioco| Playing| Läuft
 Riprendi| Resume| Weiter
 Achievement|| Erfolge
 Impostazioni|| Einstellungen
 Salva/Carica| Save/Load| Speichern/Laden
 Istruzioni:|| Anleitung:
 Usa i tasti freccia per muoverti|| Steuere dich mit den Pfeiltasten
 Mangia il cibo rosso  per crescere|| Friss das rote Futter , um zu wachsen
 Non scontrarti con i muri o con te stesso!|| Prall nicht gegen Wände oder dich selbst!
 Più cibo mangi, più veloce diventa il gioco|| Je mehr du frisst, desto schneller wird das Spiel
 Sblocca achievement raggiungendo i livelli|| Schalte Erfolge frei, indem du Level erreichst
 Cambiando le impostazioni non classiche, gli achievement non si sbloccheranno finché non ripristini le impostazioni predefinite.|| Wenn du Einstellungen änderst, werden keine Erfolge freigeschaltet, bis du die Standardeinstellungen wiederherstellst.
 IMPOSTAZIONI|| EINSTELLUNGEN
 ATTENZIONE: Non sei in Modalità Classica!|| ACHTUNG: Du bist nicht im klassischen Modus!
Gli Achievement NON verranno sbloccati finché non torni alle impostazioni predefinite.||Erfolge werden NICHT freigeschaltet, bis du die Standardeinstellungen wiederherstellst.
 Collisione Muri:|| Wandkollision:
Perdi se tocchi il muro (Classico)||Du verlierst, wenn du die Wand berührst (Klassisch)
 Accelerazione (ms per livello):|| Beschleunigung (ms pro Level):
 Velocità Minima (ms):|| Mindestgeschwindigkeit (ms):
 Punti per Cibo:|| Punkte pro Futter:
Moltiplicato per il livello.||Mit dem Level multipliziert.
 Livelli ogni X punti:|| Level alle X Punkte:
Valore predefinito:||Standardwert:
punti||Punkte
Punti||Punkte
Mostra Griglia:||Raster anzeigen:
Mostra/nascondi le linee della griglia||Rasterlinien ein-/ausblenden
Suoni:||Sound:
Abilita suoni per eventi (mangia, game over)||Sounds bei Ereignissen aktivieren (Fressen, Game Over)
🌙 Dark Mode:||🌙 Dunkelmodus:
Abilita tema scuro||Dunkles Design aktivieren
⌨️ Controlli:||⌨️ Steuerung:
Frecce||Pfeiltasten
Tasti WASD||WASD-Tasten
📱 Controlli Touch:||📱 Touch-Steuerung:
Abilita controlli touch per dispositivi mobili||Touch-Steuerung für Mobilgeräte aktivieren
🔄 Impostazioni Predefinite||🔄 Standardeinstellungen
Chiudi|Close|Schließen
⚠️ Conferma Modifica||⚠️ Änderung bestätigen
Hai cambiato le impostazioni: gli achievement non saranno più sbloccabili. Confermare?||Du hast die Einstellungen geändert: Erfolge lassen sich nicht mehr freischalten. Bestätigen?
Conferma||Bestätigen
Annulla|Cancel|Abbrechen
Lingua / Language:||Sprache / Language:
🏆 ACHIEVEMENT||🏆 ERFOLGE
Seleziona Sezione:|Select Section:|Abschnitt wählen:
📊 Statistiche|📊 Statistics|📊 Statistiken
📅 Challenge Giornaliere|📅 Daily Challenges|📅 Tägliche Challenges
🎯 Modalità Sfida|🎯 Challenge Mode|🎯 Herausforderungsmodus
🐍 Skin Serpente|🐍 Snake Skins|🐍 Schlangen-Skins
📈 Dati Avanzati|📈 Advanced Stats|📈 Erweiterte Daten
🎖️ Achievement|🎖️ Achievements|🎖️ Erfolge
Punteggio Massimo:||Höchstpunktzahl:
Livello Massimo Raggiunto:||Höchstes erreichtes Level:
Achievement Sbloccati:||Freigeschaltete Erfolge:
Partite Giocate:||Gespielte Spiele:
Punteggio Finale:||Endpunktzahl:
Livello Raggiunto:||Erreichtes Level:
Riprova||Nochmal
Esci|Exit|Beenden
Tempo di Gioco||Spielzeit
Cibo Consumato||Gefressenes Futter
Punteggio Medio||Ø Punktzahl
Sessioni||Sitzungen
⚙️ Seleziona Difficoltà:|⚙️ Select Difficulty:|⚙️ Schwierigkeit wählen:
🎮 Seleziona Modalità:|🎮 Select Mode:|🎮 Modus wählen:
🟢 Facile||🟢 Leicht
🟡 Normale||🟡 Normal
🔴 Difficile||🔴 Schwer
⚫ Estremo||⚫ Extrem
Facile||Leicht
Normale||Normal
Difficile||Schwer
Estremo||Extrem
Medio||Mittel
⚔️ Classica|⚔️ Classic|⚔️ Klassisch
Classica||Klassisch
Modalità:|Mode:|Modus:
Tipo:|Type:|Typ:
⏱️ Tempo:|⏱️ Time:|⏱️ Zeit:
TEMPO SCADUTO!||ZEIT ABGELAUFEN!
Zen (Niente Game Over)||Zen (Kein Game Over)
Survival (Tempo)||Survival (Zeit)
Sfida||Herausforderung
Sfida Maratona||Marathon-Herausforderung
Sfida Estrema||Extreme Herausforderung
Sfida Giornaliera||Tägliche Challenge
Tutte le Sfide Giornaliere||Alle täglichen Challenges
Livello 3||Level 3
Livello 10||Level 10
Raggiungi il Livello||Erreiche Level
Raggiungi il livello||Erreiche Level
Raggiungi livello||Erreiche Level
Raggiungere livello||Erreiche Level
Raggiungere||Erreiche
Raggiungi||Erreiche
Sblocca:||Freischalten:
Sblocca 3 skin diverse||Schalte 3 verschiedene Skins frei
Sblocca 6 skin diverse||Schalte 6 verschiedene Skins frei
Sblocca tutte le skin||Schalte alle Skins frei
Mangia||Friss
Cibi||Futter
cibi||Futter
Ghiotto||Vielfraß
Ascesa||Aufstieg
Centinaia||Hunderter
Primi Passi||Erste Schritte
Esperto||Profi
Maestro||Meister
Dio del Serpente||Schlangengott
Centurione||Zenturio
Millenario||Tausender
Partita Perfetta||Perfektes Spiel
Velocista||Sprinter
Facile Vincente||Leicht-Sieger
Normale Vincente||Normal-Sieger
Difficile Vincente||Schwer-Sieger
Estremo Vincente||Extrem-Sieger
Puzzle Principiante||Puzzle-Anfänger
Maestro dei Puzzle||Puzzle-Meister
Puzzle Veloce||Puzzle-Blitz
Primo Sopravvissuto||Erster Überlebender
Sopravvivenza Estesa||Lange Überlebenszeit
Maestro della Sopravvivenza||Überlebensmeister
Collezionista di Skin||Skin-Sammler
Appassionato di Skin||Skin-Fan
Leggenda delle Skin||Skin-Legende
Completa il primo puzzle||Schließe das erste Puzzle ab
Completa tutti i puzzle||Schließe alle Puzzles ab
Completa un puzzle in meno di 30 secondi||Löse ein Puzzle in unter 30 Sekunden
Sopravvivi 60 secondi in Survival||Überlebe 60 Sekunden im Survival
Sopravvivi 180 secondi in Survival||Überlebe 180 Sekunden im Survival
Verde Classico||Klassisches Grün
Serpente d'Oro||Goldene Schlange
Ghiaccio Blu||Blaues Eis
Magia Viola||Violette Magie
Fuoco Rosso||Feuerrot
Neon Rosa||Neonpink
Ombra Nera||Schwarzer Schatten
Arcobaleno Pazzo||Verrückter Regenbogen
✅ SELEZIONATO||✅ AUSGEWÄHLT
✅ Sbloccato!||✅ Freigeschaltet!
✅ Sbloccato||✅ Freigeschaltet
🔒 Bloccato||🔒 Gesperrt
Seleziona||Auswählen
✅ Completato!||✅ Geschafft!
Primo Passo||Erster Schritt
Corridoio||Korridor
Labirinto||Labyrinth
Spirale||Spirale
Obiettivo||Ziel
Ostacoli||Hindernisse
Difficoltà||Schwierigkeit
▶ Inizia Sfida||▶ Herausforderung starten
▶ Inizia Puzzle||▶ Puzzle starten
📅 Challenge di Oggi||📅 Heutige Challenges
🎯 Seleziona una Sfida||🎯 Wähle eine Herausforderung
Seleziona una sfida per iniziare||Wähle eine Herausforderung, um zu starten
Seleziona un puzzle per iniziare||Wähle ein Puzzle, um zu starten
🎉 ACHIEVEMENT SBLOCCATO!||🎉 ERFOLG FREIGESCHALTET!
Achievement Sbloccato:|Achievement Unlocked:|Erfolg freigeschaltet:
🎉 PUZZLE COMPLETATO!||🎉 PUZZLE GESCHAFFT!
💾 Salvataggio Alfanumerico|💾 Alphanumeric Save|💾 Alphanumerisches Speichern
📥 Salva Partita|📥 Save Game|📥 Spiel speichern
Clicca per generare un codice salvatagggio:|Click to generate a save code:|Klicke, um einen Speichercode zu erzeugen:
🔐 Genera Codice di Salvataggio|🔐 Generate Save Code|🔐 Speichercode erzeugen
Codice di salvataggio (copia e salva!):|Save code (copy and keep it!):|Speichercode (kopieren und aufbewahren!):
📋 Copia Codice|📋 Copy Code|📋 Code kopieren
📤 Carica Partita|📤 Load Game|📤 Spiel laden
Incolla il codice di salvataggio:|Paste your save code:|Füge deinen Speichercode ein:
Incolla il codice di salvataggio qui...|Paste your save code here...|Füge deinen Speichercode hier ein...
✅ Carica Partita|✅ Load Game|✅ Spiel laden
🔄 Reset|🔄 Reset|🔄 Zurücksetzen
Resetta tutti i dati del gioco (puoi recuperarli con il codice):|Reset all game data (you can restore it with your code):|Alle Spieldaten zurücksetzen (mit dem Code wiederherstellbar):
⚠️ Resetta Tutto|⚠️ Reset Everything|⚠️ Alles zurücksetzen
Codice di salvataggio generato!|Save code generated!|Speichercode erzeugt!
Genera prima un codice di salvataggio|Generate a save code first|Erzeuge zuerst einen Speichercode
Codice copiato negli appunti!|Code copied to clipboard!|Code in die Zwischenablage kopiert!
Incolla un codice di salvataggio|Paste a save code|Füge einen Speichercode ein
Codice di salvataggio non valido|Invalid save code|Ungültiger Speichercode
Dati caricati con successo!|Data loaded successfully!|Daten erfolgreich geladen!
Errore: codice di salvataggio corrotto|Error: corrupted save code|Fehler: Speichercode beschädigt
Dati resettati! Puoi recuperarli con il codice di salvataggio|Data reset! You can restore them with your save code|Daten zurückgesetzt! Du kannst sie mit dem Speichercode wiederherstellen
Sei sicuro di voler resettare tutti i dati?|Are you sure you want to reset all data?|Bist du sicher, dass du alle Daten zurücksetzen willst?
Puoi recuperarli in seguito con il codice di salvataggio.|You can restore them later with your save code.|Du kannst sie später mit dem Speichercode wiederherstellen.
Torna all'Hub|Back to Hub|Zurück zum Hub`;

  const E = RAW.trim().split('\n').map(l => l.split('|')); // [it, en, de]
  const idx = {};
  E.forEach(e => e.forEach(s => { if (s) idx[s] = e; }));
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const srcRe = new RegExp(E.map(e => e[0]).sort((a, b) => b.length - a.length).map(esc).join('|'), 'g');

  let LANG = (customSettings && customSettings.language) || 'it';
  const col = () => ({ it: 0, en: 1, de: 2 })[LANG] || 0;

  function tx(s) {
    const t = s.trim();
    if (!t) return s;
    const c = col(), e = idx[t];
    if (e) return e[c] ? s.replace(t, () => e[c]) : s;
    if (LANG === 'it') return s;
    return s.replace(srcRe, m => (idx[m] && idx[m][c]) || m);
  }

  function fix(n) {
    if (n.nodeType === 3) {
      const p = n.parentNode && n.parentNode.nodeName;
      if (p === 'SCRIPT' || p === 'STYLE') return;
      const v = tx(n.nodeValue);
      if (v !== n.nodeValue) n.nodeValue = v;
    } else if (n.nodeType === 1) {
      if (n.placeholder) { const v = tx(n.placeholder); if (v !== n.placeholder) n.placeholder = v; }
      for (let c = n.firstChild; c; c = c.nextSibling) fix(c);
    }
  }

  // traduce anche il testo creato dinamicamente dal gioco
  new MutationObserver(ms => ms.forEach(m => {
    if (m.type === 'characterData') fix(m.target); else m.addedNodes.forEach(fix);
  })).observe(document.body, { childList: true, characterData: true, subtree: true });

  const _al = window.alert, _cf = window.confirm;
  window.alert = m => _al.call(window, tx(String(m)));
  window.confirm = m => _cf.call(window, tx(String(m)));

  // Il gioco resta internamente in "it" quando scegli DE: il testo viene poi tradotto qui sopra
  const al = applyLanguage;
  applyLanguage = function () { al.apply(this, arguments); fix(document.body); };
  const cl = changeLanguage;
  changeLanguage = function (l) {
    LANG = l;
    cl(l === 'de' ? 'it' : l);
    customSettings.language = l;
    saveStats();
  };

  // Pulsante "Torna all'Hub"
  const css = document.createElement('style');
  css.textContent = `
.hub-btn{position:fixed;top:14px;left:14px;z-index:900;display:inline-flex;align-items:center;gap:10px;padding:7px 18px 7px 7px;border-radius:999px;color:#fff;text-decoration:none;font:700 .95em Arial,sans-serif;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.45);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 8px 24px rgba(40,20,90,.35);transition:transform .2s,box-shadow .2s,background .2s}
.hub-btn .ic{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#fff;color:#764ba2;transition:transform .25s}
.hub-btn:hover{transform:translateY(-2px);background:rgba(255,255,255,.26);box-shadow:0 12px 30px rgba(40,20,90,.45)}
.hub-btn:hover .ic{transform:translateX(-4px)}
.hub-btn:focus-visible{outline:3px solid #fff;outline-offset:3px}
@media(max-width:700px){.hub-btn{padding:6px;top:10px;left:10px}.hub-btn .lbl{display:none}}
@media(prefers-reduced-motion:reduce){.hub-btn,.hub-btn .ic{transition:none}}`;
  document.head.appendChild(css);

  const hub = document.createElement('a');
  hub.className = 'hub-btn';
  hub.href = HUB_URL;
  hub.setAttribute('aria-label', 'Hub');
  hub.innerHTML = '<span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></span><span class="lbl">Torna all\'Hub</span>';
  document.body.appendChild(hub);

  // Selettore lingua: aggiunge il tedesco
  const sel = document.getElementById('languageSelect');
  if (sel) { sel.add(new Option('Deutsch', 'de')); sel.value = LANG; }
  if (LANG === 'de') currentLang = 'it';
  applyLanguage();
})();
