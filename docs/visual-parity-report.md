# Bear Grid Visual Parity Report

Source: https://beargrid.wixsite.com/mysite  
Local: http://localhost:3000  
Date: 2026-07-13

## Viewports Checked

- Desktop: 1440x900
- Desktop: 1280x800
- Tablet: 1024x768
- Mobile: 390x844
- Mobile: 375x812

## Screenshot Evidence

Local screenshot captures from this pass:

- `/tmp/beargrid-parity/wix/home-1440.png`
- `/tmp/beargrid-parity/local/home-desktop-after1.png`
- `/tmp/beargrid-parity/local/home-390-after1.png`
- `/tmp/beargrid-parity/local/home-mobile-390-after2.png`
- `/tmp/beargrid-parity/local/bear-grid-device-desktop-1440-after2.png`
- `/tmp/beargrid-parity/local/jobs-mobile-390-after2.png`
- `/tmp/beargrid-parity/local/contacts-mobile-390-after2.png`

Full-page screenshots with sticky headers can show repeated headers due to browser stitching. Viewport checks and element metrics were used for fixed-header comparison.

## Fix Log

| Page | Section | Source behavior | Rebuilt behavior before | Fix applied | Verification |
| --- | --- | --- | --- | --- | --- |
| All | Header | Tall white header, large bear logo, 18px bold nav, beige active tab with triangle | Short generic header, small logo, small nav, no active tab | Rebuilt header height/width, logo sizing, nav typography, active tab and triangle | Passed local build; no overflow at 1440/1280/1024/390/375 |
| Home | Hero | 442px carousel, aerial image, left arrow, slide dots, black text plaques | Dark marketing-style hero with left text and supporting paragraph | Replaced with source-like hero image, plaque text, arrow, dots, no dark overlay | Verified desktop/mobile screenshots |
| Home | Body intro | Centered 29px heading, centered 24px paragraph, 695px diagram | Two-column generic section | Rebuilt home intro as centered Wix-like section | Verified screenshot and element metrics |
| Home | Extra band | No use-case/contact band on Wix home | Generic use-case/contact band added in first rebuild | Removed band | Verified home route has 0 forms |
| Home | Partners | Centered title, two-column logo rhythm with large gaps | Card-like/grid treatment | Rebuilt partner display with source logo sizes and spacing | Verified screenshot |
| All | Footer | Minimal white back-to-top/footer content | Dark generic sitemap footer | Replaced with white footer, Back to Top, logo/email/copyright | Verified screenshots |
| All | Media | Source images from Wix, locally hosted | Some source variants missing from inventory | Downloaded alternate hero carousel image; updated inventory | Verified files and dimensions |
| Forms | Contact/jobs | Validate, success state, usable on mobile | Functional from first rebuild | Retested after visual changes | Contact/jobs success states passed |

## Remaining Visual Mismatches

- Wix platform advertisement banner is intentionally excluded.
- Wix carousel is not a fully animated clone; the active slide is represented with matching hero treatment, arrow, dots, and local source media.
- Some non-home inner pages still use the cleaner rebuilt content layout instead of exact Wix absolute positioning. Shared header/footer and assets were brought closer to source, but inner-page section-by-section pixel perfection remains approximate.
- Wix mobile behavior in the in-app browser appeared to use a desktop-min-width canvas for the live source, while the rebuilt site keeps a usable responsive mobile layout. This is a deliberate usability choice within the request's no-overflow requirement.
- Full-page screenshots can show repeated sticky headers; this is a capture artifact, not a rendered duplicate in normal scrolling.

## QA Summary

Local automated route checks:

- All 12 public routes loaded at all required viewport sizes.
- No horizontal overflow detected at 1440, 1280, 1024, 390, or 375.
- All expected forms were present on contact/use-case/jobs pages.
- Mobile menu opened and exposed all navigation links.
- Contact form returned success state.
- Jobs form returned success state.

Commands:

- `npm install`
- `npm run lint`
- `npm run build`

Result:

- Lint passed.
- Build passed.
