# Rediseño de GrankAgency con 3 SubAgents en Paralelo

## PROMPT MAESTRO (Copia y Pega en Claude Code)

```
Rediseña GrankAgency usando SubAgents en paralelo.

Usá estos 3 agentes especializados:
1. redesign-hero-cta: Arregla Hero, Stats, Ready to Results
2. redesign-services-team: Arregla What We Do, Testimonials, Team
3. redesign-pricing: Arregla Pricing section

Instrucciones para cada SubAgent:

AGENTE 1 (Hero + Stats + CTA):
- Centra párrafo en Hero section
- Rediseña botones (más grandes, visible, bg-blue-600, hover:bg-blue-700)
- Agregar título "MARCAS QUE CONFIARON EN NOSOTROS" en Stats section (arriba de los números)
- Cambiar 3+ a 5+ en stats
- Convertir "Ready to Results?" en FORMULARIO real:
  * Inputs: Name, Email, Company, Phone
  * Textarea: Message (4 rows)
  * Botón "GET STARTED" grande (100% width, font-size 16px, padding 16px 48px)
  * Todo centrado
- npm run build debe pasar

AGENTE 2 (Services + Testimonials + Team):
- Centra párrafo en "What We Do" section (text-align: center)
- Botón "SEE FULL SERVICE DETAILS" rediseñado (más visible, mejor spacing, bg-blue-600)
- Cards de servicios: hacer imágenes CLICKEABLES (agregar onClick, expandir en modal)
- Testimonials: centrar comentarios en carousel
- Team section: 
  * Layout STACKED (no lado a lado)
  * Arriba: 2 fundadores lado a lado
  * Abajo: Grid de especialistas (3 columns)
  * Todos los títulos CENTERED
- Todos aumentar padding/spacing
- npm run build debe pasar

AGENTE 3 (Pricing):
- Grid de 3 columns en desktop: $2,500, $4,500, $6,500
- Cards GRANDES (padding: 40px, min-height: 500px)
- Precios grandes (32px+, text-white)
- Botones "GET A QUOTE": 
  * 100% width (dentro de la card)
  * Grandes (padding: 16px 24px, font-size: 16px)
  * Visibles (bg-blue-600, hover:bg-blue-700)
  * Margin-top: 20px
- "MOST SELECTED" badge: más visible (bg-blue-500 o similar)
- npm run build debe pasar

GENERAL PARA TODOS:
- Solo modificar clases Tailwind (no crear CSS nuevos)
- Todos los elementos centrados y balanceados
- npm run build debe pasar sin errores
- Después de terminar cada sección, hacer git commit

AFTER COMPLETION:
- Los 3 agentes trabajan EN PARALELO (simultáneamente, no secuencial)
- Cuando todos terminen, Claude Code mergea los cambios automáticamente
- Git push a main
- Vercel auto-deploya automáticamente
- Compartir link final: grankagency.vercel.app

¿Empezamos?
```

---

## Cómo Usar

1. **Copia TODO el texto del PROMPT MAESTRO** (entre las 3 tildes)
2. **Abre Claude Code en tu proyecto:**
   ```bash
   cd /ruta/a/grankagency
   claude-code
   ```
3. **Pega el prompt completo en Claude Code**
4. **Presiona Enter y espera ~45 minutos**
5. **Los 3 SubAgents trabajan en paralelo automáticamente**
6. **Al terminar, verás el link de Vercel**

---

## Qué Pasará

```
T0: Pegás el prompt
T0-T2min: Claude Code analiza el proyecto
T2min: Dispara los 3 SubAgents simultáneamente

[Todos trabajan al mismo tiempo]

T40-45min: Todos terminan
T45min: Merge automático de cambios
T50min: npm run build OK
T55min: Git push a main
T60min: Vercel deploy completo
T65min: ✅ GrankAgency rediseñada y live
```

---

## Tips

- **NO interrumpas** mientras los agentes trabajan
- **Podés tomar café** mientras se ejecuta (~45min)
- Si algo falla, Claude Code te dirá exactamente qué pasó
- Todos los cambios se trackean automáticamente en Git
- El deploy a Vercel es automático

---

## Después del Deploy

1. Abre https://grankagency.vercel.app
2. Verifica en 1920px (desktop)
3. Luego testea en 768px y 375px (mobile)
4. Si algo se ve mal, pedile a Claude Code que arregle esa sección específica

---

**¡Listo para empezar! Copia el prompt y pégalo en Claude Code.** 🚀
