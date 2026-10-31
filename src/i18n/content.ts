// Textos de la web en español e inglés. Cada idioma tiene sus propias rutas
// (/ y /en/), así que el contenido se genera en el build y lo indexan los buscadores.

export type Lang = 'es' | 'en';

export const SITE = {
  url: 'https://jelopez.link',
  name: 'Juan Enrique López Monteagudo',
  email: 'juanenlopez1459@gmail.com',
  github: 'https://github.com/Juanen47',
  linkedin: 'https://www.linkedin.com/in/juanen-lopez-monteagudo/',
  blog: 'https://blog.jelopez.link',
};

// Rutas equivalentes en cada idioma, para el selector y las etiquetas hreflang.
export const routes = {
  home: { es: '/', en: '/en/' },
  site: { es: '/este-sitio/', en: '/en/this-site/' },
  privacy: { es: '/privacidad/', en: '/en/privacy/' },
  cv: { es: '/cv/', en: '/en/cv/' },
} as const;

// PDF del CV en cada idioma. Se generan desde la página /cv/ con `npm run cv:pdf`
// (ver scripts/cv-pdf.mjs), así que el PDF y la web siempre dicen lo mismo.
export const cvPdf = {
  es: '/cv/juan-enrique-lopez-cv.pdf',
  en: '/cv/juan-enrique-lopez-cv-en.pdf',
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
  es: {
    skip: 'Saltar al contenido',
    switchLabel: 'Read in English',
    switchText: 'EN',
    home: 'Inicio',
    nav: { about: 'Sobre mí', experience: 'Experiencia', projects: 'Proyectos', cv: 'CV', contact: 'Contacto' },
    footer: { privacy: 'Privacidad y cookies', site: 'Cómo está hecha' },
  },
  en: {
    skip: 'Skip to content',
    switchLabel: 'Leer en español',
    switchText: 'ES',
    home: 'Home',
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', cv: 'CV', contact: 'Contact' },
    footer: { privacy: 'Privacy & cookies', site: 'How it is built' },
  },
} as const;

