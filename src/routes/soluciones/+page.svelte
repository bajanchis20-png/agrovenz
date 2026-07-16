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

<section class="py-24 bg-gradient-to-b from-stone-50 to-white">
    <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-black text-stone-900 mb-12 text-center uppercase tracking-widest">Portafolio de Soluciones</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each categorias as cat}
                <div class="bg-white rounded-2xl border border-stone-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300">
                    <img src={cat.image} alt={cat.title} class="w-full h-48 object-cover rounded-t-2xl" />
                    <div class="p-6">
                        <div class="flex items-center gap-3 mb-4">
                            <Icon icon={cat.icon} class="text-2xl text-emerald-700" />
                            <h3 class="font-bold text-stone-900 uppercase tracking-wide">{cat.title}</h3>
                        </div>
                        <ul class="space-y-2">
                            {#each cat.items as item}
                                <li class="text-sm text-stone-600 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> {item}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
            <div class="bg-gradient-to-br from-stone-900 to-emerald-950 rounded-2xl p-8 flex flex-col justify-center shadow-lg">
                <div class="flex items-center gap-3 mb-6">
                    <Icon icon="mdi:cog-outline" class="text-3xl text-emerald-500" />
                    <h3 class="font-black text-white uppercase tracking-wider">Próximamente</h3>
                </div>
                <ul class="space-y-3">
                    {#each proximamente as item}
                        <li class="text-sm text-stone-300 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> {item}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="py-24 bg-stone-900 border-t border-emerald-900/30 text-center relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px]"></div>
    <div class="max-w-3xl mx-auto px-6 relative z-10">
        <h2 class="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">¿Listo para transformar tu producción?</h2>
        <p class="text-emerald-200/80 mb-10 text-lg font-medium">Nuestros consultores están listos para diseñar un plan a la medida de tu finca.</p>
        <a href="{waLink}Hola, me gustaría solicitar una consulta técnica." target="_blank" class="inline-block px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all shadow-xl hover:scale-[1.02]">
            SOLICITAR CONSULTA TÉCNICA
        </a>
    </div>
</section>