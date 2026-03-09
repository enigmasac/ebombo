# eBombo — Plataforma Web + CMS

Monorepo con sitio web publico, API REST y panel de administracion para eBombo. Gestionado con **Turbo** y **npm workspaces**.

## Stack

| Capa | Tecnologia |
|------|------------|
| Web publica | Next.js 14 (App Router), React 18, TailwindCSS 3 |
| API | Express 4, MySQL2, JWT, Nodemailer, Multer |
| Admin | Vite 6, React 18, React Router 7 |
| Monorepo | Turbo 2, npm workspaces |
| BD | MySQL (pool de conexiones) |
| Deploy | Docker (multi-stage), docker-compose |

## Estructura del monorepo

```
ebombo-next/
├── apps/
│   ├── web/          @ebombo/web      — Sitio publico (Next.js, puerto 3000)
│   ├── api/          @ebombo/api      — API REST (Express, puerto 4000)
│   ├── admin/        @ebombo/admin    — Panel de admin (Vite, puerto 5173 en dev)
│   └── uploads/                       — Almacenamiento de imagenes subidas
├── packages/
│   └── shared/       @ebombo/shared   — Tipos compartidos entre apps
├── scripts/                           — SQL de tablas y scripts de seeding
├── docker-compose.yml
├── Dockerfile
├── turbo.json
└── tsconfig.base.json
```

## Comandos

```bash
# Desarrollo
npm run dev              # Todas las apps en paralelo
npm run dev:web          # Solo web (Next.js :3000)
npm run dev:api          # Solo API (Express :4000)
npm run dev:admin        # Solo admin (Vite :5173)

# Build
npm run build            # Todas las apps
npm run build:web
npm run build:api
npm run build:admin

# Lint
npm run lint
```

## Variables de entorno

### API (`apps/api/`)

| Variable | Default | Descripcion |
|----------|---------|-------------|
| `PORT` | `4000` | Puerto del servidor Express |
| `DB_HOST` | `127.0.0.1` | Host de MySQL |
| `DB_PORT` | `3306` | Puerto de MySQL |
| `DB_USER` | `ebombo_app` | Usuario de la BD |
| `DB_PASSWORD` | — | Password de la BD |
| `DB_NAME` | `ebombo_enigmasac` | Nombre de la BD |
| `JWT_SECRET` | — | Secreto para firmar tokens JWT |

### Web (`apps/web/`)

| Variable | Descripcion |
|----------|-------------|
| `API_URL` | URL del API para SSR (ej. `http://localhost:4000`) |
| `NEXT_PUBLIC_API_URL` | URL del API para el cliente |
| `NEXT_PUBLIC_SITE_URL` | URL canonica del sitio (ej. `https://ebombo.com`) |

---

## Apps

### Web (`apps/web/`)

Sitio publico bilingue (ES/EN) con App Router de Next.js.

**Rutas principales:**
- `/[lang]` — Home (Hero, Soluciones, Testimonios, Logos de clientes)
- `/[lang]/blog` — Listado de posts
- `/[lang]/blog/[slug]` — Post individual
- `/[lang]/experiencias` — Catalogo de experiencias
- `/[lang]/experiencias/[slug]` — Detalle con formulario sidebar de leads
- `/[lang]/tipos-de-evento` — Tipos de evento
- `/[lang]/merchandising` — Merchandising
- `/[lang]/stand-ferias` — Stands y ferias
- `/[lang]/nosotros` — Nosotros
- `/[lang]/copa-del-mundo` — Copa del Mundo

**Caracteristicas:**
- Routing por idioma (`/` = ES, `/en` = EN) con diccionario i18n completo
- SSR + generacion estatica (`generateStaticParams`)
- SEO: metadata, canonical, Open Graph, hreflang
- Inyeccion de snippets personalizados (analytics, tracking) en 4 posiciones del HTML
- Fuentes: Poppins + Roboto
- Formularios de contacto que capturan leads via API

### API (`apps/api/`)

Backend REST en Express con MySQL. Autenticacion JWT con roles.

**Endpoints:**

