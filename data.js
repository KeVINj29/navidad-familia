// =============================================================================
// DATOS DEL INTERCAMBIO Y FIESTA NAVIDEÑA
// Puedes agregar, quitar o editar personas y platillos fácilmente aquí.
// =============================================================================

const INFO_EVENTO = {
    titulo: "Navidad en Familia 2024",
    subtitulo: "Intercambio de regalos & Cena Navideña",
    fecha: "Martes 24 de Diciembre, 2024",
    hora: "8:00 PM en adelante",
    lugar: "Casa de los Abuelos",
    direccion: "Calle Los Pinos #123, Col. Centro",
    googleMapsUrl: "https://maps.google.com/?q=Los+Pinos+123", // Cambia por tu link real de Maps
    presupuestoIntercambio: "$500 - $600 MXN", // Opcional, déjalo vacío si no aplica
};

// -----------------------------------------------------------------------------
// LISTA DE PARTICIPANTES DEL INTERCAMBIO
// -----------------------------------------------------------------------------
const FAMILIA = [
    {
        id: "tia-carmen",
        nombre: "Tía Carmen",
        apodo: "La tía consentida",
        avatar: "👩‍🦱",
        tallas: {
            blusa: "Mediana (M)",
            pantalon: "Talla 30 / 9",
            calzado: "24 MX"
        },
        siDesea: [
            "Cremas corporales o lociones florales (tipo Bath & Body Works)",
            "Café en grano o gourmet",
            "Bufandas o pashminas en tonos beige / café",
            "Aretes discretos plateados"
        ],
        noDesea: [
            "Nada de dulces ni chocolates (cuida su azúcar)",
            "No perfumes muy dulces o pesados",
            "Por favor no tazas (ya tiene demasiadas 😅)"
        ],
        gustosExtras: "Le fascina la jardinería, el café por las mañanas y leer."
    },
    {
        id: "tio-jorge",
        nombre: "Tío Jorge",
        apodo: "El parrillero oficial",
        avatar: "👨‍🦰",
        tallas: {
            playera: "Grande (L)",
            pantalon: "34 x 30",
            calzado: "27.5 MX"
        },
        siDesea: [
            "Accesorios para asador / carne asada (pinzas, guantes)",
            "Termo para café o cerveza de 20oz - 30oz",
            "Camisa casual de manga corta",
            "Gorra deportiva oscura (negra o azul marino)"
        ],
        noDesea: [
            "No lociones ni desodorantes",
            "Ropa en colores chillones (amarillo/naranja no)"
        ],
        gustosExtras: "Fanático del fútbol, ver partidos y hacer carnita asada."
    },
    {
        id: "sofia",
        nombre: "Sofía (Prima)",
        apodo: "Sofi",
        avatar: "👧",
        tallas: {
            playera: "Chica (S)",
            pantalon: "Talla 26 / 3",
            calzado: "23.5 MX"
        },
        siDesea: [
            "Skins / fundas bonitas para iPhone 13",
            "Audífonos inalámbricos sencillos",
            "Libros de misterio / thriller",
            "Maquillaje o lip gloss hidratante"
        ],
        noDesea: [
            "Ropa formal",
            "Adornos de mesa o peluches grandes"
        ],
        gustosExtras: "Color favorito: verde olivo y lila. Le gusta la música pop e indie."
    },
    {
        id: "pedro",
        nombre: "Pedro (Primo)",
        apodo: "Peter",
        avatar: "🧑",
        tallas: {
            playera: "Mediana (M)",
            pantalon: "30",
            calzado: "26.5 MX"
        },
        siDesea: [
            "Tarjetas de regalo (Amazon, Spotify o Steam)",
            "Calcetines divertidos o deportivos",
            "Sudadera tipo Hoodie lisa (negra, gris o verde)",
            "Juegos de mesa rápidos (tipo Exploding Kittens, UNO)"
        ],
        noDesea: [
            "Camisas de botones formales",
            "Cosas frágiles de cristal"
        ],
        gustosExtras: "Le encantan los videojuegos y los juegos de mesa."
    },
    {
        id: "abuela-elena",
        nombre: "Abuela Elena",
        apodo: "Nona",
        avatar: "👵",
        tallas: {
            blusa: "Grande (G)",
            pantalon: "Elástico / Cómodo",
            calzado: "24.5 MX (pantuflas suaves)"
        },
        siDesea: [
            "Manta / cobijita térmica suave para la sala",
            "Pantuflas acolchadas y con suela antiderrapante",
            "Crema humectante para manos",
            "Rebozo o chal abrigador"
        ],
        noDesea: [
            "Cosas complicadas de electrónica",
            "Ropa ajustada o con botones difíciles"
        ],
        gustosExtras: "Le gusta tejer, ver sus telenovelas y tener a todos los nietos juntos."
    }
];

// -----------------------------------------------------------------------------
// LISTA DE ASIGNACIONES PARA LA CENA & FIESTA (¿QUIÉN LLEVA QUÉ?)
// -----------------------------------------------------------------------------
const ORGANIZACION_CENA = [
    {
        categoria: "🍗 Plato Fuerte",
        items: [
            { tarea: "Pavo relleno tradicional y gravy", encargado: "Tía Carmen y Tío Roberto", estado: "Confirmado" },
            { tarea: "Lomo o Pierna mechada adobada", encargado: "Familia Morales", estado: "Confirmado" },
            { tarea: "Baguettes / Pan artesanal (3 paquetes)", encargado: "Pedro", estado: "Confirmado" }
        ]
    },
    {
        categoria: "🥗 Guarniciones & Ensaladas",
        items: [
            { tarea: "Ensalada de manzana navideña tradicional", encargado: "Mamá / Sofi", estado: "Confirmado" },
            { tarea: "Puré de papa cremoso", encargado: "Familia Rodríguez", estado: "Pendiente" },
            { tarea: "Pasta al horno (Fetuccini Alfredo)", encargado: "Tía Paty", estado: "Confirmado" }
        ]
    },
    {
        categoria: "🍰 Postres",
        items: [
            { tarea: "Pastel o pay de queso con zarzamora", encargado: "Primos Pérez", estado: "Confirmado" },
            { tarea: "Galletas navideñas caseras y buñuelos", encargado: "Abuela Elena", estado: "Confirmado" }
        ]
    },
    {
        categoria: "🥤 Bebidas & Brindis",
        items: [
            { tarea: "Olla de Ponche navideño de frutas (calientito)", encargado: "Tía Paty", estado: "Confirmado" },
            { tarea: "Refrescos de 2L (Coca, Manzana, Squirt) y 2 bolsas de hielo", encargado: "Tío Jorge", estado: "Confirmado" },
            { tarea: "Sidra para el brindis y 1 botella de vino tinto", encargado: "Familia Gómez", estado: "Pendiente" }
        ]
    },
    {
        categoria: "🎉 Fiesta, Piñata & Desechables",
        items: [
            { tarea: "Piñata de 7 picos tradicional + Mecate grueso", encargado: "Tío Jorge", estado: "Confirmado" },
            { tarea: "Dulces y colaciones para la piñata", encargado: "Sofi y Pedro", estado: "Confirmado" },
            { tarea: "Platos resistentes, vasos, servilletas y cubiertos", encargado: "Familia Gómez", estado: "Confirmado" }
        ]
    }
];
