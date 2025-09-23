
# vue-learning

Dieses Projekt ist eine Lernumgebung für Vue 3 mit Vite.
Hier findest du viele einfache Beispiele und Erklärungen rund um die Grundlagen von Vue.js:

**Themenübersicht:**

### Basis Themen
- **Textinterpolation** – Dynamisches Einfügen von Variablen und Ausdrücken in das Template mit {{ Mustache-Syntax }}.
- **Attribute Binding** – Dynamisches Binden von HTML-Attributen mit v-bind für flexible UI-Anpassungen.
- **Reaktivität (ref, reactive)** – Reaktive Datenstrukturen mit ref und reactive für automatische UI-Aktualisierung.
- **Computed Properties** – Abgeleitete Werte, die sich automatisch aktualisieren, wenn abhängige Daten sich ändern.
- **Komponenten** – Wiederverwendbare UI-Bausteine zur Strukturierung und Modularisierung der Anwendung.
- **Props & Dynamic Props** – Übergabe von Daten an Kind-Komponenten, inkl. dynamischer Werte.
- **Statische Props** – Feste Werte als Props an Komponenten übergeben.
- **List Rendering** – Dynamisches Rendern von Listen mit v-for für Arrays und Objekte.
- **Bedingte Darstellung (v-if, v-show)** – Elemente abhängig von Bedingungen ein- oder ausblenden.
- **Slots & Fallback Slots** – Flexible Platzhalter für Inhalte in Komponenten, inkl. Standardinhalte.
- **Named Slots** – Benannte Platzhalter für gezieltes Einfügen von Inhalten in Komponenten.
- **Event Handling** – Reaktion auf Benutzerinteraktionen mit v-on (z.B. @click).
- **Prop Drilling** – Weitergabe von Props über mehrere Komponentenebenen hinweg.
- **Provide & Inject** – Daten zwischen weit entfernten Komponenten teilen, ohne Props zu verwenden.
- **Watchers** – Reaktion auf Datenänderungen mit benutzerdefinierten Beobachtern.
- **Template Refs** – Zugriff auf DOM-Elemente oder Komponenteninstanzen im Template.
- **Data Fetching** – Laden von externen Daten (z.B. via API) und deren Integration in die App.
- **Composables** – Wiederverwendbare Funktionen mit Vue's Composition API für geteilte stateful Logic.

### Erweiterte Themen ✨
- **Routing mit Vue Router** - Single Page Application Navigation
- **Formulare & Validierung** - Umfassende Form-Handling mit Validierung
- **Lifecycle Hooks im Detail** - Komponentenlebenszyklus verstehen
- **Custom Directives** - Eigene v-Direktiven erstellen
- **Dynamische Komponenten & Async Components** - Code Splitting und dynamisches Laden
- **Transitions & Animationen** - Ansprechende UI-Übergänge

## Empfohlene Entwicklungsumgebung

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Vetur sollte deaktiviert werden).

## Projekt starten

Installiere die Abhängigkeiten:

```sh
npm install
```

Starte die Entwicklungsumgebung mit Hot-Reload:

```sh
npm run dev
```

Baue das Projekt für die Produktion:

```sh
npm run build
```

## Benutzung

Um ein bestimmtes Thema zu erkunden, uncomment einfach die entsprechende Komponente in `src/App.vue`:

```vue
<!-- Beispiel: Routing erkunden -->
<RouterExample />

<!-- Beispiel: Formulare & Validierung -->
<FormsValidation />

<!-- Beispiel: Lifecycle Hooks -->
<LifecycleHooks />
```

## Weitere Infos

Siehe die [Vite Dokumentation](https://vite.dev/config/) für weitere Konfigurationsmöglichkeiten.

## Copyright

Omar Abdullah
