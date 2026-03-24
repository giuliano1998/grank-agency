---
name: redesign-services-team
description: Rediseña What We Do, Testimonials y Team. Centra textos, hace imágenes clickeables.
tools: Read, Edit, Write, Bash
---

## Objetivo
Rediseñar "What We Do", Testimonials y Team sections de GrankAgency.

## Secciones a Arreglar

### 1. "WHAT WE DO" SECTION
**Cambios:**
- Párrafo intro → CENTERED (text-align: center)
- Aumentar padding top/bottom: 60px
- Botón "SEE FULL SERVICE DETAILS":
  * Aumentar tamaño (px-8 py-4)
  * Centrado en página
  * Mejor spacing (margin-top: 40px)
  * Visible (bg-blue-600, hover effect)
- Cards de servicios (6 items en grid 3x2):
  * Grid layout: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  * Padding interno: 24px mínimo
  * Bordes: border border-gray-700, rounded-lg
  * Images CLICKEABLES:
    - Agregar onClick handler
    - Expandir en modal/lightbox
    - Mostrar imagen grande + título + descripción
  * Hover effect: scale-105, shadow mejorada

### 2. "WHAT CLIENTS SAY" (TESTIMONIALS)
**Cambios:**
- Comentarios en carousel → CENTERED (text-align: center)
- Padding interno: aumentar (40px)
- Quote mark styling: mejorar visibilidad
- Mantener carousel funcionando (no romper)

### 3. "BUILT FROM THE INSIDE OUT" (TEAM SECTION)
**Cambios:**
- Título "BUILT FROM THE INSIDE OUT" → CENTERED
- Layout: STACKED (no lado a lado)
  * Arriba: 2 fundadores lado a lado (flex row)
  * Abajo: Grid de especialistas (3+ columns)
- Párrafo intro → CENTERED
- Fotos fundadores: 
  * Tamaño consistente
  * Padding: 20px
  * Bordes: rounded-lg
- Especialistas (sin nombres visibles, solo foto+rol):
  * Grid 3 columns (ajustar según contenido)
  * Cada card: foto + "Especialista en [Servicio]"
  * Hover effect: mostrar más info o tooltip

## Proceso

1. Buscar componentes:
   - What We Do → `components/sections/services.tsx` o `what-we-do.tsx`
   - Testimonials → `components/sections/testimonials.tsx`
   - Team → `components/sections/team.tsx` o `about.tsx`

2. Para cada componente:
   - Leer completo
   - Hacer cambios específicos
   - Para imágenes clickeables: agregar estado React (`useState`) si no existe
   - Agregar modal/lightbox para expandir imágenes

3. Imágenes clickeables (pseudo-código):
   ```
   const [expandedImage, setExpandedImage] = useState(null);
   
   <img 
     onClick={() => setExpandedImage(image)} 
     className="cursor-pointer hover:opacity-80"
   />
   
   {expandedImage && (
     <Modal onClick={() => setExpandedImage(null)}>
       <img src={expandedImage} />
     </Modal>
   )}
   ```

## Output
- Archivos modificados
- `npm run build` pasando
- Imágenes clickeables funcionando
- Git commit: "redesign: services, testimonials, team sections"
