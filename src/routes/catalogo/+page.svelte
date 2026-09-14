<script lang="ts">
    import Icon from "@iconify/svelte";

    const productos: { id: number, title: string, cat: string, price: number | string, images: string[], desc: string, link?: string }[] = [
        // Alimentación Animal
        { id: 1, title: "Harina de Palmiste", cat: "Alimentación Animal", price: 12.9, images: ["/palmiste32.png"], desc: "Presentación de 36.8KG Fuente de proteína y energía ideal para ganado bovino." },
        { id: 7, title: "Silo de maíz", cat: "Alimentación Animal", price: 4, images: ["/silodemaiz2.jpeg"], desc: "Presentación de 30KG, fabricado con maleza y maíz. contiene Silolact." },
        { id: 11, title: "Melaza", cat: "Alimentación Animal", price: 14, images: ["/Melaza.png"], desc: "Mejora la energía y condición corporal de los animales, ideal para Bovinos, búfalos, caballos, ovejas y cabras." },
        
        // Bioinsumos
        { id: 8, title: "SiloLact", cat: "Bioinsumos", price: 70, images: ["/silolact.png"], desc: "Presentación de 500ml. para uso pecuario. Favorece la fermentación y conservación del forraje." },

        // Cercas Eléctricas
        { id: 2, title: "Alambre electrico", cat: "Cercas Eléctricas", price: 170, images: ["/alambrenew.jpeg"], desc: "Para cerco ganadero. Alta conductividad, resistente a corrosión y a la intemperie." },

        // Equipos Agropecuarios
        { id: 9, title: "Bolsas Resistentes", cat: "Equipos Agropecuarios", price: 90, images: ["/bolsas.png"], desc: "200 bolsas. Para hacer silo, capacidad 40KG, Calibre 60x120x20. Equipo resistente para empaque y conservación." },
        { id: 14, title: "Microchip de 2.12 mm", cat: "Equipos Agropecuarios", price: 1, images: ["/chipnew99.png"], desc: "Identificacion de ganado." },
        { id: 16, title: "Lector modelo W90B. 134.2 Khz", cat: "Equipos Agropecuarios", price: 70, images: ["/lectornew.jpeg"], desc: "diseñado para la identificación y trazabilidad de animales" },
        { id: 19, title: "Jeringas plasticas reutilizables", cat: "Equipos Agropecuarios", price: 10, images: ["/jeringa.jpeg"], desc: "De alta durabilidad y fácil limpieza, ideales para dosificación en campo." },
        { id: 20, title: "Aguja ganadera 10 unidades", cat: "Equipos Agropecuarios", price: 6, images: ["/aguja.png"], desc: "Pack de 10 unidades resistentes y de excelente calidad para tratamientos veterinarios." },
        { id: 21, title: "Garrocha para ganado", cat: "Equipos Agropecuarios", price: 130, images: ["/garrocha.png"], desc: "Herramienta resistente y ergonómica para el manejo seguro del rebaño." },
        { 
            id: 22, 
            title: "Medidor de PH digital portátil", 
            cat: "Equipos Agropecuarios", 
            price: 12, 
            images: ["/numero1.jpeg", "/numero2.jpeg", "/numero3.jpeg"], 
            desc: "Medición rápida y precisa del PH en suelos y agua." 
        },
        { 
            id: 23, 
            title: "Botas plásticas Evolution (sin puntera)", 
            cat: "Equipos Agropecuarios", 
            price: 17, 
            images: ["/botas1.jpeg", "/botas2.jpeg"], 
            desc: "Color negro y marrón, alta resistencia para trabajo de campo." 
        },

        // Ganadería
        { id: 13, title: "Bumaute y Bumautas", cat: "Ganadería", price: "Consultar", images: ["/bovino.png"], desc: "Genética seleccionada para mejorar la productividad de tu rebaño." },

        // Herbicidas
        { id: 3, title: "Brega", cat: "Herbicidas", price: 12.65, images: ["/brega.png"], desc: " De 1KG Formulado para el control de melezas en el maíz." },
        { id: 4, title: "Glytotal", cat: "Herbicidas", price: 8.8, images: ["/realgly.png"], desc: " 1 LT. No selectivo, de accion sistematica ideal para el control de malezas de hoja ancha y gramíneas, áreas agrícolas y no agrícolas." },
        { id: 5, title: "Jonrón 212", cat: "Herbicidas", price: 18, images: ["/herbicida.png"], desc: "Envase de 1LT. Envases de 4LT Y 10LT Preguntar disponibilidad y precios. Control efectivo de malezas de hoja ancha y presentación de 1L ideal para potrero." },
        { id: 6, title: "Socio", cat: "Herbicidas", price: 1, images: ["/socio.png"], desc: "De acción sistémica utilizado para control de maleza de hoja ancha y algunas gramíneas." },
        { id: 24, title: "Glytotal 747 WG", cat: "Herbicidas", price: 10.5, images: ["/747gly.jpeg"], desc: "Presentación de 1 KG, formulado para un control amplio y sistémico de malezas." },
        { id: 25, title: "Socio en polvo", cat: "Herbicidas", price: 31, images: ["/socio.jpeg"], desc: "Presentación en polvo de 1 kg para el control eficiente de malezas." },
        { id: 26, title: "24D Amina 6 Proficol", cat: "Herbicidas", price: 28.5, images: ["/amina.jpeg"], desc: "Herbicida hormonal selectivo para el control de malezas de hoja ancha en cultivos." },
        { id: 27, title: "Alisio", cat: "Herbicidas", price: 18, images: ["/alisio.jpeg"], desc: "Presentación de 500 g ideal para aplicaciones agrícolas precisas." },

        // Inversiones y tierras
        { id: 15, title: "Venta de tierras y asesoría", cat: "Inversiones y tierras", price: "Consultar", images: ["/R.jpg"], desc: "Tu socio estratégico en el sector agropecuario." },

        // Manuales Digitales
        { id: 18, title: "Guía de alimentación para uso adecuando de harina de palmiste", cat: "Manuales Digitales", price: "", images: ["/logo.png"], desc: "Guía completa en formato digital para optimizar la producción pecuaria.", link: "https://online.fliphtml5.com/fjomd/zejc/" },

        // Pastos y Semillas
        { id: 10, title: "Semilla de maíz", cat: "Pastos y Semillas", price: 150, images: ["/semilla.png"], desc: "Semillas seleccionadas de alta calidad para un rendimiento óptimo en campo." },
        { id: 12, title: "Semilla de pasto Matsuda", cat: "Pastos y Semillas", price: 12.6, images: ["/semilladepasto.png"], desc: " Presentación de 20KG. Balance mineral necesario para el desarrollo animal, buena genética." },

        // Plandula
        { id: 17, title: "Plandula In vitro", cat: "Plandula", price: "Consultar", images: ["/pendula.jpeg"], desc: "Geoplasma exclusivo." },

        // Veterinaria
        { id: 28, title: "Albendazol 25% + Co (100 ml)", cat: "Veterinaria", price: 9.69, images: ["/albendazol25.jpeg"], desc: "Antiparasitario interno de amplio espectro con cobalto." },
        { id: 29, title: "Albendazol 25% + Co (500 ml)", cat: "Veterinaria", price: 27.68, images: ["/albendazol25.jpeg"], desc: "Presentación de 500 ml de antiparasitario interno con cobalto." },
        { id: 30, title: "Albendazol 25% + Co (1 litro)", cat: "Veterinaria", price: 52.31, images: ["/albendazol25.jpeg"], desc: "Presentación de 1 litro de antiparasitario interno con cobalto." },
        { id: 31, title: "Calbendazole 10% (1 litro)", cat: "Veterinaria", price: 25.55, images: ["/calbe.jpeg"], desc: "Control efectivo de parásitos gastrointestinales y pulmonares." },
        { id: 32, title: "Ivermin pasta oral (6 g)", cat: "Veterinaria", price: 4.80, images: ["/invermin.jpeg"], desc: "Ivermectina en pasta oral para dosificación precisa." },
        { id: 33, title: "Vermigan - ricobendazol (500 ml)", cat: "Veterinaria", price: 31.67, images: ["/vermigan.jpeg"], desc: "Ricobendazol al 15% para el tratamiento de parásitos internos." },
        { id: 34, title: "Calbomax - doramectina (50 ml)", cat: "Veterinaria", price: 9.52, images: ["/calbo50.jpeg"], desc: "Endectocida de acción prolongada a base de doramectina." },
        { id: 35, title: "Calbomax - doramectina (250 ml)", cat: "Veterinaria", price: 34.65, images: ["/calbo250.jpeg"], desc: "Presentación de 250 ml de doramectina." },
        { id: 36, title: "Calbomax - doramectina (500 ml)", cat: "Veterinaria", price: 59.00, images: ["/calbo500.jpeg"], desc: "Presentación de 500 ml de doramectina de amplio espectro." },
        { id: 37, title: "Dectomax (50 ml)", cat: "Veterinaria", price: 16.40, images: ["/dectomax.jpeg"], desc: "Solución inyectable de doramectina original." },
        { id: 38, title: "Dectomax (250 ml)", cat: "Veterinaria", price: 75.44, images: ["/dectomax.jpeg"], desc: "Frasco de 250 ml de doramectina Dectomax." },
        { id: 39, title: "Dectomax (500 ml)", cat: "Veterinaria", price: 123.00, images: ["/deto2.jpg"], desc: "Frasco de 500 ml de doramectina Dectomax." },
        { id: 40, title: "Dectomec Gold - ivermectina 3,15% (100 ml)", cat: "Veterinaria", price: 9.13, images: ["/dectomec.jpeg"], desc: "Ivermectina de alta concentración al 3,15%." },
        { id: 41, title: "Dectomec Gold - ivermectina 3,15% (500 ml)", cat: "Veterinaria", price: 31.67, images: ["/dectomec.jpeg"], desc: "Presentación de 500 ml de ivermectina 3,15%." },
        { id: 42, title: "Dectomec Max - doramectina 2% (100 ml)", cat: "Veterinaria", price: 16.79, images: ["/dectomec.jpeg"], desc: "Doramectina al 2% inyectable." },
        { id: 43, title: "Dectomec Max - doramectina 2% (500 ml)", cat: "Veterinaria", price: 70.06, images: ["/dectomec.jpeg"], desc: "Presentación de 500 ml de doramectina al 2%." },
        { id: 44, title: "Ivermin Gold 3.15 (500 ml)", cat: "Veterinaria", price: 39.57, images: ["/gold500.jpeg"], desc: "Ivermectina de larga acción y alta concentración." },
        { id: 45, title: "Ivermin (50 ml)", cat: "Veterinaria", price: 3.99, images: ["/50.jpeg"], desc: "Ivermectina estándar presentación de 50 ml." },
        { id: 46, title: "Ivermin (200 ml)", cat: "Veterinaria", price: 9.56, images: ["/gold200.jpeg"], desc: "Ivermectina presentación de 200 ml." },
        { id: 47, title: "Ivermin (500 ml)", cat: "Veterinaria", price: 21.68, images: ["/50.jpeg"], desc: "Ivermectina presentación económica de 500 ml." },
        { id: 48, title: "Bactermisil 20% (250 ml)", cat: "Veterinaria", price: 10.57, images: ["/biomisil.webp"], desc: "Antibiótico de amplio espectro." },
        { id: 49, title: "Bactermisil 20% (1 litro)", cat: "Veterinaria", price: 30.73, images: ["/biomisil.webp"], desc: "Presentación de 1 litro de antibiótico." },
        { id: 50, title: "Flocherry 30% (100 ml)", cat: "Veterinaria", price: 18.59, images: ["/cherry.jpg"], desc: "Florfenicol al 30% para infecciones respiratorias." },
        { id: 51, title: "Oxitetraciclina 5% Cherry (100 ml)", cat: "Veterinaria", price: 5.02, images: ["/oxi.jpeg"], desc: "Antibiótico inyectable de acción corta." },
        { id: 52, title: "Oxitetraciclina 5% Cherry (500 ml)", cat: "Veterinaria", price: 18.63, images: ["/oxi500.jpeg"], desc: "Presentación de 500 ml de oxitetraciclina 5%." },
        { id: 53, title: "Oxitetraciclina LA 20% Cherry (100 ml)", cat: "Veterinaria", price: 8.70, images: ["/oxi20.jpeg"], desc: "Oxitetraciclina de larga acción 20%." },
        { id: 54, title: "Oxitetraciclina LA 20% Cherry (250 ml)", cat: "Veterinaria", price: 17.07, images: ["/oxi250.jpeg"], desc: "Presentación de 250 ml de oxitetraciclina LA." },
        { id: 55, title: "Babecide (100 ml)", cat: "Veterinaria", price: 8.50, images: ["/babepeque.jpeg"], desc: "Hemoparasiticida para el control de babesiosis y anaplasmosis." },
        { id: 56, title: "Babecide (250 ml)", cat: "Veterinaria", price: 19.95, images: ["/babepeque.jpeg"], desc: "Presentación de 250 ml de Babecide." },
        { id: 57, title: "Babecide (500 ml)", cat: "Veterinaria", price: 36.75, images: ["/babe500.jpeg"], desc: "Presentación de 500 ml de Babecide." },
        { id: 58, title: "Complejo B B12-B15 (20 ml)", cat: "Veterinaria", price: 6.32, images: ["/complejo.jpeg"], desc: "Vitamínico reconstituyente." },
        { id: 59, title: "Complejo B B12-B15 (100 ml)", cat: "Veterinaria", price: 20.79, images: ["/complejo.jpeg"], desc: "Presentación de 100 ml de Complejo B." },
        { id: 60, title: "Complejo B B12-B15 (250 ml)", cat: "Veterinaria", price: 34.69, images:["/complejo.jpeg"], desc: "Presentación de 250 ml de Complejo B." },
        { id: 61, title: "Energizante vitamínico (25 ml)", cat: "Veterinaria", price: 6.88, images: ["/energi.jpeg"], desc: "Bebida o inyectable energizante y vitamínico." },
        { id: 62, title: "Energizante vitamínico (100 ml)", cat: "Veterinaria", price: 16.69, images:  ["/energi.jpeg"], desc: "Presentación de 100 ml energizante." },
        { id: 63, title: "Energizante vitamínico (250 ml)", cat: "Veterinaria", price: 31.17, images: ["/energi2.jpeg"], desc: "Presentación de 250 ml energizante." },
        { id: 64, title: "Hemo 15 (100 ml)", cat: "Veterinaria", price: 41.13, images: ["/hemo15.jpeg"], desc: "Suplemento hematopoyético y vitamínico." },
        { id: 65, title: "Minerfun F.M. (100 ml)", cat: "Veterinaria", price: 11.01, images: ["/minerfm.jpeg"], desc: "Suplemento mineral y vitamínico." },
        { id: 66, title: "Minerfun F.M. (500 ml)", cat: "Veterinaria", price: 34.59, images: ["/minerfm.jpeg"], desc: "Presentación de 500 ml Minerfun F.M." },
        { id: 67, title: "Minerfun MX (250 ml)", cat: "Veterinaria", price: 40.58, images: ["/minermx.jpeg"], desc: "Suplemento mineral avanzado." },
        { id: 68, title: "Minerfun MX (500 ml)", cat: "Veterinaria", price: 70.74, images: ["/minermx2.jpeg"], desc: "Presentación de 500 ml Minerfun MX." },
        { id: 69, title: "Minerfun Plus con selenio (100 ml)", cat: "Veterinaria", price: 14.14, images: ["/miner100.jpeg"], desc: "Suplemento con minerales y selenio." },
        { id: 70, title: "Minerfun Plus con selenio (250 ml)", cat: "Veterinaria", price: 25.15, images: ["/miner250.jpeg"], desc: "Presentación de 250 ml con selenio." },
        { id: 71, title: "Minerfun Plus con selenio (500 ml)", cat: "Veterinaria", price: 42.45, images: ["/miner500.jpeg"], desc: "Presentación de 500 ml con selenio." },
        { id: 72, title: "Olivitasan (25 ml)", cat: "Veterinaria", price: 4.91, images: ["/oli25.jpeg"], desc: "Reconstituyente general." },
        { id: 73, title: "Olivitasan (100 ml)", cat: "Veterinaria", price: 10.42, images: ["/oli250.jpeg"], desc: "Presentación de 100 ml de Olivitasan." },
        { id: 74, title: "Olivitasan (300 ml)", cat: "Veterinaria", price: 21.13, images: ["/oli250.jpeg"], desc: "Presentación de 300 ml de Olivitasan." },
        { id: 75, title: "Olivitasan (500 ml)", cat: "Veterinaria", price: 31.82, images: ["/oli500.jpeg"], desc: "Presentación de 500 ml de Olivitasan." },
        { id: 76, title: "Olivitasan Plus (250 ml)", cat: "Veterinaria", price: 37.60, images: ["/oli250plus.jpeg"], desc: "Fórmula reforzada Olivitasan Plus." },
        { id: 77, title: "Olivitasan Plus (500 ml)", cat: "Veterinaria", price: 64.60, images: ["/oliplus500.jpeg"], desc: "Presentación de 500 ml Olivitasan Plus." },
        { id: 78, title: "Vitamina B12 5000 importada (50 ml)", cat: "Veterinaria", price: 34.39, images: ["/b5000.jpeg"], desc: "Vitamina B12 de alta potencia importada." },
        { id: 79, title: "Fortemax (500 ml)", cat: "Veterinaria", price: 23.37, images: ["/fortemax.jpeg"], desc: "Reconstituyente y energizante general." },
        { id: 80, title: "Levantol (500 ml)", cat: "Veterinaria", price: 11.34, images: ["/levanton.jpeg"], desc: "Tónico general y estimulante." },
        { id: 81, title: "Modificador Orgánico Toro (100 ml)", cat: "Veterinaria", price: 6.24, images: ["/modi.jpeg"], desc: "Mejora el metabolismo y ganancia de peso." },
        { id: 82, title: "Modificador Orgánico Toro (500 ml)", cat: "Veterinaria", price: 18.24, images: ["/modi.jpeg"], desc: "Presentación de 500 ml Modificador Orgánico Toro." },
        { id: 83, title: "Buta Cal (100 ml)", cat: "Veterinaria", price: 12.08, images: ["/buta.jpeg"], desc: "Analgésico, antipirético y antirreumático." },
        { id: 84, title: "Dex-Cal - dexametasona (100 ml)", cat: "Veterinaria", price: 8.82, images: ["/dexcal.jpeg"], desc: "Corticoide de acción prolongada." },
        { id: 85, title: "Dibrosal expectorante (1 kg)", cat: "Veterinaria", price: 11.18, images: ["/dibrosal.jpeg"], desc: "Expectorante en polvo para problemas respiratorios." },
        { id: 86, title: "Neotil F (100 g)", cat: "Veterinaria", price: 4.64, images: ["/neotil.jpeg"], desc: "Antibiótico en polvo soluble." },
        { id: 87, title: "Neotil F (1 kg)", cat: "Veterinaria", price: 36.36, images: ["/neotil.jpeg"], desc: "Presentación de 1 kg de Neotil F." },
        { id: 88, title: "Pata Negra para cerdos (1 kg)", cat: "Veterinaria", price: 4.66, images: ["/patanegra.webp"], desc: "Suplemento especializado para porcinos." },
        { id: 89, title: "Stop antidiarreico (10 sobres)", cat: "Veterinaria", price: 9.47, images: ["/logo.png"], desc: "Tratamiento eficaz contra diarreas en animales." },
        { id: 90, title: "Biodil (50 ml)", cat: "Veterinaria", price: 41.00, images: ["/logo.png"], desc: "Especialidad veterinaria de alta efectividad." },
        { id: 91, title: "Amitraz Calbos (200 ml)", cat: "Veterinaria", price: 10.14, images: ["/logo.png"], desc: "Garrapaticida y sarnicida tópico." },
        { id: 92, title: "Amitraz Calbos (500 ml)", cat: "Veterinaria", price: 21.50, images: ["/logo.png"], desc: "Presentación de 500 ml de Amitraz Calbos." },
        { id: 93, title: "Ganasan Baño - cipermetrina 20% (1 litro)", cat: "Veterinaria", price: 23.06, images: ["/logo.png"], desc: "Baño garrapaticida y moscas a base de cipermetrina." },
        { id: 94, title: "Garrabaño (500 ml)", cat: "Veterinaria", price: 21.51, images: ["/logo.png"], desc: "Control externo de parásitos en presentación de 500 ml." },
        { id: 95, title: "Garrabaño (1 litro)", cat: "Veterinaria", price: 40.90, images: ["/logo.png"], desc: "Control externo de parásitos en presentación de 1 litro." },
        { id: 96, title: "Na Mosca Ourofino (20 aretes)", cat: "Veterinaria", price: 57.40, images: ["/logo.png"], desc: "Aretes repelentes y controladores de moscas." },
        { id: 97, title: "Flechazo spray (160 ml)", cat: "Veterinaria", price: 4.92, images: ["/logo.png"], desc: "Curandero y repelente en spray." },
        { id: 98, title: "Flechazo spray (354 ml)", cat: "Veterinaria", price: 7.15, images: ["/logo.png"], desc: "Presentación de 354 ml de Flechazo spray." },
        { id: 99, title: "Lepecid (400 ml)", cat: "Veterinaria", price: 6.15, images: ["/logo.png"], desc: "Curandero, matagusanos y repelente." },
        { id: 100, title: "Mata Bicheira Calbos* (500 ml)", cat: "Veterinaria", price: 4.85, images: ["/logo.png"], desc: "Tratamiento y prevención de gusaneras y bicheras." }
    ];

    const categorias = ["Todos", "Alimentación Animal", "Ganadería", "Inversiones y tierras", "Pastos y Semillas", "Cercas Eléctricas", "Fertilizantes", "Herbicidas", "Insecticidas", "Fungicidas", "Bioinsumos", "Equipos Agropecuarios", "Plandula", "Manuales Digitales", "Promociones", "Novedades", "Veterinaria" ];
    const metodosPago = ["Mercantil", "Venezuela", "Banesco", "Pago Móvil", "Efectivo Divisa", "Binance"];

    let busqueda = $state("");
    let filtroCat = $state("Todos");
    let metodoPago = $state("Mercantil");
    let carrito = $state<{id: number, title: string, price: number | string, cantidad: number}[]>([]);
    let carritoAbierto = $state(false);

    let indicesImagenes = $state<Record<number, number>>({});

    function cambiarImagen(id: number, delta: number, total: number) {
        const actual = indicesImagenes[id] || 0;
        indicesImagenes[id] = (actual + delta + total) % total;
    }

    let productosFiltrados = $derived(
        productos.filter(p => 
            (filtroCat === "Todos" || p.cat === filtroCat) &&
            p.title.toLowerCase().includes(busqueda.toLowerCase())
        )
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
                if ([19, 20, 21, 22, 23].includes(c.id)) {
                    precioUnitario = obtenerPrecioEfectivoOBinance(c.id, c.price);
                } else if (c.id !== 2 && c.id !== 14 && c.id !== 16) {
                    precioUnitario *= 0.9;
                }
            }
            return acc + (precioUnitario * c.cantidad);
        }, 0);
    }

    function agregarAlCarrito(p: any) {
        const item = carrito.find(c => c.id === p.id);
        if (item) item.cantidad += 1;
        else carrito.push({ ...p, cantidad: 1 });
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

<div class="px-3 py-4 sm:p-6 md:p-8 max-w-7xl mx-auto bg-stone-50 min-h-screen relative">
    <input type="text" bind:value={busqueda} placeholder="Buscar productos..." class="w-full p-3 sm:p-4 mb-4 rounded-xl sm:rounded-2xl border border-stone-200 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none text-xs sm:text-sm bg-white" />
    
    <!-- Categorías: Selector desplegable en móvil y botones de grilla en pantallas medianas/grandes -->
    <div class="mb-6 sm:mb-10">
        <!-- Vista Móvil: Selector desplegable completo sin desbordes -->
        <div class="block sm:hidden">
            <label class="block text-[10px] font-bold text-stone-400 mb-1.5 uppercase tracking-wider">Filtrar por categoría</label>
            <select bind:value={filtroCat} class="w-full p-3 bg-white rounded-xl text-xs font-bold border border-stone-200 shadow-sm outline-none text-stone-800">
                {#each categorias as cat}
                    <option value={cat}>{cat}</option>
                {/each}
            </select>
        </div>

        <!-- Vista Tablet / Escritorio: Botones originales en grilla -->
        <div class="hidden sm:grid sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {#each categorias as cat}
                <button on:click={() => filtroCat = cat} 
                    class="px-3 py-3 rounded-xl text-[10px] md:text-xs font-bold uppercase transition-all shadow-sm border {filtroCat === cat ? 'bg-emerald-800 text-white border-emerald-800' : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-800 hover:text-emerald-800'}">
                    {cat}
                </button>
            {/each}
        </div>
    </div>

    <!-- Catálogo de 2 columnas en móviles (grid-cols-2) y adaptativo en pantallas grandes -->
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {#each productosFiltrados as p}
            <div class="bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                <!-- Imagen o Carrusel de Imágenes -->
                <div class="relative w-full h-32 sm:h-48 mb-3 sm:mb-4">
                    <img src={p.images[indicesImagenes[p.id] || 0]} alt={p.title} class="w-full h-32 sm:h-48 object-cover rounded-xl sm:rounded-2xl bg-stone-100" />
                    
                    {#if p.images.length > 1}
                        <button on:click={() => cambiarImagen(p.id, -1, p.images.length)} class="absolute left-1.5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-1 rounded-full shadow-md transition-all">
                            <Icon class="text-sm sm:text-lg" icon="mdi:chevron-left"/>
                        </button>
                        <button on:click={() => cambiarImagen(p.id, 1, p.images.length)} class="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-1 rounded-full shadow-md transition-all">
                            <Icon class="text-sm sm:text-lg" icon="mdi:chevron-right"/>
                        </button>
                        <div class="absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-black/50 text-white text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded-full">
                            {(indicesImagenes[p.id] || 0) + 1} / {p.images.length}
                        </div>
                    {/if}
                </div>

                <div class="flex-grow">
                    <h3 class="font-bold text-stone-900 text-xs sm:text-lg leading-tight mb-1 line-clamp-2">{p.title}</h3>
                    <p class="text-[8px] sm:text-[10px] text-emerald-700 font-bold mb-2 sm:mb-3 uppercase tracking-wider">{p.cat}</p>
                    <p class="text-[10px] sm:text-xs text-stone-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3">{p.desc}</p>
                </div>
                
                <div class="mt-auto pt-3 sm:pt-4 border-t border-stone-50">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-1">
                        <span class="font-black text-sm sm:text-xl text-emerald-800">{typeof p.price === 'number' ? `$${p.price}` : p.price}</span>
                        
                        {#if p.link}
                            <a href={p.link} target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-3 sm:px-5 py-1.5 sm:py-2 bg-emerald-800 text-white hover:bg-emerald-900 font-bold rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] uppercase tracking-[0.2em] transition-all duration-300 text-center">VER</a>
                        {:else}
                            <button on:click={() => agregarAlCarrito(p)} class="w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2 border border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white font-bold rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] uppercase tracking-[0.2em] transition-all duration-300 text-center">AGREGAR</button>
                        {/if}
                    </div>
                    {#if p.id !== 2 && p.id !== 13 && p.id !== 14 && p.id !== 15 && p.id !== 16 && p.id !== 17 && !p.link}
                        <p class="text-[8px] sm:text-[9px] text-stone-400 font-bold uppercase tracking-wider">TASA BCV</p>
                    {/if}
                </div>
            </div>
        {/each}
    </div>

    <!-- Botón Flotante del Carrito -->
    <button on:click={() => carritoAbierto = !carritoAbierto} class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-emerald-800 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:bg-emerald-900 transition-all z-50 flex items-center justify-center gap-2 group">
        <Icon class="text-xl sm:text-2xl" icon="mdi:cart-outline"/>
        {#if cantidadTotalItems > 0}
            <span class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shadow-md">
                {cantidadTotalItems}
            </span>
        {/if}
    </button>

    <!-- Panel Lateral Deslizable (Drawer) del Carrito -->
    {#if carritoAbierto}
        <div class="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity" on:click={() => carritoAbierto = false}></div>
        <div class="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 p-4 sm:p-6 flex flex-col transition-transform transform translate-x-0">
            <div class="flex justify-between items-center mb-6">
                <h2 class="font-black text-lg sm:text-xl text-stone-900 uppercase">Carrito</h2>
                <button on:click={() => carritoAbierto = false} class="p-2 rounded-full hover:bg-stone-100">
                    <Icon class="text-stone-500 text-xl" icon="mdi:close"/>
                </button>
            </div>
            
            {#if carrito.length === 0}
                <div class="text-center py-20 my-auto"><p class="text-stone-400 text-sm italic">Tu carrito está vacío</p></div>
            {:else}
                <div class="space-y-4 flex-grow overflow-y-auto pr-2 mb-6">
                    {#each carrito as item}
                        <div class="flex justify-between items-center text-xs sm:text-sm pb-2 border-b border-stone-50 gap-2">
                            <span class="font-medium text-stone-700 w-1/2">{item.title}</span>
                            <div class="flex gap-2 items-center">
                                <button on:click={() => cambiarCantidad(item.id, -1)} class="w-6 h-6 flex items-center justify-center rounded border border-stone-200 hover:bg-stone-100">-</button>
                                <span class="font-bold w-4 text-center text-xs">{item.cantidad}</span>
                                <button on:click={() => cambiarCantidad(item.id, 1)} class="w-6 h-6 flex items-center justify-center rounded border border-stone-200 hover:bg-stone-100">+</button>
                                <button on:click={() => eliminar(item.id)}><Icon class="text-red-500 text-lg" icon="mdi:close"/></button>
                            </div>
                        </div>
                    {/each}
                </div>
                
                <div class="mb-4">
                    <label class="block text-[10px] font-bold text-stone-400 mb-2 uppercase">Método de pago</label>
                    <select bind:value={metodoPago} class="w-full p-2.5 sm:p-2 bg-stone-100 rounded-lg text-xs font-bold border-none outline-none">
                        {#each metodosPago as m}<option value={m}>{m}</option>{/each}
                    </select>
                </div>

                <div class="text-right mb-6">
                    <p class="text-[10px] text-stone-400 uppercase">Total con descuento aplicado</p>
                    <span class="text-xl sm:text-2xl font-black text-emerald-800">${calcularTotal().toFixed(2)}</span>
                </div>

                <button on:click={finalizarCompra} class="w-full bg-emerald-800 text-white py-3.5 sm:py-4 rounded-xl font-bold uppercase text-xs hover:bg-emerald-900 transition-all tracking-[0.1em]">Finalizar pedido</button>
            {/if}
        </div>
    {/if}
</div>