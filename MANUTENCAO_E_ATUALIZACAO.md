# Guia de Manutenção e Atualização — Nzila Digital

> **Para qualquer pessoa (colega, IA ou developer) que precisar de actualizar o site ou a página de vendas.**
> Segue este documento passo a passo. Não improvises.

---

## 🗂️ Estrutura do Projecto

```
nziladigital/                        ← Raiz do projecto (Site Institucional)
├── src/                             ← Código fonte do site Nzila Digital
├── public/                          ← Assets estáticos (favicon, imagens, .htaccess)
├── apps/
│   └── joy-of-reading-hub/          ← Página de Vendas do E-book (Kit de Leitura)
│       ├── src/
│       └── public/
├── MANUTENCAO_E_ATUALIZACAO.md      ← Este documento
├── site_principal.zip               ← Build final do site (gerado localmente)
└── apps/joy-of-reading-hub/
    └── pagina_vendas.zip            ← Build final da página de vendas (gerado localmente)
```

### Domínios e Rotas

| Projecto | URL em Produção | Pasta no Servidor |
|---|---|---|
| Site Nzila Digital | `nziladigital.com.ao` | `public_html/` |
| Página de Vendas (e-book) | `nziladigital.com.ao/kit-leitura` | `public_html/kit-leitura/` |
| Calculadora de Tráfego | `nziladigital.com.ao/orcamento-trafego` | *(rota interna do site principal)* |

---

## 1. Servidor de Desenvolvimento Local

Antes de fazer qualquer alteração, testa sempre primeiro no teu computador.

### Site Principal (Nzila Digital)
```bash
# Na raiz do projecto
npm run dev
# Acede em: http://localhost:8080
```

### Página de Vendas (Kit de Leitura)
```bash
# Na pasta da página de vendas
cd apps/joy-of-reading-hub
npm run dev
# Acede em: http://localhost:8081
```

> 💡 Podes correr os dois ao mesmo tempo em terminais separados.

---

## 2. Guardar Alterações no GitHub

Sempre que terminares uma alteração, guarda no GitHub. Isto serve de "ponto de restauração".

```bash
# Na raiz do projecto (guarda tudo — site + página de vendas)
git add .
git commit -m "Descreve aqui o que alteraste. Ex: Actualizei preço do e-book"
git push origin main
```

> ⚠️ O repositório é: `https://github.com/alvesslim/nziladigital.git`

---

## 3. Gerar os Builds para a Angoweb

O código de desenvolvimento **não vai directamente** para o servidor. Precisas de o compilar primeiro.

### 3.1 — Build do Site Principal

```bash
# Na raiz do projecto
npm run build
```
Isto gera a pasta `dist/` com o site optimizado.

### 3.2 — Build da Página de Vendas

```bash
# Na pasta da página de vendas
cd apps/joy-of-reading-hub
npm run build
```
Isto gera a pasta `apps/joy-of-reading-hub/dist/` com a página de vendas optimizada.

---

## 4. Criar os ZIPs para Upload

Após os dois builds estarem concluídos, cria os ficheiros ZIP.

### Opção A — Via PowerShell (recomendado)

```powershell
# ─── Executar na raiz do projecto ───────────────────────────────────────────

# 1. Copiar o build da página de vendas para dentro do dist/ do site principal
$root = "."
$joyDist = "apps\joy-of-reading-hub\dist"
$kitTarget = "dist\kit-leitura"

if (Test-Path $kitTarget) { Remove-Item $kitTarget -Recurse -Force }
Copy-Item -Path $joyDist -Destination $kitTarget -Recurse -Force

# 2. Gerar site_principal.zip (site + página de vendas embutida em kit-leitura/)
Compress-Archive -Path "dist\*" -DestinationPath "site_principal.zip" -Force

# 3. Gerar pagina_vendas.zip (só a página de vendas, para actualizações isoladas)
Compress-Archive -Path "apps\joy-of-reading-hub\dist\*" -DestinationPath "apps\joy-of-reading-hub\pagina_vendas.zip" -Force

Write-Host "✅ ZIPs prontos!"
Write-Host "📦 site_principal.zip: $([Math]::Round((Get-Item site_principal.zip).Length / 1MB, 2)) MB"
Write-Host "📦 pagina_vendas.zip:  $([Math]::Round((Get-Item apps\joy-of-reading-hub\pagina_vendas.zip).Length / 1MB, 2)) MB"
```

### Opção B — Cheats Rápidos (por situação)

| Situação | O que fazer |
|---|---|
| Actualizei **só o site principal** | Build `npm run build` na raiz → re-embalar só `site_principal.zip` |
| Actualizei **só a página de vendas** | Build na pasta `joy-of-reading-hub` → re-embalar `pagina_vendas.zip` |
| Actualizei **ambos** | Builds nos dois projectos → gerar ambos os ZIPs com o script acima |

---

## 5. Fazer o Deploy na Angoweb

### 5.1 — Actualizar o Site Completo (site + página de vendas)

1. Abre o **cPanel da Angoweb**
2. Vai ao **Gerenciador de Ficheiros → `public_html/`**
3. **(Opcional — Backup)** Selecciona todos os ficheiros, compacta e faz download antes de apagar
4. **Apaga** os ficheiros antigos:
   - Pasta `assets/`
   - Pasta `kit-leitura/`
   - Ficheiro `index.html`
   - *(Não apagues: `.well-known/`, ficheiros de sistema da Angoweb)*
5. Clica em **Carregar (Upload)** → envia o `site_principal.zip`
6. Clica com o botão direito no ZIP → **Extrair (Extract)**
7. Apaga o `.zip` após extracção

### 5.2 — Actualizar Só a Página de Vendas (mais rápido)

1. **cPanel → Gerenciador de Ficheiros → `public_html/kit-leitura/`**
2. Apaga o conteúdo antigo da pasta `kit-leitura/`
3. Carrega o `pagina_vendas.zip` **dentro** da pasta `kit-leitura/`
4. Extrai → apaga o `.zip`

---

## 6. Verificação Final

Após o deploy, confirma sempre:

- [ ] `nziladigital.com.ao` → Site principal carrega
- [ ] `nziladigital.com.ao/kit-leitura` → Página de vendas carrega
- [ ] `nziladigital.com.ao/orcamento-trafego` → Calculadora de tráfego carrega
- [ ] Imagens e fontes a carregar correctamente
- [ ] WhatsApp e links de redes sociais a funcionar

> 💡 Se o site não actualizar, limpa o cache do browser com `Ctrl + F5` (Windows) ou `Cmd + Shift + R` (Mac).

---

## 7. Referências Rápidas

| Item | Valor |
|---|---|
| Repositório GitHub | `https://github.com/alvesslim/nziladigital.git` |
| Domínio produção | `nziladigital.com.ao` |
| Servidor | Angoweb (cPanel) |
| Dev site principal | `http://localhost:8080` |
| Dev página de vendas | `http://localhost:8081` |
| Stack site principal | React 18 + Vite + TailwindCSS |
| Stack página de vendas | React 19 + Vite + TailwindCSS v4 |

---

*Documento mantido pela equipa Nzila Digital. Última actualização: Julho 2026.*
