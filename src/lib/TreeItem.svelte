<script>
    import { createEventDispatcher } from "svelte";
    import MenuItem from "./MenuItem.svelte";

    const dispatch = createEventDispatcher();

    export let root;
    export let body;
</script>

<li>
    <MenuItem {root} {body} on:change />
</li>

<ul>
{#if body.children}
    {#each body.children as child}
        <svelte:self {root} body={child} on:change />
    {/each}
{/if}
</ul>
