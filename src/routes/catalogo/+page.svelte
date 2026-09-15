<script lang="ts">
    import Icon from "@iconify/svelte";

    interface Variante {
        id: number;
        volumen: string;
        price: number;
        desc: string;
        images: string[];
    }

    interface ProductoAgrupado {
        tituloBase: string;
        cat: string;
        subcat: string;
        variantes: Variante[];
    }

    const productosCatalogo: ProductoAgrupado[] = [
        { tituloBase: "Harina de Palmiste", cat: "Agro", subcat: "Alimentación Animal", variantes: [{ id: 1, volumen: "36.8 KG", price: 12.9, images: ["/palmiste32.png"], desc: "Presentación de 36.8 KG. Fuente de proteína y energía ideal para ganado bovino." }] },
        { tituloBase: "Silo de maíz", cat: "Agro", subcat: "Alimentación Animal", variantes: [{ id: 7, volumen: "30 KG", price: 4, images: ["/silodemaiz2.jpeg"], desc: "Presentación de 30 KG,Contiene SiloLact." }] },
        { tituloBase: "Melaza", cat: "Agro", subcat: "Alimentación Animal", variantes: [{ id: 11, volumen: "Estándar", price: 14, images: ["/Melaza.png"], desc: "Mejora la energía y condición corporal de los animales, ideal para bovinos, búfalos, caballos, ovejas y cabras." }] },
        { tituloBase: "SiloLact", cat: "Agro", subcat: "Bioinsumos", variantes: [{ id: 8, volumen: "500 ml", price: 70, images: ["/silolact.png"], desc: "Presentación de 500 ml para uso pecuario. Favorece la fermentación y conservación del forraje." }] },
        { tituloBase: "Alambre eléctrico", cat: "Agro", subcat: "Cercas Eléctricas", variantes: [{ id: 2, volumen: "Estándar", price: 170, images: ["/alambrenew.jpeg"], desc: "Para cerco ganadero. Alta conductividad, resistente a la corrosión y a la intemperie." }] },
        { tituloBase: "Bolsas Resistentes", cat: "Agro", subcat: "Equipos", variantes: [{ id: 9, volumen: "200 bolsas", price: 90, images: ["/bolsas.png"], desc: "200 bolsas para ensilaje, capacidad de 40 KG, calibre 60x120x20. Resistentes para empaque y conservación." }] },
        { tituloBase: "Microchip de 2.12 mm", cat: "Agro", subcat: "Equipos", variantes: [{ id: 14, volumen: "2.12 mm", price: 0, images: ["/chipnew99.png"], desc: "Identificación de ganado (Precio a consultar)." }] },
        { tituloBase: "Lector modelo W90B. 134.2 Khz", cat: "Agro", subcat: "Equipos", variantes: [{ id: 16, volumen: "W90B", price: 70, images: ["/lectornew.jpeg"], desc: "Diseñado para la identificación y trazabilidad avanzada de animales." }] },
        { tituloBase: "Jeringas plásticas reutilizables", cat: "Agro", subcat: "Equipos", variantes: [{ id: 19, volumen: "Estándar", price: 10, images: ["/jeringa.jpeg"], desc: "De alta durabilidad y fácil limpieza, ideales para dosificación en campo." }] },
        { tituloBase: "Aguja ganadera 10 unidades", cat: "Agro", subcat: "Equipos", variantes: [{ id: 20, volumen: "Pack 10u", price: 6, images: ["/aguja.png"], desc: "Pack de 10 unidades resistentes y de excelente calidad para tratamientos veterinarios." }] },
        { tituloBase: "Garrocha para ganado", cat: "Agro", subcat: "Equipos", variantes: [{ id: 21, volumen: "Estándar", price: 130, images: ["/garrocha.png"], desc: "Herramienta resistente y ergonómica para el manejo seguro del rebaño." }] },
        { tituloBase: "Medidor de pH digital portátil", cat: "Agro", subcat: "Equipos", variantes: [{ id: 22, volumen: "Estándar", price: 12, images: ["/numero1.jpeg", "/numero2.jpeg", "/numero3.jpeg"], desc: "Medición rápida y precisa del pH en suelos y agua." }] },
        { tituloBase: "Botas plásticas Evolution (sin puntera)", cat: "Agro", subcat: "Equipos", variantes: [{ id: 23, volumen: "Par", price: 17, images: ["/botas1.jpeg", "/botas2.jpeg"], desc: "Colores negro y marrón, alta resistencia para trabajo pesado de campo." }] },
        { tituloBase: "Bumaute y Bumautas", cat: "Agro", subcat: "Ganadería", variantes: [{ id: 13, volumen: "Estándar", price: 0, images: ["/bovino.png"], desc: "Genética seleccionada para mejorar la productividad de tu rebaño." }] },
        { tituloBase: "Brega", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 3, volumen: "1 KG", price: 12.65, images: ["/brega.png"], desc: "Presentación de 1 KG. Formulado para el control de malezas en el maíz." }] },
        { tituloBase: "Glytotal", cat: "Agro", subcat: "Herbicidas", variantes: [
            { id: 4, volumen: "1 LT", price: 8.8, images: ["/realgly.png"], desc: "1 LT. No selectivo, de acción sistémica, ideal para el control de malezas de hoja ancha y gramíneas." },
            { id: 24, volumen: "747 WG (1 KG)", price: 10.5, images: ["/747gly.jpeg"], desc: "Presentación de 1 KG, formulado para un control amplio y sistémico de malezas." }
        ]},
        { tituloBase: "Jonrón 212", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 5, volumen: "1 LT", price: 18, images: ["/herbicida.png"], desc: "Envase de 1 LT. Disponibles también en 4 LT y 10 LT. Preguntar disponibilidad y precios." }] },
        { tituloBase: "Socio", cat: "Agro", subcat: "Herbicidas", variantes: [
            { id: 6, volumen: "Líquido", price: 0, images: ["/socio.png"], desc: "De acción sistémica utilizado para control de malezas de hoja ancha y algunas gramíneas (Precio a consultar)." },
            { id: 25, volumen: "En polvo (1 kg)", price: 31, images: ["/socio.jpeg"], desc: "Presentación en polvo de 1 kg para el control eficiente de malezas." }
        ]},
        { tituloBase: "24D Amina 6 Proficol", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 26, volumen: "Estándar", price: 28.5, images: ["/amina.jpeg"], desc: "Herbicida hormonal selectivo para el control de malezas de hoja ancha en cultivos." }] },
        { tituloBase: "Alisio", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 27, volumen: "500 g", price: 18, images: ["/alisio.jpeg"], desc: "Presentación de 500 g ideal para aplicaciones agrícolas precisas." }] },
        { tituloBase: "Venta de tierras y asesoría", cat: "Agro", subcat: "Inversiones", variantes: [{ id: 15, volumen: "Estándar", price: 0, images: ["/R.jpg"], desc: "Tu socio estratégico en el sector agropecuario." }] },
        { tituloBase: "Guía de alimentación para uso adecuado de harina de palmiste", cat: "Agro", subcat: "Manuales", variantes: [{ id: 18, volumen: "Digital", price: 0, images: ["/manual2.jpeg"], desc: "Guía completa en formato digital para optimizar la producción pecuaria.", link: "https://online.fliphtml5.com/fjomd/zejc/" } as any] },
        { tituloBase: "Semilla de maíz", cat: "Agro", subcat: "Semillas", variantes: [{ id: 10, volumen: "Estándar", price: 150, images: ["/semilla.png"], desc: "Semillas seleccionadas de alta calidad para un rendimiento óptimo en campo." }] },
        { tituloBase: "Semilla de pasto Matsuda", cat: "Agro", subcat: "Semillas", variantes: [{ id: 12, volumen: "20 KG", price: 12.6, images: ["/semilladepasto.png"], desc: "Presentación de 20 KG. Semillas de pasto." }] },
        { tituloBase: "Plántula In vitro", cat: "Agro", subcat: "Plántula", variantes: [{ id: 17, volumen: "Estándar", price: 0, images: ["/pendula.jpeg"], desc: "Germoplasma exclusivo." }] },

        // Medicina Veterinaria
        { tituloBase: "Albendazol 25% + Co", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", variantes: [
            { id: 28, volumen: "100 ml", price: 11.63, images: ["/albendazol25.jpeg"], desc: "Antiparasitario interno de amplio espectro con cobalto." },
            { id: 29, volumen: "500 ml", price: 33.22, images: ["/albendazol25.jpeg"], desc: "Presentación de 500 ml de antiparasitario interno con cobalto." },
            { id: 30, volumen: "1 Litro", price: 62.77, images: ["/albendazol25.jpeg"], desc: "Presentación de 1 litro de antiparasitario interno con cobalto." }
        ]},
        { tituloBase: "Calbendazole 10%", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", variantes: [{ id: 31, volumen: "1 Litro", price: 30.66, images: ["/calbe.jpeg"], desc: "Control efectivo de parásitos gastrointestinales y pulmonares." }] },
        { tituloBase: "Ivermin pasta oral", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", variantes: [{ id: 32, volumen: "6 g", price: 5.76, images: ["/invermin.jpeg"], desc: "Ivermectina en pasta oral para dosificación precisa." }] },
        { tituloBase: "Vermigan - ricobendazol", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", variantes: [{ id: 33, volumen: "500 ml", price: 38.00, images: ["/vermigan.jpeg"], desc: "Ricobendazol al 15% para el tratamiento de parásitos internos." }] },
        { tituloBase: "Calbomax - doramectina", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", variantes: [
            { id: 34, volumen: "50 ml", price: 11.42, images: ["/calbo50.jpeg"], desc: "Endectocida de acción prolongada a base de doramectina." },
            { id: 35, volumen: "250 ml", price: 41.58, images: ["/calbo250.jpeg"], desc: "Presentación de 250 ml de doramectina." },
            { id: 36, volumen: "500 ml", price: 70.80, images: ["/calbo500.jpeg"], desc: "Presentación de 500 ml de doramectina de amplio espectro." }
        ]},
        { tituloBase: "Dectomax", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", variantes: [
            { id: 37, volumen: "50 ml", price: 19.68, images: ["/dectomax.jpeg"], desc: "Solución inyectable de doramectina original." },
            { id: 38, volumen: "250 ml", price: 90.53, images: ["/dectomax.jpeg"], desc: "Frasco de 250 ml de doramectina Dectomax." },
            { id: 39, volumen: "500 ml", price: 147.60, images: ["/deto2.jpg"], desc: "Frasco de 500 ml de doramectina Dectomax." }
        ]},
        { tituloBase: "Dectomec Max - doramectina 2%", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", variantes: [
            { id: 42, volumen: "100 ml", price: 20.15, images: ["/dectomec.jpeg"], desc: "Doramectina al 2% inyectable." },
            { id: 43, volumen: "500 ml", price: 84.07, images: ["/dectomec.jpeg"], desc: "Presentación de 500 ml de doramectina al 2%." }
        ]},
        { tituloBase: "Ivermin Gold 3.15", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", variantes: [{ id: 44, volumen: "500 ml", price: 47.48, images: ["/gold500.jpeg"], desc: "Ivermectina de larga acción y alta concentración." }] },
        { tituloBase: "Ivermin estándar", cat: "Medicina Veterinaria", subcat: "Antiparasitarios", variantes: [
            { id: 45, volumen: "50 ml", price: 4.79, images: ["/50.jpeg"], desc: "Ivermectina estándar presentación de 50 ml." },
            { id: 46, volumen: "200 ml", price: 11.47, images: ["/gold200.jpeg"], desc: "Ivermectina presentación de 200 ml." },
            { id: 47, volumen: "500 ml", price: 26.02, images: ["/50.jpeg"], desc: "Ivermectina presentación económica de 500 ml." }
        ]},
        { tituloBase: "Bactermisil 20%", cat: "Medicina Veterinaria", subcat: "Antibióticos", variantes: [
            { id: 48, volumen: "250 ml", price: 12.68, images: ["/biomisil.webp"], desc: "Antibiótico de amplio espectro." },
            { id: 49, volumen: "1 Litro", price: 36.88, images: ["/biomisil.webp"], desc: "Presentación de 1 litro de antibiótico." }
        ]},
        { tituloBase: "Flocherry 30%", cat: "Medicina Veterinaria", subcat: "Antibióticos", variantes: [{ id: 50, volumen: "100 ml", price: 22.31, images: ["/cherry.jpg"], desc: "Florfenicol al 30% para infecciones respiratorias." }] },
        { tituloBase: "Oxitetraciclina 5% Cherry", cat: "Medicina Veterinaria", subcat: "Antibióticos", variantes: [
            { id: 51, volumen: "100 ml", price: 6.02, images: ["/oxi.jpeg"], desc: "Antibiótico inyectable de acción corta." },
            { id: 52, volumen: "500 ml", price: 22.36, images: ["/oxi500.jpeg"], desc: "Presentación de 500 ml de oxitetraciclina 5%." }
        ]},
        { tituloBase: "Oxitetraciclina LA 20% Cherry", cat: "Medicina Veterinaria", subcat: "Antibióticos", variantes: [
            { id: 53, volumen: "100 ml", price: 10.44, images: ["/oxi20.jpeg"], desc: "Oxitetraciclina de larga acción 20%." },
            { id: 54, volumen: "250 ml", price: 20.48, images: ["/oxi250.jpeg"], desc: "Presentación de 250 ml de oxitetraciclina LA." }
        ]},
        { tituloBase: "Babecide", cat: "Medicina Veterinaria", subcat: "Medicamentos", variantes: [
            { id: 55, volumen: "100 ml", price: 10.20, images: ["/babepeque.jpeg"], desc: "Hemoparasiticida para el control de babesiosis y anaplasmosis." },
            { id: 56, volumen: "250 ml", price: 23.94, images: ["/babepeque.jpeg"], desc: "Presentación de 250 ml de Babecide." },
            { id: 57, volumen: "500 ml", price: 44.10, images: ["/babe500.jpeg"], desc: "Presentación de 500 ml de Babecide." }
        ]},
        { tituloBase: "Complejo B B12-B15", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [
            { id: 58, volumen: "20 ml", price: 7.58, images: ["/complejo.jpeg"], desc: "Vitamínico reconstituyente." },
            { id: 59, volumen: "100 ml", price: 24.95, images: ["/complejo.jpeg"], desc: "Presentación de 100 ml de Complejo B." },
            { id: 60, volumen: "250 ml", price: 41.63, images: ["/complejo.jpeg"], desc: "Presentación de 250 ml de Complejo B." }
        ]},
        { tituloBase: "Energizante vitamínico", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [
            { id: 61, volumen: "25 ml", price: 8.26, images: ["/energi.jpeg"], desc: "Inyectable energizante y vitamínico." },
            { id: 62, volumen: "100 ml", price: 20.03, images: ["/energi.jpeg"], desc: "Presentación de 100 ml energizante." },
            { id: 63, volumen: "250 ml", price: 37.40, images: ["/energi2.jpeg"], desc: "Presentación de 250 ml energizante." }
        ]},
        { tituloBase: "Hemo 15", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [{ id: 64, volumen: "100 ml", price: 49.36, images: ["/hemo15.jpeg"], desc: "Suplemento hematopoyético y vitamínico." }] },
        { tituloBase: "Minerfun F.M.", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [
            { id: 65, volumen: "100 ml", price: 13.21, images: ["/minerfm.jpeg"], desc: "Suplemento mineral y vitamínico." },
            { id: 66, volumen: "500 ml", price: 41.51, images: ["/minerfm.jpeg"], desc: "Presentación de 500 ml Minerfun F.M." }
        ]},
        { tituloBase: "Minerfun MX", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [
            { id: 67, volumen: "250 ml", price: 48.70, images: ["/minermx.jpeg"], desc: "Suplemento mineral avanzado." },
            { id: 68, volumen: "500 ml", price: 84.89, images: ["/minermx2.jpeg"], desc: "Presentación de 500 ml Minerfun MX." }
        ]},
        { tituloBase: "Minerfun Plus con selenio", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [
            { id: 69, volumen: "100 ml", price: 16.97, images: ["/miner100.jpeg"], desc: "Suplemento con minerales y selenio." },
            { id: 70, volumen: "250 ml", price: 30.18, images: ["/miner250.jpeg"], desc: "Presentación de 250 ml con selenio." },
            { id: 71, volumen: "500 ml", price: 50.94, images: ["/miner500.jpeg"], desc: "Presentación de 500 ml con selenio." }
        ]},
        { tituloBase: "Olivitasan", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [
            { id: 72, volumen: "25 ml", price: 5.89, images: ["/oli25.jpeg"], desc: "Reconstituyente general." },
            { id: 73, volumen: "100 ml", price: 12.50, images: ["/oli250.jpeg"], desc: "Presentación de 100 ml de Olivitasan." },
            { id: 74, volumen: "300 ml", price: 25.36, images: ["/oli250.jpeg"], desc: "Presentación de 300 ml de Olivitasan." },
            { id: 75, volumen: "500 ml", price: 38.18, images: ["/oli500.jpeg"], desc: "Presentación de 500 ml de Olivitasan." }
        ]},
        { tituloBase: "Olivitasan Plus", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [
            { id: 76, volumen: "250 ml", price: 45.12, images: ["/oli250plus.jpeg"], desc: "Fórmula reforzada Olivitasan Plus." },
            { id: 77, volumen: "500 ml", price: 77.52, images: ["/oliplus500.jpeg"], desc: "Presentación de 500 ml Olivitasan Plus." }
        ]},
        { tituloBase: "Vitamina B12 5000 importada", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [{ id: 78, volumen: "50 ml", price: 41.27, images: ["/b5000.jpeg"], desc: "Vitamina B12 de alta potencia importada." }] },
        { tituloBase: "Fortemax", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [{ id: 79, volumen: "500 ml", price: 28.04, images: ["/fortemax.jpeg"], desc: "Reconstituyente y energizante general." }] },
        { tituloBase: "Levantol", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [{ id: 80, volumen: "500 ml", price: 13.61, images: ["/levanton.jpeg"], desc: "Tónico general y estimulante." }] },
        { tituloBase: "Modificador Orgánico Toro", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [
            { id: 81, volumen: "100 ml", price: 7.49, images: ["/modi.jpeg"], desc: "Mejora el metabolismo y ganancia de peso." },
            { id: 82, volumen: "500 ml", price: 21.89, images: ["/modi.jpeg"], desc: "Presentación de 500 ml Modificador Orgánico Toro." }
        ]},
        { tituloBase: "Buta Cal", cat: "Medicina Veterinaria", subcat: "Medicamentos", variantes: [{ id: 83, volumen: "100 ml", price: 14.50, images: ["/buta.jpeg"], desc: "Analgésico, antipirético y antirreumático." }] },
        { tituloBase: "Dex-Cal - dexametasona", cat: "Medicina Veterinaria", subcat: "Medicamentos", variantes: [{ id: 84, volumen: "100 ml", price: 10.58, images: ["/dexcal.jpeg"], desc: "Corticoide de acción prolongada." }] },
        { tituloBase: "Dibrosal expectorante", cat: "Medicina Veterinaria", subcat: "Medicamentos", variantes: [{ id: 85, volumen: "1 kg", price: 13.42, images: ["/dibrosal.jpeg"], desc: "Expectorante en polvo para problemas respiratorios." }] },
        { tituloBase: "Neotil F", cat: "Medicina Veterinaria", subcat: "Antibióticos", variantes: [
            { id: 86, volumen: "100 g", price: 5.57, images: ["/neotil.jpeg"], desc: "Antibiótico en polvo soluble." },
            { id: 87, volumen: "1 kg", price: 43.63, images: ["/neotil.jpeg"], desc: "Presentación de 1 kg de Neotil F." }
        ]},
        { tituloBase: "Pata Negra para cerdos", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [{ id: 88, volumen: "1 kg", price: 5.59, images: ["/patanegra.webp"], desc: "Suplemento especializado para porcinos." }] },
        { tituloBase: "Stop antidiarreico", cat: "Medicina Veterinaria", subcat: "Medicamentos", variantes: [{ id: 89, volumen: "10 sobres", price: 11.36, images: ["/stop.jpeg"], desc: "Tratamiento eficaz contra diarreas en animales." }] },
       { tituloBase: "Biodil", cat: "Medicina Veterinaria", subcat: "Medicamentos", variantes: [{ id: 90, volumen: "50 ml", price: 49.20, images: ["/biodil.jpeg"], desc: "Especialidad veterinaria de alta efectividad." }] },
        { tituloBase: "Boldenona x 250ml", cat: "Medicina Veterinaria", subcat: "Vitaminas y Suplementos", variantes: [{ id: 146, volumen: "250 ml", price: 75.00, images: ["/boldenona.jpeg"], desc: "Boldenona 250 ml (Servisumos)." }] },
        { tituloBase: "Amitraz Calbos", cat: "Medicina Veterinaria", subcat: "Ectoparasiticidas", variantes: [
            { id: 91, volumen: "200 ml", price: 12.17, images: ["/amitraz.jpeg"], desc: "Garrapaticida y sarnicida tópico." },
            { id: 92, volumen: "500 ml", price: 25.80, images: ["/amitraz.jpeg"], desc: "Presentación de 500 ml de Amitraz Calbos." }
        ]},
        { tituloBase: "Ganasan Baño - cipermetrina 20%", cat: "Medicina Veterinaria", subcat: "Ectoparasiticidas", variantes: [{ id: 93, volumen: "1 Litro", price: 27.67, images: ["/ciper.jpeg"], desc: "Baño garrapaticida y contra moscas a base de cipermetrina." }] },
        { tituloBase: "Garrabaño", cat: "Medicina Veterinaria", subcat: "Ectoparasiticidas", variantes: [
            { id: 94, volumen: "500 ml", price: 25.81, images: ["/garrabaño.jpeg"], desc: "Control externo de parásitos en presentación de 500 ml." },
            { id: 95, volumen: "1 Litro", price: 49.08, images: ["/garrabaño.jpeg"], desc: "Control externo de parásitos en presentación de 1 litro." }
        ]},
        { tituloBase: "Na Mosca Ourofino", cat: "Medicina Veterinaria", subcat: "Ectoparasiticidas", variantes: [{ id: 96, volumen: "20 aretes", price: 68.88, images: ["/mosca.jpeg"], desc: "Aretes repelentes y controladores de moscas." }] },
        { tituloBase: "Flechazo spray", cat: "Medicina Veterinaria", subcat: "Ectoparasiticidas", variantes: [
            { id: 97, volumen: "160 ml", price: 5.90, images: ["/flecha.jpeg"], desc: "Curandero y repelente en spray." },
            { id: 98, volumen: "354 ml", price: 8.58, images: ["/flecha.jpeg"], desc: "Presentación de 354 ml de Flechazo spray." }
        ]},
        { tituloBase: "Lepecid", cat: "Medicina Veterinaria", subcat: "Ectoparasiticidas", variantes: [{ id: 99, volumen: "400 ml", price: 7.38, images: ["/lepecid.jpeg"], desc: "Curandero, matagusanos y repelente." }] },
        { tituloBase: "Mata Bicheira Calbos", cat: "Medicina Veterinaria", subcat: "Ectoparasiticidas", variantes: [{ id: 100, volumen: "500 ml", price: 5.82, images: ["/mata.jpeg"], desc: "Tratamiento y prevención de gusaneras y bicheras." }] },

        // Repuestos Agro (Desmalezadoras y Motosierras)
        { tituloBase: "Empuñadura mando", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 101, volumen: "TL33 TL43 TL52", price: 20, images: ["/empu.png"], desc: "Empuñadura de mando para desmalezadoras." }] },
        { tituloBase: "Tuerca cabezal", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 102, volumen: "M10X1.25", price: 4, images: ["/tuerca.png"], desc: "Tuerca cabezal M10X1.25 para desmalezadora TL43 TL52." }] },
        { tituloBase: "Uña de arranque", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 103, volumen: "Estándar", price: 3, images: ["/una.png"], desc: "Uña de arranque para motosierra MS180 MS250 MS390." }] },
        { tituloBase: "Estopera cigüeñal", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 104, volumen: "Estándar", price: 10, images: ["/estopera.png"], desc: "Estopera de cigüeñal para motosierra MS290 MS310 MS390." }] },
        { tituloBase: "Manguera combustible con filtro", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 105, volumen: "Estándar", price: 5, images: ["/mangurafiltro.png"], desc: "Manguera de combustible con filtro para desmalezadora." }] },
        { tituloBase: "Pipa bujía", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 106, volumen: "Universal", price: 3, images: ["/bujia.png"], desc: "Pipa bujía universal para desmalezadora y motosierra." }] },
        { tituloBase: "Carburador", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 107, volumen: "TL43 TL52", price: 27, images: ["/carbutl43.png"], desc: "Carburador para desmalezadora TL43 TL52 BCH-40T." }] },
        { tituloBase: "Campana embrague", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 108, volumen: "9D", price: 7, images: ["/campana.png"], desc: "Campana embrague desmalezadora 9D TL43 TL52." }] },
        { tituloBase: "Filtro aire", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 109, volumen: "FS120/FS250", price: 7, images: ["/filtro.png"], desc: "Filtro aire desmalezadora FS120 FS250 FS450." }] },
        { tituloBase: "Bujía 2T", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [
            { id: 110, volumen: "Denso", price: 7, images: ["/bujia25.png"], desc: "Bujía 2T Denso para desmalezadora y motosierra." },
            { id: 111, volumen: "Yamaha", price: 7, images: ["/bujiyama.png"], desc: "Bujía 2T Yamaha para desmalezadora y motosierra." }
        ]},
        { tituloBase: "Arranque", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [
            { id: 112, volumen: "TL33/TL43", price: 9, images: ["/arranque.png"], desc: "Arranque desmalezadora TL33 TL43 BCH-40T." },
            { id: 113, volumen: "TL52 BC4700", price: 7, images: ["/arranque.png"], desc: "Arranque desmalezadora TL52 BC4700 52 CC." }
        ]},
        { tituloBase: "Embrague", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 114, volumen: "Estándar", price: 8, images: ["/embrague.png"], desc: "Embrague desmalezadora TL33 TL43 TL52 BCH-40T." }] },
        { tituloBase: "Resorte embrague", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 115, volumen: "Estándar", price: 3, images: ["/resorte.png"], desc: "Resorte embrague desmalezadora TL33 TL43 TL52." }] },
        { tituloBase: "Cabezal", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 116, volumen: "28 mm 9 Estrías", price: 29, images: ["/cabezal.png"], desc: "Cabezal desmalezadora 28 mm 9 estrías TL43 TL52." }] },
        { tituloBase: "Porta nylon aluminio", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 117, volumen: "Universal", price: 8, images: ["/portalinon.png"], desc: "Porta nylon aluminio universal para desmalezadora." }] },
        { tituloBase: "Nylon", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 118, volumen: "Estándar", price: 30, images: ["/nylon.png"], desc: "Nylon para desmalezadora." }] },

        // Repuestos Agro (Motores a Gasolina)
        { tituloBase: "Bujía 4T", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 119, volumen: "Denso", price: 7, images: ["/buji.png"], desc: "Bujía Denso 4T motor generador motobomba." }] },
        { tituloBase: "Tanque gasolina", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 120, volumen: "GX160/GX168", price: 29, images: ["/tanque.png"], desc: "Tanque gasolina motor GX160 GX168." }] },
        { tituloBase: "Carburador motor", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 121, volumen: "GX120/GX160", price: 20, images: ["/carburador.png"], desc: "Carburador motor GX120 GX160 GX168." }] },
        { tituloBase: "Estopera cigüeñal motor", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 122, volumen: "25X41.25X6", price: 4, images: ["/estopera2.png"], desc: "Estopera cigüeñal motor GX160 GX168." }] },
        { tituloBase: "Biela", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 123, volumen: "5.5-6.5 HP", price: 10, images: ["/biela.png"], desc: "Biela motor GX160 GX168 5,5-6,5 HP." }] },
        { tituloBase: "Kit anillos", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 124, volumen: "GX160/GX168 67mm", price: 7, images: ["/kit.png"], desc: "Kit anillos motor GX160 GX168 67 mm Standard." }] },
        { tituloBase: "Kit empacaduras", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 125, volumen: "GX160/GX168", price: 6, images: ["/kitempaca.png"], desc: "Kit empacaduras motor GX160 GX168." }] },
        { tituloBase: "Kit válvulas", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 126, volumen: "Admisión/Escape", price: 13, images: ["/gx160kit.png"], desc: "Kit válvulas motor GX160 GX168 GX170 admisión escape." }] },
        { tituloBase: "Arranque manual", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 127, volumen: "GX160/GX168", price: 14, images: ["/arranquemanu.png"], desc: "Arranque manual motor GX160 GX168 5,5-6,5 HP." }] },

        // Otros repuestos y accesorios sueltos añadidos
        { tituloBase: "Manguera fumigadora", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [
            { id: 128, volumen: "25 M 200 Bar 8.5 mm", price: 30, images: ["/maguera.png"], desc: "Manguera fumigadora 25 metros." },
            { id: 129, volumen: "100 M 200 Bar 8.5 mm", price: 91, images: ["/placeholder.png"], desc: "Manguera fumigadora 100 metros." }
        ]},
        { tituloBase: "Lanza fumigadora estacionaria", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 130, volumen: "20 cm", price: 8, images: ["/rojo.png"], desc: "Lanza fumigadora estacionaria de 20 cm." }] },
        { tituloBase: "Kit anillos motor diésel", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 131, volumen: "186F 9 HP Standard", price: 12, images: ["/diesel.png"], desc: "Kit anillos motor diésel 186F 9 HP Standard." }] },
        { tituloBase: "Kit pistón generador", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 132, volumen: "950 45 mm", price: 8, images: ["/piston.png"], desc: "Kit pistón generador 950 45 mm." }] },
        { tituloBase: "Carbonera generador", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 133, volumen: "3 KVA 6 KVA", price: 4, images: ["/carbonera.png"], desc: "Carbonera generador 3 KVA 6 KVA." }] },
        { tituloBase: "Pipa bujía universal motor gasolina", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 134, volumen: "Universal", price: 3, images: ["/pipabujia.png"], desc: "Pipa bujía universal para motor gasolina." }] },
        { tituloBase: "Filtro aire motor diésel", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 135, volumen: "9 HP 186F/188F/190F", price: 15, images: ["/filtrodeaire.png"], desc: "Filtro aire motor diésel 9 HP 186F 188F 190F." }] },
        { tituloBase: "Llave de paso fumigadora", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 136, volumen: "DS200 LT22W LT30W", price: 6, images: ["/llavedepaso.png"], desc: "Llave de paso fumigadora DS200 LT22W LT30W." }] },
        { tituloBase: "Carburador desmalezadora FS", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 137, volumen: "FS160 FS220 FS280", price: 29, images: ["/carburador80.png"], desc: "Carburador desmalezadora FS160 FS220 FS280." }] },
        { tituloBase: "AVR generador", cat: "Repuestos Agro", subcat: "Motores a Gasolina", variantes: [{ id: 138, volumen: "3 KVA 220 UF", price: 17, images: ["/avr.png"], desc: "AVR generador 3 KVA 110-250 220 UF." }] },
        { tituloBase: "Acople orillador", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 139, volumen: "Estándar", price: 99, images: ["/acope.jpeg"], desc: "Acople orillador." }] },
        { tituloBase: "Acople motopodadora", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 140, volumen: "Estándar", price: 119, images: ["/moto.jpeg"], desc: "Acople motopodadora." }] },
        { tituloBase: "Acople tipo hacha", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 141, volumen: "Estándar", price: 119, images: ["/hacha.jpeg"], desc: "Acople tipo hacha." }] },
        { tituloBase: "Acople rotocultor", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 142, volumen: "Estándar", price: 99, images: ["/roto.jpeg"], desc: "Acople rotocultor." }] },
        { tituloBase: "Acople fuera de borda", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 143, volumen: "Estándar", price: 109, images: ["/borda.jpeg"], desc: "Acople fuera de borda." }] },
        { tituloBase: "Acople tipo hoz", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 144, volumen: "Estándar", price: 99, images: ["/tipoox.jpeg"], desc: "Acople tipo hoz." }] },
        { tituloBase: "Acople cortasetos", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 145, volumen: "Estándar", price: 120, images: ["/naranja.jpeg"], desc: "Acople cortasetos." }] }
    ];

    const macroCategorias = ["TODOS", "AGRO", "MEDICINA VETERINARIA", "REPUESTOS AGRO"];
    const subCategoriasAgro = ["Alimentación Animal", "Ganadería", "Inversiones", "Semillas", "Cercas Eléctricas", "Herbicidas", "Bioinsumos", "Equipos", "Plántula", "Manuales"];
    const subCategoriasVet = ["Antiparasitarios", "Antibióticos", "Vitaminas y Suplementos", "Ectoparasiticidas", "Medicamentos"];
    const subCategoriasRepuestos = ["Desmalezadoras y Motosierras", "Motores a Gasolina"];
    const metodosPago = ["Mercantil", "Venezuela", "Banesco", "Pago Móvil", "Efectivo Divisa", "Binance"];

    let busqueda = $state("");
    let macroFiltro = $state("TODOS");
    let subFiltro = $state("Todas");
    let metodoPago = $state("Mercantil");
    let carrito = $state<{id: number, title: string, varianteVolumen: string, cat: string, price: number, cantidad: number}[]>([]);
    let carritoAbierto = $state(false);
    let filtrosMovilAbierto = $state(false);

    let seleccionVariantes = $state<Record<number, number>>({});

    function obtenerVarianteActiva(index: number, p: ProductoAgrupado): Variante {
        const varIndex = seleccionVariantes[index] || 0;
        return p.variantes[varIndex] || p.variantes[0];
    }

    function cambiarVariante(index: number, varIndex: number) {
        seleccionVariantes[index] = varIndex;
    }

    let subCategoriasActuales = $derived(
        macroFiltro === "AGRO" ? subCategoriasAgro :
        macroFiltro === "MEDICINA VETERINARIA" ? subCategoriasVet :
        macroFiltro === "REPUESTOS AGRO" ? subCategoriasRepuestos :
        [...subCategoriasAgro, ...subCategoriasVet, ...subCategoriasRepuestos]
    );

    let productosFiltrados = $derived(
        productosCatalogo.filter(p => {
            const cumpleBusqueda = p.tituloBase.toLowerCase().includes(busqueda.toLowerCase()) || 
                                   p.variantes.some(v => v.desc.toLowerCase().includes(busqueda.toLowerCase()) || v.volumen.toLowerCase().includes(busqueda.toLowerCase()));
            const cumpleMacro = macroFiltro === "TODOS" || p.cat.toUpperCase() === macroFiltro;
            const cumpleSub = subFiltro === "Todas" || p.subcat === subFiltro;
            return cumpleBusqueda && cumpleMacro && cumpleSub;
        })
    );

    let resultadosPredictivos = $derived(
        busqueda.trim().length > 1 ? productosCatalogo.filter(p => p.tituloBase.toLowerCase().includes(busqueda.toLowerCase())).slice(0, 5) : []
    );

    let cantidadTotalItems = $derived(carrito.reduce((acc, item) => acc + item.cantidad, 0));

    function calcularTotal() {
        const aplicaDescuento = (metodoPago === "Efectivo Divisa" || metodoPago === "Binance");
        return carrito.reduce((acc, c) => {
            let precioUnitario = c.price;
            if (aplicaDescuento) {
                if (c.cat !== "Medicina Veterinaria" && ![2, 14, 16].includes(c.id)) {
                    if ([19, 20, 21, 22, 23].includes(c.id)) {
                        if (c.id === 19) precioUnitario = 8;
                        else if (c.id === 20) precioUnitario = 4;
                        else if (c.id === 21) precioUnitario = 110;
                        else if (c.id === 22) precioUnitario = 10;
                        else if (c.id === 23) precioUnitario = 15;
                    } else {
                        precioUnitario *= 0.9;
                    }
                }
            }
            return acc + (precioUnitario * c.cantidad);
        }, 0);
    }

    function agregarAlCarrito(p: ProductoAgrupado, indexOriginal: number) {
        const varianteActiva = obtenerVarianteActiva(indexOriginal, p);
        if (varianteActiva.price <= 0) return;
        const itemExistente = carrito.find(c => c.id === varianteActiva.id);
        if (itemExistente) {
            itemExistente.cantidad += 1;
        } else {
            carrito.push({
                id: varianteActiva.id,
                title: `${p.tituloBase} (${varianteActiva.volumen})`,
                varianteVolumen: varianteActiva.volumen,
                cat: p.cat,
                price: varianteActiva.price,
                cantidad: 1
            });
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

<div class="px-2 py-3 sm:p-4 md:p-8 max-w-7xl mx-auto bg-stone-50 min-h-screen relative font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900 pb-24 sm:pb-12">
    
    <!-- Cabecera y Buscador Predictivo -->
    <header class="sticky top-0 bg-stone-50/95 backdrop-blur-md z-30 pb-3 pt-2 border-b border-stone-200 mb-4 sm:mb-6">
        <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-4 items-center justify-between">
            <div class="flex items-center justify-between w-full sm:w-auto gap-2">
                <div class="text-sm font-black tracking-tight text-emerald-900 uppercase">Catálogo AGROVENZ</div>
                <button onclick={() => filtrosMovilAbierto = true} class="sm:hidden flex items-center gap-1.5 bg-emerald-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-xs active:scale-95 transition-transform touch-manipulation">
                    <Icon icon="mdi:filter-variant" class="text-base"/>
                    <span>Filtros</span>
                    {#if subFiltro !== "Todas" || macroFiltro !== "TODOS"}<span class="w-2 h-2 rounded-full bg-amber-400"></span>{/if}
                </button>
            </div>

            <div class="relative w-full sm:w-96">
                <div class="relative flex items-center">
                    <Icon icon="mdi:magnify" class="absolute left-3.5 text-stone-400 text-lg pointer-events-none"/>
                    <input type="text" bind:value={busqueda} placeholder="Buscar producto, uso o activo..." class="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-2xl border border-stone-200 shadow-xs focus:ring-2 focus:ring-emerald-500 outline-none text-xs sm:text-sm bg-white touch-manipulation" />
                    {#if busqueda}
                        <button onclick={() => busqueda = ""} class="absolute right-3 p-1 text-stone-400 hover:text-stone-600"><Icon icon="mdi:close-circle" class="text-base"/></button>
                    {/if}
                </div>
                
                {#if resultadosPredictivos.length > 0}
                    <div class="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden z-40 divide-y divide-stone-100">
                        {#each resultadosPredictivos as r}
                            <button onclick={() => { busqueda = r.tituloBase; macroFiltro = r.cat.toUpperCase(); subFiltro = r.subcat; }} class="w-full text-left px-4 py-3 hover:bg-emerald-50/60 transition-colors flex items-center justify-between gap-3 group touch-manipulation">
                                <div class="flex items-center gap-3 min-w-0">
                                    <div class="w-10 h-10 rounded-xl bg-stone-100 overflow-hidden shrink-0 border border-stone-200">
                                        <img src={r.variantes[0].images[0]} alt={r.tituloBase} class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-xs font-bold text-stone-800 truncate group-hover:text-emerald-900">{r.tituloBase}</p>
                                        <span class="inline-block mt-0.5 text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider">{r.cat} &bull; {r.subcat}</span>
                                    </div>
                                </div>
                                <span class="text-xs font-black text-emerald-800 shrink-0">{r.variantes[0].price > 0 ? `$${r.variantes[0].price.toFixed(2)}` : 'Consultar'}</span>
                            </button>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>

        <!-- Pestañas de Macro-Categorías (Escritorio) -->
        <div class="hidden sm:flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
            {#each macroCategorias as macro}
                <button onclick={() => { macroFiltro = macro; subFiltro = "Todas"; }} class={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${macroFiltro === macro ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs' : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-800'}`}>{macro}</button>
            {/each}
        </div>

        <!-- Pestañas de Subcategorías (Escritorio) -->
        <div class="hidden sm:flex gap-1.5 mt-2.5 overflow-x-auto pb-1 scrollbar-none">
            <button onclick={() => subFiltro = "Todas"} class={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all border whitespace-nowrap ${subFiltro === 'Todas' ? 'bg-emerald-900 text-white border-emerald-900' : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'}`}>
                Todas las subcategorías
            </button>
            {#each subCategoriasActuales as sub}
                <button onclick={() => subFiltro = sub} class={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all border whitespace-nowrap ${subFiltro === sub ? 'bg-emerald-900 text-white border-emerald-900' : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'}`}>
                    {sub}
                </button>
            {/each}
        </div>
    </header>

    <!-- Grilla de Productos Agrupados con Selector de Presentación -->
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
        {#each productosFiltrados as p, index (p.tituloBase)}
            {@const varActiva = obtenerVarianteActiva(index, p)}
            <div class="bg-white p-2.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-stone-100 shadow-xs hover:shadow-xl transition-all flex flex-col h-full group">
                
                <!-- Imagen -->
                <div class="relative w-full h-28 sm:h-48 mb-2.5 sm:mb-4 bg-stone-100 rounded-xl sm:rounded-2xl overflow-hidden">
                    <img src={varActiva.images[0]} alt={p.tituloBase} class="w-full h-28 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div class="flex-grow flex flex-col">
                    <h3 class="font-bold text-stone-900 text-xs sm:text-base leading-tight mb-1 line-clamp-2">{p.tituloBase}</h3>
                    <p class="text-[8px] sm:text-[10px] text-emerald-700 font-bold mb-1.5 uppercase tracking-wider">{p.subcat}</p>
                    <p class="text-[10px] sm:text-xs text-stone-500 leading-relaxed mb-3 line-clamp-2">{varActiva.desc}</p>
                </div>

                <!-- SELECTOR DE PRESENTACIONES -->
                {#if p.variantes.length > 1}
                    <div class="mb-2">
                        <label class="block text-[8px] font-black text-stone-400 uppercase tracking-wider mb-1">Presentación:</label>
                        <div class="flex flex-wrap gap-1">
                            {#each p.variantes as v, vIdx}
                                <button onclick={() => cambiarVariante(index, vIdx)} class={`px-2 py-1 rounded-lg text-[9px] font-bold transition-all touch-manipulation ${(seleccionVariantes[index] || 0) === vIdx ? 'bg-emerald-800 text-white shadow-xs' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}>
                                    {v.volumen}
                                </button>
                            {/each}
                        </div>
                    </div>
                {/if}
                
                <div class="mt-auto pt-2.5 sm:pt-4 border-t border-stone-50 flex flex-col gap-1.5">
                    <div class="flex items-baseline justify-between gap-1">
                        <span class="font-black text-xs sm:text-xl text-emerald-800">{varActiva.price > 0 ? `$${varActiva.price.toFixed(2)}` : 'Consultar'}</span>
                    </div>
                    
                    {#if (varActiva as any).link}
                        <a href={(varActiva as any).link} target="_blank" rel="noopener noreferrer" class="w-full py-2 bg-emerald-800 text-white hover:bg-emerald-900 font-bold rounded-xl text-[9px] sm:text-xs uppercase tracking-wider transition-all text-center touch-manipulation shadow-xs">VER GUÍA</a>
                    {:else if varActiva.price > 0}
                        <button onclick={() => agregarAlCarrito(p, index)} class="w-full py-2 bg-emerald-50 hover:bg-emerald-800 text-emerald-800 hover:text-white border border-emerald-800/20 hover:border-emerald-800 font-bold rounded-xl text-[9px] sm:text-xs uppercase tracking-wider transition-all text-center touch-manipulation active:scale-95">AGREGAR</button>
                    {:else}
                        <a href={`https://wa.me/584241860644?text=Hola, deseo consultar precio de ${p.tituloBase}`} target="_blank" class="w-full py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-xl text-[9px] sm:text-xs uppercase tracking-wider transition-all text-center touch-manipulation">CONSULTAR</a>
                    {/if}
                </div>
            </div>
        {/each}
    </div>

    <!-- Drawer de Filtros (Móvil) -->
    {#if filtrosMovilAbierto}
        <div class="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity" onclick={() => filtrosMovilAbierto = false}></div>
        <div class="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-white rounded-t-[2.5rem] shadow-2xl z-50 p-6 flex flex-col transition-transform transform translate-y-0 overflow-hidden">
            
            <div class="flex justify-between items-center mb-6 pb-2 shrink-0">
                <h2 class="font-black text-base text-stone-900 uppercase tracking-wide">FILTRAR CATÁLOGO</h2>
                <button onclick={() => filtrosMovilAbierto = false} class="p-1.5 text-stone-700 hover:bg-stone-100 rounded-full transition-colors touch-manipulation">
                    <Icon icon="mdi:close" class="text-xl"/>
                </button>
            </div>

            <div class="overflow-y-auto pr-0.5 space-y-5 flex-grow pb-2">
                <div>
                    <label class="block text-[10px] font-black text-stone-400 uppercase tracking-wider mb-2.5">CATEGORÍA GENERAL</label>
                    <div class="flex flex-col gap-2">
                        {#each macroCategorias as macro}
                            <button onclick={() => { macroFiltro = macro; subFiltro = "Todas"; }} class={`w-full py-3.5 px-5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all border text-left flex items-center justify-between ${macroFiltro === macro ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-sm' : 'bg-stone-50/80 text-stone-800 border-stone-200/60 hover:bg-stone-100'}`}>
                                <span class="tracking-normal">{macro}</span>
                                {#if macroFiltro === macro}
                                    <Icon icon="mdi:check" class="text-base shrink-0"/>
                                {/if}
                            </button>
                        {/each}
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-black text-stone-400 uppercase tracking-wider mb-2.5">SUBCATEGORÍA ESPECÍFICA</label>
                    <div class="flex flex-col gap-1.5">
                        <button onclick={() => subFiltro = "Todas"} class={`w-full py-3.5 px-5 rounded-2xl text-xs transition-all text-left flex items-center justify-between ${subFiltro === 'Todas' ? 'bg-[#d1fae5] text-[#022c22] font-bold' : 'bg-stone-50/80 text-stone-700 hover:bg-stone-100 border border-stone-200/60 font-medium'}`}>
                            <span class="tracking-normal">Todas</span>
                            {#if subFiltro === 'Todas'}
                                <span class="w-2 h-2 rounded-full bg-[#047857] shrink-0"></span>
                            {/if}
                        </button>
                        {#each subCategoriasActuales as sub}
                            <button onclick={() => subFiltro = sub} class={`w-full py-3.5 px-5 rounded-2xl text-xs transition-all text-left flex items-center justify-between ${subFiltro === sub ? 'bg-[#d1fae5] text-[#022c22] font-bold' : 'bg-stone-50/80 text-stone-700 hover:bg-stone-100 border border-stone-200/60 font-medium'}`}>
                                <span class="tracking-normal">{sub}</span>
                                {#if subFiltro === sub}
                                    <span class="w-2 h-2 rounded-full bg-[#047857] shrink-0"></span>
                                {/if}
                            </button>
                        {/each}
                    </div>
                </div>
            </div>

            <div class="pt-4 mt-2 border-t border-stone-100 shrink-0 flex items-center gap-3">
                <button onclick={() => { macroFiltro = "TODOS"; subFiltro = "Todas"; }} class="w-1/3 py-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-black uppercase tracking-wider transition-colors text-center touch-manipulation">
                    LIMPIAR
                </button>
                <button onclick={() => filtrosMovilAbierto = false} class="w-2/3 bg-[#064e3b] text-white py-3.5 rounded-2xl font-black uppercase text-xs hover:bg-emerald-950 transition-all tracking-wider shadow-md text-center active:scale-98">
                    VER RESULTADOS
                </button>
            </div>
        </div>
    {/if}

    <!-- Botón Carrito Flotante -->
    <button onclick={() => carritoAbierto = !carritoAbierto} class="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-emerald-800 text-white p-4 sm:p-5 rounded-full shadow-2xl hover:bg-emerald-900 active:scale-95 transition-transform z-40 flex items-center justify-center touch-manipulation">
        <Icon class="text-2xl sm:text-3xl" icon="mdi:cart-outline"/>
        {#if cantidadTotalItems > 0}
            <span class="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] sm:text-xs font-black w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shadow-md animate-pulse">{cantidadTotalItems}</span>
        {/if}
    </button>

    <!-- Drawer Carrito -->
    {#if carritoAbierto}
        <div class="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity" onclick={() => carritoAbierto = false}></div>
        <div class="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-50 p-4 sm:p-6 flex flex-col transition-transform transform translate-x-0">
            <div class="flex justify-between items-center mb-4 sm:mb-6 pb-2 border-b border-stone-100">
                <div class="flex items-center gap-2">
                    <h2 class="font-black text-base sm:text-xl text-stone-900 uppercase">Tu Carrito</h2>
                    <span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">{cantidadTotalItems}</span>
                </div>
                <button onclick={() => carritoAbierto = false} class="p-2 rounded-full hover:bg-stone-100 active:bg-stone-200 touch-manipulation"><Icon class="text-stone-600 text-xl" icon="mdi:close"/></button>
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
                                <span class="text-[10px] text-emerald-700 font-bold">${item.price.toFixed(2)} c/u</span>
                            </div>
                            <div class="flex gap-2 items-center">
                                <button onclick={() => cambiarCantidad(item.id, -1)} class="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-stone-200 font-bold text-xs">-</button>
                                <span class="font-bold w-4 text-center text-xs text-stone-800">{item.cantidad}</span>
                                <button onclick={() => cambiarCantidad(item.id, 1)} class="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-stone-200 font-bold text-xs">+</button>
                                <button onclick={() => eliminar(item.id)} class="p-1 hover:bg-red-50 rounded-lg transition-colors"><Icon class="text-red-500 text-lg" icon="mdi:trash-can-outline"/></button>
                            </div>
                        </div>
                    {/each}
                </div>
                
                <div class="bg-stone-50 p-3 sm:p-4 rounded-2xl border border-stone-100 mb-4 space-y-3">
                    <div>
                        <label class="block text-[10px] font-black text-stone-400 mb-1.5 uppercase tracking-wider">Método de pago</label>
                        <select bind:value={metodoPago} class="w-full p-2.5 bg-white rounded-xl text-xs font-bold border border-stone-200 outline-none">
                            {#each metodosPago as m}<option value={m}>{m}</option>{/each}
                        </select>
                    </div>
                    <div class="flex justify-between items-center pt-2 border-t border-stone-200/60">
                        <span class="text-xs font-bold text-stone-500 uppercase tracking-wider">Total Final:</span>
                        <span class="text-xl sm:text-2xl font-black text-emerald-800">${calcularTotal().toFixed(2)}</span>
                    </div>
                </div>

                <button onclick={finalizarCompra} class="w-full bg-emerald-800 text-white py-3.5 sm:py-4 rounded-2xl font-black uppercase text-xs sm:text-sm hover:bg-emerald-900 transition-all tracking-wider shadow-md flex items-center justify-center gap-2">
                    <Icon icon="mdi:whatsapp" class="text-lg"/>
                    <span>Finalizar pedido por WhatsApp</span>
                </button>
            {/if}
        </div>
    {/if}
</div>