<script lang="ts">
    import Icon from "@iconify/svelte";

    const servicios = [
        { title: "Atención a Productores", desc: "Consultoría experta para el desarrollo y optimización de tu unidad productiva.", icon: "mdi:account-group", img: "/atencion.jpeg" },
        { title: "Asesoría Nutricional", desc: "Análisis técnico para maximizar el rendimiento y la salud de tu rebaño.", icon: "mdi:flask-outline", img: "/asesoria.png" },
        { title: "Cotizaciones Rápidas", desc: "Gestión eficiente de presupuestos con atención personalizada en tiempo real.", icon: "mdi:file-document-outline", img: "/cotiza.png" },
        { title: "Envíos Nacionales", desc: "Logística especializada con cobertura total en todo el territorio venezolano.", icon: "mdi:truck-fast-outline", img: "/flete.jpeg" },
        { title: "Soporte Postventa", desc: "Acompañamiento continuo y asesoría técnica especializada tras cada compra.", icon: "mdi:headset", img: "/postventa.png" },
        { title: "Venta al Mayor y Detal", desc: "Soluciones de suministro flexibles para proyectos de cualquier escala.", icon: "mdi:store-outline", img: "/ventamayor.jpeg" }
    ];
</script>

<section class="relative w-full h-[85vh] flex items-center overflow-hidden bg-stone-900">
    <img src="/servicios10.png" alt="Capacitación" class="absolute inset-0 w-full h-full object-cover opacity-30" />
    <div class="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="p-8 md:p-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl max-w-2xl">
            <h1 class="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
Servicios Especializados<br />
                <span class="bg-gradient-to-r from-emerald-700 via-emerald-400 to-emerald-800 bg-clip-text text-transparent">
               para el Éxito de tu Proyecto
                </span>
            </h1>
            <p class="text-stone-300 text-base md:text-lg mb-8 leading-relaxed">
               Acompañamiento profesional desde la planificación hasta la ejecución de tus objetivos
            </p>
                 <a href="https://wa.me/584241860644?text=Hola, quiero hablar con un experto de AgroVenz." 
   target="_blank"
   class="inline-block px-8 py-4 border-2 border-emerald-800 text-white hover:bg-emerald-800 hover:text-white font-bold rounded-xl text-[11px] uppercase tracking-[0.2em] transition-all duration-300 text-center backdrop-blur-sm">
   HABLAR CON UN EXPERTO
</a>
        </div>
    </div>
</section>

<section class="py-24 bg-stone-950 text-white relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-6">
        <!-- Título -->
   

        <!-- Lista de servicios -->
        <div class="space-y-6">
            {#each servicios as s}
                <div class="group relative overflow-hidden rounded-2xl border border-emerald-900/50 bg-stone-900/40 p-1 transition-all hover:border-emerald-500/50">
                    <div class="flex flex-col md:flex-row items-center gap-6 bg-stone-950/80 rounded-xl p-4">
                        <!-- Imagen miniatura -->
                        <div class="w-full md:w-64 h-40 overflow-hidden rounded-lg">
                            <img src={s.img} alt={s.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        
                        <!-- Contenido -->
                        <div class="flex-1 p-2">
                            <h4 class="text-2xl font-black text-white uppercase mb-2 flex items-center gap-3">
                                <Icon icon={s.icon} class="text-emerald-500" />
                                {s.title}
                            </h4>
                            <p class="text-stone-300 leading-relaxed max-w-lg">{s.desc}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>