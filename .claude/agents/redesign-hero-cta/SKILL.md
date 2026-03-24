---
name: redesign-hero-cta
description: Rediseña Hero, Stats y Ready to Results. Centra párrafos, rediseña botones, mejora padding.
tools: Read, Edit, Write, Bash
---

## Objetivo
Rediseñar Hero Section, Stats Section y CTA Final de GrankAgency.

## Secciones a Arreglar

### 1. HERO SECTION
**Cambios:**
- Párrafo (p) → CENTERED (text-align: center)
- Aumentar padding top/bottom en contenedor (min 40px)
- Botones "BOOK FREE AUDIT" y "VIEW CASE STUDIES":
  * Aumentar tamaño (padding: 16px 32px mínimo)
  * Mejorar estilo (bg-blue-600, text-white, hover:bg-blue-700)
  * Centrar usando flexbox
  * Gap entre botones: 20px

### 2. STATS SECTION
**Cambios:**
- Agregar título arriba: "MARCAS QUE CONFIARON EN NOSOTROS" (h2, centered)
- Padding top al título: 60px
- Stats numerals: cambiar "3+" a "5+"
- Stats container: aumentar padding horizontal (40px)
- Gap entre stats items: ≥ 20px
- Bordes: más espaciados, border-radius 8px

### 3. READY TO RESULTS (CTA Final)
**Cambios:**
- Convertir en FORMULARIO REAL con:
  * Input: Name
  * Input: Email  
  * Input: Company
  * Input: Phone
  * Textarea: Message (4 rows)
- Botón "GET STARTED" o "SEND":
  * Padding: 16px 48px
  * Font-size: 16px
  * Width: 100% (llenar contenedor)
  * bg-blue-600, hover:bg-blue-700
  * Centrado en página

## Proceso

1. Buscar archivos de componentes:
   - Hero section → probablemente en `components/sections/hero.tsx`
   - Stats section → `components/sections/stats.tsx`
   - CTA/Ready to results → `components/sections/cta.tsx` o `ready-to-results.tsx`

2. Para cada sección:
   - Leer archivo completo
   - Identificar elemento específico a cambiar
   - Editar SOLO clases Tailwind (no crear CSS nuevos)
   - Corre `npm run build` → debe pasar
   - Verificar cambio localmente si es posible

3. Cambios de ejemplo:
   ```
   ANTES: <p className="text-gray-400">
   DESPUÉS: <p className="text-gray-400 text-center">
   
   ANTES: <button>Book Free Audit</button>
   DESPUÉS: <button className="px-8 py-4 bg-blue-600 text-white hover:bg-blue-700">
   ```

## Output
- Todos los archivos modificados
- `npm run build` debe pasar sin errores
- Git commit con mensaje: "redesign: hero, stats, and cta sections"
