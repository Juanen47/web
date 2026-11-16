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
  homelab: { es: '/homelab/', en: '/en/homelab/' },
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
    nav: { about: 'Sobre mí', experience: 'Experiencia', projects: 'Proyectos', homelab: 'Homelab', cv: 'CV', contact: 'Contacto' },
    footer: { privacy: 'Privacidad y cookies', site: 'Cómo está hecha' },
  },
  en: {
    skip: 'Skip to content',
    switchLabel: 'Leer en español',
    switchText: 'ES',
    home: 'Home',
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', homelab: 'Homelab', cv: 'CV', contact: 'Contact' },
    footer: { privacy: 'Privacy & cookies', site: 'How it is built' },
  },
} as const;

export const home = {
  es: {
    title: 'Juan Enrique López Monteagudo · Administrador de Sistemas y Redes',
    description:
      'Administrador de sistemas y redes especializado en ciberseguridad, en Albacete. Microsoft Defender, Entra ID y Azure, firewalls SonicWall y Fortinet, redes Aruba y MikroTik con VLAN, telefonía IP 3CX, vSphere, Proxmox y homelab self-hosted.',
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
        'Soy administrador de sistemas y redes en Albacete, especializado en ciberseguridad, con el Grado Superior de ASIR y el curso de especialización en Ciberseguridad. Mi día a día ha sido la seguridad de Microsoft 365 y Azure (alertas de Defender, Entra ID con acceso condicional), el análisis de logs y la respuesta a incidentes, la red y la seguridad perimetral, la telefonía IP con 3CX, la virtualización, las copias de seguridad y el soporte a usuarios.',
        'Me gusta que las cosas funcionen y que se pueda demostrar que funcionan: copias que se validan, alertas antes que incidencias y documentación que otro pueda seguir. Por eso fuera del trabajo mantengo un homelab sobre Proxmox, con un único puerto abierto (el de la VPN), copias diarias, 2FA y vigilancia propia, y cuento cada paso en el <a href="https://blog.jelopez.link">blog</a>.',
      ],
      facts: [
        { label: 'Ubicación', value: 'Albacete, España' },
        { label: 'Idiomas', value: 'Español nativo · Inglés con competencia básica profesional' },
        { label: 'Enfoque', value: 'Seguridad Microsoft, redes y sistemas' },
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
            'Seguridad Microsoft: seguimiento de alertas en el portal de Microsoft Defender y Defender Antivirus en los equipos Windows; Intune de forma puntual y Microsoft Purview a nivel básico.',
            'Microsoft Entra ID: políticas de acceso condicional y respuesta a incidentes por accesos no autorizados.',
            'Microsoft 365: gestión de usuarios y licencias desde el centro de administración y Exchange Online.',
            'Azure: despliegue y securización de máquinas virtuales con acceso restringido al personal autorizado, y VPN IPsec site-to-site entre Azure y un SonicWall NSA 3700.',
            'Cortafuegos SonicWall NSA 3700 y TZ 570, FortiGate de forma puntual y túneles VPN con WireGuard.',
            'Red corporativa segmentada en más de 10 VLAN, con switches HP ProCurve y Aruba 6200M gestionados desde HPE Aruba Central (cliente principal) y routers MikroTik en otros clientes.',
            'Active Directory en entorno híbrido y virtualización con VMware vSphere y Proxmox.',
            'Copias de seguridad con Veeam Backup & Replication y Acronis: realización y validación.',
            'Monitorización con Checkmk, inventario con OCS Inventory y dashboards a medida desarrollados con apoyo de IA (Claude Code).',
            'Telefonía IP: despliegue e incidencias de la centralita 3CX, con terminales Grandstream y Yealink, teléfonos de conferencia y videoporteros.',
            'Soporte técnico a usuarios: atención y resolución de incidencias del día a día.',
          ],
        },
        {
          role: 'Técnico Informático',
          company: 'Via Office',
          period: 'jul – sep 2024',
          points: [
            'Gestión de la base de datos del ERP Velneo a nivel de usuario.',
            'Instalación de software y resolución de incidencias.',
          ],
        },
        {
          role: 'Técnico Informático en prácticas (FCT de ASIR)',
          company: 'Exadi Business',
          period: 'abr – jun 2023',
          points: [
            'Desarrollo de módulos sencillos con Velneo (ERP y lenguaje de programación).',
            'Soporte técnico a usuarios.',
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
        { title: 'Seguridad Microsoft', text: 'Microsoft Defender (seguimiento de alertas) y Defender Antivirus, Entra ID con acceso condicional, Intune (puntual) y Purview (básico).' },
        { title: 'Análisis de logs y alertas', text: 'Eventos de Windows, registros de los cortafuegos SonicWall, inicios de sesión de Entra ID y alertas de Checkmk, con respuesta a incidentes.' },
        { title: 'Seguridad perimetral', text: 'SonicWall NSA 3700 y TZ 570, Fortinet FortiGate, VPN IPsec site-to-site y WireGuard, bastionado de sistemas y auditorías con Lynis.' },
        { title: 'Redes', text: 'Switches HP ProCurve y Aruba 6200M, gestión centralizada con HPE Aruba Central, routers MikroTik y segmentación con VLAN.' },
        { title: 'Sistemas y nube', text: 'Windows y Linux, Active Directory híbrido, Exchange Online, licencias de Microsoft 365 y máquinas virtuales en Azure.' },
        { title: 'Virtualización y copias', text: 'VMware vSphere, Proxmox VE con contenedores LXC, Veeam Backup & Replication y Acronis.' },
        { title: 'Monitorización e inventario', text: 'Checkmk y OCS Inventory; en el homelab, Uptime Kuma, Healthchecks.io y un panel propio.' },
        { title: 'Telefonía IP', text: 'Centralita 3CX (VoIP/SIP), terminales Grandstream y Yealink, teléfonos de conferencia y videoporteros.' },
        { title: 'Scripting y otros', text: 'Bash, PowerShell y SQL; Velneo (ERP).' },
      ],
    },
    homelab: {
      title: 'El homelab',
      text: 'Un Intel NUC con Proxmox VE donde pruebo lo que luego aplico en el trabajo. Cada servicio corre en su contenedor LXC y solo se alcanza desde casa o por WireGuard: el único puerto abierto en el router es el de la VPN. Copia diaria de todo a un SSD externo, alertas a Telegram y un latido hacia fuera por si el servidor deja de responder.',
      stack: ['Proxmox VE', 'LXC', 'WireGuard', 'AdGuard Home', 'NPMplus', 'Nextcloud', 'Jellyfin', 'Uptime Kuma', 'FastAPI', 'HTMX', 'Healthchecks.io', 'Lynis', 'Cloudflare'],
      link: { text: 'Ficha técnica y servicios del homelab', href: '/homelab/' },
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
    blogFeed: {
      title: 'Del blog',
      intro: 'Lo último que he publicado. Cada artículo cuenta una pieza del homelab con la configuración real.',
      all: 'Todos los artículos',
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
      'Systems and network administrator specialised in cybersecurity, based in Albacete, Spain. Microsoft Defender, Entra ID and Azure, SonicWall and Fortinet firewalls, Aruba and MikroTik networks with VLANs, 3CX IP telephony, vSphere, Proxmox and a self-hosted homelab.',
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
        'I am a systems and network administrator based in Albacete, Spain, specialised in cybersecurity, with a Higher National Diploma in Networked Systems Administration (ASIR) and a specialisation course in Cybersecurity. My day-to-day work has covered Microsoft 365 and Azure security (Defender alerts, Entra ID conditional access), log analysis and incident response, networking and perimeter security, 3CX IP telephony, virtualisation, backups and user support.',
        'I like things to work and to be able to prove they work: backups that get validated, alerts before incidents and documentation someone else can follow. That is why outside work I run a homelab on Proxmox with a single open port (the VPN), daily backups, 2FA and my own monitoring, and write up every step on the <a href="https://blog.jelopez.link">blog</a> (in Spanish).',
      ],
      facts: [
        { label: 'Location', value: 'Albacete, Spain' },
        { label: 'Languages', value: 'Spanish native · English, limited working proficiency' },
        { label: 'Focus', value: 'Microsoft security, networking and systems' },
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
            'Microsoft security: alert follow-up in the Microsoft Defender portal and Defender Antivirus on Windows endpoints; occasional Intune work and basic Microsoft Purview.',
            'Microsoft Entra ID: Conditional Access policies and incident response to unauthorised sign-ins.',
            'Microsoft 365: user and licence management from the admin centre and Exchange Online.',
            'Azure: deployed and secured virtual machines with access restricted to authorised staff, and a site-to-site IPsec VPN between Azure and a SonicWall NSA 3700.',
            'SonicWall NSA 3700 and TZ 570 firewalls, occasional FortiGate work and WireGuard VPN tunnels.',
            'Corporate network segmented into more than 10 VLANs, with HP ProCurve and Aruba 6200M switches managed from HPE Aruba Central (main client) and MikroTik routers for other clients.',
            'Hybrid Active Directory and virtualisation with VMware vSphere and Proxmox.',
            'Backups with Veeam Backup & Replication and Acronis: running and validating them.',
            'Monitoring with Checkmk, inventory with OCS Inventory and custom dashboards built with AI assistance (Claude Code).',
            'IP telephony: deployment and troubleshooting of the 3CX PBX, with Grandstream and Yealink handsets, conference phones and video door entry systems.',
            'User support: handling and resolving day-to-day incidents.',
          ],
        },
        {
          role: 'IT Technician',
          company: 'Via Office',
          period: 'Jul – Sep 2024',
          points: [
            'User-level management of the Velneo ERP database.',
            'Software installation and troubleshooting.',
          ],
        },
        {
          role: 'IT Technician intern (ASIR work placement)',
          company: 'Exadi Business',
          period: 'Apr – Jun 2023',
          points: [
            'Built simple modules with Velneo (ERP and programming language).',
            'User support.',
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
        { title: 'Microsoft security', text: 'Microsoft Defender (alert follow-up) and Defender Antivirus, Entra ID with Conditional Access, Intune (occasional) and Purview (basic).' },
        { title: 'Log and alert analysis', text: 'Windows events, SonicWall firewall logs, Entra ID sign-ins and Checkmk alerts, with incident response.' },
        { title: 'Perimeter security', text: 'SonicWall NSA 3700 and TZ 570, Fortinet FortiGate, site-to-site IPsec and WireGuard VPNs, system hardening and Lynis audits.' },
        { title: 'Networking', text: 'HP ProCurve and Aruba 6200M switches, centralised management with HPE Aruba Central, MikroTik routers and VLAN segmentation.' },
        { title: 'Systems & cloud', text: 'Windows and Linux, hybrid Active Directory, Exchange Online, Microsoft 365 licensing and Azure virtual machines.' },
        { title: 'Virtualisation & backups', text: 'VMware vSphere, Proxmox VE with LXC containers, Veeam Backup & Replication and Acronis.' },
        { title: 'Monitoring & inventory', text: 'Checkmk and OCS Inventory; in the homelab, Uptime Kuma, Healthchecks.io and a custom dashboard.' },
        { title: 'IP telephony', text: '3CX PBX (VoIP/SIP), Grandstream and Yealink handsets, conference phones and video door entry systems.' },
        { title: 'Scripting & other', text: 'Bash, PowerShell and SQL; Velneo (ERP).' },
      ],
    },
    homelab: {
      title: 'The homelab',
      text: 'An Intel NUC running Proxmox VE where I try out what I later apply at work. Each service runs in its own LXC container and can only be reached from home or over WireGuard: the VPN is the only port open on the router. Daily backups of everything to an external SSD, Telegram alerts and an outbound heartbeat in case the server stops responding.',
      stack: ['Proxmox VE', 'LXC', 'WireGuard', 'AdGuard Home', 'NPMplus', 'Nextcloud', 'Jellyfin', 'Uptime Kuma', 'FastAPI', 'HTMX', 'Healthchecks.io', 'Lynis', 'Cloudflare'],
      link: { text: 'Homelab spec sheet and services', href: '/en/homelab/' },
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
    blogFeed: {
      title: 'From the blog',
      intro: 'My latest posts, written in Spanish. Each one covers a piece of the homelab with the real configuration.',
      all: 'All posts',
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
      'Administrador de sistemas y redes con especialización en ciberseguridad. Experiencia en el entorno de seguridad de Microsoft (alertas en Microsoft Defender, Defender Antivirus, Entra ID con acceso condicional, Intune), análisis de logs y alertas, respuesta a incidentes, seguridad perimetral con SonicWall y Fortinet, redes segmentadas con VLAN, Azure, copias de seguridad y telefonía IP con 3CX. Me enfoco en mantener infraestructuras seguras, monitorizadas y bien documentadas.',
    projectsTitle: 'Proyectos personales',
    languagesTitle: 'Idiomas',
    languages: 'Castellano nativo · Inglés: competencia básica profesional',
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
      'Systems and network administrator specialised in cybersecurity. Experience with the Microsoft security stack (Microsoft Defender alerts, Defender Antivirus, Entra ID Conditional Access, Intune), log and alert analysis, incident response, perimeter security with SonicWall and Fortinet, VLAN-segmented networks, Azure, backups and 3CX IP telephony. I focus on keeping infrastructure secure, monitored and well documented.',
    projectsTitle: 'Personal projects',
    languagesTitle: 'Languages',
    languages: 'Spanish native · English: limited working proficiency',
    portfolio: 'Portfolio and projects',
  },
};

