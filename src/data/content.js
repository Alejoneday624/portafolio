// ============================================================
// TODO EL CONTENIDO DEL PORTAFOLIO VIVE EN ESTE ARCHIVO.
// Edita aquí textos, links y proyectos sin tocar los componentes.
// ============================================================

export const profile = {
  name: 'Jonathan Guzmán',
  fullName: 'Jonathan Alejandro Guzmán Camelo',
  role: 'Desarrollador Full Stack',
  tagline:
    'Tecnólogo en Construcción de Software y estudiante de últimos semestres de Ingeniería de Software (grado estimado: mayo 2027). Desarrollo aplicaciones web con JavaScript, React, Django y PostgreSQL, y trabajo con metodologías ágiles (SCRUM). Con gran capacidad de aprendizaje y trabajo en equipo, busco aportar en un equipo de desarrollo con soluciones claras y bien documentadas.',
  location: 'Bogotá, Colombia',
  email: 'jonathan.a.guzman.c@gmail.com',
  phone: '+57 313 337 4380',
  whatsapp: 'https://wa.me/573133374380',
  github: 'https://github.com/Alejoneday624',
  linkedin: 'https://www.linkedin.com/in/jonathan-alejandro-guzman-camelo-7244a7378',
  cvUrl: '', // deja vacío si aún no tienes CV en PDF
  photo: '/foto-perfil.jpg', // foto en /public
}

export const navLinks = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Contacto', href: '#contacto' },
]

// ------------------------------------------------------------
// PROYECTOS
// status: 'demo'  -> botón "Ver demo" (usa demoUrl)
// status: 'soon'  -> badge "Demo próximamente" (al migrar a Render)
// status: 'code'  -> solo botón "Ver código" (usa githubUrl)
// image:  ruta en /public, ej. "/screenshots/florsync.png"
//         (déjalo en "" y se muestra un placeholder con gradiente)
// ------------------------------------------------------------
export const projects = [
   {
    id: 'florsync',
    title: 'FlorSync',
    description:
      'Trabajo de grado: sistema web de gestión de ventas, inventario y clientes con backend en Django y PostgreSQL y frontend en React, con panel de administración y generación de reportes. El original incluye autenticación; la demo desplegada es una versión reducida sin autenticación.',
    tech: ['React', 'Django', 'PostgreSQL', 'SCRUM'],
    category: 'Desarrollo web',
    status: 'demo',
    demoUrl: 'https://florsync-demo.vercel.app',
    githubUrl: 'https://github.com/Alejoneday624/florsync_2_0', // ← repo pendiente
    extraLink: {
      label: 'Ver trabajo de grado',
      url: 'https://repositorio.uan.edu.co/items/33f080cb-9ece-479a-9f7b-636df384be8e',
    },
    image: '/screenshots/florsync.png',
    featured: false,
  },
  {
    id: 'reservas',
    title: 'Sistema de Reservas',
    description:
      'Aplicación para reservar un salón de forma sencilla: elige fecha, horario y reserva en pocos pasos. Frontend en React con backend en Django y PostgreSQL.',
    tech: ['React', 'Django', 'PostgreSQL', 'Supabase'],
    category: 'Desarrollo web',
    status: 'demo',
    demoUrl: 'https://reserva-de-salones.vercel.app',
    githubUrl: 'https://github.com/Alejoneday624/Reserva-de-salones',
    image: '/screenshots/reservas.png',
    featured: true,
  },
 
  {
    id: 'iot',
    title: 'Simulación de Sensores IoT',
    description:
      'Sensores simulados que envían datos simulados mediante una arquitectura publicar/suscribir (Pub/Sub), y los muestra en un gráfico en tiempo real desde un panel web.',
    tech: ['React', 'Java', 'Spring Boot', 'Pub/Sub'],
    category: 'Desarrollo web',
    status: 'soon', // hoy en AWS — al migrar a Render: status 'demo' + demoUrl
    demoUrl: '',
    githubUrl: 'https://github.com/Alejoneday624/SistemaMonitoreoIoT',
    image: '/screenshots/sensores.png',
    featured: false,
  },
  {
    id: 'ml-aire',
    title: 'Calidad del Aire Bogotá',
    description:
      'Consolidación y limpieza de datos públicos de calidad del aire de Bogotá (Chapinero): faltantes, outliers y normalización. Comparación de modelos LSTM, SVR y XGBoost, y modelo híbrido GCN + LSTM para predicción espacio-temporal entre estaciones, optimizado con SSA (Salp Swarm Algorithm).',
    tech: ['Python', 'LSTM', 'SVR', 'XGBoost', 'GCN + LSTM', 'SSA'],
    category: 'Machine learning',
    status: 'code',
    demoUrl: '',
    githubUrl: 'https://github.com/Alejoneday624',
    image: '/screenshots/chapinero.png',
    featured: false,
  },
  {
    id: 'umbra',
    title: 'Umbra',
    description:
      'Juego de acción en Godot (GDScript) con enemigos que te atacan, un jefe final y 2 niveles de progresión. (Edita esta descripción cuando quieras.)',
    tech: ['Godot', 'GDScript'],
    category: 'Videojuegos',
    status: 'demo',
    demoUrl: 'https://studio.youtube.com/video/vDU_pJGGWwo/edit',
    githubUrl: 'https://github.com/Alejoneday624/Umbra--luz-del-cosmos', // ← agrega el repo cuando lo tengas
    image: '/screenshots/umbra.png',
    featured: false,
  },
  {
    id: 'step-by-step',
    title: 'Step by Step',
    description:
      'App Android de recetas que muestra la preparación paso a paso: cada instrucción en orden para seguir la receta sin perderse ningún paso.',
    tech: ['Kotlin', 'Java', 'Android'],
    category: 'Móvil',
    status: 'code',
    demoUrl: '',
    githubUrl: 'https://github.com/Alejoneday624/Proyecto-Aplicaciones-M-viles',
    image: '/screenshots/stepbystep.png',
    imageFit: 'contain', // captura vertical: se muestra completa
    featured: false,
  },
  {
    id: 'jakfinance',
    title: 'JAKFinance',
    description:
      'App Android para controlar tus finanzas: defines un presupuesto mensual e ingresas lo que gastas para llevar el control de tus gastos del mes.',
    tech: ['Kotlin', 'Java', 'Android'],
    category: 'Móvil',
    status: 'code',
    demoUrl: '',
    githubUrl: 'https://github.com/Alejoneday624/OJAKJFINANCE',
    image: '/screenshots/jackfnance.png',
    imageFit: 'contain', // captura vertical: se muestra completa
    featured: false,
  },
]

