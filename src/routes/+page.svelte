<script lang="ts">
    import Icon from "@iconify/svelte";

    const categorias = [
        { title: "ALIMENTACIÓN ANIMAL", image: "/palmiste.png", icon: "mdi:bowl-mix", items: ["Harina de palmiste", "Melaza", "Silo de maíz", "Silolac", "Minerales", "Suplementos nutricionales", "Aditivos alimenticios"] },
        { title: "PASTOS Y FORRAJES", image: "/pastos2.jpeg", icon: "mdi:grass", items: ["Semillas de pasto", "Brachiaria MG-5", "Brachiaria Marandú", "MG-4", "Otras variedades para ganadería"] },
        { title: "CERCAS GANADERAS", image: "/cercas2.jpg", icon: "mdi:fence", items: ["Alambre eléctrico", "Aisladores", "Energizadores", "Accesorios para cercos eléctricos"] },
        { title: "INSUMOS AGRÍCOLAS", image: "/insumos2.png", icon: "mdi:leaf", items: ["Fertilizantes", "Herbicidas", "Fungicidas", "Insecticidas", "Bioinsumos", "Productos para cultivos"] },
        { title: "GANADERÍA", image: "/insumos.jpg", icon: "mdi:cow", items: ["Bovinos", "Búfalos", "Caballos", "Ovejas", "Cabras", "Cerdos", "Aves"] }
    ];

    const proximamente = ["Maquinaria agrícola", "Repuestos", "Equipos de ordeño", "Sistemas de riego", "Cercas inteligentes", "Energía solar para fincas", "Tecnología de precisión"];
    const servicios = ["Venta al detal", "Venta al mayor", "Atención a productores", "Asesoría nutricional", "Cotizaciones rápidas", "Atención por WhatsApp", "Envíos nacionales", "Soporte postventa"];
    const educacion = ["Manuales digitales", "Guías técnicas", "Videos educativos", "Consejos de manejo animal", "Nutrición y manejo de potreros", "Administración de fincas", "Tecnología agropecuaria"];
    
    // Número para los enlaces de WhatsApp
    const waLink = "https://wa.me/584241860644?text=";
</script>

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
                <a href="/catalogo" class="px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg shadow-md transition-all text-center">Ver Catálogo</a>
                <a href="{waLink}Hola, deseo solicitar una asesoría técnica." target="_blank" class="px-8 py-3.5 bg-white border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white font-bold rounded-lg transition-all text-center">Solicitar Asesoría</a>
            </div>
        </div>
    </div>
</section>


<!-- Sección Promocional de Impacto -->
<section class="py-16 bg-white border-b border-stone-100">
    <div class="max-w-7xl mx-auto px-6">

        <div class="bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            
            <!-- Elemento visual decorativo -->
            <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('/pattern.png')]"></div>

            <div class="relative z-10 max-w-2xl">
                <div class="inline-block px-4 py-1 mb-4 bg-emerald-500/20 text-emerald-100 text-xs font-bold uppercase tracking-widest">
                    Oportunidad para Productores
                </div>
                <h2 class="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                    ¿Buscas elevar la rentabilidad de tu finca?
                </h2>
                <p class="text-emerald-100/90 text-lg md:text-xl font-medium leading-relaxed">
                    Obtén hoy tu <span class="text-white font-bold underline decoration-emerald-400">plan de optimización personalizado</span>. Diagnóstico técnico.
                </p>
            </div>

            <div class="relative z-10 flex-shrink-0">
                <a href="{waLink}Hola, me gustaría solicitar mi diagnóstico técnico gratuito." target="_blank" 
                   class="inline-block px-8 py-5 bg-white text-emerald-800 hover:bg-stone-100 font-black rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 text-center uppercase tracking-wider">
                    SOLICITAR PLAN A LA MEDIDA
                </a>
            </div>
        </div>
    </div>
</section>

<section class="py-20 bg-stone-50">
    <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-black text-stone-900 mb-12 uppercase tracking-tight text-center">Soluciones para tu Finca</h2>
        <div class="grid md:grid-cols-3 gap-6">
            {#each [{title: "Alimentación Animal", icon: "mdi:bowl-mix"}, {title: "Pastos y Forrajes", icon: "mdi:grass"}, {title: "Cercas Ganaderas", icon: "mdi:fence"}, {title: "Insumos Agrícolas", icon: "mdi:leaf"}, {title: "Ganadería", icon: "mdi:cow"}, {title: "Ver Todo el Catálogo", icon: "mdi:arrow-right-circle"}] as cat}
                <a href="/catalogo" class="group p-8 bg-white border border-stone-200 rounded-2xl hover:border-emerald-600 hover:shadow-xl transition-all flex flex-col items-center text-center">
                    <div class="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Icon icon={cat.icon} class="text-3xl" />
                    </div>
                    <h3 class="font-bold text-stone-900 group-hover:text-emerald-700">{cat.title}</h3>
                </a>
            {/each}
        </div>
    </div>
</section>



<section class="py-20 bg-emerald-900 text-white">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div class="max-w-lg">
                <h2 class="text-3xl font-black uppercase mb-4">Educación Agropecuaria</h2>
                <p class="text-emerald-100">Capacítate con nuestras guías técnicas, manuales digitales y consejos de manejo para optimizar tu producción.</p>
            </div>
            <a href="/educacion" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-lg transition-all">Ver Centro de Recursos</a>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            {#each [{title: "Nutrición Animal", desc: "Claves para una alimentación balanceada y rentable."}, {title: "Manejo de Potreros", desc: "Optimiza el aprovechamiento de tus pastos."}, {title: "Administración de Fincas", desc: "Transforma tu explotación en una empresa."}] as educ}
                <div class="p-8 bg-emerald-800/50 rounded-2xl border border-emerald-700/50">
                    <Icon icon="mdi:book-open-variant" class="text-emerald-400 text-3xl mb-4" />
                    <h4 class="text-xl font-bold mb-3">{educ.title}</h4>
                    <p class="text-emerald-100/70 text-sm">{educ.desc}</p>
                </div>
            {/each}
        </div>
    </div>
</section>