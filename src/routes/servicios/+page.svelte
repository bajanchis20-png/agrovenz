<script lang="ts">
    import Icon from "@iconify/svelte";

    // Hemos añadido una descripción breve para cada servicio para elevar el tono profesional
    const servicios = [
        { title: "Atención a Productores", desc: "Asesoría personalizada para optimizar su unidad de producción.", icon: "mdi:account-group" },
        { title: "Asesoría Nutricional", desc: "Planes alimenticios balanceados para maximizar el rendimiento ganadero.", icon: "mdi:flask-outline" },
        { title: "Cotizaciones Rápidas", desc: "Respuesta inmediata adaptada a las necesidades de su finca.", icon: "mdi:file-document-outline" },
        { title: "Envíos Nacionales", desc: "Logística eficiente con cobertura en todo el territorio venezolano.", icon: "mdi:truck-fast-outline" },
        { title: "Soporte Postventa", desc: "Acompañamiento técnico continuo tras cada adquisición.", icon: "mdi:headset" },
        { title: "Venta al Mayor y Detal", desc: "Flexibilidad comercial para satisfacer desde pequeños productores hasta grandes proyectos.", icon: "mdi:store-outline" }
    ];
</script>

<section class="py-24 bg-stone-950 text-stone-100 relative overflow-hidden">
    <!-- Decoración de fondo sutil -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-emerald-900/10 blur-[150px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16">
            <h3 class="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-4">Soluciones a Medida</h3>
            <h2 class="text-4xl font-black text-white uppercase tracking-tight">Nuestro Compromiso Profesional</h2>
    
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each servicios as s}
                <div class="group p-8 bg-stone-900/50 border border-stone-800 rounded-2xl hover:border-emerald-700/50 transition-all duration-300 hover:bg-stone-900">
                    <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-stone-800 text-emerald-500 mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                        <Icon icon={s.icon} class="text-2xl" />
                    </div>
                    <h4 class="text-lg font-bold text-white mb-2">{s.title}</h4>
                    <p class="text-stone-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
            {/each}
        </div>
    </div>
</section>