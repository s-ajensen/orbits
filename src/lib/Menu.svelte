<script>
    import MenuItem from "./MenuItem.svelte";
    import TreeItem from "./TreeItem.svelte";

    export let isPlaying;
    export let root;

    function toggle() {
        isPlaying = !isPlaying;
    }

    function updateHierarchy(event) {
        console.log("menu");
        root = root;
    }
</script>

<div class="menu">

    {#if isPlaying}
        <button on:click={toggle}>Pause</button>
    {:else}
        <button on:click={toggle}>Play</button>
    {/if}
    <br />

    <ul>
        <TreeItem {root} body={root} on:change={updateHierarchy} />
    </ul>
    
</div>

<style>
    .menu :global(ul) {
        padding-left: 20px;
    }
</style>