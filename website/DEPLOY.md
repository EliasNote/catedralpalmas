# 🚀 Deploy no Vercel

## Configuração da Fonte Big Shoulders Display

A fonte `Big Shoulders Display` está configurada de duas formas para garantir compatibilidade:

1. **Via `<link>` no `layout.tsx`** - Para carregamento garantido em produção
2. **Via variável CSS no `globals.css`** - Para uso com Tailwind

### ✅ Como Funciona

```tsx
// layout.tsx - Carrega a fonte do Google Fonts
<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossOrigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</head>
```

```css
/* globals.css - Define a variável CSS */
@theme inline {
	--font-big-shoulders: "Big Shoulders Display", sans-serif;
}
```

```tsx
// Uso no componente
<div className="font-big-shoulders">Texto com Big Shoulders Display</div>
```

## 📝 Checklist para Deploy

Antes de fazer deploy no Vercel:

1. ✅ Rodar `npm run build` localmente para verificar erros
2. ✅ Limpar cache: `Remove-Item -Path ".next" -Recurse -Force`
3. ✅ Verificar se a fonte aparece no localhost
4. ✅ Commit e push das alterações
5. ✅ Deploy no Vercel (automático via GitHub)
6. ✅ **Limpar cache do Vercel** se necessário

## 🔄 Limpando Cache no Vercel

Se a fonte não aparecer após o deploy:

### Opção 1: Via Dashboard do Vercel

1. Acesse o projeto no Vercel
2. Vá em **Settings** > **General**
3. Role até **Build & Development Settings**
4. Clique em **Redeploy** com a opção **Clear Build Cache** marcada

### Opção 2: Via CLI do Vercel

```bash
vercel --force
```

### Opção 3: Forçar novo deploy

- Faça um commit vazio: `git commit --allow-empty -m "chore: force redeploy"`
- Push: `git push`

## 🎯 Resultado Esperado

Após o deploy bem-sucedido:

- ✅ Fonte `Big Shoulders Display` carrega em todos os navegadores
- ✅ Performance otimizada com `preconnect`
- ✅ Fallback para `sans-serif` caso a fonte falhe
- ✅ Funciona tanto em desenvolvimento quanto em produção

## 🐛 Troubleshooting

### A fonte não aparece na Vercel mas funciona localmente?

1. **Verifique o build local**:

   ```bash
   npm run build
   npm start
   ```

   Se funcionar localmente com `npm start`, o problema é cache do Vercel.

2. **Force um novo deploy**:

   - Limpe o cache do Vercel
   - Ou faça um commit vazio para triggerar novo deploy

3. **Verifique o Network do navegador**:

   - Abra DevTools (F12)
   - Vá na aba Network
   - Filtre por "font"
   - Verifique se `Big+Shoulders+Display` está sendo carregado

4. **CSP (Content Security Policy)**:
   - Certifique-se que não há CSP bloqueando fonts.googleapis.com
   - Vercel geralmente não tem esse problema

### A fonte pisca ou carrega lentamente?

Adicione `font-display: swap` no CSS (já está configurado no link do Google Fonts com `&display=swap`).

## 📚 Referências

- [Next.js Font Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
- [Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Display)
- [Vercel Cache](https://vercel.com/docs/deployments/configure-a-build#build-cache)
