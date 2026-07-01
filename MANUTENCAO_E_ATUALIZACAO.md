# Guia de Manutenção e Atualização - Nzila Digital

Este documento detalha o fluxo de trabalho profissional para realizar futuras atualizações e manutenções no site da Nzila Digital. Seguir este fluxo garante que você nunca perca suas alterações e que o site em produção seja atualizado de forma segura.

---

## 1. Fazer Alterações Locais (Ambiente de Desenvolvimento)

Antes de alterar o site que está no ar, você deve sempre testar no seu computador.

1. **Abrir o Projeto:** Abra a pasta do projeto (`nziladigital-main`) no seu editor de código (como o VS Code).
2. **Rodar o Servidor Local:** Abra o terminal integrado do editor e digite:
   ```bash
   npm run dev
   ```
3. **Desenvolver:** Acesse `http://localhost:8080` (ou a porta que o terminal indicar) no seu navegador. Faça as alterações nos arquivos (textos, componentes React, CSS). O site local será atualizado automaticamente assim que você salvar os arquivos.

---

## 2. Salvar o Código na Nuvem (Controle de Versão - GitHub)

Sempre que terminar uma nova funcionalidade ou alteração, é fundamental enviar o código para o GitHub. Isso serve como um "ponto de restauração" seguro.

1. **Adicionar as mudanças:** No terminal, pare o servidor (Ctrl + C) ou abra uma nova aba de terminal e digite:
   ```bash
   git add .
   ```
2. **Criar um pacote com uma mensagem (Commit):** Explique de forma simples o que foi alterado. Exemplo:
   ```bash
   git commit -m "Atualizei o número do WhatsApp e adicionei nova foto da equipa"
   ```
3. **Enviar para o GitHub (Push):**
   ```bash
   git push origin main
   ```
   *Pronto! Seu código fonte mais recente está guardado com segurança na internet.*

---

## 3. Preparar a Nova Versão para a Angoweb (Build)

O código que usamos para desenvolver não é o mesmo que vai para a Angoweb. Precisamos empacotar e otimizar o site.

1. **Gerar a pasta `dist`:** No terminal, execute:
   ```bash
   npm run build
   ```
   Isso criará uma pasta chamada `dist` com a versão final super leve e rápida do seu site.

2. **Compactar a pasta:** 
   Para facilitar o envio para a Angoweb, compacte o conteúdo que está **dentro** da pasta `dist` (não a pasta em si, mas os arquivos dentro dela).
   - *Via Terminal (PowerShell no Windows):*
     ```powershell
     Compress-Archive -Path dist\* -DestinationPath site_atualizado.zip -Force
     ```
   - *Ou Manualmente:* Vá até a pasta `dist`, selecione todos os arquivos lá dentro (incluindo o `.htaccess`), clique com o botão direito e escolha "Compactar para arquivo ZIP".

---

## 4. Atualizar o Site na Angoweb (Deploy)

Agora é hora de colocar a nova versão no ar para os clientes verem.

1. Acesse o painel **cPanel** da Angoweb.
2. Navegue até o **Gerenciador de Ficheiros** (File Manager) e abra a pasta **`public_html`**.
3. **Opcional (Backup Rápido):** Se quiser garantir a segurança, selecione todos os arquivos atuais, compacte-os e baixe um backup antes de apagar.
4. **Limpar a pasta:** Apague os arquivos antigos da versão anterior dentro da pasta `public_html` (apenas tenha cuidado para não apagar pastas especiais de sistema da Angoweb, geralmente arquivos com nome muito estranho ou pastas chamadas `.well-known` podem ficar). Mas apague as pastas `assets` e o arquivo `index.html` antigos.
5. **Fazer o Upload:** Clique no botão **Carregar** (Upload) e envie o ficheiro `site_atualizado.zip` que você gerou no Passo 3.
6. **Extrair:** Clique com o botão direito no `site_atualizado.zip` lá no cPanel e clique em **Extrair** (Extract).
7. **Limpeza:** Pode apagar o ficheiro `.zip` do cPanel para poupar espaço.

🎉 **Concluído!** Recarregue o site `nziladigital.com.ao` no seu navegador (talvez seja necessário limpar o cache apertando `Ctrl + F5`) e a nova versão estará no ar.
