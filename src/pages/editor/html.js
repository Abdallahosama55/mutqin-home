export default function plainHTML(title, description, content) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="${description}" />
    <link
      rel="apple-touch-icon"
      href="/logo192.png" />
    <link
      rel="manifest"
      href="/manifest.json" />

    <title>${title}</title>
  </head>
  <body>
	${content}
  </body>
</html>`;
}
