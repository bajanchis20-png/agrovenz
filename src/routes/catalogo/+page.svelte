<script lang="ts">
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";
    import { supabase } from "$lib/supabase"; 
    import { usuarioActivo } from '$lib/auth';

    interface Variante {
        id: number;
        volumen: string;
        price: number;
        desc: string;
        images: string[];
        link?: string;
    }

    interface ProductoAgrupado {
        tituloBase: string;
        cat: string;
        subcat: string;
        variantes: Variante[];
        activo?: boolean;
    }

    // AQUÍ ES DONDE VA EL ONMOUNT QUE CARGA DESDE SUPABASE:
    onMount(async () => {
        cargando = true;
        try {
            const { data: prodsDB, error: errProds } = await supabase.from('productos').select('*');
            if (errProds) throw errProds;

            const { data: varsDB, error: errVars } = await supabase.from('variantes').select('*');
            if (errVars) throw errVars;

            if (prodsDB) {
                productosCatalogo = prodsDB.map(p => {
                    const variantesDelProducto = varsDB?.filter(v => v.producto_titulo === p.titulo_base) || [];
                    
                    return {
                        tituloBase: p.titulo_base,
                        cat: p.cat,
                        subcat: p.subcat,
                        activo: p.activo ?? true,
                        variantes: variantesDelProducto.map(v => ({
                            id: v.id,
                            volumen: v.volumen,
                            price: v.precio,
                            desc: v.descripcion || '',
                            images: v.imagenes || []
                        }))
                    };
                });
            }
        } catch (error) {
            console.error("Error al cargar el catálogo desde Supabase:", error);
        } finally {
            cargando = false;
        }
    });

  async function migrarMasivoDefinitivo() {
    console.log("Iniciando migración completa de los 180 productos...");
    
    for (const item of productosCatalogo) {
        // 1. Guardar o actualizar el producto base
        const { error: errorProd } = await supabase
            .from('productos')
            .upsert([
                { 
                    titulo_base: item.tituloBase, 
                    cat: item.cat, 
                    subcat: item.subcat,
                    activo: item.activo ?? true 
                }
            ], { onConflict: 'titulo_base' });

        if (errorProd) {
            console.error("Error en producto base:", item.tituloBase, errorProd);
            continue;
        }

        // 2. Guardar sus variantes asegurando que no se dupliquen masivamente
        if (item.variantes && item.variantes.length > 0) {
            for (const v of item.variantes) {
                // Verificamos si ya existe esta variante exacta para este producto
                const { data: existente } = await supabase
                    .from('variantes')
                    .select('id')
                    .eq('producto_titulo', item.tituloBase)
                    .eq('volumen', v.volumen)
                    .maybeSingle();

                if (!existente) {
                    // Si no existe, la insertamos
                    await supabase.from('variantes').insert({
                        producto_titulo: item.tituloBase,
                        volumen: v.volumen,
                        precio: v.price,
                        descripcion: v.desc || "",
                        imagenes: v.images || []
                    });
                }
            }
        }
    }
    alert("¡Migración masiva finalizada con éxito! Revisa Supabase.");
}
    
   let productosCatalogo = $state<ProductoAgrupado[]>([
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

    // Tratamiento de Semillas
    { tituloBase: "Fortenza Duo Aplicado x Saco de 60 MK Semilla", cat: "Agro", subcat: "Tratamiento de Semillas", variantes: [{ id: 200, volumen: "Saco 60 MK Aplicado", price: 36.65, images: ["/fortenza.jpeg"], desc: "Tratamiento aplicado por saco de 60 MK." }] },

    // Bioestimulante Foliar
    { tituloBase: "Quantis", cat: "Agro", subcat: "Bioestimulante Foliar", variantes: [{ id: 201, volumen: "Envase 1 lt", price: 21.35, images: ["/nuevo2.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Stimplex", cat: "Agro", subcat: "Bioestimulante Foliar", variantes: [{ id: 202, volumen: "Envase 5 lt", price: 185.75, images: ["/stimplex.jpeg"], desc: "Envase 5 lt." }] },

    // Regulador de Crecimiento
    { tituloBase: "Progibb Plus", cat: "Agro", subcat: "Regulador de Crecimiento", variantes: [{ id: 203, volumen: "Sobre 10 gr", price: 3.50, images: ["/progib.jpeg"], desc: "Sobre de 10 gr." }] },

    // Coadyuvantes
    { tituloBase: "Surfer 350", cat: "Agro", subcat: "Coadyuvantes", variantes: [{ id: 204, volumen: "Envase 1 Lt", price: 9.95, images: ["/sur.jpeg"], desc: "Envase 1 Lt." }] },

    // Sustrato para Semilleros
    { tituloBase: "Sustrato Berger BM2 HP 10FP", cat: "Agro", subcat: "Semillas", variantes: [{ id: 205, volumen: "Fardo Vol Comp 107 L", price: 92.45, images: ["/berger.jpeg"], desc: "Fardo - Volumen Compactado 107 L." }] },

    // Rodenticida de Uso Industrial
    { tituloBase: "Stryker Pellets", cat: "Agro", subcat: "Rodenticida de Uso Industrial", variantes: [{ id: 206, volumen: "Envase 1 Kg", price: 15.95, images: ["/sky.jpeg"], desc: "Envase 1 Kg. (A los precios indicados debe adicionarse I.V.A. 16%)" }] },

    // Insecticidas de Uso Industrial
    { tituloBase: "Dustra Bachacos", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 29, volumen: "Envase 1 Kg", price: 20.70, images: ["/dustra.jpeg"], desc: "Envase 1 Kg. (A los precios indicados debe adicionarse I.V.A. 16%)" }] },
    { tituloBase: "Deltrac Forte", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 28, volumen: "Envase 500 gr", price: 13.35, images: ["/bachaco.jpeg"], desc: "Envase 500 gr. (A los precios indicados debe adicionarse I.V.A. 16%)" }] },

    // Insecticidas
    { tituloBase: "Actara 250 WG", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 100, volumen: "Envase 100 grs", price: 10.45, images: ["/actara.jpeg"], desc: "Envase 100 grs." }] },
    { tituloBase: "Curacron", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 101, volumen: "Envase 1 lt", price: 49.45, images: ["/cuca.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Curtail 25 EC", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 102, volumen: "Envase 1 lt", price: 13.70, images: ["/curtail.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Engeo XT", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 103, volumen: "Envase 250 cc", price: 16.75, images: ["/engeo.jpeg"], desc: "Envase 250 cc." }] },
    { tituloBase: "Malathion 57%", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 104, volumen: "Envase 1 lt", price: 19.25, images: ["/malathi.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Match EC", cat: "Agro", subcat: "Insecticidas", variantes: [
        { id: 105, volumen: "Envase 1 lt", price: 28.75, images: ["/match.jpeg"], desc: "Envase 1 lt." },
        { id: 106, volumen: "Envase 250 cc", price: 7.70, images: ["/match.jpeg"], desc: "Envase 250 cc." }
    ]},
    { tituloBase: "Nocaut-L", cat: "Agro", subcat: "Insecticidas", variantes: [
        { id: 107, volumen: "Envase 1 lt", price: 13.35, images: ["/nocaut.jpeg"], desc: "Envase 1 lt." },
        { id: 108, volumen: "Envase 10 lt", price: 121.20, images: ["/nocaut.jpeg"], desc: "Envase 10 lt." }
    ]},
    { tituloBase: "Nufos 4 EC", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 109, volumen: "Envase 1 lt", price: 17.60, images: ["/nufos.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Phostoxim Tr-333", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 110, volumen: "Envase 1 Kg", price: 58.50, images: ["/poti.jpeg"], desc: "Envase 1 Kg." }] },
    { tituloBase: "Proclaim", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 111, volumen: "Envase 500 grs", price: 59.35, images: ["/proclaim2.jpeg"], desc: "Envase 500 grs." }] },
    { tituloBase: "Proclaim Fit", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 112, volumen: "Envase 80 grs", price: 12.95, images: ["/proclaim.jpeg"], desc: "Envase 80 grs." }] },
    { tituloBase: "Radiant 60 SC", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 113, volumen: "Envase 100 cc", price: 19.65, images: ["/radian.jpeg"], desc: "Envase 100 cc." }] },
    { tituloBase: "Trigard", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 114, volumen: "Envase 50 gr", price: 16.75, images: ["/trigard.jpeg"], desc: "Envase 50 gr." }] },
    { tituloBase: "Varero 200 SC", cat: "Agro", subcat: "Insecticidas", variantes: [{ id: 115, volumen: "Envase 1 lt", price: 75.40, images: ["/verero.jpeg"], desc: "Envase 1 lt." }] },

    // Herbicidas
    { tituloBase: "2,4-D Amina 6", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 26, volumen: "Envase 4 lt", price: 28.50, images: ["/amina.jpeg"], desc: "Herbicida hormonal selectivo para el control de malezas de hoja ancha en cultivos." },
        { id: 116, volumen: "Envase 20 lt", price: 137.15, images: ["/amina.jpeg"], desc: "Envase 20 lt." }
    ]},
    { tituloBase: "Afalon 50 PM", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 117, volumen: "Envase 1 Kg", price: 40.70, images: ["/afalon.jpeg"], desc: "Envase 1 Kg." }] },
    { tituloBase: "Agil", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 118, volumen: "Envase 1 lt", price: 32.90, images: ["/agil.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Alisio", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 27, volumen: "Sobre 500 g", price: 16.25, images: ["/alisio.jpeg"], desc: "Presentación de 500 g ideal para aplicaciones agrícolas precisas." }] },
    { tituloBase: "Atilus 380 SC", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 119, volumen: "Envase 1 lt", price: 49.60, images: ["/atilus.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Basagran 480", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 120, volumen: "Envase 1 lt", price: 35.45, images: ["/basagran.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Bazinga 400 EC", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 121, volumen: "Envase 1 lt", price: 12.90, images: ["/bazinga.jpeg"], desc: "Envase 1 lt." },
        { id: 122, volumen: "Envase 10 lt", price: 118.90, images: ["/bazinga.jpeg"], desc: "Envase 10 lt." }
    ]},
    { tituloBase: "Branson 500 WG", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 123, volumen: "Envase 500 grs", price: 26.50, images: ["/armazon.jpeg"], desc: "Envase 500 grs." }] },
    { tituloBase: "Bengala 25 OD", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 124, volumen: "Envase 1 lt", price: 41.60, images: ["/bengala.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Brega", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 3, volumen: "1 KG", price: 12.65, images: ["/brega.png"], desc: "Presentación de 1 KG. Formulado para el control de malezas en el maíz." },
        { id: 125, volumen: "Brega 90 WG (1 Kg)", price: 12.65, images: ["/brega.png"], desc: "Envase 1 Kg." }
    ]},
    { tituloBase: "Cerrero 200 SL", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 126, volumen: "Envase 1 lt", price: 9.10, images: ["/cerrero.jpeg"], desc: "Envase 1 lt." },
        { id: 127, volumen: "Envase 4 lt", price: 35.35, images: ["/cerrero.jpeg"], desc: "Envase 4 lt." }
    ]},
    { tituloBase: "Dual Gold", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 128, volumen: "Envase 1 lt", price: 47.90, images: ["/dualgold.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Duron", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 129, volumen: "Envase 1 Kg", price: 22.90, images: ["/duron.jpeg"], desc: "Envase 1 Kg." }] },
    { tituloBase: "Elumis", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 130, volumen: "Envase 5 lt", price: 201.55, images: ["/elumnis.jpeg"], desc: "Envase 5 lt." }] },
    { tituloBase: "Foker CE", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 131, volumen: "Envase 1 lt", price: 24.10, images: ["/foker.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Flex", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 132, volumen: "Envase 1 lt", price: 32.80, images: ["/flex.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Gesaprim MOF", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 133, volumen: "Envase 1 kg", price: 26.75, images: ["/gesaprim.jpeg"], desc: "Envase 1 kg." }] },
    { tituloBase: "Gesapax 500 SC", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 134, volumen: "Envase 20 lt", price: 255.95, images: ["/gesa.jpeg"], desc: "Envase 20 lt." }] },
    { tituloBase: "Glytotal", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 4, volumen: "Glytotal 480 SL (1 LT)", price: 6.55, images: ["/realgly.png"], desc: "Envase 1 Lt." },
        { id: 135, volumen: "Glytotal 480 SL (4 LT)", price: 25.45, images: ["/realgly.png"], desc: "Envase 4 Lt." },
        { id: 136, volumen: "Glytotal 480 SL (10 LT)", price: 61.05, images: ["/realgly.png"], desc: "Envase 10 Lt." },
        { id: 137, volumen: "Glytotal Extra (1 LT)", price: 8.80, images: ["/realgly.png"], desc: "Envase 1 Lt." },
        { id: 138, volumen: "Glytotal Extra (4 LT)", price: 34.35, images: ["/realgly.png"], desc: "Envase 4 Lt." },
        { id: 139, volumen: "Glytotal Extra (10 LT)", price: 82.40, images: ["/realgly.png"], desc: "Envase 10 Lt." },
        { id: 24, volumen: "747 WG (50 grs)", price: 0.73, images: ["/747gly.jpeg"], desc: "Envase 50 grs." },
        { id: 140, volumen: "747 WG (1 Kg)", price: 10.15, images: ["/747gly.jpeg"], desc: "Envase 1 Kg." },
        { id: 141, volumen: "747 WG (4 Kg)", price: 39.60, images: ["/747gly.jpeg"], desc: "Envase 4 Kg." }
    ]},
    { tituloBase: "Granslam", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 142, volumen: "Envase 1 lt", price: 7.30, images: ["/granslam.jpeg"], desc: "Envase 1 lt." },
        { id: 143, volumen: "Envase 4 lt", price: 26.25, images: ["/granslam.jpeg"], desc: "Envase 4 lt." }
    ]},
    { tituloBase: "Herbadox 400", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 144, volumen: "Envase 20 lt", price: 343.40, images: ["/herbadox.jpeg"], desc: "Envase 20 lt." }] },
    { tituloBase: "Jonrón 212", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 5, volumen: "Envase 1 lt", price: 17.60, images: ["/herbicida.png"], desc: "Envase 1 lt." },
        { id: 30, volumen: "Envase 4 lt", price: 64.69, images: ["/herbicida.png"], desc: "Envase 4 lt." },
        { id: 31, volumen: "Envase 10 lt", price: 153.94, images: ["/herbicida.png"], desc: "Envase 10 lt." }
    ]},
    { tituloBase: "Jonron 101", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 32, volumen: "Envase 1 lt", price: 15.15, images: ["/joron.jpeg"], desc: "Envase 1 lt." },
        { id: 33, volumen: "Envase 4 lt", price: 53.70, images: ["/joron.jpeg"], desc: "Envase 4 lt." },
        { id: 34, volumen: "Envase 10 lt", price: 130.69, images: ["/joron.jpeg"], desc: "Envase 10 lt." }
    ]},
    { tituloBase: "Masai 240 EC", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 35, volumen: "Envase 1 lt", price: 21.35, images: ["/macai.jpeg"], desc: "Envase 1 lt." }] },
    { tituloBase: "Mesamate 720", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 36, volumen: "Envase 20 lt", price: 190.95, images: ["/mesamate.jpg"], desc: "Envase 20 lt." }] },
    { tituloBase: "Nicanor", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 37, volumen: "Envase 15 grs", price: 1.10, images: ["/nicanor.jpeg"], desc: "Envase 15 grs." }] },
    { tituloBase: "Penalty 2E", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 38, volumen: "Envase 1 lt", price: 18.40, images: ["/penalty.jpeg"], desc: "Envase 1 lt." },
        { id: 39, volumen: "Envase 4 lt", price: 72.25, images: ["/penalty.jpeg"], desc: "Envase 4 lt." }
    ]},
    { tituloBase: "Plenum ME", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 40, volumen: "Envase 4 lt", price: 114.65, images: ["/plenum.jpeg"], desc: "Envase 4 lt." }] },
    { tituloBase: "Propanil 480", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 41, volumen: "Envase 20 Lts", price: 246.40, images: ["/propanil.jpeg"], desc: "Envase 20 Lts." }] },
    { tituloBase: "Socio", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 6, volumen: "Líquido", price: 0, images: ["/socio.png"], desc: "De acción sistémica utilizado para control de malezas de hoja ancha y algunas gramíneas (Precio a consultar)." },
        { id: 25, volumen: "En polvo (1 kg)", price: 31, images: ["/socio.jpeg"], desc: "Presentación en polvo de 1 kg para el control eficiente de malezas." },
        { id: 42, volumen: "WG 15 grs", price: 0.98, images: ["/socio.png"], desc: "Envase 15 grs." },
        { id: 43, volumen: "WG 1 Kg", price: 30.80, images: ["/socio.png"], desc: "Envase 1 Kg." }
    ]},
    { tituloBase: "Quemazone SL", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 44, volumen: "Envase 1 Lt", price: 7.20, images: ["/quemazone.jpeg"], desc: "Envase 1 Lt." },
        { id: 45, volumen: "Envase 4 Lt", price: 27.00, images: ["/quemazone.jpeg"], desc: "Envase 4 Lt." }
    ]},
    { tituloBase: "Tothem 400 SC", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 46, volumen: "Envase 1 Lt", price: 67.30, images: ["/totem.jpeg"], desc: "Envase 1 Lt." }] },
    { tituloBase: "Tornado 40", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 47, volumen: "Envase 4 Lt", price: 52.00, images: ["/tornado.jpeg"], desc: "Envase 4 Lt." },
        { id: 48, volumen: "Envase 20 Lt", price: 260.05, images: ["/tornado.jpeg"], desc: "Envase 20 Lt." }
    ]},
    { tituloBase: "Tordon 101", cat: "Agro", subcat: "Herbicidas", variantes: [
        { id: 49, volumen: "Envase 4 Lt", price: 70.97, images: ["/tordon.jpeg"], desc: "Envase 4 Lt." },
        { id: 50, volumen: "Envase 20 Lt", price: 354.60, images: ["/tordon.jpeg"], desc: "Envase 20 Lt." }
    ]},
    { tituloBase: "Troll 80 WG", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 51, volumen: "Envase 1 Kg", price: 12.40, images: ["/trilla.jpeg"], desc: "Envase 1 Kg." }] },
    { tituloBase: "Verdict R", cat: "Agro", subcat: "Herbicidas", variantes: [{ id: 52, volumen: "Envase 1 Lt", price: 32.90, images: ["/verdict.png"], desc: "Envase 1 Lt." }] },

    // Fungicidas
    { tituloBase: "Alto 100", cat: "Agro", subcat: "Fungicidas", variantes: [{ id: 53, volumen: "Envase 1 Lt", price: 99.60, images: ["/alto.jpeg"], desc: "Envase 1 Lt." }] },
    { tituloBase: "Amistar Top", cat: "Agro", subcat: "Fungicidas", variantes: [
        { id: 54, volumen: "Envase 250 cc", price: 21.50, images: ["/amistar.webp"], desc: "Envase 250 cc." },
        { id: 55, volumen: "Envase 1 Lt", price: 81.25, images: ["/amistar.webp"], desc: "Envase 1 Lt." }
    ]},
    { tituloBase: "Control 500", cat: "Agro", subcat: "Fungicidas", variantes: [{ id: 56, volumen: "Envase 1 Lt", price: 14.75, images: ["/control2.jpeg"], desc: "Envase 1 Lt." }] },
    { tituloBase: "Curagol", cat: "Agro", subcat: "Fungicidas", variantes: [{ id: 57, volumen: "Envase 1 kg", price: 12.40, images: ["/gol.jpeg"], desc: "Envase 1 kg." }] },
    { tituloBase: "Dispersul 80 WG", cat: "Agro", subcat: "Fungicidas", variantes: [{ id: 58, volumen: "Envase 25 kg", price: 129.95, images: ["/disperful.jpeg"], desc: "Envase 25 kg." }] },
    { tituloBase: "Fungizate M-45", cat: "Agro", subcat: "Fungicidas", variantes: [{ id: 59, volumen: "Envase 1 kg", price: 10.45, images: ["/fungizante.jpeg"], desc: "Envase 1 kg." }] },
    { tituloBase: "Linear 20 SL", cat: "Agro", subcat: "Fungicidas", variantes: [
        { id: 60, volumen: "Envase 1 Lt", price: 10.15, images: ["/linear.jpeg"], desc: "Envase 1 Lt." },
        { id: 61, volumen: "Envase 10 Lt", price: 92.45, images: ["/linear.jpeg"], desc: "Envase 10 Lt." }
    ]},
    { tituloBase: "Revus 250", cat: "Agro", subcat: "Fungicidas", variantes: [
        { id: 62, volumen: "Envase 250 cc", price: 26.35, images: ["/revus.jpeg"], desc: "Envase 250 cc." },
        { id: 63, volumen: "Envase 1 Lt", price: 99.15, images: ["/revus.jpeg"], desc: "Envase 1 Lt." }
    ]},
    { tituloBase: "Ridomil Gold 680 WP", cat: "Agro", subcat: "Fungicidas", variantes: [{ id: 64, volumen: "Envase 375 grs", price: 16.60, images: ["/ridi.jpeg"], desc: "Envase 375 grs." }] },
    { tituloBase: "Score 250", cat: "Agro", subcat: "Fungicidas", variantes: [
        { id: 65, volumen: "Envase 250 cc", price: 19.15, images: ["/score.jpeg"], desc: "Envase 250 cc." },
        { id: 66, volumen: "Envase 1 Lt", price: 72.10, images: ["/score.jpeg"], desc: "Envase 1 Lt." }
    ]},
    { tituloBase: "Taspa", cat: "Agro", subcat: "Fungicidas", variantes: [{ id: 67, volumen: "Envase 1 Lt", price: 98.05, images: ["/taspa.jpeg"], desc: "Envase 1 Lt." }] },
    { tituloBase: "Tilt 250 EC", cat: "Agro", subcat: "Fungicidas", variantes: [{ id: 68, volumen: "Envase 1 Lt", price: 49.25, images: ["/tilt.jpeg"], desc: "Envase 1 Lt." }] },

    // Fungicida Biológico
    { tituloBase: "Serenade", cat: "Agro", subcat: "Fungicida Biológico", variantes: [{ id: 69, volumen: "Envase 1 Lt", price: 34.10, images: ["/sere.webp"], desc: "Envase 1 Lt." }] },

    // Fungicida + Insecticida
    { tituloBase: "Verdadero", cat: "Agro", subcat: "Fungicida + Insecticida", variantes: [{ id: 70, volumen: "Envase 50 gr", price: 11.75, images: ["/verdadero5.webp"], desc: "Envase 50 gr." }] },

    // Otros, Manuales y Semillas
    { tituloBase: "Venta de tierras y asesoría", cat: "Agro", subcat: "Inversiones", variantes: [{ id: 15, volumen: "Estándar", price: 0, images: ["/R.jpg"], desc: "Tu socio estratégico en el sector agropecuario." }] },
    { tituloBase: "Guía de alimentación para uso adecuado de harina de palmiste", cat: "Agro", subcat: "Manuales", variantes: [{ id: 18, volumen: "Digital", price: 0, images: ["/manual2.jpeg"], desc: "Guía completa en formato digital para optimizar la producción pecuaria.", link: "https://online.fliphtml5.com/fjomd/zejc/" } as any] },
    { tituloBase: "Semilla de maíz", cat: "Agro", subcat: "Semillas", variantes: [{ id: 10, volumen: "Estándar", price: 150, images: ["/semilla.png"], desc: "Semillas seleccionadas de alta calidad para un rendimiento óptimo en campo." }] },
    { tituloBase: "Semilla de pasto Matsuda", cat: "Agro", subcat: "Semillas", variantes: [{ id: 12, volumen: "20 KG", price: 12.6, images: ["/semilladepasto.png"], desc: "Presentación de 20 KG. Semillas de pasto." }] },
    { tituloBase: "Semilla de pasto Cuba 22", cat: "Agro", subcat: "Semillas", variantes: [{ id: 18, volumen: "Estándar", price: 70, images: ["/cuba22.jpeg"], desc: "Semilla de pasto Cuba 22 de alta calidad." }] },
    { tituloBase: "Semilla de pasto Rodas", cat: "Agro", subcat: "Semillas", variantes: [{ id: 19, volumen: "Estándar", price: 70, images: ["/roda.jpeg"], desc: "Semilla de pasto Rodas." }] },
    { tituloBase: "Semilla de pasto Clon 51", cat: "Agro", subcat: "Semillas", variantes: [{ id: 20, volumen: "Estándar", price: 80, images: ["/clon51.jpeg"], desc: "Semilla de pasto Clon 51." }] },
    { tituloBase: "Semilla de pasto Botón de Oro", cat: "Agro", subcat: "Semillas", variantes: [{ id: 21, volumen: "Estándar", price: 120, images: ["/oroboton.png"], desc: "Semilla de pasto Botón de Oro." }] },
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
        { tituloBase: "Nylon", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 118, volumen: "Estándar", price: 47, images: ["/nylon.png"], desc: "Nylon para desmalezadora." }] },
        // Guantes de palpación agregados
       { tituloBase: "Guantes largos para palpación", cat: "Medicina Veterinaria", subcat: "Instrumental Veterinario", variantes: [{ id: 119, volumen: "Caja x 100", price: 17.00, images: ["/guantes.jpeg"], desc: "Guantes largos de polietileno para palpación, obstetricia e inseminación veterinaria." }] },

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
    { tituloBase: "Acople cortasetos", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 145, volumen: "Estándar", price: 120, images: ["/naranja.jpeg"], desc: "Acople cortasetos." }] },  // <-- ¡Faltaba esta coma aquí!
    { tituloBase: "Acople desmalezadora", cat: "Repuestos Agro", subcat: "Desmalezadoras y Motosierras", variantes: [{ id: 146, volumen: "Estándar", price: 70, images: ["/newacope.jpeg"], desc: "Acople desmalezadora motobomba 28MM 9D" }] }
]);

