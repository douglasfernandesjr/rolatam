<script lang="ts">
    let searchValue = $state("");

    import { load } from "$lib/services/load.js";

    let firstItem = load[0];

    let ctrl = $state("Pena Brilhante");

    function selectItem(value: string) {
        ctrl = value;
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
                {#each load as { id, name }, index}
                    <li data-item={index + 1}>
                        <button onclick={() => selectItem(name)}>
                            {id} {name}</button
                        >
                    </li>
                {/each}

                <li data-item="Casco de Besouro">Casco de Besouro</li>
                <li data-item="Galho Seco">Galho Seco</li>
                <li data-item="Erva Azul">Erva Azul</li>
                <li data-item="Cristal Azul">Cristal Azul</li>
            </ul>
        </aside>

        <section class="item-info">
            <h2>{ctrl}</h2>
            <div class="info-block">
                <h3>Usado em</h3>

                <ul>
                    <li>
                        <a>Quest do Bardo</a>
                    </li>
                    <li>Equipamento X</li>
                    <li><a href="#">Refino</a></li>
                </ul>
            </div>

            <div class="info-block">
                <h3>Dropado por</h3>

                <ul>
                    <li>
                        <a> Peco Peco</a>
                    </li>
                    <li><a href="#">Grand Peco</a></li>
                </ul>
            </div>
        </section>
    </div>
</div>
