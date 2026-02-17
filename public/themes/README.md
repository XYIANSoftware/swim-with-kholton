# PrimeReact theme reference

This folder holds a **reference copy** of the official PrimeReact Arya Blue theme for local use and comparison. For project overview, structure, and versioning see the root **README.md** and **CHANGELOG.md**.

- **Source**: [primefaces/primereact — public/themes/arya-blue/theme.css](https://github.com/primefaces/primereact/blob/master/public/themes/arya-blue/theme.css)
- **Use**: Reference for CSS variable names, `@layer primereact` structure, and component class names when building or debugging app themes. The app uses its own themes in `src/styles/themes/` (color variables only); base layout/structure lives in `src/styles/base.scss`.

To refresh the reference file:

```bash
curl -sL "https://raw.githubusercontent.com/primefaces/primereact/master/public/themes/arya-blue/theme.css" -o public/themes/arya-blue/theme.css
```
