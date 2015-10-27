var ns = HealingHz.createNS("HealingHz.model");

ns.NoteMarker = function(x, y, rad, color, borderColor) {
    this.circle = new createjs.Shape();
    this.circle.origx = x;
    this.circle.origy = y;
    this.circle.x = x;
    this.circle.y = y;
    this.circle.rad = rad;
    this.circle.color = color;
    this.circle.borderColor = borderColor;
};

ns.NoteMarker.prototype.draw = function(stage) {
    
    var c = this.circle;

    c.graphics
        .beginStroke(c.borderColor)
        .beginFill(c.color)
        .drawCircle(0, 0, c.rad);

    c.on("pressmove", 
        function(evt) {
            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;
            stage.update();
        });

    c.on("pressup", function(evt) { 
        var hits = 0;
        
        for(i=0; i< HealingHz.markerBoxes.length; i++)
        {
            var markerBox = HealingHz.markerBoxes[i];
            var pt = evt.target.localToLocal(0, 0, markerBox.box);

            if(markerBox.box.hitTest(pt.x, pt.y)) {
               
               hits++;
               
               if(!markerBox.hasNoteMarker()) {
                    evt.target.x = markerBox.box.x + (markerBox.w/2);
                    evt.target.y = markerBox.box.y + (markerBox.h/2);
               }
               else {
                   evt.target.x = evt.target.origx;
                   evt.target.y = evt.target.origy;
               }
            }
        }
        
        if(hits === 0) {
            evt.target.x = evt.target.origx;
            evt.target.y = evt.target.origy;
        }
        
        stage.update();
        
        // Find the clicked NoteMarker
        for(i=0; i< HealingHz.notes.length; i++)
        {
            var note = HealingHz.notes[i];
            
            if(note.circle == evt.target){
                console.log(note.circle.x);
            }
        }
    });

    stage.addChild(c);
    stage.update();
};