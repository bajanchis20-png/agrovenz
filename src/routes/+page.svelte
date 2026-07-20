<script lang="ts">
    import Icon from "@iconify/svelte";

    const waLink = "https://wa.me/584241860644?text=";

    const productos = [
        { id: 1, title: "Harina de Palmiste", cat: "Alimentación Animal", price: 25, image: "/palmiste.png", desc: "Fuente de proteína y energía ideal para ganado bovino." },
        { id: 2, title: "Alambre electrico", cat: "Cercas Eléctricas", price: 40, image: "/alambre.png", desc: "Para cerco ganadero. Alta conductividad, resistente a corrosión y a la intemperie." },
        { id: 3, title: "Brega", cat: "Herbicidas", price: 150, image: "/brega.png", desc: "Formulado para el control de melezas en el maíz." },
        { id: 4, title: "Glytotal", cat: "Herbicidas", price: 60, image: "/glytotal.png", desc: "No selectivo, de accion sistematica ideal para el control de malezas de hoja ancha y gramíneas." },
        { id: 5, title: "Jonrón 212", cat: "Herbicidas", price: 35, image: "/herbicida.png", desc: "Control efectivo de malezas de hoja ancha, presentación 1L." },
        { id: 6, title: "Socio", cat: "Herbicidas", price: 45, image: "/socio.png", desc: "De acción sistémica utilizado para control de maleza de hoja ancha." },
        { id: 7, title: "Silo de maíz", cat: "Alimentación Animal", price: 50, image: "/silo.png", desc: "Presentación de 30KG, fabricado con maleza y maíz." },
        { id: 8, title: "SiloLact", cat: "Bioinsumos", price: 30, image: "/silolact.png", desc: "Presentación de 500ml. Favorece la fermentación y conservación del forraje." },
        { id: 9, title: "Bolsas Resistentes", cat: "Equipos Agropecuarios", price: 85, image: "/bolsas.png", desc: "Equipo resistente para empaque y conservación." },
        { id: 10, title: "Semilla de maíz", cat: "Pastos y Semillas", price: 20, image: "/semilla.png", desc: "Semillas seleccionadas de alta calidad para un rendimiento óptimo." },
        { id: 11, title: "Melaza", cat: "Alimentación Animal", price: 200, image: "/Melaza.png", desc: "Mejora la energía y condición corporal de los animales." },
        { id: 12, title: "Semilla de pasto Matsuda", cat: "Pastos y semillas", price: 35, image: "/matsuda.png", desc: "Balance mineral necesario para el desarrollo animal. 20KG" },
        { id: 13, title: "Bumaute y Bumautas", cat: "Ganadería", price: 1200, image: "/bovino.png", desc: "Genética seleccionada para mejorar la productividad." }
    ];

    const categorias = [
        { title: "Alimentación Animal", icon: "mdi:bowl-mix" },
        { title: "Pastos y Forrajes", icon: "mdi:grass" },
        { title: "Cercas Ganaderas", icon: "mdi:fence" },
        { title: "Insumos Agrícolas", icon: "mdi:leaf" },
        { title: "Ganadería", icon: "mdi:cow" },
        { title: "Ver Todo el Catálogo", icon: "mdi:arrow-right-circle" }
    ];

    const btnPrimary = "inline-block px-8 py-4 bg-emerald-800 text-white hover:bg-emerald-700 font-bold rounded-xl text-[11px] uppercase tracking-[0.2em] transition-all duration-300 text-center shadow-lg shadow-emerald-900/20";
    const btnSecondary = "px-8 py-4 border-2 border-stone-200 text-stone-900 hover:border-emerald-800 hover:text-emerald-800 font-bold rounded-xl text-[11px] uppercase tracking-[0.2em] transition-all duration-300 text-center";
    
    // Degradado unificado
    const titleGradient = "bg-gradient-to-r from-emerald-700 via-emerald-400 to-emerald-800 bg-clip-text text-transparent";
</script>

<section class="relative w-full h-[90vh] flex flex-col justify-center bg-stone-950 overflow-hidden">
    <!-- VIDEO BACKGROUND MEJORADO -->
    <div class="absolute inset-0 w-full h-full">
        <video src="/vaquita3.mp4" autoplay loop muted playsinline class="w-full h-full object-cover opacity-50 scale-105"></video>
        <!-- Degradado radial para enfoque central -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0c0a09_100%)]"></div>
        <div class="absolute inset-0 bg-stone-950/40"></div>
    </div>

    <!-- CONTENIDO -->
    <div class="relative z-20 w-full px-6 flex flex-col items-center text-center">
        <!-- LOGO CON LIGERA SOMBRA -->
        <div class="mb-8 p-3 bg-white/5 backdrop-blur-sm rounded-full">
            <img src="/logo.png" alt="Logo AgroVenz" class="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-2xl" />
        </div>

        <!-- TÍTULO CON AJUSTE DE ESPACIADO -->
        <h1 class="text-[40px] sm:text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
            Soluciones Estratégicas <br/> 
            <span class={titleGradient}>para tu Finca</span>
        </h1>
        
        <!-- SUBTÍTULO MÁS ELEGANTE -->
        <p class="text-stone-300 text-sm md:text-xl mb-10 max-w-lg leading-relaxed font-light tracking-wide">
            Potenciamos el rendimiento de tu unidad productiva con tecnología, insumos de alta gama y asesoría experta.
        </p>
        
        <!-- BOTONES CON ESTILO PREMIUM -->
        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="/catalogo" class="group relative px-8 py-4 bg-white text-stone-950 font-bold rounded-xl text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-emerald-800 hover:text-white text-center border border-white">
                Ver Catálogo
            </a>
            <a href="{waLink}Hola, deseo solicitar una asesoría técnica." target="_blank" 
               class="px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white font-bold rounded-xl text-[11px] uppercase tracking-[0.2em] transition-all duration-300 text-center">
                Solicitar Asesoría
            </a>
        </div>
    </div>

    <!-- CURVA DE CIERRE (MÁS SUAVE) -->
    <div class="absolute bottom-0 w-full h-[100px] z-10">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" class="w-full h-full block text-white fill-current">
            <path d="M0 100 H1440 V0 C1000 60, 800 100, 600 100 C400 100, 200 20, 0 0 Z" />
        </svg>
    </div>
