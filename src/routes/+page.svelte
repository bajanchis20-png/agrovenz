<script>
    import Icon from "@iconify/svelte";

    let selectedCategory = null;

    const features = [
        { title: "Misión", description: "Impulsar el crecimiento del sector agropecuario venezolano con productos de calidad, precios competitivos y asesoría técnica especializada.", icon: "mdi:flag-outline", color: "text-emerald-700" },
        { title: "Visión", description: "Ser el centro digital líder en Venezuela, uniendo innovación, conocimiento y comercio para el campo.", icon: "mdi:eye-outline", color: "text-amber-700" },
        { title: "Valores", description: "Honestidad, Responsabilidad, Calidad, Innovación, Compromiso, Atención personalizada, Confianza, Pasión por el campo.", icon: "mdi:star-outline", color: "text-emerald-800" }
    ];

    const categorias = [
        { title: "Alimentación Animal", icon: "mdi:nutrition", list: ["Harina de palmiste", "Melaza", "Silo de maíz", "Silolac", "Minerales", "Suplementos nutricionales", "Aditivos alimenticios"] },
        { title: "Pastos y Forrajes", icon: "mdi:grass", list: ["Semillas de pasto", "Brachiaria MG-5", "Brachiaria Marandú", "MG-4", "Otras variedades para ganadería"] },
        { title: "Cercas Ganaderas", icon: "mdi:fence", list: ["Alambre eléctrico", "Aisladores", "Energizadores", "Accesorios para cercos eléctricos"] },
        { title: "Insumos Agrícolas", icon: "mdi:sprout", list: ["Fertilizantes", "Herbicidas", "Fungicidas", "Insecticidas", "Bioinsumos", "Productos para cultivos"] },
        { title: "Ganadería", icon: "mdi:cow", list: ["Bovinos", "Búfalos", "Caballos", "Ovejas", "Cabras", "Cerdos", "Aves"] },
        { title: "Próximamente", icon: "mdi:cog-box", list: ["Maquinaria agrícola", "Repuestos", "Equipos de ordeño", "Sistemas de riego", "Cercas inteligentes", "Energía solar para fincas", "Tecnología para agricultura de precisión"] }
    ];

    const servicios = ["Venta al detal y mayor", "Atención a productores", "Asesoría nutricional", "Cotizaciones rápidas", "Atención por WhatsApp", "Envíos nacionales", "Soporte postventa"];
    const educacion = ["Manuales digitales", "Guías técnicas", "Videos educativos", "Consejos de manejo animal", "Nutrición y manejo de potreros", "Administración de fincas", "Tecnología agropecuaria"];
</script>

<section class="relative w-full h-[85vh] flex items-center bg-stone-100 overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="/vaquita.jpg" alt="Campo AgroVenz" class="w-full h-full object-cover opacity-90" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
    </div>
    <div class="relative z-10 max-w-6xl mx-auto px-6 text-center pt-10">
        <div class="flex justify-center mb-8">
            <img src="/logo.png" alt="AgroVenz Logo" class="h-40 w-auto object-contain drop-shadow-2xl" />
        </div>
        <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">Producción sin límites</h1>
        <p class="text-xl md:text-2xl mb-10 max-w-xl mx-auto text-stone-200">Más que insumos, somos tu aliado estratégico para hacer tu finca más rentable.</p>
        <div class="flex justify-center gap-4">
            <button class="bg-emerald-700 hover:bg-emerald-800 px-10 py-4 font-bold transition-all text-white rounded-2xl shadow-lg shadow-emerald-900/20">VER CATÁLOGO</button>
            <button class="bg-white/10 hover:bg-white/20 px-10 py-4 font-bold border border-white/30 transition-all text-white rounded-2xl backdrop-blur-sm">ASESORÍA WHATSAPP</button>
        </div>
    </div>
</section>

<section class="py-20 bg-stone-50">
    <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-emerald-900 mb-12 text-center">¿Qué ofrecemos?</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            {#each categorias as cat}
                <button on:click={() => selectedCategory = cat} class="p-8 bg-white rounded-3xl border border-stone-100 text-center hover:border-emerald-600 transition-all hover:shadow-xl cursor-pointer">
                    <Icon icon={cat.icon} class="text-5xl text-emerald-700 mx-auto mb-4" />
                    <h3 class="font-bold text-stone-800 text-lg">{cat.title}</h3>
                </button>
            {/each}
        </div>
    </div>
</section>

{#if selectedCategory}
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div class="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
            <button class="absolute top-4 right-4 text-stone-400 hover:text-emerald-700" on:click={() => selectedCategory = null}>
                <Icon icon="mdi:close" class="text-3xl" />
            </button>
            <h3 class="text-2xl font-bold text-emerald-900 mb-6 border-b pb-4">{selectedCategory.title}</h3>
            <ul class="space-y-3">
                {#each selectedCategory.list as item}
                    <li class="flex items-center gap-3 text-stone-700 font-medium">
                        <Icon icon="mdi:check-circle" class="text-emerald-600" /> {item}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
{/if}

<section class="py-20 bg-stone-50">
    <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-emerald-900 mb-12 text-center">Nuestro Compromiso</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            {#each servicios as s}
                <div class="p-6 bg-white rounded-3xl border border-stone-100 flex flex-col items-center text-center hover:border-emerald-600 transition-all hover:shadow-lg">
                    <Icon icon="mdi:check-decagram" class="text-3xl text-emerald-600 mb-4" />
                    <p class="font-bold text-stone-800 text-sm">{s}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-bold text-emerald-900 mb-6">Educación Agropecuaria</h2>
                <p class="text-stone-600 mb-8 text-lg">Capacitamos a los productores para elevar el nivel de sus operaciones con contenido técnico práctico y especializado.</p>
                <div class="grid grid-cols-1 gap-4">
                    {#each educacion as item}
                        <div class="flex items-center gap-4 p-4 bg-stone-50 rounded-2xl border border-stone-100">
                            <Icon icon="mdi:book-open-variant" class="text-2xl text-amber-600" /> 
                            <span class="text-stone-700 font-semibold">{item}</span>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="bg-emerald-900 p-10 text-white shadow-2xl rounded-[2rem]">
                <h3 class="text-2xl font-bold mb-4">¿Quieres potenciar tu finca?</h3>
                <p class="mb-8 opacity-90 leading-relaxed">Accede a nuestra biblioteca de manuales, guías técnicas y soporte especializado diseñado para el productor venezolano. Tu éxito empieza con el conocimiento.</p>
                <button class="w-full bg-amber-600 py-4 font-bold hover:bg-amber-700 transition-all rounded-2xl">EXPLORAR CENTRO DE AYUDA</button>
            </div>
        </div>
    </div>
</section>


<!-- EDUCACIÓN Y MISIONES (Mantenidas...) -->
<!-- [El resto de las secciones permanecen con el estilo redondeado aplicado previamente] -->