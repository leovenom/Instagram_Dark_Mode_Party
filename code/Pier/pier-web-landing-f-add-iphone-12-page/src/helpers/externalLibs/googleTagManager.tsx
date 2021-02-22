import config from "config";

export const GtmScript = () => {
  return (
    <>
      <link
        rel="dns-prefetch"
        href="https://www.googletagmanager.com"
        crossOrigin=""
      />
      <link
        rel="preconnect"
        href="https://www.googletagmanager.com"
        crossOrigin=""
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=${config.GTM_AUTH}&gtm_preview=${config.GTM_PREVIEW}&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${config.GOOGLE_TAG_MANAGER_ID}');
            `,
        }}
      />
    </>
  );
};

export const GtmNoscript = () => (
  <>
    <noscript>
      <iframe
        title="gtm-iframe"
        src={`https://www.googletagmanager.com/ns.html?id=${config.GOOGLE_TAG_MANAGER_ID}&gtm_auth=${config.GTM_AUTH}&gtm_preview=${config.GTM_PREVIEW}&gtm_cookies_win=x`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
  </>
);