| Grupo | Ruta | Metodos | Auth | Descripcion |
|-------|------|---------|------|-------------|
| Health | `/health` | GET | — | Health check |
| Auth | `/api/auth/login` | POST | — | Login → JWT |
| | `/api/auth/me` | GET | Si | Perfil actual |
| | `/api/auth/me/password` | PUT | Si | Cambiar password propio |
| | `/api/auth/users` | GET, POST | Admin | Listar/crear usuarios |
| | `/api/auth/users/:id` | PUT | Admin | Editar usuario |
| | `/api/auth/users/:id/password` | PUT | Admin | Reset password |
| Blog | `/api/blog/posts` | GET, POST | GET publico | CRUD posts |
| | `/api/blog/posts/:slug` | GET | — | Detalle por slug |
| | `/api/blog/posts/:id` | PUT, DELETE | Si | Editar/borrar |
| | `/api/blog/upload` | POST | Si | Subir imagen |
| Experiencias | `/api/experiences` | GET, POST | GET publico | CRUD experiencias |
| | `/api/experiences/badges` | GET | — | Badges disponibles |
| | `/api/experiences/:slug` | GET | — | Detalle |
| | `/api/experiences/:id` | PUT, DELETE | Si | Editar/borrar |
| | `/api/experiences/upload` | POST | Si | Subir imagen |
| Leads | `/api/leads` | POST | — | Capturar lead |
| | `/api/leads` | GET | Si | Listar (paginado, filtros) |
| | `/api/leads/export` | GET | Si | Exportar CSV |
| | `/api/leads` | DELETE | Admin | Borrar todos |
| | `/api/leads/:id` | DELETE | Admin | Borrar uno |
| Settings | `/api/settings` | GET | Admin | Configuracion |
| | `/api/settings/:key` | PUT | Admin | Actualizar setting |
| | `/api/settings/test-smtp` | POST | Admin | Probar SMTP |
| Snippets | `/api/snippets/active` | GET | — | Snippets activos |
| | `/api/snippets` | GET, POST | Admin | CRUD snippets |
| | `/api/snippets/:id` | PUT, DELETE | Admin | Editar/borrar |
| Audit | `/api/audit` | GET | Si | Log de auditoria |
| Admin | `/admin/*` | GET | — | Sirve SPA del admin |

**Autenticacion:**
- JWT con expiracion de 24h
- Header: `Authorization: Bearer <token>`
- Roles: `super_admin` (acceso total), `editor` (blog, experiencias, leads, audit)
- Passwords hasheados con bcrypt (10 rounds)

**Uploads:**
- Directorio: `apps/uploads/`
- Formatos: jpg, jpeg, png, gif, webp, svg
- Limite: 5MB

### Admin (`apps/admin/`)

SPA con Vite + React para gestion de contenido. En produccion se sirve desde `/admin/` via la API.

**Paginas:**
- Login (email/password)
- Blog — listado + editor con content blocks (h2-h4, p, ul, ol)
- Experiencias — listado + editor con meta pills, badges, duracion
- Leads — tabla con busqueda, filtros por fuente, export CSV, borrado masivo
- Usuarios — CRUD (solo super_admin)
- Settings — Configuracion SMTP y emails de notificacion (solo super_admin)
- Snippets — Inyeccion de codigo personalizado en 4 posiciones HTML (solo super_admin)
- Audit Log — Historial de acciones con filtros por entidad y usuario

**Roles y visibilidad:**
- `editor`: Blog, Experiencias, Leads, Audit
- `super_admin`: Todo lo anterior + Usuarios, Settings, Snippets

---

## Base de datos

MySQL con las siguientes tablas:

| Tabla | Descripcion |
|-------|-------------|
| `admin_users` | Usuarios del admin (email, password_hash, role, active) |
| `blog_posts` | Posts del blog (slug, title, body_content JSON, lang) |
| `experiences` | Experiencias/tours (slug, badge, meta_pills JSON, lang) |
| `leads` | Contactos capturados (name, phone, email, interest, source, lang) |
| `settings` | Configuracion (smtp_config, notification_emails como JSON) |
| `audit_log` | Registro de acciones (user, action, entity_type, details JSON) |
| `custom_snippets` | Codigo inyectable (code, position, active, sort_order) |

**Content blocks** (blog y experiencias): array JSON con objetos tipados `{ type: "h2"|"h3"|"h4"|"p"|"ul"|"ol", text|items }`.

---

## Scripts de setup

```bash
# Crear tablas
mysql -u root < scripts/create-admin-tables.sql
mysql -u root < scripts/create-experiences-table.sql

# Seed inicial (admin + settings)
node scripts/seed-admin.mjs

# Seed de contenido
node scripts/seed-blog-posts.mjs
node scripts/seed-experiences.mjs
node scripts/seed-experiences-en.mjs
```

## Docker

```bash
# Build y levantar web
docker-compose up --build

# Solo build
docker build -t ebombo-web .
```

El Dockerfile hace build multi-stage de la app web (Next.js standalone). El API se levanta por separado. En produccion el admin se sirve como archivos estaticos desde el API en `/admin/`.

## Requisitos

- Node.js >= 20
- npm >= 10
- MySQL 8+