export const home = {
  es: {
    title: 'Juan Enrique López Monteagudo · Administrador de Sistemas y Redes',
    description:
      'Administrador de sistemas y redes especializado en ciberseguridad, en Albacete. Firewalls SonicWall y Fortinet, redes MikroTik y Aruba, telefonía IP 3CX, vSphere, Proxmox, Azure y homelab self-hosted.',
    role: 'Administrador de <strong>sistemas y redes</strong> especializado en <strong>ciberseguridad</strong>. Mantengo infraestructuras seguras, vigiladas y bien documentadas, y en casa hago self-hosting de todo lo que puedo.',
    availability: 'Disponible para incorporación inmediata',
    cta: { contact: 'Contactar', blog: 'Leer el blog', cv: 'Descargar CV' },
    diagram: {
      title: 'Esquema del homelab',
      desc: 'Tres caminos que no se mezclan. Quien visita la web llega a Cloudflare, donde se sirven la web y el blog. Yo entro desde fuera por la VPN WireGuard, el único puerto abierto del router. El servidor Proxmox solo sale a Internet para enviar un latido a un servicio de vigilancia externa.',
      visitor: ['Visitante', 'lee la web y el blog'],
      cloudflare: ['Cloudflare', 'aloja la web y el blog'],
      me: ['Yo, fuera de casa', 'app de WireGuard'],
      watch: ['Vigilancia externa', 'avisa si el latido falta'],
      router: ['Router de casa', 'un solo puerto abierto: la VPN'],
      host: ['Proxmox VE', 'Intel NUC · contenedores LXC'],
      panel: 'Panel propio',
      vpn: 'VPN cifrada',
      beat: 'latido',
      caption: 'El homelab hoy: la web se sirve desde Cloudflare, yo entro por VPN y el servidor solo sale a Internet para avisar.',
      link: 'Ver los esquemas completos',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy administrador de sistemas y redes en Albacete, especializado en ciberseguridad, con el Grado Superior de ASIR y el curso de especialización en Ciberseguridad. Mi día a día ha sido la red y la seguridad perimetral, la telefonía IP con 3CX, la virtualización, las copias de seguridad y el soporte a usuarios, tanto en infraestructura propia como en Azure.',
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
            'Telefonía IP: despliegue, puesta en marcha e incidencias de la centralita 3CX, con terminales Grandstream y Yealink, teléfonos de conferencia y videoporteros.',
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
        { name: 'Bachillerato de Ciencias de la Salud', school: 'IES Amparo Sanz', period: '2016 – 2018' },
      ],
    },
    skills: {
      title: 'Competencias',
      items: [
        { title: 'Seguridad', text: 'Firewalls SonicWall y Fortinet, VPN con WireGuard, bastionado de sistemas, MFA (TOTP) y auditorías con Lynis.' },
        { title: 'Redes', text: 'Routers MikroTik, switches HP ProCurve y Aruba 6200M, gestión centralizada con HPE Aruba Central.' },
        { title: 'Virtualización y cloud', text: 'VMware vSphere, Proxmox VE con contenedores LXC y Microsoft Azure.' },
        { title: 'Telefonía IP', text: 'Centralita 3CX (VoIP/SIP), terminales Grandstream y Yealink, teléfonos de conferencia y videoporteros.' },
        { title: 'Copias de seguridad', text: 'Veeam Backup & Replication y Acronis: realización y validación de copias.' },
        { title: 'Sistemas', text: 'Windows Server y Linux, Active Directory en entorno híbrido, M365 y soporte a usuarios.' },
        { title: 'Scripting y monitorización', text: 'PowerShell, Bash y SQL. Uptime Kuma, Netdata y dashboards a medida.' },
      ],
    },
    homelab: {
      title: 'El homelab',
      text: 'Un Intel NUC con Proxmox VE donde pruebo lo que luego aplico en el trabajo. Cada servicio corre en su contenedor LXC y solo se alcanza desde casa o por WireGuard: el único puerto abierto en el router es el de la VPN. Copia diaria de todo a un SSD externo, alertas a Telegram y un latido hacia fuera por si el servidor deja de responder.',
      stack: ['Proxmox VE', 'LXC', 'WireGuard', 'AdGuard Home', 'NPMplus', 'Nextcloud', 'Jellyfin', 'Uptime Kuma', 'FastAPI', 'HTMX', 'Healthchecks.io', 'Lynis', 'Cloudflare'],
      link: { text: 'El homelab en dos esquemas, en el blog', href: 'https://blog.jelopez.link/blog/homelab-esquemas-red/' },
    },
    projects: {
      title: 'Proyectos',
      intro: 'Casos reales del homelab y de esta web: qué problema había, qué hice y qué resultado dio. Cada uno está contado paso a paso en el blog.',
      labels: { problem: 'Reto', solution: 'Solución', result: 'Resultado' },
      items: [
        {
          title: 'Panel propio para el homelab',
          problem: 'El panel que usaba solo tenía accesos directos: para ver copias, DNS o VPN había que abrir cada servicio.',
          solution: 'Un panel a medida en Python que lee las API de Proxmox y del resto de servicios y permite arrancar, parar, hacer snapshots y copias.',
          result: 'Todo en una pantalla, también en el móvil. Contraseña con scrypt y TOTP, CSRF, CSP estricta y un rol de Proxmox con los permisos mínimos.',
          tags: ['Python', 'FastAPI', 'HTMX', 'API de Proxmox', 'TOTP'],
          href: 'https://blog.jelopez.link/blog/panel-homelab-propio/',
          link: 'Cómo lo hice',
        },
        {
          title: 'Bastionado con Lynis',
          problem: 'Los sistemas expuestos tenían la configuración por defecto, sin una medida objetiva de lo seguros que eran.',
          solution: 'Auditoría con Lynis y medidas comunes en cada sistema: SSH solo con claves ed25519, parámetros del kernel con sysctl, protocolos de red innecesarios desactivados y fail2ban.',
          result: 'El índice de bastionado subió entre 7 y 11 puntos en todos los sistemas, el host de 62 a 72.',
          tags: ['Lynis', 'Linux', 'SSH', 'fail2ban', 'Proxmox VE'],
          href: 'https://blog.jelopez.link/blog/hardening-homelab-lynis/',
          link: 'Auditoría completa',
        },
        {
          title: 'Copias de seguridad y vigilancia',
          problem: 'Todo vivía en el único disco del servidor y nadie avisaba si algo se caía.',
          solution: 'Copia diaria de cada contenedor a un SSD externo con retención 7/4/3, monitores con alertas a Telegram y un latido hacia un servicio externo.',
          result: 'Me entero de una caída antes de notarla, y cada servicio se puede restaurar desde la copia de la noche anterior.',
          tags: ['vzdump', 'Uptime Kuma', 'Telegram', 'Healthchecks.io'],
          href: 'https://blog.jelopez.link/blog/uptime-kuma-telegram/',
          link: 'Alertas y monitores',
        },
        {
          title: 'Acceso remoto con un solo puerto abierto',
          problem: 'Publicar servicios con redirección de puertos dejaba la red de casa expuesta a Internet.',
          solution: 'VPN WireGuard como única entrada, DNS interno con AdGuard Home y proxy inverso con certificados de Let’s Encrypt por DNS challenge.',
          result: 'El router solo tiene abierto el puerto de la VPN. Los paneles internos no se ven desde fuera, pero funcionan con HTTPS válido.',
          tags: ['WireGuard', 'AdGuard Home', 'NPMplus', 'Let’s Encrypt'],
          href: 'https://blog.jelopez.link/blog/homelab-esquemas-red/',
          link: 'Ver los esquemas de red',
        },
        {
          title: 'Nube y multimedia propias',
          problem: 'El plan gratuito de iCloud se quedaba corto y no quería pagar por más espacio.',
          solution: 'Nextcloud con los datos en el SSD externo, 2FA y acceso solo por VPN, y Jellyfin con la gráfica del servidor leyendo la misma carpeta.',
          result: 'Archivos, fotos y películas en casa, sin cuotas mensuales y dentro de las copias diarias.',
          tags: ['Nextcloud', 'Jellyfin', 'Quick Sync', 'LXC'],
          href: 'https://blog.jelopez.link/blog/nextcloud-nube-personal/',
          link: 'Cómo la monté',
        },
        {
          title: 'Esta web, segura por diseño',
          problem: 'Quería un portafolio rápido que también sirviera como muestra de buenas prácticas de seguridad.',
          solution: 'Astro estático sin JavaScript, CSP default-src \'none\' con Trusted Types, y en el dominio DNSSEC, DMARC en reject, CAA y TLS 1.2 como mínimo.',
          result: 'Páginas de unos pocos KB, sin cookies ni terceros, desplegadas solas en cada cambio.',
          tags: ['Astro', 'Cloudflare Pages', 'CSP', 'DNSSEC'],
          href: '/este-sitio/',
          link: 'Cómo está hecha',
        },
      ],
    },
    seeking: {
      title: 'Qué busco',
      text: 'Un puesto donde seguir creciendo en sistemas, redes y seguridad.',
      items: [
        { label: 'Puestos', value: 'Administración de sistemas y redes, técnico de sistemas, ciberseguridad (SOC o blue team) o soporte avanzado.' },
        { label: 'Modalidad', value: 'En primer lugar en Albacete, presencial o híbrido. También en localidades cercanas y en remoto desde cualquier parte. Carnet B.' },
        { label: 'Incorporación', value: 'Inmediata.' },
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
      'Systems and network administrator specialised in cybersecurity, based in Albacete, Spain. SonicWall and Fortinet firewalls, MikroTik and Aruba networks, 3CX IP telephony, vSphere, Proxmox, Azure and a self-hosted homelab.',
    role: '<strong>Systems and network</strong> administrator specialised in <strong>cybersecurity</strong>. I keep infrastructure secure, monitored and well documented, and at home I self-host everything I can.',
    availability: 'Available to start immediately',
    cta: { contact: 'Get in touch', blog: 'Read the blog', cv: 'Download CV' },
    diagram: {
      title: 'Homelab diagram',
      desc: 'Three paths that never mix. Visitors reach Cloudflare, which serves the website and the blog. I connect from outside through the WireGuard VPN, the only port open on the router. The Proxmox server only reaches out to the Internet to send a heartbeat to an external monitoring service.',
      visitor: ['Visitor', 'reads the site and blog'],
      cloudflare: ['Cloudflare', 'hosts the site and blog'],
      me: ['Me, away from home', 'WireGuard app'],
      watch: ['External monitoring', 'alerts if pings stop'],
      router: ['Home router', 'one open port: the VPN'],
      host: ['Proxmox VE', 'Intel NUC · LXC containers'],
      panel: 'Custom panel',
      vpn: 'encrypted VPN',
      beat: 'heartbeat',
      caption: 'The homelab today: the site is served from Cloudflare, I get in over VPN, and the server only reaches out to raise alerts.',
      link: 'See the full diagrams (in Spanish)',
    },
    about: {
      title: 'About',
      paragraphs: [
        'I am a systems and network administrator based in Albacete, Spain, specialised in cybersecurity, with a Higher National Diploma in Networked Systems Administration (ASIR) and a specialisation course in Cybersecurity. My day-to-day work has covered networking and perimeter security, 3CX IP telephony, virtualisation, backups and user support, both on-premises and in Azure.',
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
            'IP telephony: deployment, commissioning and troubleshooting of the 3CX PBX, with Grandstream and Yealink handsets, conference phones and video door entry systems.',
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
        { name: 'Spanish Baccalaureate in Health Sciences', school: 'IES Amparo Sanz', period: '2016 – 2018' },
      ],
    },
    skills: {
      title: 'Skills',
      items: [
        { title: 'Security', text: 'SonicWall and Fortinet firewalls, WireGuard VPN, system hardening, MFA (TOTP) and Lynis audits.' },
        { title: 'Networking', text: 'MikroTik routers, HP ProCurve and Aruba 6200M switches, centralised management with HPE Aruba Central.' },
        { title: 'Virtualisation & cloud', text: 'VMware vSphere, Proxmox VE with LXC containers and Microsoft Azure.' },
        { title: 'IP telephony', text: '3CX PBX (VoIP/SIP), Grandstream and Yealink handsets, conference phones and video door entry systems.' },
        { title: 'Backups', text: 'Veeam Backup & Replication and Acronis: running and validating backups.' },
        { title: 'Systems', text: 'Windows Server and Linux, hybrid Active Directory, M365 and user support.' },
        { title: 'Scripting & monitoring', text: 'PowerShell, Bash and SQL. Uptime Kuma, Netdata and custom dashboards.' },
      ],
    },
    homelab: {
      title: 'The homelab',
      text: 'An Intel NUC running Proxmox VE where I try out what I later apply at work. Each service runs in its own LXC container and can only be reached from home or over WireGuard: the VPN is the only port open on the router. Daily backups of everything to an external SSD, Telegram alerts and an outbound heartbeat in case the server stops responding.',
      stack: ['Proxmox VE', 'LXC', 'WireGuard', 'AdGuard Home', 'NPMplus', 'Nextcloud', 'Jellyfin', 'Uptime Kuma', 'FastAPI', 'HTMX', 'Healthchecks.io', 'Lynis', 'Cloudflare'],
      link: { text: 'The homelab in two diagrams, on the blog (in Spanish)', href: 'https://blog.jelopez.link/blog/homelab-esquemas-red/' },
    },
    projects: {
      title: 'Projects',
      intro: 'Real cases from the homelab and this site: the problem, what I did and what came out of it. Each one is written up step by step on the blog (in Spanish).',
      labels: { problem: 'Challenge', solution: 'Solution', result: 'Result' },
      items: [
        {
          title: 'A custom homelab dashboard',
          problem: 'My old dashboard was just shortcuts: checking backups, DNS or the VPN meant opening each service.',
          solution: 'A custom Python dashboard that reads the Proxmox and service APIs and can start, stop, snapshot and back up containers.',
          result: 'Everything on one screen, on mobile too. scrypt passwords plus TOTP, CSRF checks, a strict CSP and a least-privilege Proxmox role.',
          tags: ['Python', 'FastAPI', 'HTMX', 'Proxmox API', 'TOTP'],
          href: 'https://blog.jelopez.link/blog/panel-homelab-propio/',
          link: 'How I built it',
        },
        {
          title: 'Hardening with Lynis',
          problem: 'The exposed systems ran default settings, with no objective measure of how secure they were.',
          solution: 'A Lynis audit and common measures on every system: key-only SSH with ed25519, sysctl kernel parameters, unused network protocols disabled and fail2ban.',
          result: 'The hardening index rose 7 to 11 points on every system, the host from 62 to 72.',
          tags: ['Lynis', 'Linux', 'SSH', 'fail2ban', 'Proxmox VE'],
          href: 'https://blog.jelopez.link/blog/hardening-homelab-lynis/',
          link: 'Full audit',
        },
        {
          title: 'Backups and monitoring',
          problem: 'Everything lived on the server’s only disk and nothing raised an alarm when something went down.',
          solution: 'Daily backups of every container to an external SSD with 7/4/3 retention, monitors with Telegram alerts and a heartbeat to an external service.',
          result: 'I hear about an outage before I notice it, and every service can be restored from last night’s backup.',
          tags: ['vzdump', 'Uptime Kuma', 'Telegram', 'Healthchecks.io'],
          href: 'https://blog.jelopez.link/blog/uptime-kuma-telegram/',
          link: 'Alerts and monitors',
        },
        {
          title: 'Remote access with a single open port',
          problem: 'Publishing services through port forwarding left the home network exposed to the Internet.',
          solution: 'A WireGuard VPN as the only way in, internal DNS with AdGuard Home and a reverse proxy with Let’s Encrypt certificates via DNS challenge.',
          result: 'The router only exposes the VPN port. Internal dashboards are invisible from outside yet use valid HTTPS.',
          tags: ['WireGuard', 'AdGuard Home', 'NPMplus', 'Let’s Encrypt'],
          href: 'https://blog.jelopez.link/blog/homelab-esquemas-red/',
          link: 'See the network diagrams',
        },
        {
          title: 'Self-hosted cloud and media',
          problem: 'The free iCloud plan was too small and I did not want to pay for more storage.',
          solution: 'Nextcloud with data on the external SSD, 2FA and VPN-only access, plus Jellyfin using the server’s GPU and reading the same folder.',
          result: 'Files, photos and films at home, no monthly fees, and all of it inside the daily backups.',
          tags: ['Nextcloud', 'Jellyfin', 'Quick Sync', 'LXC'],
          href: 'https://blog.jelopez.link/blog/nextcloud-nube-personal/',
          link: 'How I set it up',
        },
        {
          title: 'This site, secure by design',
          problem: 'I wanted a fast portfolio that would also show good security practice.',
          solution: 'Static Astro with no JavaScript, a default-src \'none\' CSP with Trusted Types, and DNSSEC, DMARC reject, CAA and TLS 1.2 minimum on the domain.',
          result: 'Pages of a few KB, no cookies or third parties, deployed automatically on every change.',
          tags: ['Astro', 'Cloudflare Pages', 'CSP', 'DNSSEC'],
          href: '/en/this-site/',
          link: 'How it is built',
        },
      ],
    },
    seeking: {
      title: 'What I am looking for',
      text: 'A role where I can keep growing in systems, networking and security.',
      items: [
        { label: 'Roles', value: 'Systems and network administration, systems technician, cybersecurity (SOC or blue team) or advanced support.' },
        { label: 'Work mode', value: 'Albacete first, on-site or hybrid. Also nearby towns, and fully remote from anywhere. Driving licence.' },
        { label: 'Start date', value: 'Immediately.' },
      ],
    },
    contact: {
      title: "Let's talk",
      text: 'If you need someone to run systems, networks or security, or want to discuss something from the blog, drop me a line.',
    },
  },
};

// Página del CV (/cv/ y /en/cv/). Experiencia, formación y competencias se
// reutilizan de `home`, así que solo hay que mantenerlas en un sitio.
export const cvPage = {
  es: {
    title: 'CV · Juan Enrique López Monteagudo',
    description: 'Currículum de Juan Enrique López Monteagudo, administrador de sistemas y redes especializado en ciberseguridad. Versión web y PDF.',
    role: 'Administrador de Sistemas y Redes · Ciberseguridad',
    sub: 'Versión web del currículum. También en PDF, o imprime esta página tal cual.',
    download: 'Descargar PDF',
    back: 'Volver a la portada',
    location: 'Albacete',
    licence: 'Carnet B',
    availability: 'Incorporación inmediata',
    profileTitle: 'Perfil',
    profile:
      'Administrador de sistemas y redes con especialización en ciberseguridad. Experiencia en protección perimetral (SonicWall y Fortinet), redes MikroTik y Aruba, virtualización con vSphere y Proxmox, copias de seguridad, VPN con WireGuard, entornos cloud en Azure y telefonía IP con 3CX, además de soporte diario a usuarios. Me enfoco en mantener infraestructuras seguras, monitorizadas y bien documentadas.',
    projectsTitle: 'Proyectos personales',
    languagesTitle: 'Idiomas',
    languages: 'Castellano nativo · Inglés B2 en lectura y escritura (sin certificar), expresión oral en mejora',
    portfolio: 'Portafolio y proyectos',
  },
  en: {
    title: 'CV · Juan Enrique López Monteagudo',
    description: 'CV of Juan Enrique López Monteagudo, systems and network administrator specialised in cybersecurity. Web and PDF versions.',
    role: 'Systems & Network Administrator · Cybersecurity',
    sub: 'Web version of my CV. Also available as a PDF, or print this page as it is.',
    download: 'Download PDF',
    back: 'Back to the homepage',
    location: 'Albacete, Spain',
    licence: 'Driving licence',
    availability: 'Available immediately',
    profileTitle: 'Profile',
    profile:
      'Systems and network administrator specialised in cybersecurity. Experience with perimeter security (SonicWall and Fortinet), MikroTik and Aruba networks, virtualisation with vSphere and Proxmox, backups, WireGuard VPNs, Azure cloud environments and 3CX IP telephony, plus day-to-day user support. I focus on keeping infrastructure secure, monitored and well documented.',
    projectsTitle: 'Personal projects',
    languagesTitle: 'Languages',
    languages: 'Spanish native · English B2 reading and writing (not certified), speaking improving',
    portfolio: 'Portfolio and projects',
  },
};
