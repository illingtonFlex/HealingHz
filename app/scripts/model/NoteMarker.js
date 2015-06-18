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
            var markerBox = markerBoxes[i];
            var pt = evt.target.localToLocal(0, 0, markerBox.box);

            if(markerBox.box.hitTest(pt.x, pt.y)) {
               
               if(!markerBox.hasNoteMarker(markerBox.box)) {
                    evt.target.x = markerBox.box.x + (markerBox.w/2);
                    evt.target.y = markerBox.box.y + (markerBox.h/2);
               }
               else {
                   evt.target.x = evt.target.x+35;
                   evt.target.y = evt.target.y+35;
               }
            }
        }
        stage.update();
    })

    stage.addChild(c);
    stage.update();
};