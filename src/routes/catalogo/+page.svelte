<script lang="ts">
    import Icon from "@iconify/svelte";

    const productos = [
        { id: 1, title: "Harina de Palmiste", cat: "Alimentación Animal", price: 25, image: "/palmiste.png", desc: "Fuente de proteína y energía ideal para ganado bovino." },
        { id: 2, title: "Alambre electrico", cat: "Cercas Eléctricas", price: 40, image: "/alambre.png", desc: "Para cerco ganadero. Alta conductividad, resistente a corrosión y a la intemperie." },
        { id: 3, title: "Brega", cat: "Herbicidas", price: 150, image: "/brega.png", desc: "Formulado para el control de melezas en el maíz." },
        { id: 4, title: "Glytotal", cat: "Herbicidas", price: 60, image: "/glytotal.png", desc: "No selectivo, de accion sistematica ideal para el control de malezas de hoja ancha y gramíneas, áreas agrícolas y no agrícolas." },
        { id: 5, title: "Jonrón 212", cat: "Herbicidas", price: 35, image: "/herbicida.png", desc: "Control efectivo de malezas de hoja ancha y presentación de 1L ideal para potrero." },
        { id: 6, title: "Socio", cat: "Herbicidas", price: 45, image: "/socio.png", desc: "De acción sistémica utilizado para control de maleza de hoja ancha y algunas gramíneas." },
        { id: 7, title: "Silo de maíz", cat: "Alimentación Animal", price: 50, image: "/silo.png", desc: "Presentación de 30KG, fabricado con maleza y maíz. contiene Silolact." },
        { id: 8, title: "SiloLact", cat: "Bioinsumos", price: 30, image: "/silolact.png", desc: "Presentación de 500ml. para uso pecuario. Favorece la fermentación y conservación del forraje." },
        { id: 9, title: "Bolsas Resistentes", cat: "Equipos Agropecuarios", price: 85, image: "/bolsas.png", desc: "Equipo resistente para empaque y conservación." },
        { id: 10, title: "Semilla de maíz", cat: "Pastos y Semillas", price: 20, image: "/semilla.png", desc: "Semillas seleccionadas de alta calidad para un rendimiento óptimo en campo." },
        { id: 11, title: "Melaza", cat: "Alimentación Animal", price: 200, image: "/Melaza.png", desc: "Mejora la energía y condición corporal de los animales, ideal para Bovinos, búfalos, caballos, ovejas y cabras." },
        { id: 12, title: "Semilla de pasto Matsuda", cat: "Pastos y semillas", price: 35, image: "/matsuda.png", desc: "Balance mineral necesario para el desarrollo animal, buena genética. 20KG" },
        { id: 13, title: "Bumaute y Bumautas", cat: "Ganadería", price: 1200, image: "/bovino.png", desc: "Genética seleccionada para mejorar la productividad de tu rebaño." }
    ];

    const categorias = ["Todos", "Alimentación Animal", "Ganadería", "Agricultura", "Pastos y Semillas", "Cercas Eléctricas", "Fertilizantes", "Herbicidas", "Insecticidas", "Fungicidas", "Bioinsumos", "Equipos Agropecuarios", "Manuales Digitales", "Promociones", "Novedades"];

    let busqueda = $state("");
    let filtroCat = $state("Todos");
    let carrito = $state<{id: number, title: string, price: number, cantidad: number}[]>([]);

    let productosFiltrados = $derived(
        productos.filter(p => 
            (filtroCat === "Todos" || p.cat === filtroCat) &&
            p.title.toLowerCase().includes(busqueda.toLowerCase())
        )
    );

    function agregarAlCarrito(p: any) {
        const item = carrito.find(c => c.id === p.id);
        if (item) item.cantidad += 1;
        else carrito.push({ ...p, cantidad: 1 });
    }

    function cambiarCantidad(id: number, delta: number) {
        const item = carrito.find(c => c.id === id);
        if (item) item.cantidad = Math.max(1, item.cantidad + delta);
    }

    function eliminar(id: number) {
        carrito = carrito.filter(c => c.id !== id);
    }

    function finalizarCompra() {
        const mensaje = carrito.map(c => `${c.title} (x${c.cantidad}) - $${c.price * c.cantidad}`).join("%0A");
        const total = carrito.reduce((acc, c) => acc + (c.price * c.cantidad), 0);
        window.open(`https://wa.me/58XXXXXXXXXX?text=Hola, deseo comprar:%0A${mensaje}%0A%0ATotal: $${total}`, "_blank");
    }
