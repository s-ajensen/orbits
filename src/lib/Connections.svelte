<script>
    import { afterUpdate } from "svelte";
    import Connection from "./Connection.svelte";

    export let root;
    export let connections;
    export let lines;
    let newBody1 = null;
    let newBody2 = null;

    function addConnection() {
        let body1 = root.flatten().find(body => body.name === newBody1);
        let body2 = root.flatten().find(body => body.name === newBody2);

        if (body1 && body2) {
            connections.push([body1, body2]);
        }
        connections = connections;
        root = root;
        newBody1 = null;
        newBody2 = null;
    }

    afterUpdate(() => {
        console.log(`New Body 1: ${newBody1}`)
        console.log(`New Body 2: ${newBody2}`)
        console.log(lines);
    });
</script>

<footer>
    <hr />
    <div class="grid-container">
        <h3>Connections</h3>
        <button on:click={() => { lines.length = 0; }}>Clear</button>
    </div>
    <table>
        {#each connections as connection}
            <Connection {connections} {connection} on:change={() => {connections = connections}} />
        {/each}
        <tr>
            <tc>
                <select bind:value={newBody1}>
                    {#each root.flatten().filter(body => 
                        body.name != newBody2 && 
                        !(connections.some(con => 
                            con.some(con1 => con1.name === newBody1) && con.some(con2 => con2.name === body.name)
                        ))) as body}
                        <option value={body.name}>{body.name}</option>
                    {/each}
                </select>
            </tc>
            <tc>
                <select bind:value={newBody2}>
                    {#each root.flatten().filter(body => 
                        body.name != newBody1 &&
                        !(connections.some(con => 
                            con.some(con1 => con1.name === newBody1) && con.some(con2 => con2.name == body.name)
                        ))) as body}
                        <option value={body.name}>{body.name}</option>
                    {/each}
                </select>
            </tc>
            <tc>
                <button on:click={addConnection}>Add</button>
            </tc>
        </tr>
    </table>
</footer>

<style>
    footer {
        flex-shrink: 0;
        padding-bottom: 1em;
    }

    button {
        margin: 1em;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1.1fr 6fr;
    }
</style>