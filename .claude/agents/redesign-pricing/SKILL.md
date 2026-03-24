---
name: redesign-pricing
description: Rediseña Strategic Packages. Cards grandes, botones prominentes, layout profesional.
tools: Read, Edit, Write, Bash
---

## Objetivo
Rediseñar Strategic Packages (pricing section) de GrankAgency.

## Secciones a Arreglar

### STRATEGIC PACKAGES SECTION
**Cambios:**
- Título "STRATEGIC PACKAGES" → CENTERED
- Padding top: 60px
- Grid de cards: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
- Cada card:
  * Padding interno: 40px (generoso)
  * Bordes: border-2 border-gray-700 (o border-blue-500 para "MOST SELECTED")
  * Border-radius: 12px
  * Background: bg-black o bg-gray-900
  * Min-height: 500px+ (no comprimidas)
  
- Pricing display ($2,500, $4,500, $6,500):
  * Font size: 32px+ (grande)
  * "/mo" más pequeño
  * Color: text-white
  
- Features list:
  * Padding: 20px 0
  * Cada item: ✓ + texto
  * Color: text-gray-300
  * Line-height: 1.8
  
- Botón "GET A QUOTE":
  * Tamaño: 100% del ancho (menos margins)
  * Padding: 16px 24px (grande)
  * Font-size: 16px (legible)
  * bg-blue-600, text-white
  * Hover: bg-blue-700, shadow mejorada
  * Border-radius: 8px
  * Margin-top: 20px

- "MOST SELECTED" badge:
  * Más visible (bg-yellow-400 o bg-blue-600)
  * Posición: arriba a la derecha de la card
  * Font-weight: bold
  * Padding: 8px 16px

## Proceso

1. Buscar componente:
   - Pricing → `components/sections/pricing.tsx` o `strategic-packages.tsx`

2. Cambios principales:
   - Grid layout: hacer que ocupe 3 columnas en desktop
   - Cards: aumentar padding y altura
   - Botones: aumentar tamaño, hacer 100% width
   - Badge "MOST SELECTED": mejorar visibilidad

3. Validar:
   - Cards deben ser del mismo tamaño
   - Botones deben estar alineados al bottom
   - Spacing uniforme entre cards

## Tailwind Classes Sugeridas
```
Card container: bg-gray-900 border-2 border-gray-700 rounded-lg p-10
Card con MOST SELECTED: border-2 border-blue-500
Título plan: text-white text-2xl font-bold
Precio: text-4xl font-bold text-white
Feature item: text-gray-300 flex items-center gap-2 py-2
Botón: w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg
```

## Output
- Archivo modificado
- Cards grandes y profesionales
- Botones visibles
- `npm run build` pasando
- Git commit: "redesign: pricing section"