// ------------------------------------------------------------
// STACK / HABILIDADES
// ------------------------------------------------------------
export const skillGroups = [
  {
    title: 'Lenguajes',
    skills: ['JavaScript', 'SQL', 'Python', 'Java', 'Kotlin', 'GDScript'],
  },
  {
    title: 'Frameworks y herramientas',
    skills: ['React', 'Django', 'Spring Boot', 'Android', 'Docker', 'Git y GitHub', 'JIRA'],
  },
  {
    title: 'Bases de datos',
    skills: ['PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    title: 'Machine Learning',
    skills: ['LSTM', 'SVR', 'XGBoost', 'GCN', 'Optimización con SSA'],
  },
  {
    title: 'Arquitecturas y calidad',
    skills: [
      'Arquitectura por capas',
      'MVC',
      'API REST',
      'Pruebas unitarias',
      'Pruebas de integración',
      'TDD',
    ],
  },
  {
    title: 'Metodologías',
    skills: ['SCRUM', 'Trabajo en equipo por sprints', 'Documentación'],
  },
  {
    title: 'Idiomas',
    skills: ['Español — Nativo', 'Inglés — Básico (A2)'],
  },
]

// ------------------------------------------------------------
// EXPERIENCIA (sección propia)
// highlights: lista de viñetas (opcional — si no existe, se usa description)
// ------------------------------------------------------------
export const experience = [
  {
    type: 'trabajo',
    period: 'Sep 2025 – Dic 2025',
    role: 'Analista de Datos y ML Junior',
    org: 'Prestación de servicios — Proyecto universitario, Universidad Antonio Nariño',
    highlights: [
      'Consolidé, limpié y preparé datos de calidad del aire de fuentes públicas de Bogotá (localidad de Chapinero): valores faltantes, outliers y normalización.',
      'Entrené y comparé modelos LSTM, SVR y XGBoost para el pronóstico de calidad del aire.',
      'Desarrollé un modelo híbrido GCN + LSTM para predicción espacio-temporal entre estaciones, optimizando hiperparámetros con SSA (Salp Swarm Algorithm).',
    ],
  },
  {
    type: 'trabajo',
    period: 'Ago 2024 – Jun 2025',
    role: 'Desarrollador Full Stack',
    org: 'FlorSync (Floristería Gran Britalia) — Trabajo de grado',
    highlights: [
      'Desarrollé un sistema web de gestión de ventas, inventario y clientes, con backend en Django y PostgreSQL y frontend en React.',
      'Implementé autenticación segura, panel de administración y generación de reportes para el seguimiento del negocio.',
      'Planifiqué y di seguimiento al proyecto con SCRUM, trabajando en equipo por sprints.',
    ],
  },
]

// ------------------------------------------------------------
// EDUCACIÓN (sección propia)
// ------------------------------------------------------------
export const education = [
  {
    period: 'En curso — grado est. mayo 2027',
    role: 'Ingeniería de Software',
    org: 'Universidad Antonio Nariño',
    description: 'Últimos semestres de la carrera.',
  },
  {
    period: '2022 – 2025',
    role: 'Tecnólogo en Construcción de Software',
    org: 'Universidad Antonio Nariño',
    description:
      'Formación en desarrollo de software, bases de datos y metodologías ágiles.',
  },
]

// ------------------------------------------------------------
// MENSAJE POR DEFECTO (ya no hay formulario — se usa si lo vuelves a agregar)
// ------------------------------------------------------------
export const contactMessage = {
  subject: 'Consulta desde tu portafolio',
  body: 'Hola, vi tu portafolio y me gustaría contactarte.',
}
