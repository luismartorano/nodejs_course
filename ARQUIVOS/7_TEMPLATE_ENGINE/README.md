Mudança no Handlebars

Fala galera, beleza?

Houve uma pequena alteração no Handlebars, que vai quebrar o código das aulas seguintes

Para reparar basta trocar esta linha de código:

app.engine('handlebars', exphbs())

Por esta:

app.engine('handlebars', exphbs.engine())

Basicamente, precisamos invocar este método engine, que antes era opcional para realizar algumas configurações extras, agora ele é obrigatório para o funcionamento do pacote

Abraços!



----INSTALL----

```bash
npm install nodemon express express-handlebars
```