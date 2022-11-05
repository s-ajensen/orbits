<script>
  import Sandbox from "./lib/Sandbox.svelte";
  import Menu from "./lib/Menu.svelte";
  import Body from "./models/Body.js";

  let root = new Body("Sun", 50, 0.01, 0, 'rgba(247, 208, 13, 0.97)');
  let redPlanet = root.addChild(new Body("Red Planet", 10, 100, 500, 'rgba(255, 0, 0, 0.97' ));
  let bluePlanet = root.addChild(new Body("Blue Planet", 10, 300, 1500, 'rgba(0, 0, 255, 0.97' ));
  let isPlaying = false;
</script>

<main>
  <div class="grid-container">
    <Menu {root} {isPlaying} />
    <Sandbox />
  </div>
</main>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 8fr;
  }
</style>
