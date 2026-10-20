// Textos de la web en español e inglés. Cada idioma tiene sus propias rutas
// (/ y /en/), así que el contenido se genera en el build y lo indexan los buscadores.

export type Lang = 'es' | 'en';

export const SITE = {
  url: 'https://jelopez.link',
  name: 'Juan Enrique López Monteagudo',
  email: 'juanenlopez1459@gmail.com',
  github: 'https://github.com/Juanen47',
  linkedin: 'https://www.linkedin.com/in/juan-enrique-l%C3%B3pez-monteagudo-2063ab305/',
  blog: 'https://blog.jelopez.link',
};

// Rutas equivalentes en cada idioma, para el selector y las etiquetas hreflang.
export const routes = {
  home: { es: '/', en: '/en/' },
  site: { es: '/este-sitio/', en: '/en/this-site/' },
  privacy: { es: '/privacidad/', en: '/en/privacy/' },
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
  es: {
    skip: 'Saltar al contenido',
    switchLabel: 'Read in English',
    switchText: 'EN',
    home: 'Inicio',
    nav: { about: 'Sobre mí', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto' },
    footer: { privacy: 'Privacidad y cookies', site: 'Cómo está hecha' },
  },
  en: {
    skip: 'Skip to content',
    switchLabel: 'Leer en español',
    switchText: 'ES',
    home: 'Home',
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    footer: { privacy: 'Privacy & cookies', site: 'How it is built' },
  },
} as const;

export const home = {
  es: {
    title: 'Juan Enrique López Monteagudo · Administrador de Sistemas y Redes',
    description:
      'Administrador de sistemas y redes especializado en ciberseguridad, en Albacete. Firewalls SonicWall y Fortinet, redes MikroTik y Aruba, vSphere, Proxmox, Azure y homelab self-hosted.',
    tag: 'SYSADMIN · REDES · CIBERSEGURIDAD',
    role: 'Administrador de Sistemas y Redes especializado en ciberseguridad. Mantengo infraestructuras seguras, monitorizadas y bien documentadas, y en casa hago self-hosting de todo lo que puedo.',
    cta: { contact: 'Contactar', blog: 'Leer el blog' },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy administrador de sistemas y redes en Albacete, con el Grado Superior de ASIR y el curso de especialización en Ciberseguridad. En mi último puesto, en <strong>Proceso de la Información CLM</strong>, me he encargado de la red y la seguridad perimetral (SonicWall, Fortinet, MikroTik y switches Aruba gestionados desde HPE Aruba Central), la virtualización con vSphere y Proxmox, Azure, las copias con Veeam y Acronis, Active Directory híbrido y el soporte diario a usuarios.',
        'Me gusta que las cosas funcionen y que se pueda demostrar que funcionan: copias que se validan, alertas antes que incidencias y documentación que otro pueda seguir. Por eso fuera del trabajo mantengo un homelab sobre Proxmox, sin puertos abiertos, con MFA y monitorización propia, y cuento cada paso en el <a href="https://blog.jelopez.link">blog</a>.',
      ],
      facts: [
        { label: 'Ubicación', value: 'Albacete, España' },
        { label: 'Idiomas', value: 'Español nativo · Inglés B2 lectura y escritura' },
        { label: 'Enfoque', value: 'Seguridad, redes y virtualización' },
      ],
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          role: 'Administrador de Sistemas y Redes',
          company: 'Proceso de la Información CLM',
          period: 'jun 2025 – oct 2026',
          points: [
            'Red y seguridad perimetral: firewalls SonicWall y Fortinet, routers MikroTik, switches HP ProCurve y Aruba 6200M.',
            'Gestión centralizada de la red desde HPE Aruba Central y túneles VPN con WireGuard.',
            'Virtualización con VMware vSphere y Proxmox; administración de entornos en Azure.',
            'Copias de seguridad con Veeam Backup & Replication y Acronis, incluida su validación.',
            'Active Directory en entorno híbrido y soporte técnico diario a usuarios.',
            'Dashboards de monitorización a medida, desarrollados con ayuda de herramientas de IA como Claude Code.',
          ],
        },
        {
          role: 'Técnico Informático',
          company: 'Via Office',
          period: 'jul – sep 2024',
          points: [
            'Gestión de la base de datos Velneo a nivel de usuario.',
            'Instalación de paquetes ofimáticos y resolución de problemas técnicos.',
          ],
        },
        {
          role: 'Auxiliar Administrativo',
          company: 'Club de Tenis Albacete',
          period: '2018 – 2024 · verano',
          points: ['Tareas administrativas, bases de datos sencillas y atención al público.'],
        },
      ],
    },
    education: {
      title: 'Formación',
      items: [
        { name: 'Curso de especialización en Ciberseguridad', school: 'IES Leonardo Da Vinci', period: '2024 – 2025' },
        { name: 'Grado Superior en Administración de Sistemas Informáticos en Red (ASIR)', school: 'IES Leonardo Da Vinci', period: '2022 – 2024' },
      ],
    },
    skills: {
      title: 'Competencias',
      items: [
        { title: 'Seguridad', text: 'Firewalls SonicWall y Fortinet, VPN con WireGuard, bastionado de sistemas, MFA con Authelia y auditorías con Lynis.' },
        { title: 'Redes', text: 'Routers MikroTik, switches HP ProCurve y Aruba 6200M, gestión centralizada con HPE Aruba Central.' },
        { title: 'Virtualización y cloud', text: 'VMware vSphere, Proxmox VE con contenedores LXC y Microsoft Azure.' },
        { title: 'Copias de seguridad', text: 'Veeam Backup & Replication y Acronis: realización y validación de copias.' },
        { title: 'Sistemas', text: 'Windows Server y Linux, Active Directory en entorno híbrido, M365 y soporte a usuarios.' },
        { title: 'Scripting y monitorización', text: 'PowerShell, Bash y SQL. Uptime Kuma, Netdata y dashboards a medida.' },
      ],
    },
    homelab: {
      title: 'El homelab',
      text: 'Un Intel NUC con Proxmox VE donde pruebo lo que luego aplico en el trabajo. Todos los servicios corren en contenedores LXC y solo se publican a través de Cloudflare Tunnel, sin abrir puertos en el router.',
      stack: ['Proxmox VE', 'LXC', 'Cloudflare Tunnel', 'Authelia', 'WireGuard', 'NPMplus', 'AdGuard Home', 'Uptime Kuma', 'Netdata', 'Homarr', 'Lynis'],
    },
    projects: {
      title: 'Proyectos',
      items: [
        { title: 'Homelab Blog', tag: 'Blog · ES', href: 'https://blog.jelopez.link', text: 'Documentación técnica del homelab: Proxmox, networking, servicios self-hosted, monitorización y hardening.' },
        { title: 'Este sitio', tag: 'Astro · CF Pages', href: '/este-sitio/', text: 'Stack, despliegue y decisiones de diseño detrás de jelopez.link.' },
      ],
    },
    contact: {
      title: '¿Hablamos?',
      text: 'Si buscas a alguien para administrar sistemas, redes o seguridad, o quieres comentar algo del blog, escríbeme.',
    },
  },
  en: {
    title: 'Juan Enrique López Monteagudo · Systems & Network Administrator',
    description:
      'Systems and network administrator specialised in cybersecurity, based in Albacete, Spain. SonicWall and Fortinet firewalls, MikroTik and Aruba networks, vSphere, Proxmox, Azure and a self-hosted homelab.',
    tag: 'SYSADMIN · NETWORKING · CYBERSECURITY',
    role: 'Systems and network administrator specialised in cybersecurity. I keep infrastructure secure, monitored and well documented, and at home I self-host everything I can.',
    cta: { contact: 'Get in touch', blog: 'Read the blog' },
    about: {
      title: 'About',
      paragraphs: [
        'I am a systems and network administrator based in Albacete, Spain, with a Higher National Diploma in Networked Systems Administration (ASIR) and a specialisation course in Cybersecurity. In my latest role at <strong>Proceso de la Información CLM</strong> I looked after the network and perimeter security (SonicWall, Fortinet, MikroTik and Aruba switches managed from HPE Aruba Central), virtualisation with vSphere and Proxmox, Azure, backups with Veeam and Acronis, hybrid Active Directory and day-to-day user support.',
        'I like things to work and to be able to prove they work: backups that get validated, alerts before incidents and documentation someone else can follow. That is why outside work I run a homelab on Proxmox with no open ports, MFA and my own monitoring, and write up every step on the <a href="https://blog.jelopez.link">blog</a> (in Spanish).',
      ],
      facts: [
        { label: 'Location', value: 'Albacete, Spain' },
        { label: 'Languages', value: 'Spanish native · English B2 reading and writing' },
        { label: 'Focus', value: 'Security, networking and virtualisation' },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          role: 'Systems & Network Administrator',
          company: 'Proceso de la Información CLM',
          period: 'Jun 2025 – Oct 2026',
          points: [
            'Network and perimeter security: SonicWall and Fortinet firewalls, MikroTik routers, HP ProCurve and Aruba 6200M switches.',
            'Centralised network management with HPE Aruba Central and WireGuard VPN tunnels.',
            'Virtualisation with VMware vSphere and Proxmox; Azure administration.',
            'Backups with Veeam Backup & Replication and Acronis, including restore validation.',
            'Hybrid Active Directory and day-to-day user support.',
            'Custom monitoring dashboards, built with the help of AI tools such as Claude Code.',
          ],
        },
        {
          role: 'IT Technician',
          company: 'Via Office',
          period: 'Jul – Sep 2024',
          points: [
            'User-level management of the Velneo database.',
            'Office software installation and technical troubleshooting.',
          ],
        },
        {
          role: 'Administrative Assistant',
          company: 'Club de Tenis Albacete',
          period: '2018 – 2024 · summers',
          points: ['Administrative tasks, simple databases and customer service.'],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        { name: 'Specialisation course in Cybersecurity', school: 'IES Leonardo Da Vinci', period: '2024 – 2025' },
        { name: 'Higher National Diploma in Networked Systems Administration (ASIR)', school: 'IES Leonardo Da Vinci', period: '2022 – 2024' },
      ],
    },
    skills: {
      title: 'Skills',
      items: [
        { title: 'Security', text: 'SonicWall and Fortinet firewalls, WireGuard VPN, system hardening, MFA with Authelia and Lynis audits.' },
        { title: 'Networking', text: 'MikroTik routers, HP ProCurve and Aruba 6200M switches, centralised management with HPE Aruba Central.' },
        { title: 'Virtualisation & cloud', text: 'VMware vSphere, Proxmox VE with LXC containers and Microsoft Azure.' },
        { title: 'Backups', text: 'Veeam Backup & Replication and Acronis: running and validating backups.' },
        { title: 'Systems', text: 'Windows Server and Linux, hybrid Active Directory, M365 and user support.' },
        { title: 'Scripting & monitoring', text: 'PowerShell, Bash and SQL. Uptime Kuma, Netdata and custom dashboards.' },
      ],
    },
    homelab: {
      title: 'The homelab',
      text: 'An Intel NUC running Proxmox VE where I try out what I later apply at work. Every service runs in an LXC container and is only published through Cloudflare Tunnel, with no ports open on the router.',
      stack: ['Proxmox VE', 'LXC', 'Cloudflare Tunnel', 'Authelia', 'WireGuard', 'NPMplus', 'AdGuard Home', 'Uptime Kuma', 'Netdata', 'Homarr', 'Lynis'],
    },
    projects: {
      title: 'Projects',
      items: [
        { title: 'Homelab Blog', tag: 'Blog · ES', href: 'https://blog.jelopez.link', text: 'Technical homelab documentation: Proxmox, networking, self-hosted services, monitoring and hardening.' },
        { title: 'This site', tag: 'Astro · CF Pages', href: '/en/this-site/', text: 'Stack, deployment and design decisions behind jelopez.link.' },
      ],
    },
    contact: {
      title: "Let's talk",
      text: 'If you need someone to run systems, networks or security, or want to discuss something from the blog, drop me a line.',
    },
  },
};
