<script lang="ts">
    import { onMount } from "svelte";
    import { supabase } from "$lib/supabase";
    import { usuarioActivo } from '$lib/auth';

    const waLink = "https://wa.me/584241860644?text=";

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

    // Catálogo por defecto (respaldo local) con tipado correcto y reactividad
    let productosCatalogo = $state<ProductoAgrupado[]>([
        {
            tituloBase: "Harina de Palmiste",
            cat: "AGRO",
            subcat: "Alimentación Animal",
            variantes: [{ id: 1, volumen: "Estándar", price: 12.90, desc: "Fuente de proteína y energía ideal para ganado bovino.", images: ["/palmiste.png"] }]
        },
        {
            tituloBase: "Alambre eléctrico",
            cat: "AGRO",
            subcat: "Cercas Eléctricas",
            variantes: [{ id: 2, volumen: "Rollo", price: 170, desc: "Para cerco ganadero. Alta conductividad, resistente a corrosión y a la intemperie.", images: ["/alambre.png"] }]
        },
        {
            tituloBase: "Brega",
            cat: "AGRO",
            subcat: "Herbicidas",
            variantes: [{ id: 3, volumen: "1 Litro", price: 12.65, desc: "Formulado para el control de malezas en el maíz.", images: ["/brega.png"] }]
        },
        {
            tituloBase: "Glytotal",
            cat: "AGRO",
            subcat: "Herbicidas",
            variantes: [{ id: 4, volumen: "1 Litro", price: 8.8, desc: "No selectivo, de acción sistemática ideal para el control de malezas de hoja ancha y gramíneas.", images: ["/realgly.png"] }]
        }
    ]);

    const categorias = [
        { title: "Alimentación Animal" },
        { title: "Pastos y Forrajes" },
        { title: "Cercas Ganaderas" },
        { title: "Insumos Agrícolas" },
        { title: "Ganadería" },
        { title: "Ver Todo el Catálogo" }
    ];

    const btnSecondary = "px-4 xs:px-6 lg:px-8 py-3 lg:py-4 border-2 border-stone-200 text-stone-900 hover:border-emerald-800 hover:text-emerald-800 font-bold rounded-xl text-[9px] xs:text-[10px] lg:text-[11px] uppercase tracking-[0.155em] lg:tracking-[0.2em] transition-all duration-300 text-center whitespace-nowrap";
    const titleGradient = "bg-gradient-to-r from-emerald-700 via-emerald-400 to-emerald-800 bg-clip-text text-transparent";

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
            console.warn("Usando catálogo local por defecto (Supabase inactivo o sin conexión).");
        }
    });
</script>

<!-- HERO SECTION -->
<section class="relative w-full h-[85vh] sm:h-[80vh] lg:h-[90vh] flex flex-col justify-center bg-stone-950 overflow-hidden">
    <div class="absolute inset-0 w-full h-full">
        <video src="/vaquita3.mp4" autoplay loop muted playsinline class="w-full h-full object-cover opacity-50 scale-105"></video>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0c0a09_100%)]"></div>
        <div class="absolute inset-0 bg-stone-950/40"></div>
    </div>

    <div class="relative z-20 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div class="mb-5 sm:mb-6 lg:mb-8 p-3 bg-white/5 backdrop-blur-sm rounded-full">
            <img src="/logo.png" alt="Logo AgroVenz" class="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-2xl" />
        </div>

        <h1 class="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.15] sm:leading-[1] mb-5 sm:mb-6 lg:mb-8 uppercase tracking-tighter max-w-5xl">
            Soluciones Estratégicas <br class="hidden sm:inline"/> 
            <span class={titleGradient}>para tu Finca</span>
        </h1>
        
        <p class="text-stone-300 text-[11px] xs:text-xs sm:text-base lg:text-xl mb-6 sm:mb-8 lg:mb-10 max-w-[280px] xs:max-w-xs sm:max-w-xl leading-relaxed font-light tracking-wide">
            Potenciamos el rendimiento de tu unidad productiva con tecnología, insumos de alta gama y asesoría experta.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-3 xs:gap-4 w-full sm:w-auto justify-center">
            <a href="/catalogo" class="w-full sm:w-auto px-6 xs:px-8 py-3.5 xs:py-4 bg-white text-stone-950 font-bold rounded-xl text-[9px] xs:text-[10px] lg:text-[11px] uppercase tracking-[0.155em] lg:tracking-[0.2em] transition-all hover:bg-emerald-800 hover:text-white text-center border border-white shadow-lg">
                Ver Catálogo
            </a>
            <a href="{waLink}Hola, deseo solicitar una asesoría técnica." target="_blank" 
               class="w-full sm:w-auto px-6 xs:px-8 py-3.5 xs:py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white font-bold rounded-xl text-[9px] xs:text-[10px] lg:text-[11px] uppercase tracking-[0.155em] lg:tracking-[0.2em] transition-all duration-300 text-center">
                Solicitar Asesoría
            </a>
        </div>
    </div>

    <div class="absolute bottom-0 w-full h-[50px] sm:h-[80px] lg:h-[100px] z-10 pointer-events-none">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" class="w-full h-full block text-white fill-current">
            <path d="M0 100 H1440 V0 C1000 60, 800 100, 600 100 C400 100, 200 20, 0 0 Z" />
        </svg>
    </div>
