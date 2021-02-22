---
id: analytics_web
title: Analytics Setup for the Web
---

Here you will find the basic tags and instruction for implementing data collection for user interactions on the web.

## Google Tag Manager (GTM)

The tags below should be included in every one of the companies website.  
Note that the GTM tag varies slightly between and production and staging environments, so make sure you are using the correct tag for each environment and changing the values of the parameters `gtm_auth` and `gtm_preview` according to the currect environment.

### Production Tags

Insert into the `<head>` tag, as high as possible:

```html
<script>
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src =
      "https://www.googletagmanager.com/gtm.js?id=" +
      i +
      dl +
      "&gtm_auth=qaDvsh49Fa-AHnYiFCe4TA&gtm_preview=env-2&gtm_cookies_win=x";
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-NVW8ZH2");
</script>
```

Insert into the `<body>` tag, as high as possible and always before any graphical component:

```html
<noscript
  ><iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-NVW8ZH2&gtm_auth=qaDvsh49Fa-AHnYiFCe4TA&gtm_preview=env-2&gtm_cookies_win=x"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe
></noscript>
```

### Stating Tags

Insert into the `<head>` tag, as high as possible:

```html
<script>
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src =
      "https://www.googletagmanager.com/gtm.js?id=" +
      i +
      dl +
      "&gtm_auth=h1kd1qLhRR9FbG-5nHYgxA&gtm_preview=env-178&gtm_cookies_win=x";
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-NVW8ZH2");
</script>
```

Insert into the `<body>` tag, as high as possible and always before any graphical component:

```html
<noscript
  ><iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-NVW8ZH2&gtm_auth=h1kd1qLhRR9FbG-5nHYgxA&gtm_preview=env-178&gtm_cookies_win=x"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe
></noscript>
```

## Google Optimize - Anti-flicker

This script will make sure that, when ab testing changing to a page, the page will not flicker the old version before the changes are made by the ab testing tool (Google Optimize).

Insert into the page's `<head>`:

```html
<style>
  .async-hide {
    opacity: 0 !important;
  }
</style>
<script>
  (function (a, s, y, n, c, h, i, d, e) {
    s.className += " " + y;
    h.start = 1 * new Date();
    h.end = i = function () {
      s.className = s.className.replace(RegExp(" ?" + y), "");
    };
    (a[n] = a[n] || []).hide = h;
    setTimeout(function () {
      i();
      h.end = null;
    }, c);
    h.timeout = c;
  })(window, document.documentElement, "async-hide", "dataLayer", 4000, {
    "GTM-NVW8ZH2": true,
  });
</script>
```

## Closing notes

Keep in mind that even though this document only lists a few lines of code that mainly implement Google Tag Manager into the site, GTM itself works as a door for the Data Trust squad to inject javascript that will implement several other tools, collect and forward user data to platforms and will be used for analytical purposes, advertising optimization, ab testing e so on.
