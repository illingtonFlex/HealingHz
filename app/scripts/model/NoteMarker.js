var ns = HealingHz.createNS("HealingHz.model");

ns.NoteMarker = function(x, y, rad, color, borderColor) {

    this.circle = new createjs.Shape();
    this.circle.x = x;
    this.circle.y = y;

    this.rad = rad;
    this.color = color;
    this.borderColor = borderColor;
};

ns.NoteMarker.prototype.draw = function(stage) {
    
    var c = this.circle;
    
    c.graphics
        .beginStroke(this.borderColor)
        .beginFill(this.color)
        .drawCircle(0, 0, this.rad);

        
    c.on("pressmove", 
        function(evt) {
            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;
            stage.update();
        });
        
    c.on("pressup", function(evt) { console.log("up"); })

    stage.addChild(c);
    stage.update();
};

