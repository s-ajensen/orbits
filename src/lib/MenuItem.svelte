<script>
    import { afterUpdate, createEventDispatcher, onMount } from "svelte";
    import Body from "../models/Body";

    const ENTER_KEY = 13;
    const dispatch = createEventDispatcher();

    export let body;
    export let root;
    let addChild = false;
    let newChildInput;

    afterUpdate(() => {
        if (addChild) {
            newChildInput.focus();
            newChildInput.select();
        }
    })

    function handleNewChild(event) {
        if (event.keyCode === ENTER_KEY) {
            addChild = false;
            body.addChild(new Body(newChildInput.value, 
                                Math.random()*50,
                                (Math.random()*500) + 20,Math.random()*1000,
                                `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.97`));
            dispatch('change');
        }
    }
</script>

<div class="grid-container">
    <p>{body.name} </p>
    <button on:click={() => {addChild = true}}>+</button>
</div>

{#if addChild}  
    <input 
        type="text" 
        bind:this={newChildInput} 
        on:focusout={() => {addChild = false}} 
        on:keypress={handleNewChild}/>
{/if}

<style>
    .grid-container {
      display: grid;
      grid-template-columns: 10fr 1fr;
    }

    p {
        margin-top: 0.25em;
        margin-bottom: 0.25em;
    }

    button {
        margin-top: 0.25em;
        margin-bottom: 0.25em;

        width: 20px;
        height: 20px;
    }
  </style>
  
