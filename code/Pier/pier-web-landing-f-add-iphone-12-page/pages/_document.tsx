import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import config from "config";
import { GtmNoscript, GtmScript } from "helpers/externalLibs/googleTagManager";
import {
  GoogleStructuredDataSchema,
  SchemaDefinition,
} from "helpers/externalLibs/googleStructuredDataSchema";
import { Intercom } from "helpers/externalLibs/intercom";
import { MixpanelScript } from "helpers/externalLibs/mixpanel";
import { RollbarScript } from "helpers/externalLibs/rollbar";
import { Snowplow } from "helpers/externalLibs/snowplowScript";

const MEDIA_IMAGE_URL = `/static_assets/images/thumb.jpg`;
const FAVICON_32 = `/static_assets/images/favicon-32x32.png`;
const FAVICON_16 = `/static_assets/images/favicon-16x16.png`;
const APPLE_TOUCH_ICON = `/static_assets/images/apple-touch-icon.png`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="pt-br" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <base target="_top" />

          {/* Google / Search Engine Tags */}
          <meta itemProp="image" content={MEDIA_IMAGE_URL} />

          {/* Facebook Meta Tags */}
          <meta property="fb:app_id" content={config.FACEBOOK_APP_ID} />
          <meta property="og:url" content="https://pier.digital" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Conheça a Pier!" />
          <meta
            property="og:description"
            content="Pier. Mais que um seguro, proteja seu carro e seu celular"
          />
          <meta property="og:image" content={MEDIA_IMAGE_URL} />
          <meta
            property="og:image:alt"
            content="Logo da Pier no topo e smartphone com o aplicativo aberto"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Pier - Mais que um seguro, proteja seu carro e seu celular"
          />
          <meta
            name="twitter:description"
            content="Proteção compartilhada para carro e celular. Contrate em minutos. Reembolso em 3 dias. Sem franquia
        e sem surpresas!"
          />
          <meta name="twitter:image" content={MEDIA_IMAGE_URL} />
          <meta
            name="twitter:image:alt"
            content="Smartphone com o aplicativo da Pier aberto"
          />
          <meta name="twitter:creator" content="" />
          <meta name="twitter:site" content="" />

          {/* Mobile Meta Tags */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Pier" />
          <meta name="apple-mobile-web-app-title" content="Pier" />
          <meta name="theme-color" content="#FF80A1" />
          <meta name="msapplication-navbutton-color" content="#FF80A1" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="https://pier.digital/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
          />

          <link rel="icon" href={FAVICON_32} />
          <link rel="icon" href={FAVICON_16} />
          <link rel="apple-touch-icon" href={APPLE_TOUCH_ICON} />

          {/* GOOGLE TAG MANAGER */}
          <GtmScript />

          {/* Google structured data */}
          <SchemaDefinition />
          <GoogleStructuredDataSchema />

          {/* Custom Fonts */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Calistoga&family=Heebo:wght@400;700&display=swap"
            as="style"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Calistoga&family=Heebo:wght@400;700&display=swap"
            rel="stylesheet"
          />

          {/* INTERCOM */}
          <Intercom />

          {/* SNOWPLOW */}
          <Snowplow />

          {/* MIXPANEL */}
          <MixpanelScript />

          {/* ROLLBAR */}
          <RollbarScript />
        </Head>
        <body>
          <GtmNoscript />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
