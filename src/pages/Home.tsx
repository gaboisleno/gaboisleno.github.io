import { useContext, useEffect } from "react";
import { TranslateContext } from "../context/TranslateContext";
import GithubIcon from "../assets/icons/GithubIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import EmailIcon from "../assets/icons/EmailIcon";
import CakeIcon from "../assets/icons/CakeIcon";

export function getAge(): number {
  const born = new Date(1994, 7, 30);
  const today = new Date();
  const milis = today.getTime() - born.getTime();
  return Math.floor(milis / 31536000000);
}

export function Home() {
  const { data }: any = useContext(TranslateContext);
  const { lang, setLang }: any = useContext(TranslateContext);

  useEffect(() => {
    setLang("es");
  }, []);

  return (
    data != null && (
      <div className="card">
        <nav className="navbar">
          <h3>{data.RESUME}</h3>
          <div>
            <button
              className={lang === "es" ? "active" : ""}
              onClick={() => setLang("es")}
            >
              Español
            </button>
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              English
            </button>
          </div>
        </nav>

        <div>
          <h1>Gabriel Isleño</h1>
          <p>Rosario, Santa Fe - Argentina</p>
          <p className="align">
            <CakeIcon width={20} height={20}></CakeIcon> 30 Jul 1994{" - "}
            {`${getAge()} ${data.AGE}`}
          </p>

          <p>
            <a
              href="mailto: isleno.gabriel@gmail.com"
              target="_blank"
              className="align"
            >
              <EmailIcon width={20} height={20}></EmailIcon>
              isleno.gabriel@gmail.com
            </a>
          </p>

          <p>
            <a
              href="https://github.com/gaboisleno"
              target="_blank"
              className="align"
            >
              <GithubIcon width={20} height={20}></GithubIcon>Github
            </a>
          </p>
          <p>
            <a
              href="https://linkedin.com/in/gabriel-isleno"
              target="_blank"
              className="align"
            >
              <LinkedinIcon width={20} height={20}></LinkedinIcon>Linkedin
            </a>
          </p>
        </div>

        <div>
          <p>{data.GRADE.TITLE}</p>
        </div>

        <div>
          <h2 className="text-gradient">{data.KNOWLEDGE.TITLE}</h2>
          <div>
            {data.KNOWLEDGE.ITEMS.map((item: string, idx: number) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
          <div>
            {data.KNOWLEDGE.CHIPS.map((item: string, idx: number) => (
              <a className="pill-badge" key={idx}>
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2>{data.EXPERIENCE.TITLE}</h2>
          <div className="history-line">
            {data.EXPERIENCE.LIST.map((item: any, idx: number) => (
              <div className="timeline" key={idx}>
                <div className="bullet"></div>
                <h3>{item.TITLE}</h3>
                <small>{item.START}</small>
                <p>{item.DESCRIPTION}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3>{data.LANGUAGES.TITLE}</h3>
          <p>{data.LANGUAGES.DESCRIPTION}</p>
        </div>

        <div>
          <h3>{data.HOBBIES.TITLE}</h3>
          {data.HOBBIES.LIST.map((item: any, idx: number) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
        <footer></footer>
      </div>
    )
  );
}
