<script>
    import Icon from "@iconify/svelte";
    
    const educacion = [
        { title: "Manuales digitales", icon: "mdi:file-document-outline" },
        { title: "Guías técnicas", icon: "mdi:book-open-variant" },
        { title: "Videos educativos", icon: "mdi:play-circle-outline" },
        { title: "Gestión en redes", icon: "mdi:share-variant" },
        { title: "Manejo animal", icon: "mdi:cow" },
        { title: "Nutrición avanzada", icon: "mdi:leaf" },
        { title: "Manejo de potreros", icon: "mdi:grass" },
        { title: "Administración", icon: "mdi:calculator" },
        { title: "Tecnología de campo", icon: "mdi:robot-outline" }
    ];
</script>

<section class="relative w-full h-[85vh] flex items-center overflow-hidden bg-stone-900">
    <img src="/educacion2.png" alt="Capacitación" class="absolute inset-0 w-full h-full object-cover opacity-30" />
    <div class="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="p-8 md:p-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl max-w-2xl">
            <h1 class="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                Capacitación técnica <br />
                <span class="bg-gradient-to-r from-emerald-700 via-emerald-400 to-emerald-800 bg-clip-text text-transparent">
                    profesional
                </span>
            </h1>
            <p class="text-stone-300 text-base md:text-lg mb-8 leading-relaxed">
                Conocimiento de vanguardia para transformar los desafíos de tu terreno en resultados rentables, respaldado por la experiencia AgroVenz.
            </p>
            <a href="https://wa.me/584241860644?text=Hola, quiero hablar con un experto de AgroVenz." 
               target="_blank"
               class="inline-block px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg transition-all shadow-lg uppercase tracking-widest text-sm w-full sm:w-auto text-center">
                Hablar con un experto
            </a>
        </div>
    </div>
</section>

<section class="py-16 md:py-24 bg-gradient-to-b from-stone-50 to-white">
    <div class="max-w-7xl mx-auto px-6">
        <div class="mb-12 text-center md:text-left">
            <h3 class="text-emerald-700 font-bold tracking-[0.2em] uppercase text-xs mb-2">Academia AgroVenz</h3>
            <h2 class="text-3xl md:text-4xl font-black text-stone-900 uppercase">Áreas de Formación</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each educacion as item}
                <div class="group flex flex-col p-6 bg-white border border-stone-200 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:border-emerald-600 hover:shadow-xl transition-all">
                    <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                        <Icon icon={item.icon} class="text-2xl text-emerald-700 group-hover:text-white transition-colors" />
                    </div>
                    <h4 class="text-lg font-bold text-stone-900 mb-2">{item.title}</h4>
                    <p class="text-stone-500 text-sm leading-relaxed">Contenido técnico diseñado para elevar el estándar operativo de tu unidad.</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<section class="py-16 md:py-24 bg-stone-950 relative overflow-hidden text-stone-100">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] -z-0"></div>
    
    <div class="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
            <h3 class="text-2xl md:text-3xl font-black text-white uppercase mb-6">Compromiso AgroVenz</h3>
            <p class="text-stone-300 leading-relaxed text-sm md:text-base">
                Nuestra biblioteca técnica es el recurso definitivo para el productor venezolano. Combinamos conocimiento práctico con tecnología para transformar tu forma de trabajar.
            </p>
        </div>
        <div class="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
            <h4 class="text-emerald-400 font-bold mb-4 text-sm md:text-base">Tu rentabilidad, nuestra prioridad:</h4>
            <ul class="text-stone-300 space-y-3 mb-8 text-sm">
                <li class="flex items-center gap-2"> <span class="text-emerald-500">◆</span> Soporte técnico especializado</li>
                <li class="flex items-center gap-2"> <span class="text-emerald-500">◆</span> Herramientas digitales de gestión</li>
                <li class="flex items-center gap-2"> <span class="text-emerald-500">◆</span> Optimización de procesos productivos</li>
            </ul>
            <a href="https://wa.me/584241860644?text=Hola, me interesa iniciar con AgroVenz." 
               target="_blank"
               class="block text-center px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg uppercase tracking-widest text-xs transition-all hover:scale-[1.02]">
                Inicia ahora
            </a>
        </div>
    </div>
</section>