// Página /homelab/: ficha técnica y servicios. Regla: nada de IPs, puertos,
// IDs de contenedor ni nombres internos; solo lo que se puede contar en público.
export const homelabPage = {
  es: {
    title: 'El homelab · Juan Enrique López',
    description: 'Ficha técnica del homelab de Juan Enrique López: un Intel NUC con Proxmox VE, servicios en contenedores LXC, un único puerto abierto, copias diarias y vigilancia externa.',
    heading: 'El homelab',
    sub: 'Donde pruebo lo que luego aplico en el trabajo. Un equipo pequeño, bien vigilado y documentado de principio a fin.',
    nav: { hardware: 'Equipo', services: 'Servicios', security: 'Seguridad', backups: 'Copias' },
    diagramTitle: 'Cómo encaja todo',
    hardwareTitle: 'El equipo',
    hardware: [
      { label: 'Equipo', value: 'Intel NUC, silencioso, compacto y de bajo consumo' },
      { label: 'Procesador', value: 'Intel N150, 4 núcleos, con gráfica integrada (Quick Sync para Jellyfin)' },
      { label: 'Memoria', value: '16 GB de RAM' },
      { label: 'Disco interno', value: 'SSD de 512 GB para el sistema y los contenedores' },
      { label: 'Disco externo', value: 'SSD de 2 TB por USB para las copias de seguridad y los datos de la nube' },
      { label: 'Hipervisor', value: 'Proxmox VE, con cada servicio en su propio contenedor LXC' },
      { label: 'Corte de luz', value: 'Arranca solo al volver la corriente y levanta los servicios en orden' },
    ],
    servicesTitle: 'Servicios',
    servicesIntro: 'Cada uno en su contenedor, con su copia diaria y su artículo en el blog.',
    groups: [
      { name: 'Red y acceso', items: [
        { name: 'WireGuard', text: 'VPN para entrar desde fuera. Es el único puerto abierto en el router.', href: 'https://blog.jelopez.link/blog/wireguard-acceso-remoto/' },
        { name: 'AdGuard Home', text: 'DNS de toda la casa, con bloqueo de publicidad y nombres internos.', href: 'https://blog.jelopez.link/blog/adguard-home-dns/' },
        { name: 'NPMplus', text: 'Proxy inverso con certificados válidos de Let’s Encrypt para los servicios internos.', href: 'https://blog.jelopez.link/blog/npmplus-reverse-proxy/' },
      ] },
      { name: 'Nube y multimedia', items: [
        { name: 'Nextcloud', text: 'Nube personal para archivos y fotos, con 2FA y acceso solo desde casa o por VPN.', href: 'https://blog.jelopez.link/blog/nextcloud-nube-personal/' },
        { name: 'Jellyfin', text: 'Películas y series, con transcodificación por hardware y la misma carpeta que Nextcloud.', href: 'https://blog.jelopez.link/blog/jellyfin-peliculas-series/' },
      ] },
      { name: 'Vigilancia y gestión', items: [
        { name: 'Panel propio', text: 'Hecho en Python: estado, copias, registros y tareas de todo el homelab en una pantalla.', href: 'https://blog.jelopez.link/blog/panel-homelab-propio/' },
        { name: 'Uptime Kuma', text: 'Comprueba cada servicio y avisa por Telegram si algo deja de responder.', href: 'https://blog.jelopez.link/blog/uptime-kuma-telegram/' },
        { name: 'Healthchecks.io', text: 'Vigilancia desde fuera: si el servidor deja de mandar su latido, llega un aviso.', href: 'https://blog.jelopez.link/blog/homelab-esquemas-red/' },
      ] },
    ],
    securityTitle: 'Seguridad',
    security: [
      'Un solo puerto abierto en el router, el de la VPN. Ningún panel de administración se ve desde Internet.',
      'Cortafuegos de Proxmox que solo admite la red de casa para la administración.',
      'Segundo factor (TOTP) en Proxmox, Nextcloud y el panel propio.',
      'SSH solo con claves, sin acceso de root por contraseña, y fail2ban donde hay algo expuesto.',
      'Bastionado medido con Lynis en el host y en los contenedores.',
      'Permisos mínimos: el panel y los accesos de mantenimiento tienen roles hechos a medida.',
    ],
    backupsTitle: 'Copias y recuperación',
    backups: [
      'Copia de todos los contenedores cada noche al SSD externo, con retención de 7 diarias, 4 semanales y 3 mensuales.',
      'Restauración probada: un contenedor se recupera entero desde la copia de la noche anterior.',
      'Aviso por correo si una copia falla y latido a un servicio externo cuando termina bien.',
      'Registros volcados a disco cada hora y snapshot antes de cada actualización.',
      'Copia cifrada fuera de casa cada noche con restic en un almacenamiento de objetos en la UE, que completa la regla 3-2-1.',
    ],
    nextTitle: 'Lo siguiente',
    next: 'Vigilar la salud de los discos con SMART y avisar antes de que fallen.',
    blogLink: 'Toda la serie en el blog: El homelab desde cero',
    blogHref: 'https://blog.jelopez.link/serie/el-homelab-desde-cero/',
    read: 'Leer el artículo',
  },
  en: {
    title: 'The homelab · Juan Enrique López',
    description: 'Spec sheet of Juan Enrique López’s homelab: an Intel NUC running Proxmox VE, services in LXC containers, a single open port, daily backups and external monitoring.',
    heading: 'The homelab',
    sub: 'Where I try out what I later apply at work. A small machine, closely monitored and documented end to end.',
    nav: { hardware: 'Hardware', services: 'Services', security: 'Security', backups: 'Backups' },
    diagramTitle: 'How it fits together',
    hardwareTitle: 'Hardware',
    hardware: [
      { label: 'Machine', value: 'Intel NUC: quiet, compact and low-power' },
      { label: 'CPU', value: 'Intel N150, 4 cores, with integrated graphics (Quick Sync for Jellyfin)' },
      { label: 'Memory', value: '16 GB RAM' },
      { label: 'Internal disk', value: '512 GB SSD for the system and containers' },
      { label: 'External disk', value: '2 TB USB SSD for backups and cloud data' },
      { label: 'Hypervisor', value: 'Proxmox VE, with each service in its own LXC container' },
      { label: 'Power cut', value: 'Boots by itself when power returns and starts services in order' },
    ],
    servicesTitle: 'Services',
    servicesIntro: 'Each one in its own container, with a daily backup and a write-up on the blog (in Spanish).',
    groups: [
      { name: 'Network & access', items: [
        { name: 'WireGuard', text: 'VPN to get in from outside. It is the only port open on the router.', href: 'https://blog.jelopez.link/blog/wireguard-acceso-remoto/' },
        { name: 'AdGuard Home', text: 'DNS for the whole house, with ad blocking and internal names.', href: 'https://blog.jelopez.link/blog/adguard-home-dns/' },
        { name: 'NPMplus', text: 'Reverse proxy with valid Let’s Encrypt certificates for internal services.', href: 'https://blog.jelopez.link/blog/npmplus-reverse-proxy/' },
      ] },
      { name: 'Cloud & media', items: [
        { name: 'Nextcloud', text: 'Personal cloud for files and photos, with 2FA and access only from home or over VPN.', href: 'https://blog.jelopez.link/blog/nextcloud-nube-personal/' },
        { name: 'Jellyfin', text: 'Films and series, with hardware transcoding and the same folder as Nextcloud.', href: 'https://blog.jelopez.link/blog/jellyfin-peliculas-series/' },
      ] },
      { name: 'Monitoring & management', items: [
        { name: 'Custom dashboard', text: 'Built in Python: status, backups, logs and tasks for the whole homelab on one screen.', href: 'https://blog.jelopez.link/blog/panel-homelab-propio/' },
        { name: 'Uptime Kuma', text: 'Checks every service and alerts on Telegram if something stops responding.', href: 'https://blog.jelopez.link/blog/uptime-kuma-telegram/' },
        { name: 'Healthchecks.io', text: 'Monitoring from outside: if the server stops sending its heartbeat, an alert goes out.', href: 'https://blog.jelopez.link/blog/homelab-esquemas-red/' },
      ] },
    ],
    securityTitle: 'Security',
    security: [
      'A single open port on the router: the VPN. No admin interface is reachable from the Internet.',
      'Proxmox firewall that only allows the home network for administration.',
      'Second factor (TOTP) on Proxmox, Nextcloud and the custom dashboard.',
      'Key-only SSH, no root password logins, and fail2ban wherever something is exposed.',
      'Hardening measured with Lynis on the host and the containers.',
      'Least privilege: the dashboard and maintenance access use custom roles.',
    ],
    backupsTitle: 'Backups & recovery',
    backups: [
      'Every container backed up nightly to the external SSD, keeping 7 daily, 4 weekly and 3 monthly copies.',
      'Restores tested: a container comes back whole from last night’s backup.',
      'Email alert if a backup fails and a heartbeat to an external service when it succeeds.',
      'Logs flushed to disk every hour and a snapshot before every update.',
      'Encrypted off-site copy every night with restic to EU object storage, completing the 3-2-1 rule.',
    ],
    nextTitle: 'Next up',
    next: 'Monitoring disk health with SMART to get a warning before a drive fails.',
    blogLink: 'The full series on the blog (in Spanish): El homelab desde cero',
    blogHref: 'https://blog.jelopez.link/serie/el-homelab-desde-cero/',
    read: 'Read the post',
  },
};
