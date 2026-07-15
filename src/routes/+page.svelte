<script>
    import Icon from "@iconify/svelte";
    

    const categorias = [
        { title: "ALIMENTACIÓN ANIMAL", image: "/palmiste.png", icon: "mdi:bowl-mix" },
        { title: "PASTOS Y FORRAJES", image: "/pastos2.jpeg", icon: "mdi:grass" },
        { title: "CERCAS GANADERAS", image: "/cercas2.jpg", icon: "mdi:fence" },
        { title: "INSUMOS AGRÍCOLAS", image: "/insumos2.png", icon: "mdi:leaf" },
        { title: "GANADERÍA", image: "/insumos.jpg", icon: "mdi:cow" }
    ];

    const servicios = ["Venta al detal y mayor", "Atención a productores", "Asesoría nutricional", "Cotizaciones rápidas", "Atención por WhatsApp", "Envíos nacionales", "Soporte postventa"];
    const educacion = ["Manuales digitales", "Guías técnicas", "Videos educativos", "Consejos de manejo animal", "Nutrición y manejo de potreros", "Administración de fincas", "Tecnología agropecuaria"];
</script>

<!-- Sección Hero -->
<section class="relative w-full h-[80vh] md:h-[70vh] flex items-center bg-white overflow-hidden">
    <div class="absolute right-0 top-0 w-full md:w-1/2 h-full">
        <img src="/vaquita.jpg" alt="Campo AgroVenz" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/80 md:via-white/10 to-transparent"></div>
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
                <a href="/catalogo-ganadero" class="px-8 py-3 bg-emerald-600 hover:bg-[#5a7846] text-white font-bold rounded-full transition-all text-center">
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
<!-- Sección Categorías -->
<section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-stone-800">NUESTRAS SOLUCIONES INTEGRALES</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each categorias as cat}
                <div class="group flex flex-col bg-white border border-stone-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <!-- Imagen Superior -->
                    <div class="relative w-full h-48 overflow-hidden">
                        <img src={cat.image} alt={cat.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div class="absolute inset-0 flex items-center justify-center bg-black/10">
                            <Icon icon={cat.icon} class="text-5xl text-white drop-shadow-lg" />
                        </div>
                    </div>
                    
                    <!-- Contenido y Lista -->
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-xl font-bold text-stone-800 uppercase mb-4 tracking-tight border-b border-stone-100 pb-2">{cat.title}</h3>
                        
                        <ul class="text-sm text-stone-600 space-y-2">
                            {#if cat.title === "ALIMENTACIÓN ANIMAL"}
                                <li>• Harina de palmiste</li><li>• Melaza</li><li>• Silo de maíz</li><li>• Silolac</li><li>• Minerales</li><li>• Suplementos nutricionales</li><li>• Aditivos alimenticios</li>
                            {:else if cat.title === "PASTOS Y FORRAJES"}
                                <li>• Semillas de pasto</li><li>• Brachiaria MG-5</li><li>• Brachiaria Marandú</li><li>• MG-4</li><li>• Otras variedades para ganadería</li>
                            {:else if cat.title === "CERCAS GANADERAS"}
                                <li>• Alambre eléctrico</li><li>• Aisladores</li><li>• Energizadores</li><li>• Accesorios para cercos eléctricos</li>
                            {:else if cat.title === "INSUMOS AGRÍCOLAS"}
                                <li>• Fertilizantes</li><li>• Herbicidas</li><li>• Fungicidas</li><li>• Insecticidas</li><li>• Bioinsumos</li><li>• Productos para cultivos</li>
                            {:else if cat.title === "GANADERÍA"}
                                <li class="font-medium text-stone-700">Productos especializados para:</li>
                                <li>• Bovinos, Búfalos y Caballos</li><li>• Ovejas y Cabras</li><li>• Cerdos y Aves</li>
                            {/if}
                        </ul>
                    </div>
                </div>
            {/each}

            <!-- Tarjeta Próximamente -->
            <div class="flex flex-col bg-stone-50 border border-stone-200 rounded-3xl p-6">
                <div class="flex items-center gap-3 mb-4">
                    <Icon icon="mdi:cog-outline" class="text-3xl text-stone-400" />
                    <h3 class="text-lg font-bold text-stone-500 uppercase">Próximamente</h3>
                </div>
                <ul class="text-sm text-stone-500 space-y-2">
                    <li>• Maquinaria agrícola</li><li>• Repuestos</li><li>• Equipos de ordeño</li><li>• Sistemas de riego</li><li>• Cercas inteligentes</li><li>• Energía solar para fincas</li><li>• Tecnología de precisión</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Sección Compromiso -->
<section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-emerald-950 mb-16 text-center tracking-tight">NUESTRO COMPROMISO</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            {#each servicios as s}
                <div class="group flex flex-col items-center text-center p-6 transition-all duration-300">
                    <div class="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                        <Icon icon="mdi:check-decagram" class="text-3xl text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <p class="font-bold text-stone-800 text-sm leading-snug uppercase tracking-wide">{s}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Sección CTA Final -->
<section class="py-24 bg-[#1B4332]">
    <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para transformar tu producción?
        </h2>
        <p class="text-white text-lg mb-12">
            Nuestros consultores están listos para diseñar un plan de alimentación a la medida de tu hato.
        </p>
        
        <div class="flex flex-col gap-4 max-w-md mx-auto">
            <!-- Botón Primario -->
            <a href="/contacto" class="w-full px-8 py-4 bg-[#F39C45] hover:bg-[#BC8A5F] text-[#1B4332] font-bold rounded-full transition-all text-center">
                SOLICITAR CONSULTA
            </a>
            
            <!-- Botón Secundario -->
            <a href="/distribuidores" class="w-full px-8 py-4 border border-[#F39C45] text-white hover:bg-white/10 font-bold rounded-full transition-all text-center">
                LOCALIZAR DISTRIBUIDOR
            </a>
        </div>
    </div>
</section> Sección Educación -->
