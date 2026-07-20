<script lang="ts">
    import Icon from "@iconify/svelte";

    const productos: { id: number, title: string, cat: string, price: number | string, image: string, desc: string }[] = [
        { id: 1, title: "Harina de Palmiste", cat: "Alimentación Animal", price: 12.9, image: "/palmiste32.png", desc: "Presentación de 36.8KG Fuente de proteína y energía ideal para ganado bovino." },
        { id: 2, title: "Alambre electrico", cat: "Cercas Eléctricas", price: 170, image: "/alambre.png", desc: "Para cerco ganadero. Alta conductividad, resistente a corrosión y a la intemperie." },
        { id: 3, title: "Brega", cat: "Herbicidas", price: 12.65, image: "/brega.png", desc: " De 1KG Formulado para el control de melezas en el maíz." },
        { id: 4, title: "Glytotal", cat: "Herbicidas", price: 8.8, image: "/realgly.png", desc: " 1 LT. No selectivo, de accion sistematica ideal para el control de malezas de hoja ancha y gramíneas, áreas agrícolas y no agrícolas." },
        { id: 5, title: "Jonrón 212", cat: "Herbicidas", price: 18, image: "/herbicida.png", desc: "Envase de 1LT. Envases de 4LT Y 10LT Preguntar disponibilidad y precios. Control efectivo de malezas de hoja ancha y presentación de 1L ideal para potrero." },
        { id: 6, title: "Socio", cat: "Herbicidas", price: 1, image: "/socio.png", desc: "De acción sistémica utilizado para control de maleza de hoja ancha y algunas gramíneas." },
        { id: 7, title: "Silo de maíz", cat: "Alimentación Animal", price: 4, image: "/silodemaiz2.jpeg", desc: "Presentación de 30KG, fabricado con maleza y maíz. contiene Silolact." },
        { id: 8, title: "SiloLact", cat: "Bioinsumos", price: 70, image: "/silolact.png", desc: "Presentación de 500ml. para uso pecuario. Favorece la fermentación y conservación del forraje." },
        { id: 9, title: "Bolsas Resistentes", cat: "Equipos Agropecuarios", price: 90, image: "/bolsas.png", desc: "200 bolsas. Equipo resistente para empaque y conservación." },
        { id: 10, title: "Semilla de maíz", cat: "Pastos y Semillas", price: 20, image: "/semilla.png", desc: "Semillas seleccionadas de alta calidad para un rendimiento óptimo en campo." },
        { id: 11, title: "Melaza", cat: "Alimentación Animal", price: 14, image: "/Melaza.png", desc: "Mejora la energía y condición corporal de los animales, ideal para Bovinos, búfalos, caballos, ovejas y cabras." },
        { id: 12, title: "Semilla de pasto Matsuda", cat: "Pastos y semillas", price: 12.6, image: "/semilladepasto.png", desc: " Presentación de 20KG. Balance mineral necesario para el desarrollo animal, buena genética." },
        { id: 13, title: "Bumaute y Bumautas", cat: "Ganadería", price: "Consultar", image: "/bovino.png", desc: "Genética seleccionada para mejorar la productividad de tu rebaño." },
        { id: 14, title: "Microchips", cat: "Equipos Agropecuarios", price: 1, image: "/chipnew2.jpeg", desc: "Identificacion de ganado." },
        { id: 16, title: "Lector", cat: "Equipos Agropecuarios", price: 70, image: "/lector.jpeg", desc: "Descripción del producto." },
        { id: 15, title: "Venta de tierras y asesoría", cat: "Inversiones y tierras", price: "Consultar", image: "/R.jpg", desc: "Tu socio estratégico en el sector agropecuario." },
        { id: 17, title: "Plandula In vitro", cat: "Bioinsumos", price: "Consultar.", image: "/pendula.jpeg", desc: "Geoplasma exclusivo." }
    ];

    const categorias = ["Todos", "Alimentación Animal", "Ganadería", "Inversiones y tierras", "Pastos y Semillas", "Cercas Eléctricas", "Fertilizantes", "Herbicidas", "Insecticidas", "Fungicidas", "Bioinsumos", "Equipos Agropecuarios", "Manuales Digitales", "Promociones", "Novedades" ];
    const metodosPago = ["Mercantil", "Venezuela", "Banesco", "Pago Móvil", "Efectivo Divisa", "Binance"];

    let busqueda = $state("");
    let filtroCat = $state("Todos");
    let metodoPago = $state("Mercantil");
    let carrito = $state<{id: number, title: string, price: number | string, cantidad: number}[]>([]);

    let productosFiltrados = $derived(
        productos.filter(p => 
            (filtroCat === "Todos" || p.cat === filtroCat) &&
            p.title.toLowerCase().includes(busqueda.toLowerCase())
        )
    );

    function calcularTotal() {
        const aplicaDescuento = (metodoPago === "Efectivo Divisa" || metodoPago === "Binance");
        return carrito.reduce((acc, c) => {
            if (typeof c.price !== 'number') return acc;
            let precioUnitario = c.price;
            if (aplicaDescuento && c.id !== 2 && c.id !== 14 && c.id !== 16) {
                precioUnitario *= 0.9;
            }
            return acc + (precioUnitario * c.cantidad);
        }, 0);
    }

    function agregarAlCarrito(p: any) {
        const item = carrito.find(c => c.id === p.id);
        if (item) item.cantidad += 1;
        else carrito.push({ ...p, cantidad: 1 });
    }

    function cambiarCantidad(id: number, delta: number) {
        const item = carrito.find(c => c.id === id);
        if (item) {
            item.cantidad = Math.max(1, item.cantidad + delta);
        }
    }

    function eliminar(id: number) {
        carrito = carrito.filter(c => c.id !== id);
    }

    function finalizarCompra() {
        const numeroWhatsApp = "584241860644";
        const total = calcularTotal();
        const mensaje = carrito.map(c => `${c.title} (x${c.cantidad})`).join("%0A");
        const textoTotal = `%0A%0ATotal: $${total.toFixed(2)}%0AMétodo de pago: ${metodoPago}`;
        window.open(`https://wa.me/${numeroWhatsApp}?text=Hola, deseo comprar:%0A${mensaje}${textoTotal}`, "_blank");
    }