</section>

<!-- ALIADOS / MARCAS -->
<section class="py-8 sm:py-10 lg:py-12 bg-white border-b border-stone-200">
    <div class="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div class="lg:w-1/4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-stone-200 pb-4 lg:pb-0 lg:pr-6 w-full">
                <span class="text-[11px] xs:text-xs font-black text-stone-800 uppercase tracking-widest block">
                    Respaldado por
                </span>
                <span class="text-[10px] sm:text-[11px] text-stone-400 block mt-1">
                    Marcas y aliados de nuestra gestión
                </span>
            </div>
            <div class="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 lg:gap-8 items-center justify-items-center">
                <img src="/matsuda88.png" alt="Matsuda 88" class="h-6 xs:h-7 sm:h-8 lg:h-9 w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
                <img src="/pro.png" alt="PRO" class="h-6 xs:h-7 sm:h-8 lg:h-9 w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
                <img src="/ganaderos.png" alt="Ganaderos" class="h-6 xs:h-7 sm:h-8 lg:h-9 w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
                <img src="/finca.png" alt="La Finca" class="h-6 xs:h-7 sm:h-8 lg:h-9 w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
        </div>
    </div>
</section>

<!-- SECCIÓN VENTA DE MAQUINARIA -->
<section class="py-12 sm:py-16 lg:py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div class="space-y-4 sm:space-y-6 text-center lg:text-left">
                <h2 class="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 uppercase tracking-tight leading-tight">
                    ¿Quieres vender tu <span class={titleGradient}>maquinaria</span>?
                </h2>
                <p class="text-stone-600 text-sm sm:text-lg">Agrovenz te ayuda a encontrar el comprador. Publicamos, promocionamos y conectamos.</p>
                <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                    <a href="{waLink}Hola, deseo vender mi maquinaria." target="_blank" class="w-full sm:w-auto px-6 xs:px-8 py-3.5 xs:py-4 bg-stone-900 text-white hover:bg-emerald-800 rounded-xl text-[9px] xs:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.155em] lg:tracking-[0.2em] transition-all text-center">Enviar Fotos y Datos</a>
                </div>
            </div>
            <div class="relative h-[260px] xs:h-[320px] sm:h-[400px] lg:h-[500px] rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl">
                <img src="/maquina2.jpeg" alt="Maquinaria Agrovenz" class="w-full h-full object-cover" />
            </div>
        </div>
    </div>
</section>

<!-- SECCIÓN SOLUCIONES VERDES -->
<section class="py-12 sm:py-16 lg:py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div class="space-y-4 sm:space-y-6 text-center lg:text-left">
                <h2 class="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 uppercase tracking-tight leading-tight">
                    Soluciones verdes para <span class={titleGradient}>empresas</span>
                </h2>
                <p class="text-stone-600 text-sm sm:text-lg">Territorios productivos y sostenibles para un mejor mañana.</p>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 text-left">
                    <div class="flex items-center space-x-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                        <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-800/10 flex items-center justify-center text-emerald-800">✓</div>
                        <span class="text-xs sm:text-sm text-stone-800 font-semibold">Mantenimiento de áreas verdes</span>
                    </div>
                    <div class="flex items-center space-x-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                        <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-800/10 flex items-center justify-center text-emerald-800">✓</div>
                        <span class="text-xs sm:text-sm text-stone-800 font-semibold">Paisajismo corporativo</span>
                    </div>
                    <div class="flex items-center space-x-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                        <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-800/10 flex items-center justify-center text-emerald-800">✓</div>
                        <span class="text-xs sm:text-sm text-stone-800 font-semibold">Desmalezamiento industrial</span>
                    </div>
                    <div class="flex items-center space-x-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                        <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-800/10 flex items-center justify-center text-emerald-800">✓</div>
                        <span class="text-xs sm:text-sm text-stone-800 font-semibold">Limpieza de corredores petroleros y eléctricos</span>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                    <a href="{waLink}Hola, deseo solicitar una inspección para servicios industriales." target="_blank" class="w-full sm:w-auto px-6 xs:px-8 py-3.5 xs:py-4 bg-emerald-800 text-white hover:bg-stone-900 rounded-xl text-[9px] xs:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.155em] lg:tracking-[0.2em] transition-all text-center">
                        Solicita una inspección
                    </a>
                </div>
            </div>
            <div class="relative h-[260px] xs:h-[320px] sm:h-[400px] lg:h-[500px] rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl">
                <img src="/monte2.jpg" alt="Agrovenz Soluciones Verdes" class="w-full h-full object-cover" />
            </div>
        </div>
    </div>
