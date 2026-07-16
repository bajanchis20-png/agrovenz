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
    const waLink = "https://wa.me/584241860644?text=";
</script>

<section class="py-24 bg-stone-50">
    <div class="max-w-7xl mx-auto px-6">
        <!-- Encabezado con gradiente personalizado -->
        <div class="text-center mb-20 relative">
            <h2 class="text-5xl md:text-6xl font-black text-stone-900 uppercase tracking-tighter mb-6 leading-tight">
                Nuestro 
                <span class="bg-gradient-to-r from-emerald-700 via-emerald-400 to-stone-900 bg-clip-text text-transparent">
                    Ecosistema
                </span> 
                de soluciones
            </h2>
            <div class="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
            <p class="mt-6 text-stone-600 max-w-lg mx-auto text-lg">
                Tecnología, insumos y asesoría de alto nivel diseñada para elevar la eficiencia operativa de tu finca.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each categorias as cat}
                <div class="group bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-500 transition-all duration-500">
                    <div class="h-48 overflow-hidden relative">
                        <img src={cat.image} alt={cat.title} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                    </div>
                    <div class="p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="p-3 bg-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-600/30">
                                <Icon icon={cat.icon} class="text-2xl" />
                            </div>
                            <h3 class="font-black text-stone-900 uppercase tracking-tight text-lg">{cat.title}</h3>
                        </div>
                        <ul class="space-y-3">
                            {#each cat.items as item}
                                <li class="text-sm text-stone-600 flex items-center gap-3"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> {item}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
            
            <!-- Bloque de Próximamente -->
            <div class="bg-stone-900 rounded-3xl p-8 flex flex-col justify-center border border-stone-800 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-12 opacity-5 text-emerald-500">
                    <Icon icon="mdi:cog-refresh" class="text-[150px]" />
                </div>
                <div class="flex items-center gap-3 mb-8 relative z-10">
                    <div class="p-3 bg-stone-800 text-emerald-500 rounded-xl">
                        <Icon icon="mdi:cog-outline" class="text-2xl" />
                    </div>
                    <h3 class="font-black text-white uppercase tracking-tight text-xl">Próximamente</h3>
                </div>
                <ul class="space-y-4 relative z-10">
                    {#each proximamente as item}
                        <li class="text-sm text-stone-400 flex items-center gap-3"><span class="w-1.5 h-1.5 bg-stone-700 rounded-full"></span> {item}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="py-24 bg-emerald-950 text-center relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
    <div class="max-w-3xl mx-auto px-6 relative z-10">
        <h2 class="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">¿Listo para transformar <br/>tu producción?</h2>
        <p class="text-emerald-200/70 mb-10 text-lg font-medium">Nuestros consultores están listos para diseñar un plan a la medida de tu finca.</p>
        
        <a href="{waLink}Hola, me gustaría solicitar una consulta técnica." 
            target="_blank" 
            class="inline-block px-10 py-5 bg-white text-emerald-900 hover:bg-stone-100 font-black rounded-2xl shadow-2xl transition-all hover:scale-[1.02] active:scale-95 text-center uppercase tracking-[0.1em] text-sm">
            SOLICITAR CONSULTA TÉCNICA
        </a>
    </div>
</section>