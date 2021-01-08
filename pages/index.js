import React, { useState } from "react";
import Head from "next/head";
import { SEO_TITLE, BROWSER_CONSOLE_TEXT } from "utils/constants";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Introduction from "components/Introduction";
import Projects from "components/Projects";
import Experiences from "components/Experience";
import Articles from "components/Articles";
import Journey from "components/Journey";
import Footer from "components/Footer";

export default function Home({ setCurrentTheme, currentTheme }) {
  const [isActive, setIsActive] = useState(false);

  const showConsoleSuprise = async () => {
    return console.log(
      `${await import("raw-loader!utils/troll.text").then((m) => m.default)}
        %c${BROWSER_CONSOLE_TEXT}`,
      "color: #fa6400; font-size: 15px"
    );
  };

  showConsoleSuprise();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Personal Portfolio site for Ngozi Ekekwe. - Frontend Engineer living and working in Berlin"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Ngozi Ekekwe",
  "url": "https://ngozi.dev/",
  "image": "https://ngozi.dev/ngozi-ekekwe.jpg",
  "sameAs": "https://twitter.com/NgoziEkekwe",
  "jobTitle": "Frontend Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Finleap Connect"
  }  
}`,
          }}
        ></script>
      </Head>
      <Header
        isActive={isActive}
        setIsActive={setIsActive}
        setCurrentTheme={setCurrentTheme}
        currentTheme={currentTheme}
      />
      <main>
        <Introduction />
        <Projects />
        <Experiences />
        <Journey />
        <Articles />
        <Sidebar isActive={isActive} />
      </main>
      <Footer />
    </>
  );
}
