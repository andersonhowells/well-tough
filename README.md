# Well Tough website

Static multi-page website for Well Tough, ready for GitHub Pages.

## Structure

```text
.
├── index.html              # Home
├── offer.html              # Diagnostic and retainer offer
├── method.html             # Five-dimension method
├── team.html               # About Well Tough
├── assessment.html         # Public AI self-assessment
├── contact.html            # Contact form
├── privacy.html            # Privacy notice
├── cookies.html            # Cookie policy
├── thanks.html             # Contact-form thank-you page
├── robots.txt              # Search crawler rules
├── sitemap.xml             # Public sitemap
├── admin/                  # Internal static admin tools
│   ├── index.html          # AIRI diagnostic questionnaire
│   ├── pricing.html        # AI tooling/pricing catalogue
│   ├── admin.css
│   ├── admin.js
│   └── pricing.js
└── assets/
    ├── css/styles.css
    ├── js/assessment.js
    └── images/hero-ai-adoption.png
```

## Local preview

Open `index.html` in a browser, or run a simple local server from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

The internal diagnostic area is available at:

```text
http://localhost:8080/admin/
```

The internal AI tooling/pricing catalogue is available at:

```text
http://localhost:8080/admin/pricing.html
```

Compatibility redirects are retained at `admin.html` and `admin-pricing.html`.

Temporary admin password:

```text
welltough-admin
```

This is only a static-site gate for early prototyping. It is not suitable for protecting confidential client data once published publicly.

## GitHub Pages setup

1. Create a new GitHub repository, for example `well-tough`.
2. Push this folder to the repository.
3. In GitHub, go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and `/ (root)`.
6. Save. GitHub will publish the site at a `github.io` URL.

When you buy a domain later, add it under the same Pages settings and create a `CNAME` file containing the domain name.

## Notes

- The contact form posts to FormSubmit for `info@welltough.co.uk`; first use may require mailbox confirmation.
- The public company email shown on the About and policy pages is `info@welltough.co.uk`.
- The site currently does not use analytics or marketing cookies, so there is no cookie banner.
- Canonical URLs and the sitemap currently use the GitHub Pages URL. Replace `https://andersonhowells.github.io/well-tough/` when a custom domain is connected.
- The hero image was generated for this site and is stored at `assets/images/hero-ai-adoption.png`.
