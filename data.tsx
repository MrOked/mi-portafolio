import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Estudiante de Técnico en Programación",
    subtitle: "Instituto Técnico - 2024",
    description: "Comencé mis estudios en Técnico en Programación el año pasado. Estoy adquiriendo conocimientos básicos en desarrollo de software, con un enfoque inicial en frontend y algunas nociones de backend.",
    date: "Mar 2024",
  },
  {
    id: 2,
    title: "Desarrollador Frontend Junior",
    subtitle: "Proyectos personales",
    description: "Durante mis estudios, he trabajado en pequeños proyectos personales de frontend, aprendiendo a crear interfaces funcionales y atractivas usando tecnologías como HTML, CSS y JavaScript. Me siento más cómodo en esta área y disfruto resolviendo desafíos visuales.",
    date: "Ago 2024",
  },
  {
    id: 3,
    title: "Prácticas Frontend",
    subtitle: "Proyectos guiados por el instituto",
    description: "Actualmente estoy realizando prácticas y proyectos guiados donde aplico lo aprendido en clase. Mi enfoque está en mejorar mis habilidades en frontend, crear interfaces interactivas y entender la lógica básica de aplicaciones web.",
    date: "Ene 2025",
  },
  {
    id: 4,
    title: "Cierre de Técnico en Programación",
    subtitle: "Finalización de estudios",
    description: "Este año estaré finalizando mi formación como Técnico en Programación. Planeo seguir profundizando en frontend y aprender más sobre frameworks modernos, siempre con ganas de crecer y mejorar mis habilidades técnicas.",
    date: "Nov 2025",
  },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 0,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 0,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];


export const serviceData = [
  {
    icon: <Pencil />,
    title: "Maquetación HTML/CSS",
    description: "Creo páginas web simples utilizando HTML y CSS, enfocándome en que sean claras y fáciles de usar.",
  },
  {
    icon: <Computer />,
    title: "Proyectos Frontend",
    description: "Desarrollo pequeños proyectos web para practicar y mejorar mis habilidades en frontend.",
  },
  {
    icon: <Book />,
    title: "Bases de Datos Básicas",
    description: "Manejo nociones básicas de bases de datos, principalmente para guardar información simple de formularios.",
  },
  {
    icon: <Crop />,
    title: "Diseño de Interfaces",
    description: "Diseño interfaces sencillas y funcionales, centradas en la experiencia de usuario y la claridad visual.",
  },
  {
    icon: <Rocket />,
    title: "Aprendizaje y Mejoras",
    description: "Me mantengo en constante aprendizaje para mejorar mis habilidades.",
  },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Proyecto ERP",
        image: "/proyecto-erp.jpg",
        urlGithub: "https://github.com/MrOked/proyecto-erp",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Mi portafolio",
        image: "/mi-portafolio.png",
        urlGithub: "https://github.com/MrOked/mi-portafolio",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];
