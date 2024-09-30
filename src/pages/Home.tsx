import { useContext, useEffect } from "react";
import CakeIcon from "../assets/icons/CakeIcon";
import EmailIcon from "../assets/icons/EmailIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import { TranslateContext } from "../context/TranslateContext";

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
      <div className="flex flex-col max-w-screen-md m-auto p-8 text-gray-800 border border-gray-200 rounded-lg shadow bg-gray-100">
        <nav className="flex justify-between align-middle">
          <h3 className="text-base font-bold">{data.RESUME}</h3>
          <div className="flex gap-5">
            <button
              className={`font-bold rounded-lg text-sm py-1 px-5 transition-all duration-300 ${
                lang === "es"
                  ? "bg-violet-600 text-gray-100"
                  : "bg-gray-100 text-gray-800 border border-gray-400 font-normal"
              }`}
              onClick={() => setLang("es")}
            >
              Español
            </button>
            <button
              className={`font-bold rounded-lg text-sm py-1 px-5 transition-all duration-300 ${
                lang === "en"
                  ? "bg-violet-600 text-gray-100"
                  : "bg-gray-100 text-gray-800 border border-gray-400 font-normal"
              }`}
              onClick={() => setLang("en")}
            >
              English
            </button>
          </div>
        </nav>

        <div>
          <h1 className="text-5xl font-bold my-6 mb-2">Gabriel Isleño</h1>

          <div className="text-gray-500 mb-2">
            Rosario, Santa Fe - Argentina
          </div>

          <div className="flex align-middle gap-2 mb-2 text-gray-500">
            <CakeIcon width={20} height={20}></CakeIcon> 30 Jul 1994{" - "}
            {`${getAge()} ${data.AGE}`}
          </div>

          <div>
            <a
              className="flex align-middle text-violet-600 gap-2 mb-2"
              href="mailto: isleno.gabriel@gmail.com"
              target="_blank"
            >
              <EmailIcon width={20} height={20}></EmailIcon>
              isleno.gabriel@gmail.com
            </a>
          </div>

          <div>
            <a
              className="flex align-middle text-violet-600 gap-2 mb-2"
              href="https://github.com/gaboisleno"
              target="_blank"
            >
              <GithubIcon width={20} height={20}></GithubIcon>Github
            </a>
          </div>

          <div>
            <a
              className="flex align-middle text-violet-600 gap-2 mb-2"
              href="https://linkedin.com/in/gabriel-isleno"
              target="_blank"
            >
              <LinkedinIcon width={20} height={20}></LinkedinIcon>Linkedin
            </a>
          </div>

          <div>
            <a
              className="flex align-middle text-violet-600 gap-2 mb-2"
              href="https://twitter.com/GaboIsleno"
              target="_blank"
            >
              <TwitterIcon width={20} height={20}></TwitterIcon>@GaboIsleno
            </a>
          </div>
        </div>

        <div className="my-5 text-gray-500">
          <p>{data.GRADE.TITLE}</p>
        </div>

        <div className="my-5">
          <h2 className="text-3xl font-bold">{data.KNOWLEDGE.TITLE}</h2>
          <div className="text-gray-500">
            {data.KNOWLEDGE.ITEMS.map((item: string, idx: number) => (
              <p key={idx}>{item}</p>
            ))}
          </div>

          <div className="my-5">
            {data.KNOWLEDGE.CHIPS.map((item: string, idx: number) => (
              <a
                className="border rounded-full border-violet-600 inline-block px-2 py-1 text-violet-600 m-1"
                key={idx}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-3xl font-bold mb-4"> {data.EXPERIENCE.TITLE}</h2>
          <div className="border-l pl-5 border-violet-600 relative">
            {data.EXPERIENCE.LIST.map((item: any, idx: number) => (
              <div className="mb-5 relative" key={idx}>
                <div className="absolute w-[10px] h-[10px] bg-violet-600 rounded-full -left-[26px] top-[10px]"></div>
                <h3 className="text-xl font-bold hover:underline">
                  <a href={item.LINK} target="_blank">
                    {item.TITLE}
                  </a>
                </h3>
                <small className="text-gray-500">{item.START}</small>
                <div className="text-gray-500">{item.DESCRIPTION}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-3xl font-bold">{data.LANGUAGES.TITLE}</h2>
          <div className="text-gray-500">
            <p>{data.LANGUAGES.DESCRIPTION}</p>
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-3xl font-bold">{data.HOBBIES.TITLE}</h2>
          <div className="text-gray-500">
            {data.HOBBIES.LIST.map((item: any, idx: number) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </div>

        <footer></footer>
      </div>
    )
  );
}
