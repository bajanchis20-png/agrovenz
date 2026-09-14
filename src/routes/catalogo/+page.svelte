<script lang="ts">
    import Icon from "@iconify/svelte";

    // Productos agrupados/limpios para evitar duplicados en la grilla principal
    const productos: { id: number, title: string, cat: string, subcat: string, price: number | string, images: string[], desc: string, link?: string, presentaciones?: { label: string, price: number, id: number }[] }[] = [
        // Alimentación Animal
        { id: 1, title: "Harina de Palmiste", cat: "Agro", subcat: "Alimentación Animal", price: 12.9, images: ["/palmiste32.png"], desc: "Presentación de 36.8KG Fuente de proteína y energía ideal para ganado bovino." },
        { id: 7, title: "Silo de maíz", cat: "Agro", subcat: "Alimentación Animal", price: 4, images: ["/silodemaiz2.jpeg"], desc: "Presentación de 30KG, fabricado con maleza y maíz. contiene Silolact." },
        { id: 11, title: "Melaza", cat: "Agro", subcat: "Alimentación Animal", price: 14, images: ["/Melaza.png"], desc: "Mejora la energía y condición corporal de los animales, ideal para Bovinos, búfalos, caballos, ovejas y cabras." },
        
        // Bioinsumos
        { id: 8, title: "SiloLact", cat: "Agro", subcat: "Bioinsumos", price: 70, images: ["/silolact.png"], desc: "Presentación de 500ml. para uso pecuario. Favorece la fermentación y conservación del forraje." },

        // Cercas Eléctricas
        { id: 2, title: "Alambre electrico", cat: "Agro", subcat: "Cercas Eléctricas", price: 170, images: ["/alambrenew.jpeg"], desc: "Para cerco ganadero. Alta conductividad, resistente a corrosión y a la intemperie." },

        // Equipos Agropecuarios
        { id: 9, title: "Bolsas Resistentes", cat: "Agro", subcat: "Equipos", price: 90, images: ["/bolsas.png"], desc: "200 bolsas. Para hacer silo, capacidad 40KG, Calibre 60x120x20. Equipo resistente para empaque y conservación." },
        { id: 14, title: "Microchip de 2.12 mm", cat: "Agro", subcat: "Equipos", price: 1, images: ["/chipnew99.png"], desc: "Identificacion de ganado." },
        { id: 16, title: "Lector modelo W90B. 134.2 Khz", cat: "Agro", subcat: "Equipos", price: 70, images: ["/lectornew.jpeg"], desc: "diseñado para la identificación y trazabilidad de animales" },
        { id: 19, title: "Jeringas plasticas reutilizables", cat: "Agro", subcat: "Equipos", price: 10, images: ["/jeringa.jpeg"], desc: "De alta durabilidad y fácil limpieza, ideales para dosificación en campo." },
        { id: 20, title: "Aguja ganadera 10 unidades", cat: "Agro", subcat: "Equipos", price: 6, images: ["/aguja.png"], desc: "Pack de 10 unidades resistentes y de excelente calidad para tratamientos veterinarios." },
        { id: 21, title: "Garrocha para ganado", cat: "Agro", subcat: "Equipos", price: 130, images: ["/garrocha.png"], desc: "Herramienta resistente y ergonómica para el manejo seguro del rebaño." },
        { 
            id: 22, 
            title: "Medidor de PH digital portátil", 
            cat: "Agro", 
            subcat: "Equipos", 
            price: 12, 
            images: ["/numero1.jpeg", "/numero2.jpeg", "/numero3.jpeg"], 
            desc: "Medición rápida y precisa del PH en suelos y agua." 
        },
        { 
            id: 23, 
            title: "Botas plásticas Evolution (sin puntera)", 
            cat: "Agro", 
            subcat: "Equipos", 
            price: 17, 
            images: ["/botas1.jpeg", "/botas2.jpeg"], 
            desc: "Color negro y marrón, alta resistencia para trabajo de campo." 
        },

        // Ganadería
        { id: 13, title: "Bumaute y Bumautas", cat: "Agro", subcat: "Ganadería", price: "Consultar", images: ["/bovino.png"], desc: "Genética seleccionada para mejorar la productividad de tu rebaño." },

        // Herbicidas
        { id: 3, title: "Brega", cat: "Agro", subcat: "Herbicidas", price: 12.65, images: ["/brega.png"], desc: " De 1KG Formulado para el control de melezas en el maíz." },
        { id: 4, title: "Glytotal", cat: "Agro", subcat: "Herbicidas", price: 8.8, images: ["/realgly.png"], desc: " 1 LT. No selectivo, de accion sistematica ideal para el control de malezas de hoja ancha y gramíneas, áreas agrícolas y no agrícolas." },
        { id: 5, title: "Jonrón 212", cat: "Agro", subcat: "Herbicidas", price: 18, images: ["/herbicida.png"], desc: "Envase de 1LT. Envases de 4LT Y 10LT Preguntar disponibilidad y precios. Control efectivo de malezas de hoja ancha y presentación de 1L ideal para potrero." },
        { id: 6, title: "Socio", cat: "Agro", subcat: "Herbicidas", price: 1, images: ["/socio.png"], desc: "De acción sistémica utilizado para control de maleza de hoja ancha y algunas gramíneas." },
        { id: 24, title: "Glytotal 747 WG", cat: "Agro", subcat: "Herbicidas", price: 10.5, images: ["/747gly.jpeg"], desc: "Presentación de 1 KG, formulado para un control amplio y sistémico de malezas." },
        { id: 25, title: "Socio en polvo", cat: "Agro", subcat: "Herbicidas", price: 31, images: ["/socio.jpeg"], desc: "Presentación en polvo de 1 kg para el control eficiente de malezas." },
        { id: 26, title: "24D Amina 6 Proficol", cat: "Agro", subcat: "Herbicidas", price: 28.5, images: ["/amina.jpeg"], desc: "Herbicida hormonal selectivo para el control de malezas de hoja ancha en cultivos." },
        { id: 27, title: "Alisio", cat: "Agro", subcat: "Herbicidas", price: 18, images: ["/alisio.jpeg"], desc: "Presentación de 500 g ideal para aplicaciones agrícolas precisas." },

        // Inversiones y tierras
        { id: 15, title: "Venta de tierras y asesoría", cat: "Agro", subcat: "Inversiones", price: "Consultar", images: ["/R.jpg"], desc: "Tu socio estratégico en el sector agropecuario." },

        // Manuales Digitales
        { id: 18, title: "Guía de alimentación para uso adecuando de harina de palmiste", cat: "Agro", subcat: "Manuales", price: "", images: ["/logo.png"], desc: "Guía completa en formato digital para optimizar la producción pecuaria.", link: "https://online.fliphtml5.com/fjomd/zejc/" },

        // Pastos y Semillas
        { id: 10, title: "Semilla de maíz", cat: "Agro", subcat: "Semillas", price: 150, images: ["/semilla.png"], desc: "Semillas seleccionadas de alta calidad para un rendimiento óptimo en campo." },
        { id: 12, title: "Semilla de pasto Matsuda", cat: "Agro", subcat: "Semillas", price: 12.6, images: ["/semilladepasto.png"], desc: " Presentación de 20KG. Balance mineral necesario para el desarrollo animal, buena genética." },

        // Plandula
        { id: 17, title: "Plandula In vitro", cat: "Agro", subcat: "Plandula", price: "Consultar", images: ["/pendula.jpeg"], desc: "Geoplasma exclusivo." },

        // --- MEDICINA VETERINARIA AGRUPADA ---
        { 
            id: 28, 
            title: "Albendazol 25% + Co", 
            cat: "Medicina Veterinaria", 
            subcat: "Antiparasitarios", 
            price: 11.63, 
            images: ["/albendazol25.jpeg"], 
            desc: "Antiparasitario interno de amplio espectro con cobalto.",
            presentaciones: [
                { id: 28, label: "100 ml", price: 11.63 },
                { id: 29, label: "500 ml", price: 33.22 },
                { id: 30, label: "1 litro", price: 62.77 }
            ]
        },
        { id: 31, title: "Calbendazole 10% (1 litro)", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", price: 30.66, images: ["/calbe.jpeg"], desc: "Control efectivo de parásitos gastrointestinales y pulmonares." },
        { id: 32, title: "Ivermin pasta oral (6 g)", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", price: 5.76, images: ["/invermin.jpeg"], desc: "Ivermectina en pasta oral para dosificación precisa." },
        { id: 33, title: "Vermigan - ricobendazol (500 ml)", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", price: 38.00, images: ["/vermigan.jpeg"], desc: "Ricobendazol al 15% para el tratamiento de parásitos internos." },
        { 
            id: 34, 
            title: "Calbomax - doramectina", 
            cat: "Medicina Veterinaria", 
            subcat: "Antiparasitarios", 
            price: 11.42, 
            images: ["/calbo50.jpeg"], 
            desc: "Endectocida de acción prolongada a base de doramectina.",
            presentaciones: [
                { id: 34, label: "50 ml", price: 11.42 },
                { id: 35, label: "250 ml", price: 41.58 },
                { id: 36, label: "500 ml", price: 70.80 }
            ]
        },
        { 
            id: 37, 
            title: "Dectomax", 
            cat: "Medicina Veterinaria", 
            subcat: "Antiparasitarios", 
            price: 19.68, 
            images: ["/dectomax.jpeg"], 
            desc: "Solución inyectable de doramectina original.",
            presentaciones: [
                { id: 37, label: "50 ml", price: 19.68 },
                { id: 38, label: "250 ml", price: 90.53 },
                { id: 39, label: "500 ml", price: 147.60 }
            ]
        },
        { 
            id: 40, 
            title: "Dectomec Gold - ivermectina 3,15%", 
            cat: "Medicina Veterinaria", 
            subcat: "Antiparasitarios", 
            price: 10.96, 
            images: ["/dectomec.jpeg"], 
            desc: "Ivermectina de alta concentración al 3,15%.",
            presentaciones: [
                { id: 40, label: "100 ml", price: 10.96 },
                { id: 41, label: "500 ml", price: 38.00 }
            ]
        },
        { 
            id: 42, 
            title: "Dectomec Max - doramectina 2%", 
            cat: "Medicina Veterinaria", 
            subcat: "Antiparasitarios", 
            price: 20.15, 
            images: ["/dectomec.jpeg"], 
            desc: "Doramectina al 2% inyectable.",
            presentaciones: [
                { id: 42, label: "100 ml", price: 20.15 },
                { id: 43, label: "500 ml", price: 84.07 }
            ]
        },
        { id: 44, title: "Ivermin Gold 3.15 (500 ml)", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", price: 47.48, images: ["/gold500.jpeg"], desc: "Ivermectina de larga acción y alta concentración." },
        { 
            id: 45, 
            title: "Ivermin", 
            cat: "Medicina Veterinaria", 
            subcat: "Antiparasitarios", 
            price: 4.79, 
            images: ["/50.jpeg"], 
            desc: "Ivermectina estándar para ganadería.",
            presentaciones: [
                { id: 45, label: "50 ml", price: 4.79 },
                { id: 46, label: "200 ml", price: 11.47 },
                { id: 47, label: "500 ml", price: 26.02 }
            ]
        },
        { 
            id: 48, 
            title: "Bactermisil 20%", 
            cat: "Medicina Veterinaria", 
            subcat: "Antibióticos", 
            price: 12.68, 
            images: ["/biomisil.webp"], 
            desc: "Antibiótico de amplio espectro.",
            presentaciones: [
                { id: 48, label: "250 ml", price: 12.68 },
                { id: 49, label: "1 litro", price: 36.88 }
            ]
        },
        { id: 50, title: "Flocherry 30% (100 ml)", cat: "Medicina Veterinaria", subcat: "Antibióticos", price: 22.31, images: ["/cherry.jpg"], desc: "Florfenicol al 30% para infecciones respiratorias." },
        { 
            id: 51, 
            title: "Oxitetraciclina 5% Cherry", 
            cat: "Medicina Veterinaria", 
            subcat: "Antibióticos", 
            price: 6.02, 
            images: ["/oxi.jpeg"], 
            desc: "Antibiótico inyectable de acción corta.",
            presentaciones: [
                { id: 51, label: "100 ml", price: 6.02 },
                { id: 52, label: "500 ml", price: 22.36 }
            ]
        },
        { 
            id: 53, 
            title: "Oxitetraciclina LA 20% Cherry", 
            cat: "Medicina Veterinaria", 
            subcat: "Antibióticos", 
            price: 10.44, 
            images: ["/oxi20.jpeg"], 
            desc: "Oxitetraciclina de larga acción 20%.",
            presentaciones: [
                { id: 53, label: "100 ml", price: 10.44 },
                { id: 54, label: "250 ml", price: 20.48 }
            ]
        },
        { 
            id: 55, 
            title: "Babecide", 
            cat: "Medicina Veterinaria", 
            subcat: "Medicamentos", 
            price: 10.20, 
            images: ["/babepeque.jpeg"], 
            desc: "Hemoparasiticida para el control de babesiosis y anaplasmosis.",
            presentaciones: [
                { id: 55, label: "100 ml", price: 10.20 },
                { id: 56, label: "250 ml", price: 23.94 },
                { id: 57, label: "500 ml", price: 44.10 }
            ]
        },
        { 
            id: 58, 
            title: "Complejo B B12-B15", 
            cat: "Medicina Veterinaria", 
            subcat: "Vitaminas y Suplementos", 
            price: 7.58, 
            images: ["/complejo.jpeg"], 
            desc: "Vitamínico reconstituyente.",
            presentaciones: [
                { id: 58, label: "20 ml", price: 7.58 },
                { id: 59, label: "100 ml", price: 24.95 },
                { id: 60, label: "250 ml", price: 41.63 }
            ]
        },
        { 
            id: 61, 
            title: "Energizante vitamínico", 
            cat: "Medicina Veterinaria", 
            subcat: "Vitaminas y Suplementos", 
            price: 8.26, 
            images: ["/energi.jpeg"], 
            desc: "Bebida o inyectable energizante y vitamínico.",
            presentaciones: [
                { id: 61, label: "25 ml", price: 8.26 },
                { id: 62, label: "100 ml", price: 20.03 },
                { id: 63, label: "250 ml", price: 37.40 }
            ]
        },
        { id: 64, title: "Hemo 15 (100 ml)", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", price: 49.36, images: ["/hemo15.jpeg"], desc: "Suplemento hematopoyético y vitamínico." },
        { 
            id: 65, 
            title: "Minerfun F.M.", 
            cat: "Medicina Veterinaria", 
            subcat: "Vitaminas y Suplementos", 
            price: 13.21, 
            images: ["/minerfm.jpeg"], 
            desc: "Suplemento mineral y vitamínico.",
            presentaciones: [
                { id: 65, label: "100 ml", price: 13.21 },
                { id: 66, label: "500 ml", price: 41.51 }
            ]
        },
        { 
            id: 67, 
            title: "Minerfun MX", 
            cat: "Medicina Veterinaria", 
            subcat: "Vitaminas y Suplementos", 
            price: 48.70, 
            images: ["/minermx.jpeg"], 
            desc: "Suplemento mineral avanzado.",
            presentaciones: [
                { id: 67, label: "250 ml", price: 48.70 },
                { id: 68, label: "500 ml", price: 84.89 }
            ]
        },
        { 
            id: 69, 
            title: "Minerfun Plus con selenio", 
            cat: "Medicina Veterinaria", 
            subcat: "Vitaminas y Suplementos", 
            price: 16.97, 
            images: ["/miner100.jpeg"], 
            desc: "Suplemento con minerales y selenio.",
            presentaciones: [
                { id: 69, label: "100 ml", price: 16.97 },
                { id: 70, label: "250 ml", price: 30.18 },
                { id: 71, label: "500 ml", price: 50.94 }
            ]
        },
        { 
            id: 72, 
            title: "Olivitasan", 
            cat: "Medicina Veterinaria", 
            subcat: "Vitaminas y Suplementos", 
            price: 5.89, 
            images: ["/oli25.jpeg"], 
            desc: "Reconstituyente general.",
            presentaciones: [
                { id: 72, label: "25 ml", price: 5.89 },
                { id: 73, label: "100 ml", price: 12.50 },
                { id: 74, label: "300 ml", price: 25.36 },
                { id: 75, label: "500 ml", price: 38.18 }
            ]
        },
        { 
            id: 76, 
            title: "Olivitasan Plus", 
            cat: "Medicina Veterinaria", 
            subcat: "Vitaminas y Suplementos", 
            price: 45.12, 
            images: ["/oli250plus.jpeg"], 
            desc: "Fórmula reforzada Olivitasan Plus.",
            presentaciones: [
                { id: 76, label: "250 ml", price: 45.12 },
                { id: 77, label: "500 ml", price: 77.52 }
            ]
        },
        { id: 78, title: "Vitamina B12 5000 importada (50 ml)", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", price: 41.27, images: ["/b5000.jpeg"], desc: "Vitamina B12 de alta potencia importada." },
        { id: 79, title: "Fortemax (500 ml)", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", price: 28.04, images: ["/fortemax.jpeg"], desc: "Reconstituyente y energizante general." },
        { id: 80, title: "Levantol (500 ml)", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", price: 13.61, images: ["/levanton.jpeg"], desc: "Tónico general y estimulante." },
        { 
            id: 81, 
            title: "Modificador Orgánico Toro", 
            cat: "Medicina Veterinaria", 
            subcat: "Vitaminas y Suplementos", 
            price: 7.49, 
            images: ["/modi.jpeg"], 
            desc: "Mejora el metabolismo y ganancia de peso.",
            presentaciones: [
                { id: 81, label: "100 ml", price: 7.49 },
                { id: 82, label: "500 ml", price: 21.89 }
            ]
        },
        { id: 83, title: "Buta Cal (100 ml)", cat: "Medicina Veterinaria", subcat: "Medicamentos", price: 14.50, images: ["/buta.jpeg"], desc: "Analgésico, antipirético y antirreumático." },
        { id: 84, title: "Dex-Cal - dexametasona (100 ml)", cat: "Medicina Veterinaria", subcat: "Medicamentos", price: 10.58, images: ["/dexcal.jpeg"], desc: "Corticoide de acción prolongada." },
        { id: 85, title: "Dibrosal expectorante (1 kg)", cat: "Medicina Veterinaria", subcat: "Medicamentos", price: 13.42, images: ["/dibrosal.jpeg"], desc: "Expectorante en polvo para problemas respiratorios." },
        { 
            id: 86, 
            title: "Neotil F", 
            cat: "Medicina Veterinaria", 
            subcat: "Antibióticos", 
            price: 5.57, 
            images: ["/neotil.jpeg"], 
            desc: "Antibiótico en polvo soluble.",
            presentaciones: [
                { id: 86, label: "100 g", price: 5.57 },
                { id: 87, label: "1 kg", price: 43.63 }
            ]
        },
        { id: 88, title: "Pata Negra para cerdos (1 kg)", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", price: 5.59, images: ["/patanegra.webp"], desc: "Suplemento especializado para porcinos." },
        { id: 89, title: "Stop antidiarreico (10 sobres)", cat: "Medicina Veterinaria", subcat: "Medicamentos", price: 11.36, images: ["/stop.jpeg"], desc: "Tratamiento eficaz contra diarreas en animales." },
        { id: 90, title: "Biodil (50 ml)", cat: "Medicina Veterinaria", subcat: "Medicamentos", price: 49.20, images: ["/biodil.jpeg"], desc: "Especialidad veterinaria de alta efectividad." },
        { 
            id: 91, 
            title: "Amitraz Calbos", 
            cat: "Medicina Veterinaria", 
            subcat: "Ectoparasiticidas", 
            price: 12.17, 
            images: ["/amitraz.jpeg"], 
            desc: "Garrapaticida y sarnicida tópico.",
            presentaciones: [
                { id: 91, label: "200 ml", price: 12.17 },
                { id: 92, label: "500 ml", price: 25.80 }
            ]
        },
        { id: 93, title: "Ganasan Baño - cipermetrina 20% (1 litro)", cat: "Medicina Veterinaria", subcat: "Ectoparasiticidas", price: 27.67, images: ["/ciper.jpeg"], desc: "Baño garrapaticida y moscas a base de cipermetrina." },
        { 
            id: 94, 
            title: "Garrabaño", 
            cat: "Medicina Veterinaria", 
            subcat: "Ectoparasiticidas", 
            price: 25.81, 
            images: ["/garrabaño.jpeg"], 
            desc: "Control externo de parásitos.",
            presentaciones: [
                { id: 94, label: "500 ml", price: 25.81 },
                { id: 95, label: "1 litro", price: 49.08 }
            ]
        },
        { id: 96, title: "Na Mosca Ourofino (20 aretes)", cat: "Medicina Veterinaria", subcat: "Ectoparasiticidas", price: 68.88, images: ["/mosca.jpeg"], desc: "Aretes repelentes y controladores de moscas." },
        { 
            id: 97, 
            title: "Flechazo spray", 
            cat: "Medicina Veterinaria", 
            subcat: "Ectoparasiticidas", 
            price: 5.90, 
            images: ["/flecha.jpeg"], 
            desc: "Curandero y repelente en spray.",
            presentaciones: [
                { id: 97, label: "160 ml", price: 5.90 },
                { id: 98, label: "354 ml", price: 8.58 }
            ]
        },
        { id: 99, title: "Lepecid (400 ml)", cat: "Medicina Veterinaria", subcat: "Ectoparasiticidas", price: 7.38, images: ["/lepecid.jpeg"], desc: "Curandero, matagusanos y repelente." },
        { id: 100, title: "Mata Bicheira Calbos* (500 ml)", cat: "Medicina Veterinaria", subcat: "Ectoparasiticidas", price: 5.82, images: ["/mata.jpeg"], desc: "Tratamiento y prevención de gusaneras y bicheras." }
    ];

    const macroCategorias = ["Todos", "Agro", "Medicina Veterinaria"];
    const subCategoriasAgro = ["Alimentación Animal", "Ganadería", "Inversiones", "Semillas", "Cercas Eléctricas", "Herbicidas", "Bioinsumos", "Equipos", "Plandula", "Manuales"];
    const subCategoriasVet = ["Antiparasitarios", "Antibióticos", "Vitaminas y Suplementos", "Ectoparasiticidas", "Medicamentos"];
    const metodosPago = ["Mercantil", "Venezuela", "Banesco", "Pago Móvil", "Efectivo Divisa", "Binance"];

    let busqueda = $state("");
    let macroFiltro = $state("Todos");
    let subFiltro = $state("Todos");
    let metodoPago = $state("Mercantil");
    let carrito = $state<{id: number, title: string, cat: string, price: number | string, cantidad: number}[]>([]);
    let carritoAbierto = $state(false);
    let filtrosMovilAbierto = $state(false);

    let indicesImagenes = $state<Record<number, number>>({});
    // Estado para guardar la presentación seleccionada de cada tarjeta de producto
    let seleccionPresentacion = $state<Record<number, number>>({});

    function cambiarImagen(id: number, delta: number, total: number) {
        const actual = indicesImagenes[id] || 0;
        indicesImagenes[id] = (actual + delta + total) % total;
    }

    let productosFiltrados = $derived(
        productos.filter(p => {
            const cumpleBusqueda = p.title.toLowerCase().includes(busqueda.toLowerCase()) || p.desc.toLowerCase().includes(busqueda.toLowerCase());
            const cumpleMacro = macroFiltro === "Todos" || p.cat === macroFiltro;
            const cumpleSub = subFiltro === "Todos" || p.subcat === subFiltro;
            return cumpleBusqueda && cumpleMacro && cumpleSub;
        })
    );

    let resultadosPredictivos = $derived(
        busqueda.trim().length > 1 ? productos.filter(p => p.title.toLowerCase().includes(busqueda.toLowerCase())).slice(0, 5) : []
    );

    let cantidadTotalItems = $derived(carrito.reduce((acc, item) => acc + item.cantidad, 0));

    function obtenerPrecioEfectivoOBinance(id: number, precioOriginal: number) {
        if (id === 19) return 8;
        if (id === 20) return 4;
        if (id === 21) return 110;
        if (id === 22) return 10;
        if (id === 23) return 15;
        return precioOriginal * 0.9;
    }

    function calcularTotal() {
        const aplicaDescuento = (metodoPago === "Efectivo Divisa" || metodoPago === "Binance");
        return carrito.reduce((acc, c) => {
            if (typeof c.price !== 'number') return acc;
            let precioUnitario = c.price;
            if (aplicaDescuento) {
                if (c.cat === "Medicina Veterinaria") {
                    precioUnitario = c.price;
                } else if ([19, 20, 21, 22, 23].includes(c.id)) {
                    precioUnitario = obtenerPrecioEfectivoOBinance(c.id, c.price);
                } else if (c.id !== 2 && c.id !== 14 && c.id !== 16) {
                    precioUnitario *= 0.9;
                }
            }
            return acc + (precioUnitario * c.cantidad);
        }, 0);
    }

    function agregarAlCarrito(p: any) {
        let precioFinal = p.price;
        let tituloFinal = p.title;
        let idFinal = p.id;

        // Si tiene presentaciones y hay una seleccionada, usar esa
        if (p.presentaciones) {
            const indexPres = seleccionPresentacion[p.id] || 0;
            const presElegida = p.presentaciones[indexPres];
            precioFinal = presElegida.price;
            idFinal = presElegida.id;
            tituloFinal = `${p.title} (${presElegida.label})`;
        }

        const item = carrito.find(c => c.id === idFinal);
        if (item) {
            item.cantidad += 1;
        } else {
            carrito.push({ id: idFinal, title: tituloFinal, cat: p.cat, price: precioFinal, cantidad: 1 });
        }
    }

    function cambiarCantidad(id: number, delta: number) {
        const item = carrito.find(c => c.id === id);
        if (item) {
            item.cantidad = Math.max(1, item.cantidad + delta);
        }
    }

    function eliminar(id: number) {
        carrito = carrito.filter(c => c.id !== id);
    }

    function finalizarCompra() {
        const numeroWhatsApp = "584241860644";
        const total = calcularTotal();
        const mensaje = carrito.map(c => `${c.title} (x${c.cantidad})`).join("%0A");
        const textoTotal = `%0A%0ATotal: $${total.toFixed(2)}%0AMétodo de pago: ${metodoPago}`;
        window.open(`https://wa.me/${numeroWhatsApp}?text=Hola, deseo comprar:%0A${mensaje}${textoTotal}`, "_blank");
        
        carrito = [];
        carritoAbierto = false;
    }
</script>

<div class="px-2 py-3 sm:p-4 md:p-8 max-w-7xl mx-auto bg-stone-50 min-h-screen relative font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
    
    <!-- Cabecera fija con Buscador Predictivo y Filtros Móvil optimizados -->
    <header class="sticky top-0 bg-stone-50/95 backdrop-blur-md z-40 pb-3 pt-2 border-b border-stone-200 mb-4 sm:mb-6">
        <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-4 items-center justify-between">
            <div class="flex items-center justify-between w-full sm:w-auto gap-2">
                <div class="text-sm font-black tracking-tight text-emerald-900 uppercase">Catálogo</div>
                
                <!-- Botón Off-Canvas Filtros (Móvil Ultra Cómodo) -->
                <button on:click={() => filtrosMovilAbierto = true} class="sm:hidden flex items-center gap-1.5 bg-emerald-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-xs active:scale-95 transition-transform touch-manipulation">
                    <Icon icon="mdi:filter-variant" class="text-base"/>
                    <span>Filtros</span>
                    {#if subFiltro !== "Todos" || macroFiltro !== "Todos"}
                        <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                    {/if}
                </button>
            </div>

            <!-- Buscador con Autocompletar Predictivo y Autoscroll -->
            <div class="relative w-full sm:w-96">
                <div class="relative flex items-center">
                    <Icon icon="mdi:magnify" class="absolute left-3.5 text-stone-400 text-lg pointer-events-none"/>
                    <input type="text" bind:value={busqueda} placeholder="Buscar producto, uso o activo..." class="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-2xl border border-stone-200 shadow-xs focus:ring-2 focus:ring-emerald-500 outline-none text-xs sm:text-sm bg-white touch-manipulation" />
                    {#if busqueda}
                        <button on:click={() => busqueda = ""} class="absolute right-3 p-1 text-stone-400 hover:text-stone-600">
                            <Icon icon="mdi:close-circle" class="text-base"/>
                        </button>
                    {/if}
                </div>
                
                {#if resultadosPredictivos.length > 0}
                    <div class="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden z-50 max-h-60 overflow-y-auto">
                        {#each resultadosPredictivos as r}
                            <button on:click={() => { 
                                busqueda = r.title; 
                                busqueda = ""; // Limpiamos la barra o mantenemos el valor para filtrar la vista
                                setTimeout(() => {
                                    const elemento = document.getElementById(`producto-${r.id}`);
                                    if (elemento) {
                                        elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        elemento.classList.add('ring-4', 'ring-emerald-500', 'bg-emerald-50/50');
                                        setTimeout(() => {
                                            elemento.classList.remove('ring-4', 'ring-emerald-500', 'bg-emerald-50/50');
                                        }, 1500);
                                    }
                                }, 100);
                            }} class="w-full text-left px-4 py-3 hover:bg-stone-50 border-b border-stone-50 flex items-center justify-between gap-2 touch-manipulation">
                                <div>
                                    <p class="text-xs font-bold text-stone-800 line-clamp-1">{r.title}</p>
                                    <span class="text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold uppercase">{r.cat} &bull; {r.subcat}</span>
                                </div>
                                <span class="text-xs font-bold text-emerald-800 whitespace-nowrap">{typeof r.price === 'number' ? `$${r.price.toFixed(2)}` : r.price}</span>
                            </button>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>

        <!-- Pestañas de Macro-Categorías (Escritorio) -->
        <div class="hidden sm:flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
            {#each macroCategorias as macro}
                <button on:click={() => { macroFiltro = macro; subFiltro = "Todos"; }} 
                    class="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border {macroFiltro === macro ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs' : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-800'}">
                    {macro}
                </button>
            {/each}
        </div>

        <!-- Subcategorías desplegables (Escritorio) -->
        {#if macroFiltro === "Agro" || macroFiltro === "Medicina Veterinaria"}
            <div class="hidden sm:flex gap-1.5 mt-2 overflow-x-auto pb-1 text-[11px] scrollbar-none">
                <button on:click={() => subFiltro = "Todos"} class="px-3 py-1 rounded-lg font-bold transition-all {subFiltro === 'Todos' ? 'bg-emerald-100 text-emerald-800' : 'bg-white text-stone-500 hover:bg-stone-100'}">Todas</button>
                {#each (macroFiltro === "Agro" ? subCategoriasAgro : subCategoriasVet) as sub}
                    <button on:click={() => subFiltro = sub} class="px-3 py-1 rounded-lg font-bold transition-all whitespace-nowrap {subFiltro === sub ? 'bg-emerald-100 text-emerald-800' : 'bg-white text-stone-500 hover:bg-stone-100'}">{sub}</button>
                {/each}
            </div>
        {/if}
    </header>

    <!-- Drawer Off-Canvas de Filtros (Móvil Ultra Cómodo y Fluido) -->
    {#if filtrosMovilAbierto}
        <div class="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity" on:click={() => filtrosMovilAbierto = false}></div>
        <div class="fixed top-0 left-0 h-full w-[85%] max-w-xs bg-white shadow-2xl z-50 p-4 sm:p-5 flex flex-col transition-transform transform translate-x-0">
            <div class="flex justify-between items-center mb-4 pb-2 border-b border-stone-100">
                <h2 class="font-black text-sm text-stone-900 uppercase tracking-wider">Filtrar Catálogo</h2>
                <button on:click={() => filtrosMovilAbierto = false} class="p-2 rounded-full hover:bg-stone-100 active:bg-stone-200 touch-manipulation">
                    <Icon class="text-stone-600 text-xl" icon="mdi:close"/>
                </button>
            </div>

            <div class="space-y-5 flex-grow overflow-y-auto pr-1">
                <div>
                    <label class="block text-[10px] font-black text-stone-400 mb-2 uppercase tracking-widest">Categoría General</label>
                    <div class="flex flex-col gap-1.5">
                        {#each macroCategorias as macro}
                            <button on:click={() => { macroFiltro = macro; subFiltro = "Todos"; }} class="text-left px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase transition-all touch-manipulation flex items-center justify-between {macroFiltro === macro ? 'bg-emerald-800 text-white shadow-xs' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}">
                                <span>{macro}</span>
                                {#if macroFiltro === macro}<Icon icon="mdi:check" class="text-sm"/>{/if}
                            </button>
                        {/each}
                    </div>
                </div>

                {#if macroFiltro === "Agro" || macroFiltro === "Medicina Veterinaria"}
                    <div>
                        <label class="block text-[10px] font-black text-stone-400 mb-2 uppercase tracking-widest">Subcategoría específica</label>
                        <div class="flex flex-col gap-1">
                            <button on:click={() => subFiltro = "Todos"} class="text-left px-3 py-2 rounded-lg text-xs transition-all touch-manipulation flex items-center justify-between {subFiltro === 'Todos' ? 'bg-emerald-100 text-emerald-900 font-bold' : 'bg-stone-50 text-stone-600'}">
                                <span>Todas</span>
                                {#if subFiltro === 'Todos'}<span class="w-1.5 h-1.5 rounded-full bg-emerald-800"></span>{/if}
                            </button>
                            {#each (macroFiltro === "Agro" ? subCategoriasAgro : subCategoriasVet) as sub}
                                <button on:click={() => subFiltro = sub} class="text-left px-3 py-2 rounded-lg text-xs transition-all touch-manipulation flex items-center justify-between {subFiltro === sub ? 'bg-emerald-100 text-emerald-900 font-bold' : 'bg-stone-50 text-stone-600'}">
                                    <span>{sub}</span>
                                    {#if subFiltro === sub}<span class="w-1.5 h-1.5 rounded-full bg-emerald-800"></span>{/if}
                                </button>
                            {/each}
                        </div>
                    </div>
                {/if}
            </div>

            <div class="pt-3 border-t border-stone-100 flex gap-2">
                <button on:click={() => { macroFiltro = "Todos"; subFiltro = "Todos"; }} class="w-1/3 bg-stone-100 text-stone-600 py-3 rounded-xl font-bold uppercase text-[10px] touch-manipulation">Limpiar</button>
                <button on:click={() => filtrosMovilAbierto = false} class="w-2/3 bg-emerald-800 text-white py-3 rounded-xl font-bold uppercase text-xs shadow-xs touch-manipulation">Ver Resultados</button>
            </div>
        </div>
    {/if}

    <!-- Carrusel de Subcategorías visuales rápido para Móvil -->
    <div class="mb-4 sm:mb-6 overflow-x-auto pb-1 scrollbar-none">
        <div class="flex gap-2 min-w-max">
            <button on:click={() => subFiltro = "Todos"} 
                class="px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-all touch-manipulation {subFiltro === 'Todos' ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs' : 'bg-white text-stone-600 border-stone-200 hover:border-emerald-800'}">
                Todas las subcategorías
            </button>
            {#each (macroFiltro === "Medicina Veterinaria" ? subCategoriasVet : subCategoriasAgro) as subcatVisual}
                <button on:click={() => subFiltro = subFiltro === subcatVisual ? "Todos" : subcatVisual} 
                    class="px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-all touch-manipulation {subFiltro === subcatVisual ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs' : 'bg-white text-stone-600 border-stone-200 hover:border-emerald-800'}">
                    {subcatVisual}
                </button>
            {/each}
        </div>
    </div>

    <!-- Grilla Ultra Responsiva con IDs únicos para el Autoscroll -->
    <!-- Grilla Ultra Responsiva con IDs únicos para el Autoscroll -->
<div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
    {#each productosFiltrados as p}
        <div id="producto-{p.id}" class="bg-white p-2.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-stone-100 shadow-xs hover:shadow-xl transition-all flex flex-col h-full group">
            
            <!-- Imagen o Carrusel -->
            <div class="relative w-full h-28 sm:h-48 mb-2.5 sm:mb-4 bg-stone-100 rounded-xl sm:rounded-2xl overflow-hidden">
                <img src={p.images[indicesImagenes[p.id] || 0]} alt={p.title} class="w-full h-28 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                
                {#if p.images.length > 1}
                    <button on:click={() => cambiarImagen(p.id, -1, p.images.length)} class="absolute left-1 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-800 p-1 rounded-full shadow-md transition-all touch-manipulation">
                        <Icon class="text-xs sm:text-lg" icon="mdi:chevron-left"/>
                    </button>
                    <button on:click={() => cambiarImagen(p.id, 1, p.images.length)} class="absolute right-1 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-800 p-1 rounded-full shadow-md transition-all touch-manipulation">
                        <Icon class="text-xs sm:text-lg" icon="mdi:chevron-right"/>
                    </button>
                    <div class="absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xs text-white text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded-full font-medium">
                        {(indicesImagenes[p.id] || 0) + 1} / {p.images.length}
                    </div>
                {/if}
            </div>

            <div class="flex-grow flex flex-col">
                <h3 class="font-bold text-stone-900 text-xs sm:text-base leading-tight mb-1 line-clamp-2">{p.title}</h3>
                <p class="text-[8px] sm:text-[10px] text-emerald-700 font-bold mb-1.5 sm:mb-2 uppercase tracking-wider">{p.subcat}</p>
                <p class="text-[10px] sm:text-xs text-stone-500 leading-relaxed mb-3 line-clamp-2 sm:line-clamp-3">{p.desc}</p>
            </div>
            
            <!-- Selector de Presentaciones (Si el producto las posee) -->
            {#if p.presentaciones}
                <div class="mb-2">
                    <label class="block text-[8px] sm:text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-1">Presentación:</label>
                    <select bind:value={seleccionPresentacion[p.id]} class="w-full p-1.5 bg-stone-50 rounded-xl text-[10px] sm:text-xs font-bold border border-stone-200 outline-none focus:ring-1 focus:ring-emerald-500 touch-manipulation">
                        {#each p.presentaciones as pres, index}
                            <option value={index}>{pres.label} — ${pres.price.toFixed(2)}</option>
                        {/each}
                    </select>
                </div>
            {/if}

            <div class="mt-auto pt-2.5 sm:pt-4 border-t border-stone-50 flex flex-col gap-1.5">
                <div class="flex items-baseline justify-between gap-1">
                    <span class="font-black text-xs sm:text-xl text-emerald-800">
                        {#if p.presentaciones}
                            ${p.presentaciones[seleccionPresentacion[p.id] || 0].price.toFixed(2)}
                        {:else}
                            {typeof p.price === 'number' ? `$${p.price.toFixed(2)}` : p.price}
                        {/if}
                    </span>
                    {#if p.cat !== "Medicina Veterinaria" && p.id !== 2 && p.id !== 13 && p.id !== 14 && p.id !== 15 && p.id !== 16 && p.id !== 17 && !p.link}
                        <span class="text-[7px] sm:text-[9px] text-stone-400 font-bold uppercase tracking-wider">BCV</span>
                    {/if}
                </div>
                
                {#if p.link}
                    <a href={p.link} target="_blank" rel="noopener noreferrer" class="w-full py-2 bg-emerald-800 text-white hover:bg-emerald-900 font-bold rounded-xl text-[9px] sm:text-xs uppercase tracking-wider transition-all text-center touch-manipulation shadow-xs">VER GUÍA</a>
                {:else}
                    <button on:click={() => agregarAlCarrito(p)} class="w-full py-2 bg-emerald-50 hover:bg-emerald-800 text-emerald-800 hover:text-white border border-emerald-800/20 hover:border-emerald-800 font-bold rounded-xl text-[9px] sm:text-xs uppercase tracking-wider transition-all text-center touch-manipulation active:scale-95">AGREGAR</button>
                {/if}
            </div>
        </div>
    {/each}
</div>

    <!-- Botón Flotante del Carrito (Diseño cómodo y accesible) -->
    <button on:click={() => carritoAbierto = !carritoAbierto} class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-emerald-800 text-white p-4 sm:p-5 rounded-full shadow-2xl hover:bg-emerald-900 active:scale-95 transition-transform z-50 flex items-center justify-center touch-manipulation">
        <Icon class="text-2xl sm:text-3xl" icon="mdi:cart-outline"/>
        {#if cantidadTotalItems > 0}
            <span class="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] sm:text-xs font-black w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {cantidadTotalItems}
            </span>
        {/if}
    </button>

    <!-- Panel Lateral Deslizable (Drawer) del Carrito para todo dispositivo -->
    {#if carritoAbierto}
        <div class="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity" on:click={() => carritoAbierto = false}></div>
        <div class="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-50 p-4 sm:p-6 flex flex-col transition-transform transform translate-x-0">
            <div class="flex justify-between items-center mb-4 sm:mb-6 pb-2 border-b border-stone-100">
                <div class="flex items-center gap-2">
                    <h2 class="font-black text-base sm:text-xl text-stone-900 uppercase">Tu Carrito</h2>
                    <span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">{cantidadTotalItems}</span>
                </div>
                <button on:click={() => carritoAbierto = false} class="p-2 rounded-full hover:bg-stone-100 active:bg-stone-200 touch-manipulation">
                    <Icon class="text-stone-600 text-xl" icon="mdi:close"/>
                </button>
            </div>
            
            {#if carrito.length === 0}
                <div class="text-center py-24 my-auto">
                    <Icon icon="mdi:cart-off" class="text-4xl text-stone-300 mx-auto mb-2"/>
                    <p class="text-stone-400 text-xs sm:text-sm font-medium">Tu carrito está vacío</p>
                </div>
            {:else}
                <div class="space-y-3 flex-grow overflow-y-auto pr-1 mb-4">
                    {#each carrito as item}
                        <div class="flex justify-between items-center bg-stone-50 p-3 rounded-2xl border border-stone-100 gap-2">
                            <div class="w-3/5">
                                <p class="font-bold text-stone-800 text-xs sm:text-sm line-clamp-1">{item.title}</p>
                                <span class="text-[10px] text-emerald-700 font-bold">{typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price} c/u</span>
                            </div>
                            <div class="flex gap-2 items-center">
                                <button on:click={() => cambiarCantidad(item.id, -1)} class="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-stone-200 hover:bg-stone-100 active:scale-95 touch-manipulation font-bold text-xs">-</button>
                                <span class="font-bold w-4 text-center text-xs text-stone-800">{item.cantidad}</span>
                                <button on:click={() => cambiarCantidad(item.id, 1)} class="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-stone-200 hover:bg-stone-100 active:scale-95 touch-manipulation font-bold text-xs">+</button>
                                <button on:click={() => eliminar(item.id)} class="p-1 hover:bg-red-50 rounded-lg transition-colors touch-manipulation">
                                    <Icon class="text-red-500 text-lg" icon="mdi:trash-can-outline"/>
                                </button>
                            </div>
                        </div>
                    {/each}
                </div>
                
                <div class="bg-stone-50 p-3 sm:p-4 rounded-2xl border border-stone-100 mb-4 space-y-3">
                    <div>
                        <label class="block text-[10px] font-black text-stone-400 mb-1.5 uppercase tracking-wider">Método de pago</label>
                        <select bind:value={metodoPago} class="w-full p-2.5 bg-white rounded-xl text-xs font-bold border border-stone-200 outline-none focus:ring-2 focus:ring-emerald-500 touch-manipulation">
                            {#each metodosPago as m}<option value={m}>{m}</option>{/each}
                        </select>
                    </div>

                    <div class="flex justify-between items-center pt-2 border-t border-stone-200/60">
                        <span class="text-xs font-bold text-stone-500 uppercase tracking-wider">Total Final:</span>
                        <span class="text-xl sm:text-2xl font-black text-emerald-800">${calcularTotal().toFixed(2)}</span>
                    </div>
                </div>

                <button on:click={finalizarCompra} class="w-full bg-emerald-800 text-white py-3.5 sm:py-4 rounded-2xl font-black uppercase text-xs sm:text-sm hover:bg-emerald-900 active:scale-95 transition-all tracking-wider shadow-md touch-manipulation flex items-center justify-center gap-2">
                    <Icon icon="mdi:whatsapp" class="text-lg"/>
                    <span>Finalizar pedido por WhatsApp</span>
                </button>
            {/if}
        </div>
    {/if}
</div>