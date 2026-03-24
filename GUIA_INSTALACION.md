# 📋 Guía de Instalación - GrankAgency Rediseño

## Archivos que Necesitas Descargar

Descarga estos 6 archivos:

1. ✅ **CLAUDE.md** → Va a la RAÍZ del proyecto
2. ✅ **settings.json** → Va en `.claude/` (carpeta oculta)
3. ✅ **redesign-hero-cta-SKILL.md** → Va en `.claude/agents/redesign-hero-cta/SKILL.md`
4. ✅ **redesign-services-team-SKILL.md** → Va en `.claude/agents/redesign-services-team/SKILL.md`
5. ✅ **redesign-pricing-SKILL.md** → Va en `.claude/agents/redesign-pricing/SKILL.md`
6. ✅ **PROMPT_SUBAGENTS.md** → Para referencia (guardá en tu proyecto)

---

## Paso 1: Crear Estructura de Carpetas

Abre Terminal en tu proyecto y corre estos comandos:

```bash
# Navega a tu proyecto
cd /ruta/a/grankagency

# Crea las carpetas necesarias
mkdir -p .claude/agents/redesign-hero-cta
mkdir -p .claude/agents/redesign-services-team
mkdir -p .claude/agents/redesign-pricing

# Verifica que se crearon
ls -la .claude/
```

---

## Paso 2: Copiar Archivos

### 2.1 Copiar CLAUDE.md a la RAÍZ

**macOS/Linux:**
```bash
cp ~/Downloads/CLAUDE.md ./CLAUDE.md
```

**Windows (PowerShell):**
```powershell
Copy-Item "$env:USERPROFILE\Downloads\CLAUDE.md" ".\CLAUDE.md"
```

### 2.2 Copiar settings.json a .claude/

**macOS/Linux:**
```bash
cp ~/Downloads/settings.json ./.claude/settings.json
```

**Windows (PowerShell):**
```powershell
Copy-Item "$env:USERPROFILE\Downloads\settings.json" ".\.claude\settings.json"
```

### 2.3 Copiar los 3 archivos SKILL.md

**macOS/Linux:**
```bash
cp ~/Downloads/redesign-hero-cta-SKILL.md ./.claude/agents/redesign-hero-cta/SKILL.md
cp ~/Downloads/redesign-services-team-SKILL.md ./.claude/agents/redesign-services-team/SKILL.md
cp ~/Downloads/redesign-pricing-SKILL.md ./.claude/agents/redesign-pricing/SKILL.md
```

**Windows (PowerShell):**
```powershell
Copy-Item "$env:USERPROFILE\Downloads\redesign-hero-cta-SKILL.md" ".\.claude\agents\redesign-hero-cta\SKILL.md"
Copy-Item "$env:USERPROFILE\Downloads\redesign-services-team-SKILL.md" ".\.claude\agents\redesign-services-team\SKILL.md"
Copy-Item "$env:USERPROFILE\Downloads\redesign-pricing-SKILL.md" ".\.claude\agents\redesign-pricing\SKILL.md"
```

---

## Paso 3: Verificar que Todo Está en su Lugar

Corre estos comandos para verificar:

```bash
# Verificar CLAUDE.md en raíz
ls CLAUDE.md

# Verificar settings.json
ls .claude/settings.json

# Verificar los 3 SubAgent SKILL.md
ls .claude/agents/redesign-hero-cta/SKILL.md
ls .claude/agents/redesign-services-team/SKILL.md
ls .claude/agents/redesign-pricing/SKILL.md
```

Si todos dan resultado (sin error) → ✅ Está todo bien.

**Estructura esperada:**
```
grankagency/
├── CLAUDE.md                              ← Aquí
├── .claude/
│   ├── settings.json                      ← Aquí
│   └── agents/
│       ├── redesign-hero-cta/
│       │   └── SKILL.md                   ← Aquí
│       ├── redesign-services-team/
│       │   └── SKILL.md                   ← Aquí
│       └── redesign-pricing/
│           └── SKILL.md                   ← Aquí
├── src/
├── package.json
└── ... (resto de archivos)
```

---

## Paso 4: Configurar GitHub Token (IMPORTANTE)

### 4.1 Crear Token en GitHub

1. Ve a: https://github.com/settings/tokens
2. Click en "Personal access tokens" → "Tokens (classic)"
3. Click en "Generate new token (classic)"
4. **Name:** `claude-code-grankagency`
5. **Expiration:** 90 days
6. **Permisos a activar:**
   - ✅ repo (acceso completo)
   - ✅ workflow (CI/CD)
