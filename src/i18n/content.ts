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
    role: 'Administrador de <strong>sistemas y redes</strong> especializado en <strong>ciberseguridad</strong>. Mantengo infraestructuras seguras, vigiladas y bien documentadas, y en casa hago self-hosting de todo lo que puedo.',
    cta: { contact: 'Contactar', blog: 'Leer el blog' },
    diagram: {
      title: 'Esquema del homelab',
      desc: 'Tres caminos que no se mezclan. Quien visita la web llega a Cloudflare, donde se sirven la web y el blog. Yo entro desde fuera por la VPN WireGuard, el único puerto abierto del router. El servidor Proxmox solo sale a Internet para enviar un latido a un servicio de vigilancia externa.',
      visitor: ['Visitante', 'lee la web y el blog'],
      cloudflare: ['Cloudflare', 'aloja la web y el blog'],
      me: ['Yo, fuera de casa', 'app de WireGuard'],
      watch: ['Vigilancia externa', 'avisa si el latido falta'],
      router: ['Router de casa', 'un solo puerto abierto: la VPN'],
      host: ['Proxmox VE', 'Intel NUC · contenedores LXC'],
      vpn: 'VPN cifrada',
      beat: 'latido',
      caption: 'El homelab hoy: la web se sirve desde Cloudflare, yo entro por VPN y el servidor solo sale a Internet para avisar.',
      link: 'Ver los esquemas completos',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy administrador de sistemas y redes en Albacete, especializado en ciberseguridad, con el Grado Superior de ASIR y el curso de especialización en Ciberseguridad. Mi día a día ha sido la red y la seguridad perimetral, la virtualización, las copias de seguridad y el soporte a usuarios, tanto en infraestructura propia como en Azure.',
        'Me gusta que las cosas funcionen y que se pueda demostrar que funcionan: copias que se validan, alertas antes que incidencias y documentación que otro pueda seguir. Por eso fuera del trabajo mantengo un homelab sobre Proxmox, con un único puerto abierto (el de la VPN), copias diarias, 2FA y vigilancia propia, y cuento cada paso en el <a href="https://blog.jelopez.link">blog</a>.',
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
        { title: 'Seguridad', text: 'Firewalls SonicWall y Fortinet, VPN con WireGuard, bastionado de sistemas, MFA (TOTP) y auditorías con Lynis.' },
        { title: 'Redes', text: 'Routers MikroTik, switches HP ProCurve y Aruba 6200M, gestión centralizada con HPE Aruba Central.' },
        { title: 'Virtualización y cloud', text: 'VMware vSphere, Proxmox VE con contenedores LXC y Microsoft Azure.' },
        { title: 'Copias de seguridad', text: 'Veeam Backup & Replication y Acronis: realización y validación de copias.' },
        { title: 'Sistemas', text: 'Windows Server y Linux, Active Directory en entorno híbrido, M365 y soporte a usuarios.' },
        { title: 'Scripting y monitorización', text: 'PowerShell, Bash y SQL. Uptime Kuma, Netdata y dashboards a medida.' },
      ],
    },
    homelab: {
      title: 'El homelab',
      text: 'Un Intel NUC con Proxmox VE donde pruebo lo que luego aplico en el trabajo. Cada servicio corre en su contenedor LXC y solo se alcanza desde casa o por WireGuard: el único puerto abierto en el router es el de la VPN. Copia diaria de todo a un SSD externo, alertas a Telegram y un latido hacia fuera por si el servidor deja de responder.',
      stack: ['Proxmox VE', 'LXC', 'WireGuard', 'AdGuard Home', 'NPMplus', 'Nextcloud', 'Uptime Kuma', 'Homarr', 'Healthchecks.io', 'Lynis', 'Cloudflare'],
      link: { text: 'El homelab en dos esquemas, en el blog', href: 'https://blog.jelopez.link/blog/homelab-esquemas-red/' },
    },
    projects: {
      title: 'Proyectos',
      items: [
        { title: 'El blog del homelab', url: 'blog.jelopez.link', href: 'https://blog.jelopez.link', text: 'Guías con la configuración real: Proxmox, redes, VPN, DNS, copias de seguridad, monitorización y hardening.' },
        { title: 'Este sitio', url: 'jelopez.link/este-sitio', href: '/este-sitio/', text: 'Stack, despliegue y decisiones de diseño detrás de esta web: Astro, Cloudflare Pages y cero JavaScript.' },
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
    role: '<strong>Systems and network</strong> administrator specialised in <strong>cybersecurity</strong>. I keep infrastructure secure, monitored and well documented, and at home I self-host everything I can.',
    cta: { contact: 'Get in touch', blog: 'Read the blog' },
    diagram: {
      title: 'Homelab diagram',
      desc: 'Three paths that never mix. Visitors reach Cloudflare, which serves the website and the blog. I connect from outside through the WireGuard VPN, the only port open on the router. The Proxmox server only reaches out to the Internet to send a heartbeat to an external monitoring service.',
      visitor: ['Visitor', 'reads the site and blog'],
      cloudflare: ['Cloudflare', 'hosts the site and blog'],
      me: ['Me, away from home', 'WireGuard app'],
      watch: ['External monitoring', 'alerts if pings stop'],
      router: ['Home router', 'one open port: the VPN'],
      host: ['Proxmox VE', 'Intel NUC · LXC containers'],
      vpn: 'encrypted VPN',
      beat: 'heartbeat',
      caption: 'The homelab today: the site is served from Cloudflare, I get in over VPN, and the server only reaches out to raise alerts.',
      link: 'See the full diagrams (in Spanish)',
    },
    about: {
      title: 'About',
      paragraphs: [
        'I am a systems and network administrator based in Albacete, Spain, specialised in cybersecurity, with a Higher National Diploma in Networked Systems Administration (ASIR) and a specialisation course in Cybersecurity. My day-to-day work has covered networking and perimeter security, virtualisation, backups and user support, both on-premises and in Azure.',
        'I like things to work and to be able to prove they work: backups that get validated, alerts before incidents and documentation someone else can follow. That is why outside work I run a homelab on Proxmox with a single open port (the VPN), daily backups, 2FA and my own monitoring, and write up every step on the <a href="https://blog.jelopez.link">blog</a> (in Spanish).',
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
        { title: 'Security', text: 'SonicWall and Fortinet firewalls, WireGuard VPN, system hardening, MFA (TOTP) and Lynis audits.' },
        { title: 'Networking', text: 'MikroTik routers, HP ProCurve and Aruba 6200M switches, centralised management with HPE Aruba Central.' },
        { title: 'Virtualisation & cloud', text: 'VMware vSphere, Proxmox VE with LXC containers and Microsoft Azure.' },
        { title: 'Backups', text: 'Veeam Backup & Replication and Acronis: running and validating backups.' },
        { title: 'Systems', text: 'Windows Server and Linux, hybrid Active Directory, M365 and user support.' },
        { title: 'Scripting & monitoring', text: 'PowerShell, Bash and SQL. Uptime Kuma, Netdata and custom dashboards.' },
      ],
    },
    homelab: {
      title: 'The homelab',
      text: 'An Intel NUC running Proxmox VE where I try out what I later apply at work. Each service runs in its own LXC container and can only be reached from home or over WireGuard: the VPN is the only port open on the router. Daily backups of everything to an external SSD, Telegram alerts and an outbound heartbeat in case the server stops responding.',
      stack: ['Proxmox VE', 'LXC', 'WireGuard', 'AdGuard Home', 'NPMplus', 'Nextcloud', 'Uptime Kuma', 'Homarr', 'Healthchecks.io', 'Lynis', 'Cloudflare'],
      link: { text: 'The homelab in two diagrams, on the blog (in Spanish)', href: 'https://blog.jelopez.link/blog/homelab-esquemas-red/' },
    },
    projects: {
      title: 'Projects',
      items: [
        { title: 'The homelab blog', url: 'blog.jelopez.link', href: 'https://blog.jelopez.link', text: 'Guides with the real configuration: Proxmox, networking, VPN, DNS, backups, monitoring and hardening. In Spanish.' },
        { title: 'This site', url: 'jelopez.link/en/this-site', href: '/en/this-site/', text: 'Stack, deployment and design decisions behind this site: Astro, Cloudflare Pages and zero JavaScript.' },
      ],
    },
    contact: {
      title: "Let's talk",
      text: 'If you need someone to run systems, networks or security, or want to discuss something from the blog, drop me a line.',
    },
  },
};
