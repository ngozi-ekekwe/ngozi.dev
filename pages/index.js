import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ngozi Ekekwe Frontend developer</title>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Nextjs, React, Developer, Berlin, Germany,"
        ></meta>
        <meta name="msapplication-TileColor" content="#4831D8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Ngozi Ekekwe - Frontend Engineer living in Berlin"
        />
        {/* favicons */}
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@NgoziEkekwe" />
        <meta name="twitter:creator" content="@NgoziEkekwe" />
        <meta name="twitter:url" content="https://ngozi.dev" />
        <meta
          name="twitter:title"
          content="Ngozi Ekekwe - Frontend Engineer."
        />
        <meta
          name="twitter:description"
          content="Ngozi Ekekwe - Frontend Engineer living in Berlin."
        />

        <meta property="og:title" content="Ngozi Ekekwe - Frontend Engineer." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ngozi Ekekwe" />
        <meta property="og:url" content="https://ngozi.dev" />
        <meta
          property="og:description"
          content="Ngozi Ekekwe - Frontend Engineer living in Berlin."
        />
        {/* facebook */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      
    </div>
  );
}
