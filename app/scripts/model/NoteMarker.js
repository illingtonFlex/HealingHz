var ns = HealingHz.createNS("HealingHz.model");

ns.NoteMarker = function(x, y, rad, color, borderColor) {
    
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.color = color;
    this.borderColor = borderColor;
};

ns.NoteMarker.prototype.draw = function(ctx) {

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.borderColor;
    ctx.stroke();
};