<script>
  import { onMount } from "svelte";

  export let root;
  export let isPlaying;
  export let connections;
  export let lines;

  let canvas;
  let prevTime = new Date().getTime();
  let drawLines = true;
  const LINE_FREQ = 25;
  const MAX_LINES = 100000;
  let accumulatedTime = 0;

  onMount(() => {
    if (!canvas.getContext) {
      console.log("Could not find canvas rendering context!");
      return;
    }

    requestAnimationFrame(draw);
  });

  function draw() {
    if (isPlaying.val) {
      const date = new Date();
      let ctx = canvas.getContext("2d");

      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;

      drawGrid(ctx);

      if (drawLines) {
        if (accumulatedTime > LINE_FREQ) {
          if (lines.length > MAX_LINES) {
            lines.shift();
          }

          connections.forEach((connection) => {
            lines.push([
              [
                connection[0].position.x + ctx.canvas.width / 2,
                connection[0].position.y + ctx.canvas.height / 2,
              ],
              [
                connection[1].position.x + ctx.canvas.width / 2,
                connection[1].position.y + ctx.canvas.height / 2,
              ],
            ]);
          });

          accumulatedTime = 0;
        }

        lines.forEach((connection) => {
          ctx.beginPath();
          ctx.moveTo(connection[0][0], connection[0][1]);
          ctx.lineTo(connection[1][0], connection[1][1]);
          ctx.stroke();
        });
      }

      root.setPosition(date.getTime());
      root.render(ctx);

      accumulatedTime += date.getTime() - prevTime;
      prevTime = date.getTime();
    }

    requestAnimationFrame(draw);
  }

  function drawGrid(ctx) {
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width / 2, 0);
    ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, ctx.canvas.height / 2);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);
    ctx.stroke();
  }
</script>

<div>
  <canvas bind:this={canvas} />
</div>

<style>
  div {
    position: relative;
    overflow: hidden;
    height: 100%
  }

  canvas {
    width: 100%;
    margin: auto;
    display: block;
  }
</style>
