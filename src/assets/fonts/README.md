# MaruMonica

- `x12y16pxMaruMonica.ttf`: original font supplied for this project.
- `../../../public/fonts/marumonica.woff2`: compressed font served by the website.
- Font registration: `src/styles/global.css`.
- Tailwind families `sans`, `pixel`, and `retro` all use MaruMonica.

To regenerate WOFF2 from the original (requires fontTools and Brotli), run from the project root:

```sh
python -c "from fontTools.ttLib import TTFont; f = TTFont('src/assets/fonts/x12y16pxMaruMonica.ttf'); f.flavor = 'woff2'; f.save('public/fonts/marumonica.woff2')"
```
