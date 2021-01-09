import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SEO_TITLE, BROWSER_CONSOLE_TEXT } from "utils/constants";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Personal Portfolio site for Ngozi Ekekwe. - Frontend Engineer living and working in Berlin" />
        <meta name="keywords" content="Nextjs, React, Developer, Berlin, Germany, Female, Frontend developer" />
        <meta name="author" content="Ngozi Ekekwe" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:site" content="@NgoziEkekwe" />
        <meta name="twitter:creator" content="@NgoziEkekwe"  key="twhandle"/>
        <meta name="twitter:url" content="https://ngozi.dev/" />
        <meta name="twitter:title" content="Ngozi Ekekwe - Frontend Engineer." />
        <meta name="twitter:image" content="https://ngozi.dev/profile.JPG" />
        <meta name="twitter:description" content="Ngozi Ekekwe - Frontend Engineer living in Berlin." />

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
        <title>{SEO_TITLE}</title>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}


export default MyDocument