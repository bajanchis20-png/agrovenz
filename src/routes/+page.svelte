<script>
    import Icon from "@iconify/svelte";

    const categorias = [
        { title: "ALIMENTACIÓN ANIMAL", image: "/palmiste.png", list: ["Harina de palmiste", "Melaza", "Silo de maíz", "Silolac", "Minerales", "Suplementos nutricionales", "Aditivos alimenticios"] },
        { title: "PASTOS Y FORRAJES", image: "/pastos2.jpeg", list: ["Semillas de pasto", "Brachiaria MG-5", "Brachiaria Marandú", "MG-4", "Otras variedades para ganadería"] },
        { title: "CERCAS GANADERAS", image: "/cercas2.jpg", list: ["Alambre eléctrico", "Aisladores", "Energizadores", "Accesorios para cercos eléctricos"] },
        { title: "INSUMOS AGRÍCOLAS", image: "/insumos2.png", list: ["Fertilizantes", "Herbicidas", "Fungicidas", "Insecticidas", "Bioinsumos", "Productos para cultivos"] },
        { title: "GANADERÍA", image: "/ganaderia.jpg", list: ["Bovinos", "Búfalos", "Caballos", "Ovejas", "Cabras", "Cerdos", "Aves"] }
    ];

    const servicios = ["Venta al detal y mayor", "Atención a productores", "Asesoría nutricional", "Cotizaciones rápidas", "Atención por WhatsApp", "Envíos nacionales", "Soporte postventa"];
    const educacion = ["Manuales digitales", "Guías técnicas", "Videos educativos", "Consejos de manejo animal", "Nutrición y manejo de potreros", "Administración de fincas", "Tecnología agropecuaria"];
</script>

<!-- Sección Hero -->
<section class="relative w-full h-[80vh] md:h-[70vh] flex items-center bg-white overflow-hidden">
    <div class="absolute right-0 top-0 w-full md:w-1/2 h-full">
        <img src="/vaquita.jpg" alt="Campo AgroVenz" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/80 md:via-white/50 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div class="max-w-xl">
            <h1 class="text-4xl md:text-6xl font-black text-stone-900 leading-tight mb-6">
                ¡Maximiza Tu Cosecha y Ganadería con AgroVenz!
            </h1>
            <p class="text-stone-600 text-lg mb-8 leading-relaxed">
                Conectamos tierra, capital y sostenibilidad. Ofrecemos nutrición agrícola de precisión y alimento balanceado para ganado de élite. Todo lo que tu finca necesita para un rendimiento superior.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="/catalogo-ganadero" class="px-8 py-3 bg-[#6C8D55] hover:bg-[#5a7846] text-white font-bold rounded-full transition-all text-center">
                    Comprar Alimento Ganadero
                </a>
                <a href="/nutricion-vegetal" class="px-8 py-3 bg-[#F39C45] hover:bg-[#d88735] text-white font-bold rounded-full transition-all text-center">
                    Adquirir Nutrición Vegetal
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Sección Categorías -->
<section class="py-16 md:py-24 bg-stone-50">
    <div class="max-w-7xl mx-auto px-6">
        <div class="mb-12 text-center">
            <span class="text-emerald-600 font-bold tracking-widest uppercase text-sm">Nuestro Portafolio</span>
            <h2 class="text-3xl md:text-5xl font-extrabold text-emerald-950 mt-2">Soluciones Integrales</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each categorias as cat}
                <div class="relative w-full h-64 rounded-3xl overflow-hidden group shadow-lg">
                    <img src={cat.image} alt={cat.title} class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8">
                        <h3 class="text-white font-extrabold text-2xl leading-tight">{cat.title}</h3>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Sección Compromiso -->
<section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-2xl font-bold text-emerald-900 mb-10 text-center">Nuestro Compromiso</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            {#each servicios as s}
                <div class="p-4 bg-stone-50 rounded-2xl border border-stone-100 flex flex-col items-center text-center">
                    <Icon icon="mdi:check-decagram" class="text-2xl text-emerald-600 mb-2" />
                    <p class="font-bold text-stone-800 text-xs uppercase">{s}</p>
                </div>
            {/each}
        </div>
    </div>
</section>


<!-- EDUCACIÓN Y MISIONES (Mantenidas...) -->
<!-- [El resto de las secciones permanecen con el estilo redondeado aplicado previamente] -->