import config from "config";

export function GoogleAnalytics() {
  return (
    <script
      async
      dangerouslySetInnerHTML={{
        __html: `
      setTimeout( function(){
        ;(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', '${config.GOOGLE_ANALYTICS_ID}', 'auto', '${config.GOOGLE_ANALYTICS_TRACKER}');
      },500);
      `,
      }}
    />
  );
}
