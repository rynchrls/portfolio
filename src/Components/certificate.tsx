import { useState, forwardRef } from "react";
import "../App.scss";
import SingleCert from "./singleCert";
import certDB from "../json/certificate.json";

export interface certification {
  id: number;
  img: string;
  title: string;
  skills: string;
  url: string;
}

interface dark {
  darkMode: boolean;
}

const Certificate = forwardRef<HTMLDivElement, dark>(({darkMode}, ref) => {
  const [allCert, setAllCert] = useState<certification[]>(certDB.certDB);

  return (
    <section className={`cert-section section ${darkMode ? 'cert-section-dark' : ''}`} ref={ref} id="cert">
      <div className="cert-header">
        <h2 className="h2-light">Certification</h2>
        <p className="p-light">
          All of the certificates I obtained for mastering the various
          technologies I'll be using to develop front-end applications.
        </p>
      </div>
      <div className="cert-wrapper">
        {allCert.map((cert) => (
          <SingleCert cert={cert} setAllCert={setAllCert} key={cert.id} />
        ))}
      </div>
    </section>
  );
});

export default Certificate;
