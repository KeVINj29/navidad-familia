// =============================================================================
// DATOS DEL INTERCAMBIO Y FIESTA NAVIDEÑA
// Puedes agregar, quitar o editar personas y platillos fácilmente aquí.
// =============================================================================

const INFO_EVENTO = {
    titulo: "Navidad en Familia 2026",
    subtitulo: "Intercambio de regalos & Cena Navideña",
    fecha: "Jueves 24 de Diciembre, 2026",
    hora: "8:00 PM en adelante",
    lugar: "Casa de los Abuelos",
    direccion: "Calle Los Pinos #123, Col. Centro",
    googleMapsUrl: "https://maps.google.com/?q=Los+Pinos+123", // Cambia por tu link real de Maps
    presupuestoIntercambio: "$500 MXN + Caja de Regalo ó 2 de $500 MXN 🤑", // Opcional, déjalo vacío si no aplica
};

// -----------------------------------------------------------------------------
// LISTA DE PARTICIPANTES DEL INTERCAMBIO
// -----------------------------------------------------------------------------
const FAMILIA = [
    {
        id: "Maribel",
        nombre: "Maribel",
        apodo: "La Güera",
        avatar: "👩‍🦱",
        tallas: {
//            blusa: "Mediana (M)",
            pantalon: "Talla 13",
            calzado: "26.5 MX"
        },
        siDesea: [
            "2 o 3 cambios completos",
            "Tenis",
            "Botines"
        ],
/*        noDesea: [
            "Nada de dulces ni chocolates (cuida su azúcar)",
            "No perfumes muy dulces o pesados",
            "Por favor no tazas (ya tiene demasiadas 😅)"
        ],
        gustosExtras: "Le fascina la jardinería, el café por las mañanas y leer."
        */
    },
    {
        id: "Carmen",
        nombre: "Carmen",
        apodo: "novia de Cristo",
        avatar: "👩‍🦰",
        tallas: {
            blusa: "Chica o Mediana (depende)",
            pantalon: "Talla 5",
            calzado: "Del 4 MX"
        },
/*        siDesea: [
            // "Idea 1",
            // "Idea 2"
        ],
        noDesea: [
            // "Evitar esto",
            // "Evitar aquello"
        ],
        gustosExtras: ""
        */
    },
    {
        id: "Joana",
        nombre: "Joana",
        apodo: "prieta",
        avatar: "👧",
        tallas: {
            blusa: "Grande (G)",
            pantalon: "Talla 13",
            calzado: "5 ó 5.5 MX"
        },
/*        siDesea: [
            // "Idea 1",
            // "Idea 2"
        ],
        noDesea: [
            // "Evitar esto",
            // "Evitar aquello"
        ],
        gustosExtras: ""
        */
    },
    {
        id: "Ernesto",
        nombre: "Ernesto",
//        apodo: "",
        avatar: "🧑",
        tallas: {
            playera: "XXL",
            pantalon: "Talla 38",
            calzado: "7.5 MX"
        },
/*        siDesea: [
            // "Idea 1",
            // "Idea 2"
        ],
        noDesea: [
            // "Evitar esto",
            // "Evitar aquello"
        ],
        gustosExtras: ""
        */
    },
    {
        id: "Edith",
        nombre: "Edith",
        apodo: "chata",
        avatar: "👩",
        tallas: {
            blusa: "Grande (G)",
            pantalon: "Talla 13",
//            calzado: ""
        },
        siDesea: [
            "Botas de senderismo negras (calzado ancho)",
            "Chaqueta deportiva blanca con cremallera",
            "Pantalón cargo de tiro alto azul marino"
        ],
        fotos: [
            { url: "img/edith_botas.jpg", titulo: "Botas de senderismo (antideslizantes)" },
            { url: "img/edith_chaqueta.jpg", titulo: "Chaqueta deportiva blanca" },
            { url: "img/edith_pantalon.jpg", titulo: "Pantalón cargo azul marino" }
        ],
        noDesea: [
            "Tenis no quiero"
        ],
//        gustosExtras: ""
    },
    {
        id: "Wendy",
        nombre: "Wendy",
        apodo: "De Jesus",
        avatar: "👱‍♀️",
        tallas: {
            playera: "XS o S (depende del modelo, casi siempre S)",
            pantalon: "Talla 3 o 5",
            calzado: "Del 4 MX"
        },
/*        siDesea: [
            // "Idea 1",
            // "Idea 2"
        ],
        noDesea: [
            // "Evitar esto",
            // "Evitar aquello"
        ],
        gustosExtras: ""
        */
    },
    {
        id: "Cristo",
        nombre: "Cristo",
//        apodo: "",
        avatar: "🧔",
        tallas: {
            playera: "Mediana (M)",
            pantalon: "Talla 34 (recto)",
            calzado: "Del 5 MX"
        },
/*        siDesea: [
            // "Idea 1",
            // "Idea 2"
        ],
        noDesea: [
            // "Evitar esto",
            // "Evitar aquello"
        ],
        gustosExtras: ""
        */
    }
];

// -----------------------------------------------------------------------------
// LISTA DE ASIGNACIONES PARA LA CENA & FIESTA (¿QUIÉN LLEVA QUÉ?)
// -----------------------------------------------------------------------------
const ORGANIZACION_CENA = [
/*
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
            { tarea: "Puré de papa cremoso", encargado: "Familia Rodríguez", estado: "Confirmado" },
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
            { tarea: "Sidra para el brindis y 1 botella de vino tinto", encargado: "Familia Gómez", estado: "Confirmado" }
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
*/
];
