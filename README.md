# Barks and Blooms HTX (barksandbloomshtx.com)

Static website for Nadia Godarzi's home-based Houston, TX business: homemade dog treats, dried & preserved flowers, and fresh flowers. Plain HTML/CSS/JS, no build step.

## Run locally
```
python3 -m http.server 8000   # then open http://localhost:8000
```

## Before launch: things to replace
- **Order form:** in `contact.html`, replace `FORM_ID` in `https://formspree.io/f/FORM_ID` with a real Formspree form ID. Until then, the form opens an email (mailto) to `hello@barksandbloomshtx.com`.
- **Email:** `hello@barksandbloomshtx.com` is a placeholder. Create it in Google Workspace or change it in every page.
- **Delivery page:** fill in the `[TBD]` items: zip codes or radius, fee, lead time. Shipping for dried flowers is also **TBD**.
- **Fresh flower prices:** listed as "Pricing on request".

## SUGGESTED pricing (proposals only; Nadia should confirm)
Dog treats, same price for any flavor (oatmeal, banana, peanut butter made with **xylitol-free** PB):
| Size | Suggested price |
|---|---|
| Snack bag, about 4 oz (~12 pcs) | $8 |
| Regular bag, about 8 oz (~25 pcs) | $14 |
| Family jar, about 16 oz (~50 pcs) | $24 |
| Sampler, 3 × 4 oz | $22 |

Suggested shelf life: 5–7 days at room temperature (airtight), about 2 weeks refrigerated, up to about 2 months frozen. Check Texas cottage-food / pet-treat rules (Texas Dept. of State Health Services / Office of the Texas State Chemist registers commercial pet food) before selling.

Dried & preserved flowers (within $12.99–$22.99): Yunnan Petite Posy $12.99, Blush Bud Vase $15.99, Golden Meadow Bundle $17.99, Lavender Haze Jar $19.99, Everlasting Rose Box $22.99.

## Treat bag labels
`label-template.html`: printable US Letter sheet, 6 labels. Write weight, price, bake date and best-by date on each by hand.

## Hosting recommendation
- **Squarespace Core ($29/mo):** best fit for a florist-style visual brand with built-in commerce. The domain is already at Squarespace Domains.
- **Shopify Basic ($29/mo):** if order volume grows (inventory, delivery scheduling apps, local-delivery zones).
- **Meanwhile:** this static site is hosted free on **GitHub Pages**.

## DNS: point barksandbloomshtx.com at GitHub Pages (Squarespace Domains)
1. Sign in at https://account.squarespace.com/domains, choose **barksandbloomshtx.com**, then **DNS** > **DNS Settings**.
2. **Do NOT delete or change the Google Workspace MX records** (or the Google TXT/SPF/DKIM records). Leave the "Google Workspace" preset in place.
3. Delete any Squarespace default records that conflict (the `@` A records and the `www` CNAME pointing to Squarespace). Only remove those.
4. Add custom records:

| Host | Type | Data |
|---|---|---|
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| @ | AAAA | 2606:50c0:8000::153 |
| @ | AAAA | 2606:50c0:8001::153 |
| @ | AAAA | 2606:50c0:8002::153 |
| @ | AAAA | 2606:50c0:8003::153 |
| www | CNAME | `<user>.github.io` (here: `keykeyg.github.io`) |

5. In GitHub, open the repo, go to **Settings > Pages**, and set Custom domain to `barksandbloomshtx.com`. The `CNAME` file already contains it. Once DNS resolves (up to 24–48h), tick **Enforce HTTPS**.
6. Optional: verify the domain in GitHub account settings > Pages for takeover protection (adds a TXT record).
7. Check with `dig barksandbloomshtx.com +short` and `dig MX barksandbloomshtx.com +short` (MX should still show Google).

## Files
`index.html`, `shop.html`, `dog-treats.html`, `dried-flowers.html`, `fresh-flowers.html`, `services.html`, `about.html`, `delivery.html`, `contact.html`, `label-template.html`, `404.html`, `assets/` (style.css, main.js, favicon.svg), `CNAME`, `.nojekyll`.

All imagery is original inline SVG, so there are no copyrighted images.
