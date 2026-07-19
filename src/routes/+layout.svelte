<script lang="ts">
    import "./layout.css";
    import Icon from "@iconify/svelte";
    let { children } = $props();
    let isMenuOpen = $state(false);

    const waLink = "https://wa.me/584241860644?text=Hola, me gustaría solicitar una cotización.";
    
    const navLinks = [
        {name: 'Inicio', path: '/'}, 
        {name: 'Catálogo', path: '/catalogo'}, 
        {name: 'Soluciones', path: '/soluciones'}, 
        {name: 'Servicios', path: '/servicios'}, 
        {name: 'Educación', path: '/educacion'}
    ];
</script>

<svelte:head>
    <title>AgroVenz | Soluciones Integrales para el Agro Venezolano</title>
</svelte:head>

<nav class="sticky top-0 z-50 w-full bg-white">
    <!-- Contenedor de la curva que se extiende a todo el ancho -->
    <div class="absolute left-0 top-0 w-full h-20 hidden lg:block z-10 pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="h-full w-full">
            <path d="M0 0 H350 C450 0, 400 80, 550 80 H1440 V0 Z" fill="#064e3b" />
        </svg>
    </div>

    <div class="relative flex items-center h-20 max-w-7xl mx-auto z-20">
        
        <!-- Bloque Logo -->
        <div class="flex-shrink-0 px-6">
            <a href="/" class="flex items-center gap-3 group">
                <img src="/logo.png" alt="AgroVenz" class="w-10 h-10 object-contain" />
                <span class="font-black text-xl tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors">AGROVENZ</span>
            </a>
        </div>

        <!-- Menú Desktop -->
        <div class="hidden lg:flex flex-grow justify-end items-center px-10 gap-8 h-full">
            <!-- Letras blancas -->
            <div class="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white">
                {#each navLinks as link}
                    <a href={link.path} class="hover:text-emerald-200 transition-colors">{link.name}</a>
                {/each}
            </div>

            <div class="flex items-center gap-4 pl-6 border-l border-white/20">
                <a href="/login" class="text-[11px] font-semibold text-white hover:text-emerald-200 uppercase tracking-widest">Acceso</a>
                <a href="{waLink}." target="_blank" class="px-5 py-2 bg-white text-emerald-800 font-black rounded-2xl text-[11px] uppercase tracking-wider hover:bg-emerald-50 transition-all">Cotizar pedido</a>
            </div>
        </div>
        
        <!-- Botón Hamburguesa -->
        <button class="lg:hidden p-4 text-stone-900 absolute right-4 z-30" onclick={() => isMenuOpen = !isMenuOpen}>
            <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} class="text-3xl" />
        </button>
    </div>
    
    <!-- Menú Móvil -->
    {#if isMenuOpen}
        <div class="lg:hidden flex flex-col p-6 bg-emerald-800 text-white shadow-xl">
            {#each navLinks as link}
                <a href={link.path} onclick={() => isMenuOpen = false} class="py-4 border-b border-emerald-700 uppercase font-bold text-sm hover:text-emerald-200">{link.name}</a>
            {/each}
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