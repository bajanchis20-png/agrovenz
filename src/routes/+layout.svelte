<script lang="ts">
    import "./layout.css";
    import Icon from "@iconify/svelte"; // Importamos para los iconos
    let { children } = $props();
    let isMenuOpen = $state(false);

    // Definimos el enlace de WhatsApp para reutilizarlo
    const waLink = "https://wa.me/584241860644?text=Hola, me gustaría solicitar una cotización.";
</script>

<svelte:head>
    <title>AgroVenz | Soluciones Integrales para el Agro Venezolano</title>
</svelte:head>

<!-- Header: Estilo Corporativo -->
<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2">
            <img src="/logo.png" alt="AgroVenz" class="w-10 h-10 object-contain" />
            <span class="font-black text-xl tracking-tight text-stone-900 hidden sm:block">AGROVENZ</span>
        </a>

        <!-- Menú Desktop -->
        <div class="hidden lg:flex gap-8 text-[12px] font-bold uppercase tracking-widest text-stone-700">
            <a href="/" class="hover:text-emerald-700 transition-colors">Inicio</a>
            <a href="/catalogo" class="hover:text-emerald-700 transition-colors">Catálogo</a>
            <a href="/soluciones" class="hover:text-emerald-700 transition-colors">Soluciones</a>
            <a href="/servicios" class="hover:text-emerald-700 transition-colors">Servicios</a>
            <a href="/educacion" class="hover:text-emerald-700 transition-colors">Educación</a>
        </div>

        <!-- Botones Acción -->
        <div class="hidden lg:flex items-center gap-4">
            <a href="/login" class="text-[12px] font-semibold text-stone-600 hover:text-emerald-700">Acceso</a>
            <a href="{waLink}" target="_blank" class="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg text-[12px] font-bold tracking-wide transition-all shadow-md hover:shadow-lg">
                COTIZAR PEDIDO
            </a>
        </div>

        <!-- Botón Hamburguesa -->
        <button class="lg:hidden p-2 text-stone-800" onclick={() => isMenuOpen = !isMenuOpen}>
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
    </div>

    <!-- Menú Móvil -->
    {#if isMenuOpen}
        <div class="lg:hidden flex flex-col p-6 space-y-4 bg-white border-t border-stone-100 shadow-xl absolute w-full">
            <a href="/" class="text-sm font-bold uppercase text-stone-800 py-2 border-b border-stone-50">Inicio</a>
            <a href="/catalogo" class="text-sm font-bold uppercase text-stone-800 py-2 border-b border-stone-50">Catálogo</a>
            <a href="/soluciones" class="text-sm font-bold uppercase text-stone-800 py-2 border-b border-stone-50">Soluciones</a>
            <a href="/servicios" class="text-sm font-bold uppercase text-stone-800 py-2 border-b border-stone-50">Servicios</a>
            <a href="/educacion" class="text-sm font-bold uppercase text-stone-800 py-2 border-b border-stone-50">Educación</a>
    
            <div class="pt-4 flex flex-col gap-3">
                <a href="/login" class="text-center text-sm font-semibold text-stone-600 py-2">Iniciar Sesión</a>
                <a href="{waLink}" target="_blank" class="bg-emerald-700 text-white py-3 rounded-lg text-sm font-bold text-center uppercase tracking-wide">Solicitar Cotización</a>
            </div>
        </div>
    {/if}
</nav>

<main class="min-h-[70vh]">
    {@render children()}
</main>

<!-- Footer -->
<footer class="bg-stone-900 py-20 text-white">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center md:text-left">
        <div>
            <h4 class="font-black text-lg mb-4">AGROVENZ</h4>
            <p class="text-stone-400 text-sm leading-relaxed">
                Aliado estratégico para el productor venezolano. Insumos de precisión, tecnología y asesoría para un campo rentable.
            </p>
        </div>
        <div>
            <h4 class="font-bold text-sm uppercase tracking-widest mb-4">Enlaces</h4>
            <ul class="text-stone-400 text-sm space-y-2">
                <li><a href="/catalogo" class="hover:text-emerald-500">Catálogo</a></li>
                <li><a href="/servicios" class="hover:text-emerald-500">Servicios Técnicos</a></li>
                <!-- Enlace de Contacto Directo hacia WhatsApp -->
                <li><a href="{waLink}" target="_blank" class="hover:text-emerald-500">Contacto Directo</a></li>
            </ul>
        </div>
        <div>
            <h4 class="font-bold text-sm uppercase tracking-widest mb-4">Contacto</h4>
            <!-- Dirección actualizada -->
            <p class="text-stone-400 text-sm">Los Guayos, Carabobo, Venezuela</p>
        </div>
        <!-- Redes Sociales -->
        <div>
            <h4 class="font-bold text-sm uppercase tracking-widest mb-4">Síguenos</h4>
            <div class="flex justify-center md:justify-start gap-4 text-2xl">
                <a href="https://www.instagram.com/agrovenz" target="_blank" class="hover:text-emerald-500 transition-colors">
                    <Icon icon="mdi:instagram" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61590730151838" target="_blank" class="hover:text-emerald-500 transition-colors">
                    <Icon icon="mdi:facebook" />
                </a>
                <a href="https://tiktok.com/@agrovenz" target="_blank" class="hover:text-emerald-500 transition-colors">
                    <Icon icon="mdi:tiktok" />
                </a>
            </div>
        </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-center text-[10px] text-stone-500 uppercase tracking-[0.2em]">
        © 2026 AgroVenz · Todos los derechos reservados
    </div>
</footer>