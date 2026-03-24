# GrankAgency - Contexto del Proyecto

## Stack Técnico
- **Framework**: Next.js 16.2.1 (Turbopack)
- **Runtime**: React 19, TypeScript
- **Estilos**: Tailwind CSS v4 (@import "tailwindcss")
- **Fuentes**: Montserrat + Inter (next/font/google)
- **Animaciones**: Framer Motion v12 + IntersectionObserver nativo
- **Formularios**: React Hook Form v7
- **Imágenes**: next/image con remotePatterns abierto
- **Deploy**: Vercel (vercel.json en repo)

## Convenciones del Proyecto

### Estructura de Carpetas
```
src/
├── app/              # Routes y layouts (App Router)
├── components/       # Componentes reutilizables
│   ├── sections/    # Secciones de página (Hero, Features, etc)
│   ├── ui/          # Componentes base (Button, Card, etc)
│   └── common/      # Header, Footer, Nav
├── styles/          # Archivos CSS globales
├── lib/             # Utilidades, constantes, helpers
├── types/           # Tipos TypeScript
└── public/          # Assets estáticos
```

### Convenciones de Código
- **Componentes**: PascalCase, uno por archivo
- **Archivos**: kebab-case (mi-componente.tsx, no MiComponente.tsx)
- **Variables/funciones**: camelCase
- **Constantes**: UPPER_SNAKE_CASE
- **Tipos**: PascalCase (UserType, BlogProps, etc)

### Tailwind CSS
- Usar clases de Tailwind directamente (CSS-first @import)
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)
- Responsive: mobile-first (sm:, md:, lg:, etc)
- **NO crear archivos CSS separados** para componentes simples - usar clases inline

### Framer Motion
- Usado en: header hamburger, testimonial carousel, scroll animations
- Patrón: `animate={{ }}` con `initial`, `whileInView`, `transition`
- IntersectionObserver para scroll-reveal en AnimatedSection y StatCounter

### React Hook Form
- Patrón: `useForm()` → `register()` → `handleSubmit()`
- Validación con `required`, `pattern`, `minLength`, etc
- Errores: mostrar en rojo bajo el input

## Problemas Actuales (Rediseño Completo Necesario)

### Estado
- 50% lista
- Problemas en TODAS las secciones (desktop, tablet, mobile)
- Problemas de diseño (no solo responsive)

### Secciones Pendientes
1. **Hero**: Párrafo no centrado, botones feos
2. **Stats**: Falta título, padding inconsistente
3. **What We Do**: Párrafo no centrado, botón invisible
4. **Testimonials**: Comentarios no centrados
5. **Team**: Layout mal, títulos no centrados
6. **Pricing**: Cards comprimidas, botones no se ven
7. **CTA Final**: Debe ser formulario real

## Comandos Importantes
```bash
npm run dev         # Dev local (localhost:3000)
npm run build       # Build para producción
npm run start       # Servir build local
npm run lint        # Linter (si existe)
npm run type-check  # TypeScript check (si existe)
```

## GitHub & Vercel
- **Repo**: GrankAgency
- **Rama principal**: main (auto-deploya a Vercel)
- **Vercel**: Configurado automáticamente con Next.js
- **Patrón**: push a main → Vercel deploya automáticamente

## Notas Importantes
- **NO modificar**: vercel.json, next.config.ts, tsconfig.json
- **NO tocar**: variables de entorno en .env.local
- **SIEMPRE verificar**: cambios en todas las resoluciones
- **SIEMPRE correr**: `npm run build` antes de pushear
- Los cambios se pushean a main → Vercel deploya automáticamente

## Metadata Importante
- **Página de inicio**: Agencia de marketing digital para luxury real estate en South Florida
- **Público objetivo**: Empresas medianas a grandes en real estate
- **Tono**: Profesional, datos concretos, especializado en luxury
- **Color primario**: Blue (#3B82F6)

---

**Última actualización**: Hoy
**Estado**: Rediseño completo (Hero, Stats, What We Do, Testimonials, Team, Pricing, CTA)
**Prioridad**: Desktop 1920px primero, luego responsive