7. Click "Generate token"
8. **COPIA el token COMPLETO** (aparece una sola vez)
   - Se ve así: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 4.2 Guardar Token en tu Computadora

**macOS/Linux:**
```bash
mkdir -p ~/.claude
echo '{"github_token": "ghp_XXXXXXXXXXXXXX"}' > ~/.claude/config.json
# Reemplaza XXXX con tu token real
```

**Windows (PowerShell):**
```powershell
$token = "ghp_XXXXXXXXXXXXXX"  # Reemplaza con tu token
New-Item -Path "$env:USERPROFILE\.claude" -ItemType Directory -Force | Out-Null
Set-Content -Path "$env:USERPROFILE\.claude\config.json" -Value "{`"github_token`": `"$token`"}"
```

**Verificar que se guardó:**
```bash
cat ~/.claude/config.json  # macOS/Linux
cat $env:USERPROFILE\.claude\config.json  # Windows PowerShell
```

---

## Paso 5: Abrir Claude Code

Abre Terminal en tu proyecto:

```bash
cd /ruta/a/grankagency
claude-code
```

Debería mostrar algo como:
```
Claude Code initialized
Waiting for input...
_
```

---

## Paso 6: Pegar el Prompt Maestro

1. **Abre el archivo PROMPT_SUBAGENTS.md** que descargaste
2. **Busca la sección "PROMPT MAESTRO"**
3. **Copia TODO el texto entre las 3 tildes (```)**
4. **Pégalo en Claude Code**
5. **Presiona Enter**

Debería empezar a ver:
```
🔄 Analyzing project structure...
🔄 SubAgent: redesign-hero-cta → Starting
🔄 SubAgent: redesign-services-team → Starting
🔄 SubAgent: redesign-pricing → Starting
```

---

## Paso 7: Esperar ~45 Minutos

Mientras esperas, los 3 SubAgents trabajan en paralelo:
- **SubAgent 1**: Arreglando Hero, Stats, CTA
- **SubAgent 2**: Arreglando Services, Testimonials, Team
- **SubAgent 3**: Arreglando Pricing

Deberías ver actualizaciones cada ~5min.

---

## Paso 8: Verificar Deploy

Cuando Claude Code termine, debería mostrar:

```
✅ All SubAgents completed
✅ Changes merged
✅ npm run build: PASSED
✅ Git push: SUCCESS
✅ Vercel deployment: IN PROGRESS

URL: https://grankagency.vercel.app
```

1. Abre el link en navegador
2. Verifica que se ve bien en 1920px
3. Luego testea en 768px y 375px

---

## ❌ Si Algo Falla

### Error: "CLAUDE.md not found"
→ Verificá que está en la RAÍZ (mismo nivel que package.json)
```bash
ls CLAUDE.md
```

### Error: "SubAgent not found"
→ Verificá que los SKILL.md están en la ruta correcta
```bash
ls .claude/agents/redesign-hero-cta/SKILL.md
```

### Error: "GitHub token invalid"
→ Regenerá el token en https://github.com/settings/tokens
→ Guardá de nuevo en ~/.claude/config.json

### Error: "npm run build failed"
→ Claude Code te dirá el error específico
→ Podés pedirle que intente de otra forma

---

## ✅ Checklist Final

Antes de pegara el prompt:

- [ ] Descargué los 6 archivos
- [ ] Creé las carpetas en .claude/agents/
- [ ] Copié CLAUDE.md a la raíz
- [ ] Copié settings.json a .claude/
- [ ] Copié los 3 SKILL.md a sus carpetas
- [ ] Verifiqué que todo está en su lugar
- [ ] Creé GitHub token
- [ ] Guardé token en ~/.claude/config.json
- [ ] Puedo abrir Claude Code sin errores (`claude-code`)

Si todo está ✅ → **¡Estás listo para pegar el prompt!**

---

## 🚀 Próximo Paso

1. Abre Claude Code: `claude-code`
2. Copia el PROMPT MAESTRO de PROMPT_SUBAGENTS.md
3. Pégalo en Claude Code
4. Presiona Enter
5. **Espera ~45 minutos** (los agentes trabajan en paralelo)
6. Cuando termine, abre el link de Vercel
7. ¡Listo! GrankAgency rediseñada ✅

---

**¿Dudas? Revisa la sección "Si Algo Falla" arriba.** 🎯
