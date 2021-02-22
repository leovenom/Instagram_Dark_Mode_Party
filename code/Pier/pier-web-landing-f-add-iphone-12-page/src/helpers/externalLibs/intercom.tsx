import config from "config";

export function Intercom() {
  return (
    <>
      <link rel="dns-prefetch" href="//widget.intercom.io" crossOrigin="" />
      <link rel="preconnect" href="//widget.intercom.io" crossOrigin="" />
      <link rel="dns-prefetch" href="//js.intercomcdn.com" crossOrigin="" />
      <link rel="preconnect" href="//js.intercomcdn.com" crossOrigin="" />
      <script
        async
        dangerouslySetInnerHTML={{
          __html: `
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + "${config.INTERCOM_APP_ID}";var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `,
        }}
      />
    </>
  );
}
