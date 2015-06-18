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
        
    c.on("pressup", function(evt) { 

        for(i=0; i< markerBoxes.length; i++)
        {
            var pt = evt.target.localToLocal(0, 0, markerBoxes[i].box);
    
            if(markerBoxes[i].box.hitTest(pt.x, pt.y)) {
            
                evt.target.x = markerBoxes[i].box.x + (markerBoxes[i].w/2);
                evt.target.y = markerBoxes[i].box.y + (markerBoxes[i].h/2);
            }
            
        }
        stage.update();
    })

    stage.addChild(c);
    stage.update();
};

