<script lang="ts">
    import type { RagnarokItem } from "$lib/services/RagnarokItem";
    import { load } from "$lib/services/load.js";
    import ItemDisplay from "$lib/components/ItemDisplay.svelte";

    let searchValue = $state("");
    let selectedItem = $state(load[0]);
    let ctrl = $state("Pena Brilhante");

    function selectItem(value: RagnarokItem) {
        selectedItem = value;
    }

    function executeSearch() {}
</script>

<div class="container">
    <header class="header">
        <h1>Ragnarok Util Database</h1>
        <p>Pesquise itens e veja informações de uso</p>
    </header>

    <div class="search-box">
        <input
            type="text"
            id="search"
            bind:value={searchValue}
            placeholder="Digite o nome do item..."
            onchange={() => executeSearch()}
        />
    </div>

    <div class="content">
        <aside class="item-list">
            <ul id="items">
                {#each load as currentItem, index}
                    <li data-item={index + 1}>
                        <button onclick={() => selectItem(currentItem)}>
                            {currentItem.id} {currentItem.name}</button
                        >
                    </li>
                {/each}

                <li data-item="Casco de Besouro">Casco de Besouro</li>
                <li data-item="Galho Seco">Galho Seco</li>
                <li data-item="Erva Azul">Erva Azul</li>
                <li data-item="Cristal Azul">Cristal Azul</li>
            </ul>
        </aside>

        <ItemDisplay value={selectedItem}></ItemDisplay>
    </div>
</div>
