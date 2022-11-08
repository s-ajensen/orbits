<script>
    import { afterUpdate, createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let connections;
    export let connection;

    let remove;

    afterUpdate(() => {

        if (remove) {
            let index = connections.indexOf(connection);
            connections.splice(index, 1);
            dispatch('change');
        }
    })
</script>

<tr>
    <tc>{connection[0].name} - </tc>
    <tc>{connection[1].name}</tc>
    <tc>
        <button on:click={() => { remove = true; }}>🗑</button>
    </tc>
</tr>

