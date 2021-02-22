import config from "config";

const SNOWPLOW_SCRIPT_URL = `${config.PIER_CLOUDFRONT_URL}/scripts/snowplow.js`;

export function Snowplow() {
  return (
    <script
      async
      dangerouslySetInnerHTML={{
        __html: `
          setTimeout( function(){
            ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
              p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
              };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
              n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","${SNOWPLOW_SCRIPT_URL}","snowplow"));
              window.snowplow('newTracker', 'cf', 'snowplow.pier.digital', { // Initialise a tracker
                appId: 'pier-web-js',
              });
              // window.snowplow('trackPageView');
              // window.snowplow('enableActivityTracking', 1, 1)
          },500);
        `,
      }}
    />
  );
}
