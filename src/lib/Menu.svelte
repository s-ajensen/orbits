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
        <button on:click={toggle}>{#if isPlaying.val}⏸️{:else}▶️{/if}</button>

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
        margin: 10px;
        padding: 10px;
        border: 1px solid grey;
        border-radius: 4px;
    }

    .menu button {
        width: 187px;
        height: 187px;
        font-size: 6em;
        border: 0 none;
        background: transparent;
        padding: 0;
    }

    div {
        height: 100%;
    }
</style>