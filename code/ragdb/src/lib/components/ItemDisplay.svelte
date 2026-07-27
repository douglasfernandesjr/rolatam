<script lang="ts">
    let { value } = $props();
</script>

<section class="item-info">
    <h2>{value.name}</h2>
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
