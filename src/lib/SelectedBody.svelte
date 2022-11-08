<script>
    export let selectedBody;
</script>

<footer>
    <hr />
    <table>
        <tr>
            <tc>Name:</tc>
            <tc><input type="text" bind:value={selectedBody.name}></tc>
        </tr>
        <tr>
            <tc>Radius: {selectedBody.radius}</tc>
            <tc><input type="range" min="1" max="100" bind:value={selectedBody.radius}></tc>
        </tr>
        <tr>
            <tc>Color: 
                <span style="color: {selectedBody.color}">
                    {selectedBody.color}
                </span>
            </tc>
            <tc><input type="color" min="1" max="100" bind:value={selectedBody.color}></tc>
        </tr>
        <tr>
            <tc>Orbital Radius: {selectedBody.orbitRadius}</tc>
            <tc><input type="range" min="1" max="1000" bind:value={selectedBody.orbitRadius}></tc>
        </tr>
        <tr>
            <tc>Orbital Period: <input type="text" bind:value={selectedBody.period}></tc>
            <tc><input type="range" min="1" max="10000" bind:value={selectedBody.period}></tc>
        </tr>
    </table>
</footer>

<style>
    footer {
        flex-shrink: 0;
        padding-bottom: 1em;
    }
</style>