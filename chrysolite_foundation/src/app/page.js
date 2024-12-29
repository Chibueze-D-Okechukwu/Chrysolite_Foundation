import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main>
          <section>
              <div className="hero-left">
                  <div className="hero-title">Live, Love,</div>
                  <div className="hero-title">Empower.</div>
                  <div className="hero-text">We are advancing the welfare of the future generations through
                      empowerment and education.
                  </div>
                  <br/>
                  <div className="hero-btn">
                      <Link href={"https://forms.gle/rnznQtbkyPHyweDm6"} target={"_blank"}>
                          <button className={"primary-btn"}>Join Us</button>
                      </Link>
                  </div>
              </div>
              <div className="hero-right">
                  <div className="hero-img">
                      <Image className="hero-sun" width={100} height={102} src="/images/hero-sun.png" alt={"sun"}/>
                      <Image className="hero-leaf" width={164} height={149} src="/images/hero-leaf.png" alt={"leaf"}/>
                  </div>
              </div>
          </section>
      </main>
  );
}
