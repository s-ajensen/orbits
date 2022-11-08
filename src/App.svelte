<script>
  import Sandbox from "./lib/Sandbox.svelte";
  import Menu from "./lib/Menu.svelte";
  import Body from "./models/Body.js";
  import { RGBAToHexA } from "./helpers/colorConverter"

  let root = new Body("Sun", 50, 0.01, 0, RGBAToHexA('rgba(247, 208, 13, 0.97)'));
  let redPlanet = root.addChild(new Body("Red Planet", 10, 100, 500, 'rgba(255, 0, 0, 0.97' ));
  let bluePlanet = root.addChild(new Body("Blue Planet", 10, 300, 1500, 'rgba(0, 0, 255, 0.97' ));
  let isPlaying = { val: true};
  let connections = [];
  let lines = [];
</script>

<main>
  <div class="grid-container">
    <Menu {root} {isPlaying} {connections} {lines} />
    <Sandbox {root} {isPlaying} {connections} {lines} />
  </div>
</main>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1.1fr 6fr;
    height: 100%;
  }

  main {
    height: 100%
  }
</style>