</script>

<div class="p-4 md:p-8 max-w-7xl mx-auto bg-stone-50 min-h-screen">
    <input type="text" bind:value={busqueda} placeholder="Buscar productos..." class="w-full p-4 mb-8 rounded-2xl border border-stone-200 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
    
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 mb-10">
        {#each categorias as cat}
            <button on:click={() => filtroCat = cat} 
                class="px-3 py-3 rounded-xl text-[10px] md:text-xs font-bold uppercase transition-all shadow-sm border {filtroCat === cat ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white border-stone-200 hover:border-emerald-500'}">
                {cat}
            </button>
        {/each}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each productosFiltrados as p}
                <div class="bg-white p-5 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                    <img src={p.image} alt={p.title} class="w-full h-48 object-cover rounded-2xl mb-4 bg-stone-100" />
                    
                    <div class="flex-grow">
                        <h3 class="font-bold text-stone-900 text-lg leading-tight mb-1">{p.title}</h3>
                        <p class="text-[10px] text-emerald-700 font-bold mb-3 uppercase tracking-wider">{p.cat}</p>
                        <div class="max-h-24 overflow-y-auto pr-2 custom-scrollbar mb-4">
                            <p class="text-xs text-stone-600 leading-relaxed">{p.desc}</p>
                        </div>
                    </div>

                    <div class="flex justify-between items-center mt-auto pt-4 border-t border-stone-50">
                        <span class="font-black text-xl text-emerald-800">${p.price}</span>
                        <button on:click={() => agregarAlCarrito(p)} class="bg-stone-900 text-white px-5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-700 transition-colors">
                            AGREGAR
                        </button>
                    </div>
                </div>
            {/each}
        </div>

        <div class="bg-white p-6 rounded-3xl border border-stone-100 h-fit md:sticky md:top-6 shadow-sm">
            <h2 class="font-black text-xl mb-6 text-stone-900 uppercase tracking-tight">Carrito</h2>
            {#if carrito.length === 0}
                <div class="text-center py-10">
                    <Icon icon="mdi:cart-outline" class="text-4xl text-stone-300 mx-auto mb-2"/>
                    <p class="text-stone-400 text-sm italic">Tu carrito está vacío</p>
                </div>
            {:else}
                <div class="space-y-4 max-h-[50vh] overflow-y-auto pr-2 mb-6">
                    {#each carrito as item}
                        <div class="flex justify-between items-center text-sm pb-2 border-b border-stone-50">
                            <span class="font-medium text-stone-700 w-1/2">{item.title}</span>
                            <div class="flex gap-2 items-center">
                                <button on:click={() => cambiarCantidad(item.id, -1)} class="w-6 h-6 flex items-center justify-center rounded bg-stone-100 hover:bg-stone-200">-</button>
                                <span class="font-bold w-4 text-center">{item.cantidad}</span>
                                <button on:click={() => cambiarCantidad(item.id, 1)} class="w-6 h-6 flex items-center justify-center rounded bg-stone-100 hover:bg-stone-200">+</button>
                                <button on:click={() => eliminar(item.id)}><Icon icon="mdi:close" class="text-red-500 text-lg"/></button>
                            </div>
                        </div>
                    {/each}
                </div>
                <button on:click={finalizarCompra} class="w-full bg-emerald-700 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-500/20">
                    Finalizar pedido
                </button>
            {/if}
        </div>
    </div>
</div>

<style>
    /* Opcional: Estilo para la barra de scroll pequeña en las descripciones */
    .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #e7e5e4;
        border-radius: 10px;
    }
</style>