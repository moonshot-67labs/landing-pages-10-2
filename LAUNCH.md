# Public landing-page previews

The shared preview site is https://moonshot-landing-pages-oct2.vercel.app.

| Route | Supplied page |
| --- | --- |
| /a | General landing page |
| /b | Adults with ADHD |
| /c | Working dads |
| /d | Moms |
| /e | Contact |

The original designs and media come from coldoo/landing-pages-10-2 at
cc6bffb342653c1992b7e0d7be7d3b0cb2920f42. This deployment uses the separate
67-labs/moonshot-landing-pages-oct2 Vercel project. The existing
moonshot.computer homepage and contact page remain in place.

Contact links open /e. Continue to pre-order opens the existing storefront at
https://moonshot.computer/#reserve. Campaign and referral URL parameters pass
through. Buyers choose their final color and quantity on that storefront;
preview selections are demonstrations. Checkout and purchase tracking remain
owned by the existing storefront. No payment is collected on this preview site.
The unverified fixed inventory count was removed. Pages are marked noindex.

Deployment: `vercel deploy --prod --scope 67-labs` from this repository after
verifying its local project link identifies moonshot-landing-pages-oct2.
