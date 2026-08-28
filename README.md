# Pineapple Inc. Website

The official Pineapple Inc. landing page for [pineappleinc.in](https://pineappleinc.in/).
Pineapple Inc. is building **Tech for Thinkers**, founded by Mohammad Azim Khan
and Mohammad Ajmal Khan.

The site currently displays an under-construction page and is built with plain
HTML, CSS, and JavaScript. It has no build step or package dependencies.

## Project Structure

```text
.
├── index.html       # Homepage and SEO metadata
├── css/style.css    # Page styles and responsive layout
├── js/main.js       # Terminal animation and starfield background
├── favicon.svg      # Browser favicon
├── CNAME            # GitHub Pages custom domain
├── robots.txt       # Crawler instructions
└── sitemap.xml      # Search engine sitemap
```

## Run Locally

Opening `index.html` directly works for a quick preview. For a local HTTP
server, run:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000> in a browser. Stop the server with `Ctrl+C`.

## Deploy With GitHub Pages

1. Push the repository to GitHub.
2. Open the repository's **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the production branch and the `/ (root)` folder, then save.
5. Under **Custom domain**, enter `pineappleinc.in` and save.
6. Enable **Enforce HTTPS** after the domain has been verified and the TLS
	certificate has been issued.

The `CNAME` file must remain in the published root directory.

## DNS Configuration

At the DNS provider for `pineappleinc.in`, point the apex domain to GitHub
Pages using these A records:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

If `www.pineappleinc.in` is also used, create a CNAME record for `www` that
points to the repository's GitHub Pages hostname. Remove conflicting A or
CNAME records for the same host.

DNS changes and HTTPS certificate provisioning can take some time to complete.

## SEO Setup

The homepage includes:

- A descriptive title and meta description
- Canonical and Open Graph URLs for `pineappleinc.in`
- Organization structured data for Pineapple Inc. and its founders
- `robots.txt` with a sitemap reference
- `sitemap.xml` for the homepage

After deployment:

1. Verify `https://pineappleinc.in/` in [Google Search Console](https://search.google.com/search-console).
2. Submit `https://pineappleinc.in/sitemap.xml`.
3. Request indexing for the homepage.
4. Confirm that `https://pineappleinc.in/robots.txt` and
	`https://pineappleinc.in/sitemap.xml` load successfully.

Search ranking is not guaranteed by metadata alone. Publishing useful pages
and earning reputable links will be important as Pineapple Inc. grows.

## Updating the Site

Edit the relevant HTML, CSS, or JavaScript files, preview the result locally,
then commit and push the changes to the branch configured for GitHub Pages.
When adding pages, update `sitemap.xml` and give each page its own descriptive
title, description, canonical URL, and structured data where appropriate.
