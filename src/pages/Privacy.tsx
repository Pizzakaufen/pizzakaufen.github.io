import { LegalPage, TodoNote } from '../components/LegalPage';
import { handles, identity, links } from '../config/site.config';

export default function Privacy() {
  return (
    <LegalPage
      pageKey="privacy"
      breadcrumb="Datenschutz"
      heading="Datenschutzerklärung"
      intro="Diese Website ist eine statische Seite ohne Nutzerkonten, Formulare und ohne Analyse-Tracking."
    >
      <TodoNote>
        Noch zu ergänzen: Name des Hosters sowie die Anschrift des Verantwortlichen.
        Diese Angaben liegen im Projekt nicht vor — bitte in <code> src/pages/Privacy.tsx </code>{' '}
        eintragen und die Erklärung an die tatsächlich eingesetzten Dienste anpassen.
      </TodoNote>

      <section aria-labelledby="verantwortlicher">
        <h2 id="verantwortlicher">Verantwortlicher</h2>
        <p>
          {identity.fullName}, [ADRESSE EINTRAGEN], {identity.locality}
          <br />
          E-Mail: <a href={links.email}>{handles.email}</a>
        </p>
      </section>

      <section aria-labelledby="hosting">
        <h2 id="hosting">Hosting und Server-Logfiles</h2>
        <p>
          Diese Website wird bei [HOSTER EINTRAGEN] gehostet. Beim Aufruf werden technisch
          notwendige Daten verarbeitet: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser
          und Betriebssystem. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO — berechtigtes
          Interesse an einem sicheren und störungsfreien Betrieb.
        </p>
      </section>

      <section aria-labelledby="cookies">
        <h2 id="cookies">Cookies und Tracking</h2>
        <p>
          Es werden keine Analyse- oder Tracking-Cookies gesetzt. Die Einstellungen für Farbschema
          und reduzierte Animationen werden ausschließlich lokal im Browser (localStorage)
          gespeichert und nicht an einen Server übertragen.
        </p>
      </section>

      <section aria-labelledby="fonts">
        <h2 id="fonts">Externe Schriftarten</h2>
        <p>
          Die Schriftarten Satoshi (Fontshare) und JetBrains Mono (Google Fonts) werden von den
          Servern der jeweiligen Anbieter geladen. Dabei wird die IP-Adresse an den Anbieter
          übertragen. Wer das vermeiden möchte, kann die Schriftarten selbst hosten; ein Hinweis
          dazu steht in der README des Projekts.
        </p>
      </section>

      <section aria-labelledby="externe-links">
        <h2 id="externe-links">Externe Links</h2>
        <p>
          Verlinkungen zu GitHub und Discord werden erst beim Klick aufgerufen. Anschließend gelten
          die Datenschutzbestimmungen der jeweiligen Anbieter.
        </p>
      </section>

      <section aria-labelledby="rechte">
        <h2 id="rechte">Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde.
        </p>
      </section>
    </LegalPage>
  );
}
