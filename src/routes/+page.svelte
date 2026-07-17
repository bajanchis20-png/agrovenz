<script lang="ts">
    import Icon from "@iconify/svelte";

    const waLink = "https://wa.me/584241860644?text=";

    // Lista completa de productos
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
</script>

<!-- HERO SECTION -->
<section class="relative w-full h-[80vh] md:h-[70vh] flex items-center bg-white overflow-hidden">
    <div class="absolute right-0 top-0 w-full md:w-1/2 h-full">
        <video src="/vaquita3.mp4" autoplay loop muted playsinline class="w-full h-full object-cover"></video>
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/80 md:via-white/10 to-transparent"></div>
    </div>
    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div class="max-w-xl">
            <h1 class="text-4xl md:text-6xl font-black text-stone-900 leading-tight mb-6 uppercase tracking-tight">
                Soluciones Integrales para la 
                <span class="bg-gradient-to-r from-emerald-700 via-emerald-400 to-black bg-clip-text text-transparent">Optimización Agropecuaria</span>
            </h1>
            <p class="text-stone-600 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                Optimizamos la rentabilidad de su finca con insumos de alta precisión, tecnología avanzada y el respaldo técnico que el productor venezolano necesita.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="/catalogo" class="px-8 py-5 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 text-center uppercase tracking-wider">Ver Catálogo</a>
                <a href="{waLink}Hola, deseo solicitar una asesoría técnica." target="_blank" class="px-8 py-5 bg-white text-emerald-800 border-2 border-emerald-800 hover:bg-stone-100 font-black rounded-2xl transition-all active:scale-95 text-center uppercase tracking-wider">Solicitar Asesoría</a>
            </div>
        </div>
    </div>
</section>


<!-- SECCIÓN PROMOCIONAL -->
<section class="py-16 bg-stone-950 border-y border-emerald-900/20 relative overflow-hidden">
    <!-- Fondo con el mismo efecto de luz para consistencia -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] -z-0"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 border border-emerald-700/30 backdrop-blur-md rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div class="max-w-2xl">
                <div class="inline-block px-4 py-1 mb-4 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20">
                    Oportunidad para Productores
                </div>
                <h2 class="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">¿Buscas elevar la rentabilidad de tu finca?</h2>
                <p class="text-stone-300 text-lg md:text-xl font-medium leading-relaxed">
                    Obtén hoy tu <span class="text-emerald-400 font-bold underline decoration-emerald-500">plan de optimización personalizado</span>. Diagnóstico técnico.
                </p>
            </div>
            <div class="flex-shrink-0">
                <a href="{waLink}Hola, me gustaría solicitar mi diagnóstico técnico." target="_blank" 
                    class="inline-block px-8 py-5 bg-white text-emerald-900 hover:bg-stone-100 font-black rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 text-center uppercase tracking-wider">
                    SOLICITAR PLAN A LA MEDIDA
                </a>
            </div>
        </div>
    </div>
</section>
<!-- VISTA PREVIA DEL CATÁLOGO -->
<section class="py-20 bg-stone-950 text-white relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] -z-0"></div>
    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div class="max-w-lg">
                <h2 class="text-3xl font-black uppercase mb-4">Productos Destacados</h2>
                <p class="text-stone-300">Explora nuestra selección de insumos de alta calidad.</p>
            </div>
            <a href="/catalogo" class="px-8 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 uppercase tracking-wider text-center">
                Ver Catálogo Completo
            </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each productos.slice(0, 4) as p}
                <div class="bg-white/5 border border-white/10 p-5 rounded-3xl backdrop-blur-md hover:border-emerald-500 transition-all flex flex-col">
                    <img src={p.image} alt={p.title} class="w-full h-40 object-cover rounded-2xl mb-4 bg-stone-900/50" />
                    <h3 class="font-bold text-lg mb-1">{p.title}</h3>
                    <p class="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">{p.cat}</p>
                    <span class="font-black text-xl text-white mt-auto">${p.price}</span>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- CATEGORÍAS -->
<section class="py-24 bg-stone-950 text-white relative">
    <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tight text-center">
            Soluciones para tu <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-400 to-white">
                Unidad Productiva
            </span>
        </h2>
        
        <!-- Grid con líneas divisorias profesionales -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {#each categorias as cat}
                <a href="/catalogo" class="bg-stone-950 p-10 hover:bg-emerald-950/30 transition-all duration-300 flex flex-col items-center group">
                    <div class="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        <Icon icon={cat.icon} class="text-4xl text-emerald-500" />
                    </div>
                    <span class="font-bold uppercase tracking-widest text-sm text-center">
                        {cat.title}
                    </span>
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- EDUCACIÓN -->
<!-- EDUCACIÓN -->
<section class="py-20 bg-stone-950 text-white relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] -z-0"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div class="max-w-lg">
                <h2 class="text-3xl font-black uppercase mb-4">Educación Agropecuaria</h2>
                <p class="text-stone-300">Capacítate con nuestras guías técnicas, manuales digitales y consejos de manejo para optimizar tu producción.</p>
            </div>
            <a href="/educacion" class="px-8 py-5 bg-white text-emerald-800 hover:bg-stone-100 font-black rounded-2xl shadow-lg transition-all active:scale-95 uppercase tracking-wider text-center">
                Ver Centro de Recursos
            </a>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            {#each [
                {title: "Nutrición Animal", desc: "Claves para una alimentación balanceada y rentable.", img: "/nutri.jpeg"}, 
                {title: "Manejo de Potreros", desc: "Optimiza el aprovechamiento de tus pastos.", img: "/manejo.png"}, 
                {title: "Administración de Fincas", desc: "Transforma tu explotación en una empresa.", img: "/adm.jpg"}
            ] as educ}
                <!-- Tarjeta con imagen de fondo -->
                <div class="relative p-8 rounded-2xl overflow-hidden group min-h-[300px] flex flex-col justify-end border border-white/10">
                    <!-- Imagen de fondo -->
                    <img src={educ.img} alt={educ.title} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    
                    <!-- Capa oscura para legibilidad -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    <!-- Contenido -->
                    <div class="relative z-10">
                        <Icon icon="mdi:book-open-variant" class="text-emerald-400 text-3xl mb-4" />
                        <h4 class="text-xl font-bold mb-3 text-white">{educ.title}</h4>
                        <p class="text-stone-200 text-sm">{educ.desc}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>