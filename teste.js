const texto = `
Acesse https://mindiski.com para mais informações.
Veja também http://Blog.exemplo.org/artigo?tag=js.
Evite erros como htp://errado.com,
https:/bug.com ou apenas texto.com sem protocolo.`;
function extrairLinksValidos(texto) {
const possiveisLinks = texto.match(/\https?:\/\/[^\s]+/gi) || [];
const linksValidos = [];
for (const link of possiveisLinks) {
try {
const url = new URL(link);
if (url.protocol === "http:" || url.protocol === "https:") {
linksValidos.push(
{
href: url.href,
host: url.hostname,
caminho: url.pathname,
parametros: url.search,});
}
}
catch { } }
return linksValidos;
}
const links = extrairLinksValidos(texto);
console.log("Links válidos encontrados:");
console.table(links);