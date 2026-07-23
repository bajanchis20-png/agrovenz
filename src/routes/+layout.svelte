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

<!-- Contenedor general de la barra flotante con margen superior -->
<header class="sticky top-4 z-50 w-full px-4 sm:px-6">
    <nav class="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-2xl shadow-stone-900/10 rounded-2xl lg:rounded-3xl transition-all duration-300">
        <div class="relative flex items-center justify-between h-20 px-6 lg:px-8">
            
            <!-- Bloque Logo -->
            <div class="flex-shrink-0">
                <a href="/" class="flex items-center gap-3 group">
                    <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-800 transition-colors">
                        <img src="/logo.png" alt="AgroVenz" class="w-7 h-7 object-contain" />
                    </div>
                    <span class="font-black text-xl tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors">AGROVENZ</span>
                </a>
            </div>

            <!-- Menú Desktop con estética flotante -->
            <div class="hidden lg:flex items-center gap-8 h-full">
                <div class="flex gap-7 text-[11px] font-bold uppercase tracking-widest text-stone-600">
                    {#each navLinks as link}
                        <a href={link.path} class="hover:text-emerald-800 transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-800 hover:after:w-full after:transition-all">{link.name}</a>
                    {/each}
                </div>

                <div class="flex items-center gap-4 pl-6 border-l border-stone-200">
                    <a href="/login" class="text-[11px] font-semibold text-stone-700 hover:text-emerald-800 uppercase tracking-widest transition-colors">Acceso</a>
                    <a href="{waLink}" target="_blank" 
                       class="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded-xl text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:scale-105 active:scale-95">
                        Cotizar pedido
                    </a>
                </div>
            </div>
            
            <!-- Botón Hamburguesa -->
            <button class="lg:hidden p-2 rounded-xl bg-stone-100 text-stone-900 z-50 hover:bg-emerald-50 hover:text-emerald-800 transition-colors" onclick={() => isMenuOpen = !isMenuOpen}>
                <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} class="text-2xl" />
            </button>
        </div>
        
        <!-- Menú Móvil Desplegable Integrado -->
        {#if isMenuOpen}
            <div class="lg:hidden flex flex-col p-6 bg-white border-t border-stone-100 rounded-b-2xl shadow-xl z-40 animate-in fade-in slide-in-from-top-2 duration-200">
                {#each navLinks as link}
                    <a href={link.path} onclick={() => isMenuOpen = false} class="py-3 border-b border-stone-50 uppercase font-bold text-xs text-stone-700 hover:text-emerald-800 flex items-center justify-between">
                        {link.name}
                        <Icon icon="mdi:chevron-right" class="text-stone-400" />
                    </a>
                {/each}
                
                <!-- Botones Móviles -->
                <div class="flex flex-col gap-3 mt-6">
                    <a href="/login" onclick={() => isMenuOpen = false} 
                       class="py-3 text-center border border-stone-200 text-stone-800 rounded-xl uppercase font-bold text-xs tracking-widest hover:bg-stone-50 transition-all">
                        Iniciar Sesión
                    </a>
                    <a href="{waLink}" target="_blank" onclick={() => isMenuOpen = false} 
                       class="py-3 text-center bg-emerald-800 text-white rounded-xl uppercase font-bold text-xs tracking-widest hover:bg-emerald-900 shadow-md shadow-emerald-900/20 transition-all">
                        Cotizar Pedido
                    </a>
                </div>
            </div>
        {/if}
    </nav>
</header>

<main class="min-h-[70vh]">
    {@render children()}
</main>

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