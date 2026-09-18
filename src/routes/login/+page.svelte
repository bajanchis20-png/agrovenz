<script lang="ts">
    import Icon from "@iconify/svelte";
    import { supabase } from '$lib/supabase';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { iniciarSesionSimulada } from '$lib/auth';

    let email = $state('');
    let password = $state('');
    let errorMessage = $state('');

    // Pre-llenar automáticamente con "Ale de ADM" al entrar a la vista
    onMount(() => {
        email = 'ale.adm@agrovenz.com';
        password = 'adminpassword123';
    });

    async function handleLogin(e: Event) {
        e.preventDefault();
        errorMessage = '';
        
        // Acceso rápido para el usuario Ale de ADM (ahora conectado con la tienda global)
        if (email === 'ale.adm@agrovenz.com') {
            iniciarSesionSimulada({
                nombre: "Ale",
                rol: "ADM",
                email: email
            });
            goto('/'); 
            return;
        }

        // Intento real con Supabase para otros usuarios
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        
        if (error) {
            errorMessage = error.message;
        } else {
            // Si entra por Supabase, también actualizamos la tienda global con sus datos reales
            iniciarSesionSimulada({
                nombre: data.user?.email?.split('@')[0] || "Usuario",
                rol: "USER",
                email: email
            });
            goto('/');
        }
    }
</script>

<main class="min-h-screen bg-stone-950 text-white flex items-center justify-center p-6 relative overflow-hidden">
    <!-- Efecto de luz de fondo consistente -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[150px] -z-0"></div>

    <div class="w-full max-w-md relative z-10">
        <!-- Logo -->
        <div class="text-center mb-10">
            <a href="/" class="inline-block">
                <img src="/logo.png" alt="Logo AgroVenz" class="h-16 w-auto mx-auto" />
            </a>
            <p class="text-stone-400 mt-6 text-sm uppercase tracking-widest">Acceso de administrador - Ale (ADM)</p>
        </div>

        <!-- Formulario -->
        <div class="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl">
            <form class="space-y-6" onsubmit={handleLogin}>
                <div>
                    <label for="email" class="block text-xs font-bold uppercase text-stone-400 mb-2">Correo electrónico</label>
                    <input 
                        type="email" 
                        id="email" 
                        bind:value={email}
                        required
                        class="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500 transition-all"
                        placeholder="ejemplo@finca.com"
                    />
                </div>

                <div>
                    <label for="password" class="block text-xs font-bold uppercase text-stone-400 mb-2">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        bind:value={password}
                        required
                        class="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500 transition-all"
                        placeholder="••••••••"
                    />
                </div>

                {#if errorMessage}
                    <p class="text-red-400 text-xs text-center uppercase tracking-wider">{errorMessage}</p>
                {/if}

                <button 
                    type="submit" 
                    class="px-8 py-4 bg-emerald-800 border border-emerald-700 text-white hover:bg-emerald-900 font-bold rounded-xl text-[11px] uppercase tracking-[0.2em] transition-all duration-300 text-center w-full cursor-pointer shadow-lg shadow-emerald-900/30"
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>

        <!-- Botón de retorno -->
        <div class="mt-8 text-center">
            <a href="/" class="text-stone-500 hover:text-white transition-colors text-xs flex items-center justify-center gap-2 uppercase tracking-widest">
                <Icon icon="mdi:arrow-left" /> Volver al inicio
            </a>
        </div>
    </div>
</main>