let cargando = $state(true);

    const macroCategorias = ["TODOS", "AGRO", "MEDICINA VETERINARIA", "REPUESTOS AGRO"];
    const subCategoriasAgro = ["Alimentación Animal", "Ganadería", "Inversiones", "Semillas", "Cercas Eléctricas", "Herbicidas", "Bioinsumos", "Equipos", "Plántula", "Insecticidas","Fungicidas","Fungicida Biológico","Fungicida + Insecticida","Tratamiento de Semillas","Bioestimulante Foliar","Regulador de Crecimiento","Coadyuvantes","Rodenticida de Uso Industrial","Manuales"];
    const subCategoriasVet = ["Antiparasitarios", "Antibióticos", "Vitaminas y Suplementos", "Ectoparasiticidas", "Medicamentos", "Instrumental Veterinario"];
    const subCategoriasRepuestos = ["Desmalezadoras y Motosierras", "Motores a Gasolina", "Lubricantes y Aceites"];
    const metodosPago = ["Mercantil", "Venezuela", "Banesco", "Pago Móvil", "Efectivo Divisa", "Binance"];

let busqueda = $state("");
let macroFiltro = $state("TODOS");
let subFiltro = $state("Todas");
let metodoPago = $state("Mercantil");
let carrito = $state<any[]>([]);
let carritoAbierto = $state(false);
let filtrosMovilAbierto = $state(false);
let seleccionVariantes = $state<Record<number, number>>({});

    // Variables para el formulario del Modo Admin y la imagen por archivo
    let nuevoTitulo = $state('');
    let nuevaCat = $state('AGRO');
    let nuevaSubcat = $state('Alimentación Animal');
    let nuevoPrecio = $state(0);
    let nuevoVolumen = $state('Estándar');
    let nuevaDesc = $state('');
    let archivoImagen = $state<File | null>(null);
    let errorMessage = $state('');

    onMount(async () => {
        try {
            const { data, error } = await supabase
                .from('productos')
                .select(`
                    tituloBase:titulo_base,
                    cat,
                    subcat,
                    activo,
                    variantes (
                        id,
                        volumen,
                        price:precio,
                        desc:descripcion,
                        images:imagenes,
                        link
                    )
                `);

            if (error) throw error;
            if (data && data.length > 0) {
                productosCatalogo = data as ProductoAgrupado[];
            }
        } catch (error) {
            console.warn("Usando catálogo local de respaldo:", error);
        } finally {
            cargando = false;
        }
    });

    async function agregarProductoAdmin(e: Event) {
        e.preventDefault();
        if (!$usuarioActivo) {
            alert("Debes iniciar sesión para agregar productos.");
            return;
        }

        errorMessage = '';

        try {
            let imagenUrl = '/placeholder.png';

            if (archivoImagen) {
                const nombreArchivo = `${Date.now()}-${archivoImagen.name}`;
                const { error: uploadError } = await supabase.storage
                    .from('productos')
                    .upload(nombreArchivo, archivoImagen);

                if (uploadError) throw uploadError;

                const { data: publicUrlData } = supabase.storage
                    .from('productos')
                    .getPublicUrl(nombreArchivo);

                imagenUrl = publicUrlData.publicUrl;
            }

            const { error: prodError } = await supabase
                .from('productos')
                .insert([
                    { 
                        titulo_base: nuevoTitulo.trim(), 
                        cat: nuevaCat, 
                        subcat: nuevaSubcat, 
                        activo: true 
                    }
                ]);

            if (prodError) throw prodError;

            const { error: varError } = await supabase
                .from('variantes')
                .insert([
                    {
                        producto_titulo: nuevoTitulo.trim(),
                        volumen: nuevoVolumen.trim(),
                        precio: Number(nuevoPrecio) || 0,
                        descripcion: nuevaDesc.trim(),
                        imagenes: [imagenUrl]
                    }
                ]);

            if (varError) throw varError;

            alert("¡Producto y foto publicados con éxito!");
            window.location.reload();
        } catch (err: any) {
            errorMessage = err.message || "Error al guardar en la base de datos o subir la imagen.";
        }
    }

    async function toggleAgotado(nombreBase: string, estadoActual: boolean) {
        if (!$usuarioActivo) return;

        const nuevoEstado = !estadoActual;
        const { error } = await supabase
            .from('productos')
            .update({ activo: nuevoEstado })
            .eq('titulo_base', nombreBase);

        if (error) {
            console.warn("Actualizando estado de forma local.");
        }

        productosCatalogo = productosCatalogo.map(p => {
            if (p.tituloBase === nombreBase) {
                return { ...p, activo: nuevoEstado };
            }
            return p;
        });
    }

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
            // 1. Limpiamos y normalizamos la búsqueda de texto
            const query = busqueda.toLowerCase().trim();
            const coincideTitulo = p.tituloBase?.toLowerCase().includes(query) || false;
            const coincideVariante = p.variantes?.some(v => 
                v.desc?.toLowerCase().includes(query) || 
                v.volumen?.toLowerCase().includes(query)
            ) || false;

            const cumpleBusqueda = query === "" || coincideTitulo || coincideVariante;

            // 2. Filtro por macro categoría (asegurando mayúsculas/minúsculas)
            const catProducto = p.cat?.trim().toUpperCase() || "";
            const macroSeleccionado = macroFiltro?.trim().toUpperCase() || "TODOS";
            const cumpleMacro = macroSeleccionado === "TODOS" || catProducto === macroSeleccionado;

            // 3. Filtro por subcategoría de forma flexible
            const subcatProducto = p.subcat?.trim().toLowerCase() || "";
            const subSeleccionado = subFiltro?.trim().toLowerCase() || "todas";
            const cumpleSub = subSeleccionado === "todas" || subcatProducto === subSeleccionado;

            return cumpleBusqueda && cumpleMacro && cumpleSub;
        })
    );

    let resultadosPredictivos = $derived(
        busqueda.trim().length > 1 ? productosCatalogo.filter(p => p.tituloBase.toLowerCase().includes(busqueda.toLowerCase())).slice(0, 5) : []
    );

    let cantidadTotalItems = $derived(carrito.reduce((acc, item) => acc + item.cantidad, 0));

    function calcularTotal() {
    return carrito.reduce((acc, c) => {
        let precioUnitario = c.price;
        return acc + (precioUnitario * c.cantidad);
    }, 0);
}
           

