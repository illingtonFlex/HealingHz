var ns = HealingHz.createNS("HealingHz.model");

ns.NoteMarker = function(x, y, rad, color, borderColor) {
    
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.color = color;
    this.borderColor = borderColor;
};

ns.NoteMarker.prototype.draw = function(ctx) {
    var context = ctx.getContext('2d');
      
    context.beginPath();
    context.arc(this.x, this.y, this.rad, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = this.borderColor;
    context.stroke();
};