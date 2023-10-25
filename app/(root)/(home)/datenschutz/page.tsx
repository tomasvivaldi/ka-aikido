import BackButton from "@/components/BackButton";
import Head from "next/head";
import Image from "next/image";

const Datenschutzerklaerung: React.FC = () => {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung | Aikido-Dojo Jiyukan Karlsruhe e.V.</title>
      </Head>
      <div className="flex flex-col max-w-6xl">
        <div className="h-[60%] min-h-[60vh] sm:h-[40%] sm:min-h-[40vh] flex x-paddings">
          <div className="absolute top-0 left-0 w-full h-[60%] sm:h-[40%] -z-10">
            <Image
              src="/datenschutz.jpg"
              alt="Datenschutzerklärung Background"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            <div className="absolute inset-0 bg-gray-800 opacity-50" />
          </div>

          <h1 className="relative heading1 mb-6 mt-32 text-slate-100 sm:break-normal break-all">
            Datenschutzerklärung
          </h1>
        </div>

        <section className="my-8 p-4 x-paddings">
          <h2 className="heading3 mb-4">Gültigkeitsbereich</h2>
          <p className="text-base">
            Diese Datenschutzerklärung gilt ausschließlich für das Webangebot
            des Aikido-Dojo Jiyukan Karlsruhe e.V., nicht jedoch für verlinkte
            Seiten anderer Anbieter.
          </p>

          <h2 className="heading3 mt-6 mb-4">Verantwortlichkeit</h2>
          <p className="text-base">
            Verantwortlich für die Datenverarbeitung ist der Gesamtvorstand nach
            § 10 der Satzung des Aikido-Dojo Jiyukan Karlsruhe e.V.
          </p>

          <h2 className="heading3 mt-6 mb-4">Server-Log Dateien</h2>
          <p className="text-base">
            Das Hosting der Webseite erfolgt durch die 1&1 Internet SE. Diese
            erhebt und speichert automatisch Informationen in Server-Logdateien.
            Darunter fallen IP-Adresse, Uhrzeit, aufgerufene Webseite, URL der
            ursprünglichen Webseite, Webbrowser (Typ und Version) sowie das
            verwendete Betriebssystem. Die IP-Adressen in den Server-Log Dateien
            werden von 1&1 nach sieben Tagen anonymisiert.
          </p>

          <h2 className="heading3 mt-6 mb-4">Nutzung von 1&1 WebAnalytics</h2>
          <p className="text-base">
            Um unsere Seite zu verbessern und nutzerfreundlicher zu gestalten
            nutzen wir "1&1 WebAnalytics" der 1&1 Internet SE. Die IP-Adresse
            wird anonymisiert gespeichert.
          </p>
          <BackButton />
        </section>
      </div>
    </>
  );
};

export default Datenschutzerklaerung;