</section>


<section class="py-12 bg-white border-b border-stone-200">
    <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <!-- Etiqueta lateral -->
            <div class="lg:w-1/4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-6">
                <span class="text-xs font-black text-stone-800 uppercase tracking-widest block">
                    Respaldado por
                </span>
                <span class="text-[11px] text-stone-400 block mt-1">
                    Marcas y aliados de nuestra gestión
                </span>
            </div>

            <!-- Grilla horizontal de logos -->
            <div class="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <img src="/matsuda88.png" alt="Matsuda 88" class="h-9 w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
                <img src="/pro.png" alt="PRO" class="h-9 w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
                <img src="/ganaderos.png" alt="Ganaderos" class="h-9 w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
                <img src="/finca.png" alt="La Finca" class="h-9 w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>

        </div>
    </div>
</section>

<section class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-6">
                <h2 class="text-4xl md:text-5xl font-black text-stone-900 uppercase tracking-tight">
                    ¿Buscas invertir o elevar la <span class={titleGradient}>rentabilidad</span> de tu finca?
                </h2>
                <p class="text-stone-600 text-lg">Diseñamos planes de inversión a la medida de tu realidad productiva.</p>
                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="{waLink}Hola, deseo ver catálogo de fincas." target="_blank" class="px-8 py-4 bg-stone-900 text-white hover:bg-emerald-800 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all">Ver Fincas</a>
                </div>
            </div>
            <div class="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                <img src="/R.jpg" alt="Finca" class="w-full h-full object-cover" />
            </div>
        </div>
    </div>
</section>

<!-- VISTA PREVIA DEL CATÁLOGO -->
<section class="py-24 bg-stone-50">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-end mb-16">
            <h2 class="text-3xl font-black uppercase tracking-tight">Productos <span class={titleGradient}>Destacados</span></h2>
            <a href="/catalogo" class={btnSecondary}>Ver Catálogo</a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each productos.slice(0, 4) as p}
                <div class="group bg-white p-4 rounded-2xl border border-stone-200 hover:border-emerald-800 transition-all duration-500 shadow-sm hover:shadow-xl">
                    <img src={p.image} alt={p.title} class="w-full h-48 object-cover rounded-xl mb-6 bg-stone-100" />
                    <h3 class="font-bold text-stone-900 mb-1">{p.title}</h3>
                    <p class="text-[10px] text-stone-400 uppercase tracking-widest mb-4">{p.cat}</p>
                    <span class="block font-black text-lg text-emerald-800">${p.price}</span>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- CATEGORÍAS -->
<section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-black mb-16 uppercase">Soluciones para tu <span class={titleGradient}>Unidad Productiva</span></h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            {#each categorias as cat}
                <a href="/catalogo" class="group flex flex-col items-center p-8 border border-stone-100 rounded-3xl hover:border-emerald-800 transition-all hover:bg-stone-50">
                    <div class="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-all">
                        <Icon icon={cat.icon} class="text-2xl text-stone-600 group-hover:text-emerald-800" />
                    </div>
                    <span class="font-bold uppercase text-xs tracking-widest text-stone-900">{cat.title}</span>
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- EDUCACIÓN -->
<section class="py-24 bg-stone-50">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-end mb-16">
            <h2 class="text-3xl font-black uppercase tracking-tight">Educación <span class={titleGradient}>Agropecuaria</span></h2>
            <a href="/educacion" class={btnSecondary}>Ver Recursos</a>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
            {#each [{title: "Nutrición Animal", img: "/nutri.jpeg"}, {title: "Manejo de Potreros", img: "/manejo.png"}, {title: "Administración", img: "/adm.jpg"}] as educ}
                <div class="relative p-8 rounded-3xl overflow-hidden min-h-[300px] flex flex-col justify-end border border-stone-200">
                    <img src={educ.img} alt={educ.title} class="absolute inset-0 w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <h4 class="relative z-10 text-xl font-bold text-white">{educ.title}</h4>
                </div>
            {/each}
        </div>
    </div>
</section>