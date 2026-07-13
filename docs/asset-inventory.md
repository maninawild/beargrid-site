# Bear Grid Asset Inventory

Source website: https://beargrid.wixsite.com/mysite  
Fresh inventory date: 2026-07-13

All production media is stored locally. The rebuilt site does not hotlink Wix media.

| Asset | Source URL | Local path | Source dimensions | Rendered use | Fit / position | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Bear Grid logo | `https://static.wixstatic.com/media/00f349_349fd2ba9c814b0daeb51bc35c692b03~mv2.png/v1/fill/w_270,h_236...` | `public/logos/bear-grid-logo.png` | 270x236 | Header 135x118 desktop, 54px mobile; footer 52px | Natural ratio | Downloaded |
| Home hero active slide | `https://static.wixstatic.com/media/nsplsh_696e754b7551694c4c354d~mv2_d_4800_2255_s_2.jpg/v1/fill/w_2560,h_884...` | `public/media/hero-sound-wave.jpg` | 2560x884 | Home hero, 442px high desktop | `object-fit: cover`, center | Downloaded |
| Home carousel alternate slide | `https://static.wixstatic.com/media/nsplsh_4d4b4c524d654b63744934~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_2560,h_884...` | `public/media/hero-alternate-field.jpg` | 2560x884 | Source carousel asset inventory | `object-fit: cover`, left in source | Downloaded |
| Bear Grid system diagram | `https://static.wixstatic.com/media/00f349_afd9e3c37c4f47b4b2f80a7b5897d1c8~mv2.png/v1/fill/w_1280,h_947...` | `public/media/bear-grid-system.png` | 1280x947 | Home intro image, max 695px desktop | Natural ratio | Downloaded |
| Solutions diagram | `https://static.wixstatic.com/media/00f349_8aef23eebadb4f90bf716ae4efbc0ebd~mv2.png/v1/fill/w_1279,h_960...` | `public/media/solutions-diagram.png` | 1279x960 | Solutions section | Contain | Downloaded |
| Bear Device wide interface | `https://static.wixstatic.com/media/00f349_1aa828a215e8455c82f383398d85b4a7~mv2.png/v1/crop/x_201,y_0,w_1268,h_210/fill/w_1521,h_252...` | `public/media/bear-device-interface-wide.png` | 1521x252 | Bear Device hero/section image | Natural ratio | Downloaded |
| Bear Device map/interface | `https://static.wixstatic.com/media/00f349_d4648d5a50c5416eae5477a537681138~mv2.png/v1/fill/w_1154,h_839...` | `public/media/bear-device-interface-map.png` | 1154x839 | Bear Device image-heavy section | Contain | Downloaded |
| Bear Device mobile screen | `https://static.wixstatic.com/media/00f349_5f1c372ccb8d4c22ba6f4d449c6325b0~mv2.png/v1/fill/w_1316,h_1602...` | `public/media/bear-device-mobile-screen.png` | 1316x1602 | Bear Device gallery | Contain | Downloaded |
| Bear Device dashboard | `https://static.wixstatic.com/media/00f349_1a2150a15fe745cd9277f1b9a972fa73~mv2.png/v1/fill/w_1326,h_997...` | `public/media/bear-device-dashboard.png` | 1326x997 | Bear Device gallery | Contain | Downloaded |
| Platform sensors | `https://static.wixstatic.com/media/00f349_6883236751b448209427010736f635b4~mv2.png/v1/fill/w_718,h_664...` | `public/media/platform-sensors.png` | 718x664 | Bear Grid Platform | Contain | Downloaded |
| Audio wave icon | `https://static.wixstatic.com/media/00f349_89a4e3d964b049ebba82df52eaa234d3~mv2.png/v1/fill/w_212,h_112...` | `public/icons/audio-wave.png` | 212x112 | Product card/icon | Natural ratio | Downloaded |
| ASP IoT security | `https://static.wixstatic.com/media/00f349_672d6207f9404565994766231d213d93~mv2.jpg/v1/fill/w_768,h_768...` | `public/media/asp-iot-security.jpg` | 768x768 | ASP Bear Grid hero | Cover | Downloaded |
| AccountNL logo | `https://static.wixstatic.com/media/00f349_2e3175435fcd45b2af65916edbd764a9~mv2.png/v1/fill/w_718,h_186...` | `public/logos/accountnl-logo.png` | 718x186 | Partners | Natural ratio, max 359px source scale | Downloaded |
| YES!DELFT logo | `https://static.wixstatic.com/media/00f349_68732282008148309aef7c6bea75a19c~mv2.png/v1/fill/w_450,h_104...` | `public/logos/yesdelft-logo.png` | 450x104 | Partners | Natural ratio, 225px source scale | Downloaded |
| KREW logo | `https://static.wixstatic.com/media/00f349_d9ba8020abf943a4bd2afb420994e7b1~mv2.png/v1/fill/w_398,h_162...` | `public/logos/krew-logo.png` | 398x162 | Partners | Natural ratio, 199px source scale | Downloaded |
| Additional partner logo | `https://static.wixstatic.com/media/00f349_a4ef9f14b38f4977a4ee8caee464c9b8~mv2.png/v1/fill/w_238,h_238...` | `public/logos/id-kzglfmw-logo.png` | 238x238 | Partners | Natural ratio, 119px source scale | Downloaded |
| LinkedIn icon | `https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_50,h_50...` | `public/icons/linkedin.png` | 50x50 | Inventory only; no reliable href found | Natural ratio | Downloaded |

## Missing Media

No required media failed to download.

## Notes

- Wix exposes duplicate responsive renditions for most images. The rebuild stores one high-quality local rendition per logical asset.
- The homepage carousel exposes an adjacent alternate slide image in the DOM; it is now stored locally even though the rebuilt hero currently presents the active `WHAT SOUND LOOKS LIKE` slide.
