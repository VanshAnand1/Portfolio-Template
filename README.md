# Portfolio Template — How to Use

Repo: https://github.com/VanshAnand1/Portfolio-Template

This guide shows you how to copy the template, run it locally, customize the content (nav, hero, projects, skills, contact, footer), and wire up the contact form via Google Sheets.

---

## 1) Create your copy

1. Open the repo and click **Use this template → Create a new repository**.
2. Name it something like `portfolio` or `your-name-portfolio`.

---

## 2) Run locally

```bash
# clone your new repo
git clone https://github.com/<you>/<your-portfolio>.git
cd <your-portfolio>/frontend

# install & start
npm install
npm run dev
open the site from the localhost link in the terminal (usually http://localhost:5173)

```

---

## 3) Customize content

> All paths are relative to `frontend/src/`, except for index.html.

### `components/NavigationBar.tsx`
- **Links:** Update each item’s `href` to your sections/pages.
- **Logo:** Replace image/text with your own mark or name.
- **Branding:** Tweak colors/background classes to match your palette.

### `components/LightRaysBackground.tsx`
- **Defaults:** Set your preferred ray origin, intensity, color.
- **Controls:** Remove the settings button if you don’t want client-side tweaks.

### `components/Home.tsx`
- **Content:** Change the header and paragraph text to match what you want.
- **Model:** You can go to https://spline.design/ and either choose a model, or create your own and use it in the about section. After you find a model you want to use, export it and get the integrated view link. Replace the current sceneLink variable with your model's link.

### `components/Projects.tsx` + `lightswind/carousel-3d.tsx`
- **Content:** Add your project objects (title, brand, timeline, description, tags, image, link).
- **Section copy:** Edit title, subtitle, tagline (or leave blank).
- **Behavior:** Adjust `autoRotate`, `rotateInterval`. Card layout/styles live in `components/carousel-3d.tsx`.
- **Images:** Create a Projects folder in assets with the images that you want to add in the background of your project cards, then import and use them as follows:
```
import image from "@/assets/projects/yourimage.filetype"
```
And then in the items list, 
```
imageUrl: image
```

### `components/Skills.tsx`
- **Title:** Update the heading.
- **Data:** Add skills, values, and categories.

### `components/Contact/*`
- **Links:** Add your socials at the top.
- **Buttons:** Use href=`mailto:your.email@gmail.com` to open the user’s email client.
- **Confetti:** Set default confetti options; remove the “psst..” button if you don’t want user controls.
- **Contact Script:** Follow the instructions in step 4 to link this. 

### `components/Footer.tsx`
- **Info:** Update links, location, interests, and the email used by the “conversation” button, make sure you use href=`mailto:your.email@gmail.com` to open the user’s email client.

### `index.html` (Vite root inside `frontend/`)
- **Tab title:** Change `<title>Your Name</title>`.
- **Favicon:** Replace the icon in `frontend/public/` and update `<link rel="icon" href="/favicon.png" />`.

---

## 4) Contact Form (Google Sheets + Apps Script)

**Create the sheet**

1. Create a new Google Sheet.
2. Set headers in row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Message`
3. Rename the sheet tab to **`Portfolio Contact Form`** (or another name you’ll remember).

**Add Apps Script**

1. **Extensions → Apps Script** in the sheet.
2. Paste this code (set `SHEET_NAME` to your tab name):

```js
// === CONFIG ===
const SHEET_ID = SpreadsheetApp.getActive().getId();
const SHEET_NAME = 'Portfolio Contact Form';

// Utility: JSON response
function json(data, status = 200) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sh = ss.getSheetByName(SHEET_NAME);

    // Works with application/x-www-form-urlencoded
    const { name = '', email = '', message = '' } = (e && e.parameter) || {};
    sh.appendRow([new Date(), name, email, message]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}
```

3. Then click New Deployment → Type: Web App:
    - Execute as: Me
    - Who has access: Anyone
    - Click Deploy
    - Copy the Web App URL
4. Go back to the code and create a .env file in /frontend
5. Add the following: ```VITE_SCRIPT_URL=paste-your-url-here```

---

## 5) Hosting
For hosting, I would recommend using:
Github Pages: if you want the url to be https://your-github-name.github.io/your-repo-name/
Vercel: if you just want the site public, and the url is not as important to you

There are plenty of tutorials online for hosting webpages, and there may be some changes you need to do in the code for it to work. 
Please keep in mind that you will need to upload the environment variable ```VITE_SCRIPT_URL=paste-your-url-here``` to the site hosting your page for the contact form to work. GitHub pages does not need you to do this. 

You can use the following tutorials:

https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

https://vercel.com/docs/getting-started-with-vercel/import

---

## 6) Troubleshooting

White page after deploy: Wrong base or publishing source instead of dist.

Images 404: Don’t use /public/... for images; import from src/assets instead.

Contact form no save: Double-check Apps Script deployment and SHEET_NAME matches your tab. 















    
