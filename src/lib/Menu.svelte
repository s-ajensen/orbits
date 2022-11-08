<script>
    import Connections from "./Connections.svelte";
    import SelectedBody from "./SelectedBody.svelte";
    import TreeItem from "./TreeItem.svelte";

    export let isPlaying;
    export let root;
    export let connections;
    export let lines;
    let selectedBody = root;

    function toggle() {
        isPlaying.val = !isPlaying.val;
    }

    function updateHierarchy() {
        root = root;
    }
</script>

<div class="menu-container">
    <div class="menu">

        {#if isPlaying.val}
            <button on:click={toggle}>Pause</button>
        {:else}
            <button on:click={toggle}>Play</button>
        {/if}
        <br />
    
        <ul>
            <TreeItem {root} body={root} on:updateSelectedBody={(event) => {selectedBody = event.detail.body; console.log("hey")}} on:change={updateHierarchy} />
        </ul>
    </div>

    <Connections {root} {connections} {lines} />
    <SelectedBody {selectedBody} />
</div>


<style>
    .menu :global(ul) {
        padding-left: 20px;
    }

    .menu-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-left: 1em;
        padding-right: 1em;
    }

    .menu {
        flex: 1;
    }

    div {
        height: 100%;
    }
</style>