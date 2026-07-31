# Bear Grid Wix page inventory

Source inspected directly in Chromium on 31 July 2026 at 1440×900, 1280×800,
1024×768, 390×844, and 375×812. Raw browser measurements are in
`docs/source-browser-audit.json`; source captures are in `docs/parity/source/`.

## Shared structure

- White header; 1080 px desktop inner width; 160 px desktop height.
- Bear logo and wordmark at left. Black Arial-style navigation with a thin
  grey baseline and warm-grey active tab/diamond.
- Desktop menus: Solutions → Bear Device, Bear Grid Platform, AI Interface;
  Use Cases → ASP Bear Grid, BG Smart Tower Security Solution; About Us →
  News, Jobs and Opportunities.
- Mobile uses a compact logo row and a single expandable navigation menu.
- White page background, black/charcoal copy, no red brand accents.
- Footer is a small black “Back to Top” button on white.

## Pages

| Page | Source URL | Title / header state | Media and section order |
|---|---|---|---|
| Home | https://beargrid.wixsite.com/mysite | `Smart Sensors \| Bear Grid Solutions`; Home active | 442 px moving sound-wave hero, black label typography; What is Bear Grid; 695×514 system diagram; CTA; Partners |
| What We Do | https://beargrid.wixsite.com/mysite/sectors | `WHAT WE DO \| BearGrid Solutions`; What We Do active | Intro copy; 3×3 flush photographic use-case grid; no hero |
| Solutions | https://beargrid.wixsite.com/mysite/solutions | `SOLUTIONS \| BearGrid Solutions`; Solutions active | Intro copy; 790×593 white technical diagram; three product panels |
| Bear Device | https://beargrid.wixsite.com/mysite/bear-grid-device | `Bear Device \| BearGrid Solutions`; Solutions active | Copy; 809×134 sound icons; bullet list; 827×601 classification diagram; 709×863 mobile illustration; 714×537 capabilities image; products |
| Bear Grid Platform | https://beargrid.wixsite.com/mysite/copy-of-bear-device | `Bear Grid Platform \| BearGrid Solutions`; Solutions active | Intro; 359×332 sensor diagram on white; feature bullets; products |
| AI Interface | https://beargrid.wixsite.com/mysite/copy-of-bear-grid-platform | `AI Interface \| BearGrid Solutions`; Solutions active | Research and Development copy; products |
| ASP Bear Grid | https://beargrid.wixsite.com/mysite/coming-soon-03 | `ASP Bear Grid \| BearGrid Solutions`; Use Cases active | Intro; 505×505 IoT security photo; feature copy; contact form |
| BG Smart Tower | https://beargrid.wixsite.com/mysite/copy-of-asp-bear-grid | `BG Smart Tower Security Solution \| BearGrid Solutions`; Use Cases active | Intro and benefits; specifications; contact form |
| About Us | https://beargrid.wixsite.com/mysite/about | `ABOUT US \| BearGrid Solutions`; About Us active | Who We Are; team copy; roles; Contact Us |
| News | https://beargrid.wixsite.com/mysite/news | `NEWS \| BearGrid Solutions`; About Us active | Chronological company updates |
| Jobs | https://beargrid.wixsite.com/mysite/jobs | `JOBS and OPPORTUNITIES \| BearGrid Solutions`; About Us active | Intro; current openings; application guidance; form |
| Get in Touch | https://beargrid.wixsite.com/mysite/contacts | `GET IN TOUCH \| BearGrid Solutions`; Get in Touch active | Contact heading and copy; email; contact form |

## Technical-image measurements

| Asset | Source dimensions | Local path | Wix rendered width | Rebuild width | Grey wrapper removed |
|---|---:|---|---:|---:|---|
| Solutions diagram | 790×593 | `/public/media/wix/solutions-exact.png` | 790 px | 790 px | Yes |
| Sound icon strip | 809×134 | `/public/media/wix/device-sound-icons.png` | 809 px | 809 px | Yes |
| Classification diagram | 827×601 | `/public/media/wix/device-classification.png` | 827 px | 827 px | Yes |
| Device mobile illustration | 709×863 | `/public/media/wix/device-mobile.png` | 709 px | 710 px | Yes |
| Device capabilities | 714×537 | `/public/media/wix/device-capabilities.png` | 714 px | 710 px | Yes |
| Platform sensor unit | 359×332 | `/public/media/wix/platform-sensor-exact.png` | 359 px | 359 px | Yes |

The home background uses the exact 1280×442 Wix crop, centered with restrained
fixed-background movement on desktop and a static, performance-safe crop on
mobile. Reduced-motion preferences disable fixed movement.
