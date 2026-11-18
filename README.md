# Bia Fashion — vitrine digital

Aplicação frontend estática em React, Vite, TypeScript/JSX e React Router. O MVP apresenta uma vitrine demonstrativa de moda; não possui checkout, pagamento, estoque, backend ou reserva de produtos.

## Executar e gerar build

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Organização principal

- `src/App.tsx`: rotas, layout compartilhado, catálogo, páginas e carrinho.
- `src/config/siteConfig.ts`: identidade, categorias, Instagram e número comercial configurável.
- `src/data/collections.ts`: dados demonstrativos do catálogo.
- `src/context/CartContext.tsx`: seleção compartilhada e persistida no navegador.
- `src/App.css` e `src/globals.css`: identidade visual e comportamento responsivo.
- `index.html`: título, descrição e metadados Open Graph.

## Configurar conteúdo real

1. Confirme com a loja quais informações podem ser publicadas.
2. Altere `whatsappNumber` em `src/config/siteConfig.ts` para o número oficial, em formato internacional com DDI e DDD (somente os dígitos funcionam). Enquanto vazio ou inválido, os links de atendimento ficam indisponíveis e a interface informa que o número precisa ser configurado.
3. Substitua os registros de `src/data/collections.ts` por modelos autorizados. Preserve IDs únicos e mantenha `isDemo: true` somente enquanto o conteúdo for demonstrativo.
4. Troque as imagens demonstrativas por arquivos próprios autorizados. Atualize os caminhos/IDs de imagem na configuração e nos registros; use arquivos otimizados, de preferência WebP.
5. Confirme endereço, políticas, valores, tamanhos, cores e demais dados diretamente com a proprietária antes de publicá-los. Nenhuma dessas informações foi inventada para este MVP.

A seleção é guardada no `localStorage` na chave versionada `bia-fashion-interest-v1`. Itens de demonstração não constituem disponibilidade ou reserva. A mensagem enviada ao WhatsApp é somente uma consulta; abrir o aplicativo não confirma recebimento.

## Hospedagem estática

Execute `npm run build` e publique o conteúdo da pasta `dist` em uma hospedagem estática compatível. Para acesso direto e atualização de rotas React Router, configure o servidor para encaminhar rotas não encontradas para `/index.html`. Em Apache/Hostinger, isso costuma ser feito por uma regra de fallback em `.htaccess`; confirme as regras disponíveis no plano antes de publicar. Não existe URL de produção configurada.

O catálogo estático é apropriado para demonstração. A atualização de conteúdo requer alterar os dados e gerar um novo build. Não há painel administrativo nem API nesta versão.

## Limitações

- Imagens externas de demonstração são provisórias e dependem de conexão; devem ser trocadas por imagens autorizadas antes da publicação comercial.
- Não foram fornecidos número de WhatsApp, endereço, preços, disponibilidade, políticas ou informações institucionais confirmadas.
- Os metadados Open Graph são genéricos; URL canônica, sitemap e robots.txt devem ser definidos somente ao confirmar domínio e publicação.
- Ainda não há testes automatizados configurados.
