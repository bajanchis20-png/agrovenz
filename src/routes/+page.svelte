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


