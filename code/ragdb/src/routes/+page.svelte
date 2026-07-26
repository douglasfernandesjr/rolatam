<script lang="ts">
    let name = "Ragnarok Util Database";

    import { load } from "$lib/data/load.js";

    let ctrl =  $state("Pena Brilhante");

    function increment(value:string) {
		ctrl = value;
        console.log("log")
	}

</script>

<div class="container">
    <header class="header">
        <h1>{name}</h1>
        <p>Pesquise itens e veja informações de uso</p>
    </header>

    <div class="search-box">
        <input type="text" id="search" placeholder="Digite o nome do item..."  />
    </div>

    <div class="content">
        <aside class="item-list">
            <ul id="items">
                {#each load.itemDB as { id, name }, index}
                    <li data-item={index + 1} onclick={()=>increment(name)}>{id} {name}</li>
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
