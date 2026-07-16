# Well Tough website

Static one-page website for Well Tough, ready for GitHub Pages.

## Local preview

Open `index.html` in a browser, or run a simple local server from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages setup

1. Create a new GitHub repository, for example `well-tough`.
2. Push this folder to the repository.
3. In GitHub, go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and `/ (root)`.
6. Save. GitHub will publish the site at a `github.io` URL.

When you buy a domain later, add it under the same Pages settings and create a `CNAME` file containing the domain name.

## Notes

- The contact links currently use `hello@welltough.co.uk` as a placeholder.
- Replace that email before launch if you use a different address.
- The hero image was generated for this site and is stored at `assets/hero-ai-adoption.png`.