</script>

<div class="p-4 md:p-8 max-w-7xl mx-auto bg-stone-50 min-h-screen">
    <input type="text" bind:value={busqueda} placeholder="Buscar productos..." class="w-full p-4 mb-8 rounded-2xl border border-stone-200 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
    
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 mb-10">
        {#each categorias as cat}
            <button on:click={() => filtroCat = cat} 
                class="px-3 py-3 rounded-xl text-[10px] md:text-xs font-bold uppercase transition-all shadow-sm border {filtroCat === cat ? 'bg-emerald-800 text-white border-emerald-800' : 'bg-white border-stone-200 hover:border-emerald-800 hover:text-emerald-800'}">
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
                        <p class="text-xs text-stone-600 leading-relaxed mb-4">{p.desc}</p>
                    </div>
                    <div class="flex justify-between items-center mt-auto pt-4 border-t border-stone-50">
                        <span class="font-black text-xl text-emerald-800">{typeof p.price === 'number' ? `$${p.price}` : p.price}</span>
                        <button on:click={() => agregarAlCarrito(p)} class="px-6 py-2 border border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white font-bold rounded-xl text-[10px] uppercase tracking-[0.2em] transition-all duration-300">AGREGAR</button>
                    </div>
                </div>
            {/each}
        </div>

        <div class="bg-white p-6 rounded-3xl border border-stone-100 h-fit md:sticky md:top-6 shadow-sm">
            <h2 class="font-black text-xl mb-6 text-stone-900 uppercase">Carrito</h2>
            
            {#if carrito.length === 0}
                <div class="text-center py-10"><p class="text-stone-400 text-sm italic">Tu carrito está vacío</p></div>
            {:else}
                <div class="space-y-4 max-h-[50vh] overflow-y-auto pr-2 mb-6">
                    {#each carrito as item}
                        <div class="flex justify-between items-center text-sm pb-2 border-b border-stone-50">
                            <span class="font-medium text-stone-700 w-1/2">{item.title}</span>
                            <div class="flex gap-2 items-center">
                                <button on:click={() => cambiarCantidad(item.id, -1)} class="w-6 h-6 flex items-center justify-center rounded border border-stone-200 hover:bg-stone-100">-</button>
                                <span class="font-bold w-4 text-center text-xs">{item.cantidad}</span>
                                <button on:click={() => cambiarCantidad(item.id, 1)} class="w-6 h-6 flex items-center justify-center rounded border border-stone-200 hover:bg-stone-100">+</button>
                                <button on:click={() => eliminar(item.id)}><Icon icon="mdi:close" class="text-red-500 text-lg"/></button>
                            </div>
                        </div>
                    {/each}
                </div>
                
                <div class="mb-4">
                    <label class="block text-[10px] font-bold text-stone-400 mb-2 uppercase">Método de pago</label>
                    <select bind:value={metodoPago} class="w-full p-2 bg-stone-100 rounded-lg text-xs font-bold border-none outline-none">
                        {#each metodosPago as m}<option value={m}>{m}</option>{/each}
                    </select>
                </div>

                <div class="text-right mb-6">
                    <p class="text-[10px] text-stone-400 uppercase">Descuento en divisas</p>
                    <span class="text-2xl font-black text-emerald-800">${calcularTotal().toFixed(2)}</span>
                </div>

                <button on:click={finalizarCompra} class="w-full bg-emerald-800 text-white py-4 rounded-xl font-bold uppercase text-xs hover:bg-emerald-900 transition-all tracking-[0.1em]">Finalizar pedido</button>
            {/if}
        </div>
    </div>
</div>