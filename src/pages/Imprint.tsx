import { LegalPage, TodoNote } from '../components/LegalPage';
import { handles, identity, links } from '../config/site.config';

export default function Imprint() {
  return (
    <LegalPage
      pageKey="imprint"
      breadcrumb="Impressum"
      heading="Impressum"
      intro="Anbieterkennzeichnung dieser Website nach § 5 DDG."
    >
      <TodoNote>
        Noch zu ergänzen: Straße, Hausnummer und Postleitzahl. Diese Angaben liegen nicht vor und
        dürfen nicht geraten werden — bitte in <code> src/pages/Imprint.tsx </code> eintragen.
      </TodoNote>

      <section aria-labelledby="anbieter">
        <h2 id="anbieter">Angaben gemäß § 5 DDG</h2>
        <address>
          {identity.fullName}
          <br />
          [STRASSE UND HAUSNUMMER EINTRAGEN]
          <br />
          [PLZ EINTRAGEN] {identity.locality}
          <br />
          Deutschland
        </address>
      </section>

      <section aria-labelledby="kontakt">
        <h2 id="kontakt">Kontakt</h2>
        <p>
          E-Mail: <a href={links.email}>{handles.email}</a>
          <br />
          <span className="text-[color:var(--color-text-faint)]">
            (Anschrift noch ergänzen — Platzhalter oben ersetzen)
          </span>
        </p>
      </section>

      <section aria-labelledby="verantwortlich">
        <h2 id="verantwortlich">Verantwortlich für den Inhalt</h2>
        <p>{identity.fullName}, Adresse wie oben.</p>
      </section>

      <section aria-labelledby="haftung">
        <h2 id="haftung">Haftung für Inhalte und Links</h2>
        <p>
          Die Inhalte dieser Seiten wurden mit Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann keine Gewähr übernommen werden. Für die
          Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </section>

      <section aria-labelledby="urheberrecht">
        <h2 id="urheberrecht">Urheberrecht</h2>
        <p>
          Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen
          Urheberrecht. Vervielfältigung oder Verbreitung außerhalb der gesetzlich erlaubten Fälle
          bedürfen der Zustimmung des Autors.
        </p>
      </section>
    </LegalPage>
  );
}
