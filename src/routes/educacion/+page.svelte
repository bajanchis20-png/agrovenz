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

<section class="py-16 bg-stone-50">
    <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-bold text-emerald-900 mb-6">Educación Agropecuaria</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {#each educacion as item}
                        <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-100">
                            <Icon icon="mdi:book-open-variant" class="text-amber-600" /> 
                            <span class="text-stone-700 font-semibold text-sm">{item}</span>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="bg-emerald-900 p-8 text-white rounded-[2rem] shadow-2xl">
                <h3 class="text-2xl font-bold mb-4">¿Quieres potenciar tu finca?</h3>
                <p class="mb-8 opacity-90 text-sm leading-relaxed">Accede a nuestra biblioteca de manuales, guías técnicas y soporte especializado diseñado para el productor venezolano. Tu éxito empieza con el conocimiento.</p>
                <button class="w-full bg-amber-600 py-3 font-bold hover:bg-amber-700 transition-all rounded-xl">EXPLORAR CENTRO DE AYUDA</button>
            </div>
        </div>
    </div>
</section>