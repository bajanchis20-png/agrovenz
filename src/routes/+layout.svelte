<script lang="ts">
    import "./layout.css";
    import Icon from "@iconify/svelte";
    let { children } = $props();
    let isMenuOpen = $state(false);

    const waLink = "https://wa.me/584241860644?text=Hola, me gustaría solicitar una cotización.";
</script>

<svelte:head>
    <title>AgroVenz | Soluciones Integrales para el Agro Venezolano</title>
</svelte:head>

<!-- Header: Estilo Corporativo Refinado -->
<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <!-- Logo -->
        <a href="/" class="flex items-center gap-3 group">
            <img src="/logo.png" alt="AgroVenz" class="w-10 h-10 object-contain" />
            <span class="font-black text-xl tracking-tight text-stone-900 group-hover:text-emerald-700 transition-colors">AGROVENZ</span>
        </a>

        <!-- Menú Desktop -->
        <div class="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-stone-700">
            {#each [{name: 'Inicio', path: '/'}, {name: 'Catálogo', path: '/catalogo'}, {name: 'Soluciones', path: '/soluciones'}, {name: 'Servicios', path: '/servicios'}, {name: 'Educación', path: '/educacion'}] as link}
                <a href={link.path} class="hover:text-emerald-700 transition-colors">{link.name}</a>
            {/each}
        </div>

        <!-- Botones Acción -->
        <div class="hidden lg:flex items-center gap-4">
            <a href="/login" class="text-[11px] font-semibold text-stone-500 hover:text-emerald-700 transition-colors uppercase tracking-widest">Acceso</a>
            <a href="{waLink}" target="_blank" class="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl text-[11px] font-black tracking-widest uppercase transition-all shadow-lg hover:shadow-emerald-900/20 hover:scale-105 active:scale-95">
                Cotizar Pedido
            </a>
        </div>

        <!-- Botón Hamburguesa -->
        <button class="lg:hidden p-2 text-stone-900" onclick={() => isMenuOpen = !isMenuOpen} aria-label="Menu">
            <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} class="text-3xl" />
        </button>
    </div>

    <!-- Menú Móvil con transiciones -->
    {#if isMenuOpen}
        <div class="lg:hidden flex flex-col p-6 space-y-2 bg-white border-t border-stone-100 shadow-xl absolute w-full animate-in fade-in slide-in-from-top-4">
            {#each [{name: 'Inicio', path: '/'}, {name: 'Catálogo', path: '/catalogo'}, {name: 'Soluciones', path: '/soluciones'}, {name: 'Servicios', path: '/servicios'}, {name: 'Educación', path: '/educacion'}] as link}
                <a href={link.path} onclick={() => isMenuOpen = false} class="text-sm font-bold uppercase text-stone-800 py-4 border-b border-stone-50 hover:text-emerald-700">{link.name}</a>
            {/each}
            <div class="pt-6 flex flex-col gap-3">
                <a href="/login" class="text-center text-sm font-bold text-stone-500 py-3">Iniciar Sesión</a>
                <a href="{waLink}" target="_blank" class="bg-emerald-700 text-white py-4 rounded-xl text-sm font-black text-center uppercase tracking-widest">Solicitar Cotización</a>
            </div>
        </div>
    {/if}
</nav>

<main class="min-h-[70vh]">
    {@render children()}
</main>

<!-- Footer Mejorado -->
<footer class="bg-stone-950 pt-24 pb-12 text-stone-400">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div class="col-span-1 md:col-span-1">
            <h4 class="font-black text-white text-lg mb-6">AGROVENZ</h4>
            <p class="text-sm leading-relaxed">
                Aliado estratégico para el productor venezolano. Insumos de precisión, tecnología y asesoría para un campo rentable.
            </p>
        </div>
        
        <div>
            <h4 class="font-black text-white text-sm uppercase tracking-widest mb-6">Navegación</h4>
            <ul class="text-sm space-y-4">
                <li><a href="/catalogo" class="hover:text-emerald-500 transition-colors">Catálogo de Productos</a></li>
                <li><a href="/servicios" class="hover:text-emerald-500 transition-colors">Servicios Técnicos</a></li>
                <li><a href="/educacion" class="hover:text-emerald-500 transition-colors">Academia AgroVenz</a></li>
            </ul>
        </div>

        <div>
            <h4 class="font-black text-white text-sm uppercase tracking-widest mb-6">Ubicación</h4>
            <p class="text-sm flex items-start gap-2">
                <Icon icon="mdi:map-marker" class="text-emerald-500 text-lg mt-0.5" />
                Los Guayos, Carabobo, Venezuela
            </p>
            <a href="{waLink}" class="text-sm flex items-center gap-2 mt-4 hover:text-emerald-500 transition-colors">
                <Icon icon="mdi:whatsapp" class="text-emerald-500 text-lg" /> +58 424-1860644
            </a>
        </div>

        <div>
            <h4 class="font-black text-white text-sm uppercase tracking-widest mb-6">Síguenos</h4>
            <div class="flex gap-4 text-2xl">
                <a href="https://www.instagram.com/agrovenz" target="_blank" class="hover:text-emerald-500 transition-all hover:-translate-y-1"><Icon icon="mdi:instagram" /></a>
                <a href="https://www.facebook.com/profile.php?id=61590730151838" target="_blank" class="hover:text-emerald-500 transition-all hover:-translate-y-1"><Icon icon="mdi:facebook" /></a>
                <a href="https://tiktok.com/@agrovenz" target="_blank" class="hover:text-emerald-500 transition-all hover:-translate-y-1"><Icon icon="mdi:tiktok" /></a>
            </div>
        </div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-stone-900 text-center text-[10px] text-stone-600 uppercase tracking-[0.2em]">
        © 2026 AgroVenz · Innovación para el campo venezolano
    </div>
</footer>