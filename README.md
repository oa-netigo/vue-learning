
# vue-learning

Dieses Projekt ist eine Lernumgebung für Vue 3 mit Vite.
Hier findest du viele einfache Beispiele und Erklärungen rund um die Grundlagen von Vue.js:

**Themenübersicht:**

### Basis Themen
- **[Textinterpolation](https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation)** – Dynamisches Einfügen von Variablen und Ausdrücken in das Template mit {{ Mustache-Syntax }}.
- **[Attribute Binding](https://vuejs.org/guide/essentials/template-syntax.html#attribute-bindings)** – Dynamisches Binden von HTML-Attributen mit v-bind für flexible UI-Anpassungen.
- **[Reaktivität (ref, reactive)](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)** – Reaktive Datenstrukturen mit ref und reactive für automatische UI-Aktualisierung.
- **[Computed Properties](https://vuejs.org/guide/essentials/computed.html)** – Abgeleitete Werte, die sich automatisch aktualisieren, wenn abhängige Daten sich ändern.
- **[Komponenten](https://vuejs.org/guide/essentials/component-basics.html)** – Wiederverwendbare UI-Bausteine zur Strukturierung und Modularisierung der Anwendung.
- **[Props & Dynamic Props](https://vuejs.org/guide/components/props.html)** – Übergabe von Daten an Kind-Komponenten, inkl. dynamischer Werte.
- **[List Rendering](https://vuejs.org/guide/essentials/list.html)** – Dynamisches Rendern von Listen mit v-for für Arrays und Objekte.
- **[Bedingte Darstellung (v-if, v-show)](https://vuejs.org/guide/essentials/conditional.html)** – Elemente abhängig von Bedingungen ein- oder ausblenden.
- **[Slots & Fallback Slots](https://vuejs.org/guide/components/slots.html)** – Flexible Platzhalter für Inhalte in Komponenten, inkl. Standardinhalte.
- **[Named Slots](https://vuejs.org/guide/components/slots.html#named-slots)** – Benannte Platzhalter für gezieltes Einfügen von Inhalten in Komponenten.
- **[Event Handling](https://vuejs.org/guide/essentials/event-handling.html)** – Reaktion auf Benutzerinteraktionen mit v-on (z.B. @click).
- **[Emits](https://vuejs.org/guide/components/events.html)** – Kind zu Eltern Kommunikation mit benutzerdefinierten Events ($emit).
- **[Prop Drilling](https://vuejs.org/guide/components/provide-inject)** – Weitergabe von Props über mehrere Komponentenebenen hinweg.
- **[Provide & Inject](https://vuejs.org/guide/components/provide-inject.html)** – Daten zwischen weit entfernten Komponenten teilen, ohne Props zu verwenden.
- **[Watchers](https://vuejs.org/guide/essentials/watchers.html)** – Reaktion auf Datenänderungen mit benutzerdefinierten Beobachtern.
- **[Template Refs](https://vuejs.org/guide/essentials/template-refs.html)** – Zugriff auf DOM-Elemente oder Komponenteninstanzen im Template.
- **[Data Fetching](https://router.vuejs.org/guide/advanced/data-fetching)** – Laden von externen Daten (z.B. via API) und deren Integration in die App.
- **[Composables](https://vuejs.org/guide/reusability/composables.html)** – Wiederverwendbare Funktionen mit Vue's Composition API für geteilte stateful Logic.

### Erweiterte Themen
- **[Routing mit Vue Router](https://router.vuejs.org/)** - Single Page Application Navigation
- **[Formulare & Validierung](https://vuejs.org/guide/essentials/forms.html)** - Umfassende Form-Handling mit Validierung
- **[Lifecycle Hooks im Detail](https://vuejs.org/guide/essentials/lifecycle.html)** - Komponentenlebenszyklus verstehen
- **[Custom Directives](https://vuejs.org/guide/reusability/custom-directives.html)** - Eigene v-Direktiven erstellen
- **[v-model Direktive](https://vuejs.org/guide/essentials/forms.html#basic-usage)** - Zwei-Wege-Datenbinding für Formulare und Komponenten
- **[Dynamische Komponenten & Async Components](https://vuejs.org/guide/essentials/component-basics.html#dynamic-components)** - Code Splitting, dynamisches Laden und Suspense
- **[Transitions & Animationen](https://vuejs.org/guide/built-ins/transition.html)** - Ansprechende UI-Übergänge

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


## Weitere Infos

Siehe die [Vite Dokumentation](https://vite.dev/config/) für weitere Konfigurationsmöglichkeiten.

## Copyright

Omar Abdullah
