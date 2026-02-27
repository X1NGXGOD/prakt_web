# Web-orientovana

Node.js сервер з використанням вбудованих модулів `http` та `fs`.

## Сторінки

- `/home` — головна сторінка
- `/contact` — сторінка контактів
- Неіснуючі адреси — повертають 404

## Запуск

```bash
node app.js
```

Або з автоматичним перезапуском при зміні файлів:

```bash
node --watch app.js
```

Або через npm:

```bash
npm start        # node app.js
npm run dev      # node --watch app.js
```

Сервер доступний за адресою: http://localhost:3000