</section>

<!-- PRODUCTOS DESTACADOS (VISTA PREVIA DEL HOME - 4 PRODUCTOS) -->
<section class="py-12 sm:py-16 lg:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 sm:mb-16">
            <h2 class="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">Productos <span class={titleGradient}>Destacados</span></h2>
            <a href="/catalogo" class={btnSecondary}>Ver Catálogo Completo</a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 lg:gap-8">
            {#each productosCatalogo.slice(0, 4) as p}
                {@const varP = p.variantes[0]}
                <div class="group bg-white p-4 rounded-2xl border border-stone-200 hover:border-emerald-800 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between relative overflow-hidden">
                    
                    {#if p.activo === false}
                        <div class="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider z-10 shadow-md">
                            Agotado
                        </div>
                    {/if}

                    <div>
                        <img src={varP?.images?.[0] || '/placeholder.png'} alt={p.tituloBase} class="w-full h-44 xs:h-48 sm:h-52 object-cover rounded-xl mb-4 bg-stone-100 {p.activo === false ? 'opacity-40 grayscale' : ''}" />
                        <h3 class="font-bold text-stone-900 mb-1 text-sm sm:text-base">{p.tituloBase}</h3>
                        <p class="text-[9px] xs:text-[10px] text-stone-400 uppercase tracking-widest mb-3">{p.subcat}</p>
                    </div>

                    <div class="flex items-center justify-between mt-2 pt-3 border-t border-stone-100">
                        <span class="font-black text-sm sm:text-base text-emerald-800">
                            {(!varP?.price || varP.price === 0) ? 'Consultar' : `$${varP.price}`}
                        </span>
                        
                        <div class="flex items-center gap-1.5">
                            <!-- CAMBIO AQUÍ: Ahora el botón de Comprar redirige al /catalogo en lugar de abrir WhatsApp -->
                            <a href="/catalogo" class="px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-bold hover:bg-emerald-800 hover:text-white transition-colors">Comprar</a>
                            
                            {#if $usuarioActivo}
                                <button 
                                    type="button"
                                    onclick={() => toggleAgotado(p.tituloBase, p.activo !== false)}
                                    class="px-2.5 py-1.5 bg-stone-900 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-red-700 transition-colors cursor-pointer"
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
    </div>
</section>

<!-- SOLUCIONES PARA TU UNIDAD PRODUCTIVA -->
<section class="py-12 sm:py-16 lg:py-24 bg-stone-50">
    <div class="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl xs:text-3xl sm:text-4xl font-black mb-8 sm:mb-16 uppercase">Soluciones para tu <span class={titleGradient}>Unidad Productiva</span></h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
            {#each categorias as cat}
                <a href="{waLink}Hola, necesito información sobre {cat.title}" target="_blank" class="group flex flex-col items-center p-5 xs:p-6 sm:p-8 bg-white sm:bg-stone-50 border border-stone-200 sm:border-stone-100 rounded-2xl sm:rounded-3xl hover:border-emerald-800 transition-all hover:bg-white shadow-sm sm:shadow-none">
                    <div class="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-stone-100 rounded-full flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:bg-emerald-100 transition-all text-stone-600 group-hover:text-emerald-800 font-bold">
                        🌱
                    </div>
                    <span class="font-bold uppercase text-[10px] xs:text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-stone-900">{cat.title}</span>
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- EDUCACIÓN AGROPECUARIA -->
<section class="py-12 sm:py-16 lg:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 sm:mb-16">
            <h2 class="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">Educación <span class={titleGradient}>Agropecuaria</span></h2>
            <a href="{waLink}Hola, deseo recibir información de educación agropecuaria." target="_blank" class={btnSecondary}>Ver Recursos</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 lg:gap-8">
            {#each [{title: "Nutrición Animal", img: "/nutri.jpeg"}, {title: "Manejo de Potreros", img: "/manejo.png"}, {title: "Administración", img: "/adm.jpg"}] as educ}
                <div class="relative p-6 sm:p-8 rounded-3xl overflow-hidden min-h-[220px] xs:min-h-[260px] sm:min-h-[300px] flex flex-col justify-end border border-stone-200 shadow-sm">
                    <img src={educ.img} alt={educ.title} class="absolute inset-0 w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <h4 class="relative z-10 text-lg sm:text-xl font-bold text-white">{educ.title}</h4>
                </div>
            {/each}
        </div>
    </div>
</section>
