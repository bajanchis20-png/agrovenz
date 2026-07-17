<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<main class="min-h-screen bg-stone-950 text-white flex items-center justify-center p-6 relative overflow-hidden">
    <!-- Efecto de luz de fondo consistente -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[150px] -z-0"></div>

    <div class="w-full max-w-md relative z-10">
        <!-- Logo -->
    <!-- Logo -->
<div class="text-center mb-10">
    <a href="/" class="inline-block">
        <!-- Reemplaza el src con la ruta de tu logo -->
        <img src="/logo.png" alt="Logo AgroVenz" class="h-16 w-auto mx-auto" />
    </a>
    <p class="text-stone-400 mt-6 text-sm uppercase tracking-widest">Acceso de administrador</p>
</div>

        <!-- Formulario -->
        <div class="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl">
            <form class="space-y-6">
                <div>
                    <label for="email" class="block text-xs font-bold uppercase text-stone-400 mb-2">Correo electrónico</label>
                    <input 
                        type="email" 
                        id="email" 
                        class="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500 transition-all"
                        placeholder="ejemplo@finca.com"
                    />
                </div>

                <div>
                    <label for="password" class="block text-xs font-bold uppercase text-stone-400 mb-2">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        class="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500 transition-all"
                        placeholder="••••••••"
                    />
                </div>

                <button 
                    type="submit" 
                    class="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-[0.98] uppercase tracking-widest text-sm"
                >
                    Iniciar Sesión
                </button>
            </form>

            <div class="mt-8 pt-6 border-t border-white/10 text-center text-sm">

                
            </div>
        </div>

        <!-- Botón de retorno -->
        <div class="mt-8 text-center">
            <a href="/" class="text-stone-500 hover:text-white transition-colors text-xs flex items-center justify-center gap-2 uppercase tracking-widest">
                <Icon icon="mdi:arrow-left" /> Volver al inicio
            </a>
        </div>
    </div>
</main>