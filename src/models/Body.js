export default class Body {
    constructor(name, radius, orbitRadius, period, color) {
        this.name = name;
        this.parent = null;
        this.radius = radius;
        this.orbitRadius = orbitRadius;
        this.period = period;
        this.color = color;
        this.position = { x: 0, y: 0 };
        this.children = [];
    }

    setPosition(time) {
        if (this.parent) {
            this.position.x = this.parent.position.x + (this.orbitRadius * Math.cos(time / this.period))
            this.position.y = this.parent.position.y + (this.orbitRadius * Math.sin(time / this.period)) 
        }

        this.children.forEach(child => child.setPosition(time));
    }

    render(ctx) {
        let origin = {
            x: ctx.canvas.width / 2,
            y: ctx.canvas.height / 2
        }

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(origin.x + this.position.x,
                origin.y + this.position.y,
                this.radius,
                0,
                Math.PI * 2);
        ctx.fill();
        ctx.restore();

        this.children.forEach(child => child.render(ctx));
    }

    addChild(child) {
        this.children.push(child);
        child.parent = this;
        return child;
    }

    flatten() {
        let bodies = [ this ];
        this.children.forEach(child => bodies = bodies.concat(child.flatten()));
        return bodies;
    }
}