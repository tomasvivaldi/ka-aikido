import BackButton from "@/components/BackButton";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Impressum: React.FC = () => {
  return (
    <>
      <Head>
        <title>Impressum | Aikido-Dojo Jiyukan Karlsruhe e.V.</title>
      </Head>
      <div className="flex flex-col">
        <div className="h-[60%] min-h-[60vh] sm:h-[40%] sm:min-h-[40vh] flex x-paddings">
          <div className="absolute top-0 left-0 w-full h-[60%] sm:h-[40%] -z-10">
            <Image
              src="/impressum.jpg"
              alt="Impressum Background"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            <div className="absolute inset-0 bg-gray-800 opacity-50" />
          </div>

          <h1 className="relative heading1 mb-6 mt-32 text-slate-100">
            Impressum
          </h1>
        </div>

        <section className="my-8 p-4 x-paddings flex flex-col md:flex-row md:justify-around">
          <div className="">
            <h2 className="heading3 mb-4">Adresse</h2>
            <address className="text-base mb-6">
              Aikido-Dojo Jiyukan Karlsruhe e.V. <br />
              Steinstraße 23 • 76133 Karlsruhe <br />
              <a
                href="http://aikido-jiyukan.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://aikido-jiyukan.de
              </a>{" "}
              •{" "}
              <a href="mailto:info@aikido-jiyukan.de">info@aikido-jiyukan.de</a>{" "}
              • PGP-Key <br />{" "}
              {/* Consider adding the actual PGP-Key link here */}
              <div className="relative rounded-lg w-[90%] md:hidden h-[50vh] my-4 mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.189299439306!2d8.404825076137168!3d49.006983490238596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47970647b7efcc09%3A0x897ee0292101788d!2sAikido-Dojo%20Jiyukan!5e0!3m2!1sen!2sde!4v1698225763690!5m2!1sen!2sde"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                    borderRadius: "5px",
                  }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </address>

            <h2 className="heading3 mb-4">Vorstand</h2>
            <p className="text-base">
              Vorsitzender Heike Wendelin <br />
              Stellvertretender Vorsitzender Oliver Jergis <br />
              Schriftführer Ralph Kretzler
            </p>

            <h2 className="heading3 mt-6 mb-4">Registergericht</h2>
            <p className="text-base">
              Amtsgericht Mannheim • Registernummer VR 103303
            </p>

            {/* <h2 className="heading3 mt-6">Webdesign • Programmierung</h2> */}
            {/* Consider adding any additional information or links related to the web design and programming */}
            <BackButton />
          </div>
          <div className="relative rounded-lg hidden md:block md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.189299439306!2d8.404825076137168!3d49.006983490238596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47970647b7efcc09%3A0x897ee0292101788d!2sAikido-Dojo%20Jiyukan!5e0!3m2!1sen!2sde!4v1698225763690!5m2!1sen!2sde"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
                borderRadius: "5px",
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default Impressum;
