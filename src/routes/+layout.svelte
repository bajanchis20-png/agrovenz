<script lang="ts">
    import "./layout.css";
    let { children } = $props();
    let isMenuOpen = $state(false);
</script>

<svelte:head>
    <title>AgroVenz | Aliado Estratégico del Campo Venezolano</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>

<!-- Header Responsivo -->
<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        <!-- Logo -->
        <a href="/" class="flex-shrink-0">
            <img src="/logo.png" alt="AgroVenz" class="w-12 h-12 md:w-16 md:h-16 object-contain" />
        </a>

        <!-- Botón Hamburguesa -->
        <button class="lg:hidden p-2 text-stone-700" onclick={() => isMenuOpen = !isMenuOpen}>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

        <!-- Menú Desktop -->
        <div class="hidden lg:flex gap-6 text-[11px] xl:text-[13px] uppercase tracking-wide font-medium text-stone-700">
            <a href="/" class="hover:text-emerald-700 border-b-2 border-emerald-600 pb-1">Inicio</a>
            <a href="/catalogo" class="hover:text-emerald-700 transition-colors">Productos</a>
            <a href="/soluciones" class="hover:text-emerald-700 transition-colors">Soluciones</a>
            <a href="/ganaderia" class="hover:text-emerald-700 transition-colors">Ganadería</a>
            <a href="/servicios" class="hover:text-emerald-700 transition-colors">Servicios</a>
            <a href="/educacion" class="hover:text-emerald-700 transition-colors">Educación</a>
            <a href="/contacto" class="hover:text-emerald-700 transition-colors">Contacto</a>
        </div>

        <!-- Botones Acción (Desktop) -->
        <div class="hidden lg:flex items-center gap-3 xl:text-[13px] uppercase tracking-wide font-medium text-stone-700">
            <a href="/login" class="text-xs font-semibold text-stone-900 hover:text-emerald-700">Iniciar Sesión</a>
            <a href="/cotizar" class="bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-emerald-700 transition-all shadow-md">Cotizar</a>
        </div>
    </div>

    <!-- Menú Móvil (Desplegable Completo) -->
    {#if isMenuOpen}
        <div class="lg:hidden flex flex-col px-6 py-6 space-y-4 bg-stone-50 border-t border-stone-100">
            <a href="/" class="text-sm uppercase font-semibold text-stone-800">Inicio</a>
            <a href="/catalogo" class="text-sm uppercase font-semibold text-stone-800">Productos</a>
            <a href="/soluciones" class="text-sm uppercase font-semibold text-stone-800">Soluciones</a>
            <a href="/ganaderia" class="text-sm uppercase font-semibold text-stone-800">Ganadería</a>
            <a href="/servicios" class="text-sm uppercase font-semibold text-stone-800">Servicios</a>
            <a href="/educacion" class="text-sm uppercase font-semibold text-stone-800">Educación</a>
            <a href="/contacto" class="text-sm uppercase font-semibold text-stone-800">Contacto</a>
            <hr class="border-stone-200" />
            <a href="/login" class="text-sm uppercase font-bold text-stone-900">Iniciar Sesión</a>
            <a href="/cotizar" class="bg-emerald-600 text-white py-3 rounded-full text-sm font-bold text-center">¡Solicita tu Cotización!</a>
        </div>
    {/if}
</nav>

<!-- Contenido -->
<main class="bg-white min-h-[70vh] text-stone-900">
    {@render children()}
</main>

<!-- Footer -->
<footer class="bg-emerald-950 py-16 text-white border-t-4 border-[#FBB03B]">
    <div class="max-w-4xl mx-auto px-6 text-center">
        <h3 class="text-lg md:text-xl font-black uppercase tracking-[0.3em] mb-6">AgroVenz</h3>
        <p class="text-[10px] md:text-xs uppercase tracking-[0.2em] text-emerald-200/70 mb-8 px-4">
            Conectamos tierra, capital y sostenibilidad. Tu aliado estratégico en el campo venezolano.
        </p>
        <p class="text-[9px] text-emerald-400/50 uppercase tracking-[0.2em]">
            © 2026 AgroVenz · San Diego, Carabobo, Venezuela
        </p>
    </div>
</footer>