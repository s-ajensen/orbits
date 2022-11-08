<script>
    import { createEventDispatcher } from "svelte";
    import MenuItem from "./MenuItem.svelte";

    const dispatch = createEventDispatcher();

    export let root;
    export let body;
</script>

<li>
    <MenuItem {body} on:change on:updateSelectedBody />
</li>

<ul>
{#if body.children}
    {#each body.children as child}
        <svelte:self {root} body={child} on:change on:updateSelectedBody />
    {/each}
{/if}
</ul>