function agregarAlCarrito(p: ProductoAgrupado, indexOriginal: number) {
        const varianteActiva = obtenerVarianteActiva(indexOriginal, p);
        if (!varianteActiva || Number(varianteActiva.price) <= 0) return;
        
        const varianteId = varianteActiva.id;
        const itemExistente = carrito.find(c => c.id === varianteId);
        
        if (itemExistente) {
            carrito = carrito.map(c => c.id === varianteId ? { ...c, cantidad: c.cantidad + 1 } : c);
        } else {
            carrito = [
                ...carrito,
                {
                    id: varianteId,
                    title: `${p.tituloBase} (${varianteActiva.volumen})`,
                    varianteVolumen: varianteActiva.volumen,
                    cat: p.cat,
                    price: Number(varianteActiva.price),
                    cantidad: 1
                }
            ];
        }
        // Ya no incluye "carritoAbierto = true;", por lo que la ventana 
        // no se abrirá sola; el usuario podrá seguir comprando con tranquilidad 
        // y solo abrir el carrito cuando él lo decida haciendo clic en el botón flotante.
    }

    function cambiarCantidad(id: any, delta: number) {
        carrito = carrito.map(c => {
            if (c.id === id) {
                const nuevaCantidad = Math.max(1, c.cantidad + delta);
                return { ...c, cantidad: nuevaCantidad };
            }
            return c;
        });
    }

    function eliminar(id: any) {
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
            <button type="button" onclick={() => filtrosMovilAbierto = true} class="sm:hidden flex items-center gap-1.5 bg-emerald-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-xs active:scale-95 transition-transform touch-manipulation cursor-pointer">
                <Icon icon="mdi:filter-variant" class="text-base"/>
                <span>Filtros</span>
                {#if subFiltro !== "Todas" || macroFiltro !== "TODOS"}<span class="w-2 h-2 rounded-full bg-amber-400"></span>{/if}
            </button>
        </div>

        <div class="relative w-full sm:w-96">
            <div class="relative flex items-center">
                <Icon icon="mdi:magnify" class="absolute left-3.5 text-stone-400 text-lg pointer-events-none"/>
                <input 
                    type="text" 
                    bind:value={busqueda} 
                    placeholder="Buscar producto, uso o activo..." 
                    class="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-2xl border border-stone-200 shadow-xs focus:ring-2 focus:ring-emerald-500 outline-none text-xs sm:text-sm bg-white touch-manipulation" 
                />
                {#if busqueda}
                    <button type="button" onclick={() => busqueda = ""} class="absolute right-3 p-1 text-stone-400 hover:text-stone-600 cursor-pointer">
                        <Icon icon="mdi:close-circle" class="text-base"/>
                    </button>
                {/if}
            </div>
            
            {#if resultadosPredictivos && resultadosPredictivos.length > 0}
                <div class="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden z-40 divide-y divide-stone-100">
                    {#each resultadosPredictivos as r}
                        <button 
                            type="button" 
                            onclick={() => { 
                                busqueda = r.tituloBase; 
                                macroFiltro = r.cat ? r.cat.toUpperCase() : "TODOS"; 
                                subFiltro = r.subcat || "Todas";
                            }} 
                            class="w-full text-left px-4 py-3 hover:bg-emerald-50/60 transition-colors flex items-center justify-between gap-3 group touch-manipulation cursor-pointer"
                        >
                            <div class="flex items-center gap-3 min-w-0">
                                <div class="w-10 h-10 rounded-xl bg-stone-100 overflow-hidden shrink-0 border border-stone-200 flex items-center justify-center">
                                    {#if r.variantes?.[0]?.images?.[0]}
                                        <img src={r.variantes[0].images[0]} alt={r.tituloBase} class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                    {:else}
                                        <Icon icon="mdi:image-off-outline" class="text-stone-300 text-lg"/>
                                    {/if}
                                </div>
                                <div class="min-w-0">
                                    <p class="text-xs font-bold text-stone-800 truncate group-hover:text-emerald-900">{r.tituloBase}</p>
                                    <span class="inline-block mt-0.5 text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider">{r.cat} &bull; {r.subcat}</span>
                                </div>
                            </div>
                            <span class="text-xs font-black text-emerald-800 shrink-0">
                                {r.variantes?.[0]?.price > 0 ? `$${Number(r.variantes[0].price).toFixed(2)}` : 'Consultar'}
                            </span>
                        </button>
                    {/each}
                </div>
            {/if}
        </div>
    </div>

    <!-- Pestañas de Macro-Categorías (Escritorio) -->
    <div class="hidden sm:flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
        {#each macroCategorias as macro}
            <button 
                type="button" 
                onclick={() => { macroFiltro = macro; subFiltro = "Todas"; }} 
                class={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${macroFiltro === macro ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs' : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-800'}`}
            >
                {macro}
            </button>
        {/each}
    </div>

    <!-- Pestañas de Subcategorías (Escritorio) -->
    <div class="hidden sm:flex gap-1.5 mt-2.5 overflow-x-auto pb-1 scrollbar-none">
        <button 
            type="button" 
            onclick={() => subFiltro = "Todas"} 
            class={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all border whitespace-nowrap cursor-pointer ${subFiltro === 'Todas' ? 'bg-emerald-900 text-white border-emerald-900' : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'}`}
        >
            Todas las subcategorías
        </button>
        {#each subCategoriasActuales as sub}
            <button 
                type="button" 
                onclick={() => subFiltro = sub} 
                class={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all border whitespace-nowrap cursor-pointer ${subFiltro === sub ? 'bg-emerald-900 text-white border-emerald-900' : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'}`}
            >
                {sub}
            </button>
        {/each}
    </div>
</header>

    <!-- PANEL DE ADMINISTRACIÓN (SOLO SE MUESTRA SI INICIA SESIÓN) -->
    {#if $usuarioActivo}
        <div class="mb-8 p-6 bg-emerald-950/20 border-2 border-emerald-800/40 rounded-3xl shadow-xl">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h3 class="text-sm font-black text-emerald-800 uppercase tracking-widest">Panel de Administración</h3>
                    <p class="text-[11px] text-stone-500">Sesión activa: <strong class="text-stone-800">{$usuarioActivo.nombre}</strong></p>
                </div>
                <span class="text-[10px] bg-emerald-800 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">Modo Editor</span>
            </div>

            <form onsubmit={agregarProductoAdmin} class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-[10px] font-bold uppercase text-stone-500 mb-1">Título del Producto</label>
                    <input type="text" bind:value={nuevoTitulo} placeholder="Ej: Abono Orgánico" required class="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-emerald-500" />
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase text-stone-500 mb-1">Macro Categoría</label>
                    <select bind:value={nuevaCat} class="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-emerald-500">
                        <option value="AGRO">AGRO</option>
                        <option value="MEDICINA VETERINARIA">MEDICINA VETERINARIA</option>
                        <option value="REPUESTOS AGRO">REPUESTOS AGRO</option>
                    </select>
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase text-stone-500 mb-1">Subcategoría</label>
                    <input type="text" bind:value={nuevaSubcat} placeholder="Ej: Alimentación Animal" required class="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-emerald-500" />
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase text-stone-500 mb-1">Precio ($)</label>
                    <input type="number" step="0.01" bind:value={nuevoPrecio} placeholder="0.00" required class="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-emerald-500" />
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase text-stone-500 mb-1">Presentación / Volumen</label>
                    <input type="text" bind:value={nuevoVolumen} placeholder="Ej: 30 KG o 1 Litro" required class="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-emerald-500" />
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase text-stone-500 mb-1">Imagen del Producto (Archivo)</label>
                    <input 
                        type="file" 
                        accept="image/*"
                        onchange={(e) => archivoImagen = e.currentTarget.files?.[0] || null} 
                        class="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2 text-white text-xs focus:outline-none focus:border-emerald-500 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-[10px] file:font-bold file:bg-emerald-800 file:text-white hover:file:bg-emerald-700 cursor-pointer" 
                    />
                </div>

                <div class="sm:col-span-2 lg:col-span-3">
                    <label class="block text-[10px] font-bold uppercase text-stone-500 mb-1">Descripción del Producto</label>
                    <textarea bind:value={nuevaDesc} placeholder="Detalles técnicos y presentación..." rows="2" class="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-emerald-500 resize-none"></textarea>
                </div>

                <div class="sm:col-span-2 lg:col-span-3">
                    <button type="submit" class="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg">
                        + Guardar Producto y Subir Imagen
                    </button>
                </div>
            </form>

            {#if errorMessage}
                <p class="text-red-500 text-xs mt-3 uppercase font-semibold text-center">{errorMessage}</p>
            {/if}
        </div>
    {/if}

    <!-- Estado de Carga -->
    {#if cargando}
        <div class="flex flex-col items-center justify-center py-24">
            <Icon icon="mdi:loading" class="text-4xl text-emerald-800 animate-spin mb-2"/>
            <p class="text-stone-500 text-xs sm:text-sm font-bold uppercase tracking-wider">Cargando catálogo...</p>
        </div>
    {:else if productosFiltrados.length === 0}
        <div class="flex flex-col items-center justify-center py-24 text-center">
            <Icon icon="mdi:package-variant-closed" class="text-5xl text-stone-300 mb-2"/>
            <p class="text-stone-500 text-sm font-bold">No se encontraron productos</p>
        </div>
    {:else}
        <!-- Grilla de Productos -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {#each productosFiltrados as p, index (p.tituloBase)}
                {@const varActiva = obtenerVarianteActiva(index, p)}
                <div class="bg-white p-2.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-stone-100 shadow-xs hover:shadow-xl transition-all flex flex-col h-full group relative overflow-hidden">
                    
                    {#if p.activo === false}
                        <div class="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider z-10 shadow-md">
                            Agotado
                        </div>
                    {/if}

                    <div class="relative w-full h-28 sm:h-48 mb-2.5 sm:mb-4 bg-stone-100 rounded-xl sm:rounded-2xl overflow-hidden">
                        <img src={varActiva?.images[0]} alt={p.tituloBase} class="w-full h-28 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300 {p.activo === false ? 'opacity-40 grayscale' : ''}" />
                    </div>

                    <div class="flex-grow flex flex-col">
                        <h3 class="font-bold text-stone-900 text-xs sm:text-base leading-tight mb-1 line-clamp-2">{p.tituloBase}</h3>
                        <p class="text-[8px] sm:text-[10px] text-emerald-700 font-bold mb-1.5 uppercase tracking-wider">{p.subcat}</p>
                        <p class="text-[10px] sm:text-xs text-stone-500 leading-relaxed mb-3 line-clamp-2">{varActiva?.desc}</p>
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
                        <span class="font-black text-xs sm:text-xl text-emerald-800">{varActiva?.price > 0 ? `$${varActiva.price.toFixed(2)}` : 'Consultar'}</span>
                        
                        <div class="flex items-center gap-1.5">
                            {#if varActiva?.price > 0}
                                <button onclick={() => agregarAlCarrito(p, index)} class="flex-1 py-2 bg-emerald-50 hover:bg-emerald-800 text-emerald-800 hover:text-white border border-emerald-800/20 hover:border-emerald-800 font-bold rounded-xl text-[9px] sm:text-xs uppercase tracking-wider transition-all text-center touch-manipulation">AGREGAR</button>
                            {:else}
                                <a href={`https://wa.me/584241860644?text=Hola, deseo consultar precio de ${p.tituloBase}`} target="_blank" class="flex-1 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-xl text-[9px] sm:text-xs uppercase tracking-wider transition-all text-center touch-manipulation">CONSULTAR</a>
                            {/if}

                            {#if $usuarioActivo}
                                <button 
                                    type="button"
                                    onclick={() => toggleAgotado(p.tituloBase, p.activo !== false)}
                                    class="px-2.5 py-2 bg-stone-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-red-700 transition-colors cursor-pointer"
                                    title="Cambiar disponibilidad"
                                >
                                    {p.activo !== false ? 'Agotar' : 'Activar'}
                                </button>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}

    <!-- Botón Carrito Flotante -->

<button 
    type="button" 
    onclick={() => { carritoAbierto = true; }} 
    class="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-emerald-800 text-white p-4 sm:p-5 rounded-full shadow-2xl hover:bg-emerald-900 active:scale-95 transition-transform z-40 flex items-center justify-center cursor-pointer"
>
    <Icon class="text-2xl sm:text-3xl" icon="mdi:cart-outline"/>
    {#if cantidadTotalItems > 0}
        <span class="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] sm:text-xs font-black w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shadow-md animate-pulse">
            {cantidadTotalItems}
        </span>
    {/if}
</button>

<!-- MODAL LATERAL DEL CARRITO -->
<!-- MODAL LATERAL DEL CARRITO -->
{#if carritoAbierto}
    <div class="fixed inset-0 bg-stone-950/40 backdrop-blur-sm z-50 flex justify-end transition-all duration-300">
        <div class="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-stone-100">
            
            <!-- Cabecera -->
            <div class="flex items-center justify-between px-6 py-5 border-b border-stone-100 bg-stone-50/80 backdrop-blur-md">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-md shadow-emerald-600/20">
                        <Icon icon="mdi:cart" class="text-xl"/>
                    </div>
                    <div>
                        <h2 class="text-xs font-black uppercase tracking-widest text-stone-900">Tu Carrito</h2>
                        <p class="text-[11px] text-stone-500 font-medium">{cantidadTotalItems} {cantidadTotalItems === 1 ? 'artículo' : 'artículos'}</p>
                    </div>
                </div>
                <button 
                    type="button" 
                    onclick={() => { carritoAbierto = false; }} 
                    class="w-9 h-9 flex items-center justify-center text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-full transition cursor-pointer"
                    aria-label="Cerrar carrito"
                >
                    <Icon icon="mdi:close" class="text-lg"/>
                </button>
            </div>

            <!-- Lista de Productos -->
            <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-stone-100">
                {#if carrito.length === 0}
                    <div class="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                        <div class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center shadow-inner">
                            <Icon icon="mdi:cart-outline" class="text-3xl"/>
                        </div>
                        <div class="space-y-1">
                            <p class="text-sm font-bold text-stone-800">Tu carrito está vacío</p>
                            <p class="text-xs text-stone-400 max-w-[220px] leading-relaxed">Explora el catálogo y añade productos para armar tu pedido.</p>
                        </div>
                    </div>
                {:else}
                    {#each carrito as item}
                        <div class="pt-4 first:pt-0 flex items-center justify-between gap-3 group">
                            <div class="space-y-1 flex-1">
                                <h4 class="text-xs font-bold text-stone-800 leading-snug">{item.title}</h4>
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-black text-emerald-700">${item.price}</span>
                                    <span class="text-[10px] text-stone-400">c/u</span>
                                </div>
                            </div>
                            
                            <div class="flex items-center gap-3 shrink-0">
                                <!-- Control de cantidad -->
                                <div class="flex items-center bg-stone-100/80 rounded-xl p-1 border border-stone-200/60">
                                    <button 
                                        type="button" 
                                        onclick={() => cambiarCantidad(item.id, -1)} 
                                        class="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-white rounded-lg font-bold text-xs transition shadow-2xs cursor-pointer"
                                    >
                                        -
                                    </button>
                                    <span class="w-7 text-center text-xs font-bold text-stone-800">{item.cantidad}</span>
                                    <button 
                                        type="button" 
                                        onclick={() => cambiarCantidad(item.id, 1)} 
                                        class="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-white rounded-lg font-bold text-xs transition shadow-2xs cursor-pointer"
                                    >
                                        +
                                    </button>
                                </div>

                                <!-- Botón eliminar -->
                                <button 
                                    type="button" 
                                    onclick={() => eliminar(item.id)} 
                                    class="w-8 h-8 flex items-center justify-center text-stone-300 hover:text-red-600 hover:bg-red-50 rounded-xl transition cursor-pointer"
                                    aria-label="Eliminar producto"
                                >
                                    <Icon icon="mdi:trash-can-outline" class="text-base"/>
                                </button>
                            </div>
                        </div>
                    {/each}
                {/if}
            </div>

            <!-- Resumen, Botones de Pago y Total -->
            {#if carrito.length > 0}
                <div class="p-6 bg-stone-50/90 border-t border-stone-100 space-y-4 backdrop-blur-md">
                    
                    <!-- Selección de Método de Pago con Botones Grid -->
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase tracking-widest text-stone-400 block">
                            Selecciona Método de Pago - Tasa BCV - Algunos productos tienen descuento por pago en efectivo o USDT
                        </label>
                        <div class="grid grid-cols-2 gap-2">
                            
                            <!-- Botón Efectivo -->
                            <button 
                                type="button"
                                onclick={() => metodoPago = 'Efectivo'}
                                class={`flex items-center gap-2.5 p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                                    metodoPago === 'Efectivo' 
                                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-sm' 
                                        : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                                }`}
                            >
                                <span class="text-lg">💵</span>
                                <div>
                                    <p class="text-xs font-bold leading-tight">Efectivo</p>
                                    <p class="text-[10px] text-stone-400">Divisas / Cash</p>
                                </div>
                            </button>

                            <!-- Botón Binance -->
                            <button 
                                type="button"
                                onclick={() => metodoPago = 'Binance'}
                                class={`flex items-center gap-2.5 p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                                    metodoPago === 'Binance' 
                                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-sm' 
                                        : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                                }`}
                            >
                                <span class="text-lg">🪙</span>
                                <div>
                                    <p class="text-xs font-bold leading-tight">Binance</p>
                                    <p class="text-[10px] text-stone-400">USDT / Pay</p>
                                </div>
                            </button>

                            <!-- Botón Transferencia -->
                            <button 
                                type="button"
                                onclick={() => metodoPago = 'Transferencia'}
                                class={`flex items-center gap-2.5 p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                                    metodoPago === 'Transferencia' 
                                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-sm' 
                                        : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                                }`}
                            >
                                <span class="text-lg">🏦</span>
                                <div>
                                    <p class="text-xs font-bold leading-tight">Transferencia</p>
                                    <p class="text-[10px] text-stone-400">Bancaria</p>
                                </div>
                            </button>

                            <!-- Botón Pago Móvil -->
                            <button 
                                type="button"
                                onclick={() => metodoPago = 'Pago Móvil'}
                                class={`flex items-center gap-2.5 p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                                    metodoPago === 'Pago Móvil' 
                                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-sm' 
                                        : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                                }`}
                            >
                                <span class="text-lg">📱</span>
                                <div>
                                    <p class="text-xs font-bold leading-tight">Pago Móvil</p>
                                    <p class="text-[10px] text-stone-400">Nacional</p>
                                </div>
                            </button>

                        </div>
                    </div>

                    <!-- Total -->
                    <div class="flex justify-between items-center pt-3 border-t border-stone-200/60">
                        <span class="text-xs font-bold uppercase tracking-wider text-stone-500">Total a Pagar</span>
                        <span class="text-xl font-black text-emerald-900 tracking-tight">${calcularTotal().toFixed(2)}</span>
                    </div>

                    <!-- Botón de WhatsApp -->
                    <button 
                        type="button" 
                        onclick={finalizarCompra} 
                        class="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 transition-all cursor-pointer"
                    >
                        <Icon icon="mdi:whatsapp" class="text-xl"/> 
                        <span class="text-xs uppercase tracking-wider font-extrabold">Finalizar Pedido por WhatsApp</span>
                    </button>
                </div>
            {/if}

        </div>
    </div>
{/if}
<!-- MODAL DE FILTROS PARA MÓVIL -->
<!-- MODAL DE FILTROS PARA MÓVIL -->
{#if filtrosMovilAbierto}
    <div class="fixed inset-0 bg-black/50 z-50 flex items-end sm:hidden backdrop-blur-xs transition-opacity">
        <div class="bg-white w-full max-h-[90vh] rounded-t-3xl shadow-2xl flex flex-col p-6 overflow-y-auto">
            
            <!-- Cabecera del Modal -->
            <div class="flex items-center justify-between pb-4 border-b border-stone-100 mb-5">
                <h3 class="text-base font-black tracking-tight text-stone-900 uppercase">
                    FILTRAR CATÁLOGO
                </h3>
                <button type="button" onclick={() => filtrosMovilAbierto = false} class="p-1 text-stone-400 hover:text-stone-700 cursor-pointer">
                    <Icon icon="mdi:close" class="text-xl"/>
                </button>
            </div>

            <!-- 1. Categoría General (Lista Vertical con estilo de la imagen) -->
            <div class="mb-5">
                <label class="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-3">CATEGORÍA GENERAL</label>
                <div class="flex flex-col gap-2.5">
                    {#each macroCategorias as macro}
                        <button 
                            type="button" 
                            onclick={() => { macroFiltro = macro; subFiltro = "Todas"; }} 
                            class={`w-full px-5 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all border text-left flex items-center justify-between cursor-pointer ${
                                macroFiltro === macro 
                                    ? 'bg-[#093a23] text-white border-[#093a23] shadow-md' 
                                    : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
                            }`}
                        >
                            <span>{macro}</span>
                            {#if macroFiltro === macro}
                                <Icon icon="mdi:check" class="text-base text-white"/>
                            {/if}
                        </button>
                    {/each}
                </div>
            </div>

            <!-- 2. Subcategoría Específica -->
            <div class="mb-8">
                <label class="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-3">SUBCATEGORÍA ESPECÍFICA</label>
                <div class="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                    <button 
                        type="button" 
                        onclick={() => subFiltro = "Todas"} 
                        class={`w-full px-5 py-3.5 rounded-2xl text-xs font-bold transition-all border text-left flex items-center justify-between cursor-pointer ${
                            subFiltro === 'Todas' 
                                ? 'bg-[#d1fae5] text-stone-900 border-[#d1fae5]' 
                                : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
                        }`}
                    >
                        <span>Todas</span>
                        {#if subFiltro === 'Todas'}
                            <span class="w-2 h-2 rounded-full bg-[#093a23]"></span>
                        {/if}
                    </button>
                    {#each subCategoriasActuales as sub}
                        <button 
                            type="button" 
                            onclick={() => subFiltro = sub} 
                            class={`w-full px-5 py-3.5 rounded-2xl text-xs font-bold transition-all border text-left flex items-center justify-between cursor-pointer ${
                                subFiltro === sub 
                                    ? 'bg-[#d1fae5] text-stone-900 border-[#d1fae5]' 
                                    : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
                            }`}
                        >
                            <span>{sub}</span>
                            {#if subFiltro === sub}
                                <span class="w-2 h-2 rounded-full bg-[#093a23]"></span>
                            {/if}
                        </button>
                    {/each}
                </div>
            </div>

            <!-- Botones inferiores: Limpiar y Ver Resultados -->
            <div class="grid grid-cols-3 gap-3 mt-auto pt-2">
                <button 
                    type="button" 
                    onclick={() => { macroFiltro = "TODOS"; subFiltro = "Todas"; }} 
                    class="col-span-1 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-4 rounded-2xl text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
                >
                    LIMPIAR
                </button>
                <button 
                    type="button" 
                    onclick={() => filtrosMovilAbierto = false} 
                    class="col-span-2 bg-[#093a23] hover:bg-[#062c1a] text-white font-bold py-4 rounded-2xl text-xs uppercase tracking-wider shadow-lg cursor-pointer text-center"
                >
                    VER RESULTADOS
                </button>
            </div>

        </div>
    </div>
{/if}
</div>
