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
        <meta name="description" content="Personal Portfolio site for Ngozi Ekekwe. - Frontend Engineer living and working in Berlin" />
        <meta name="keywords" content="Nextjs, React, Developer, Berlin, Germany, Female, Frontend developer" />
        <meta name="author" content="Ngozi Ekekwe" />

        <meta property="og:url" content="https://ngozi.dev" key="ogurl" />
        <meta property="og:image" content="https://ngozi.dev/profile.JPG" key="ogimage"
        />
        <meta property="og:type" content="website" key={"ogtype"} />
        <meta property="og:title" content="Ngozi Ekekwe - Frontend Engineer." key="ogtitle" />
        <meta property="og:description" content="Ngozi Ekekwe - Frontend Engineer living in Berlin." key="ogdesc" />
       
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Ngozi Ekekwe" key="ogsitename" />
        
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:alt" content="Profile picture of me, Ngozi Ekekwe" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:site" content="@NgoziEkekwe" />
        <meta name="twitter:creator" content="@NgoziEkekwe"  key="twhandle"/>
        <meta name="twitter:url" content="https://ngozi.dev/" />
        <meta name="twitter:title" content="Ngozi Ekekwe - Frontend Engineer." />
        <meta name="twitter:image" content="https://ngozi.dev/profile.JPG" />
        <meta name="twitter:description" content="Ngozi Ekekwe - Frontend Engineer living in Berlin." />

        <title>{SEO_TITLE}</title>
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
