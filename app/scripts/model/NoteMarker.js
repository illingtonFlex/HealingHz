var ns = HealingHz.createNS("HealingHz.model");

ns.NoteMarker = function(x, y, rad, color, borderColor, note) {
    this.circle = new createjs.Shape();
    this.circle.origx = x;
    this.circle.origy = y;
    this.circle.x = x;
    this.circle.y = y;
    this.circle.rad = rad;
    this.circle.color = color;
    this.circle.borderColor = borderColor;
    this.note = note;
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
        var fullBoxes = 0;
        
        for(boxi=0; boxi<HealingHz.markerBoxes.length; boxi++)
        {
            var markerBox = HealingHz.markerBoxes[boxi];
            var pt = evt.target.localToLocal(0, 0, markerBox.box);

            if(markerBox.box.hitTest(pt.x, pt.y)) {
               
               hits++;
               
               if(!markerBox.hasTooManyNoteMarkers()) {
                    evt.target.x = markerBox.box.x + (markerBox.w/2);
                    evt.target.y = markerBox.box.y + (markerBox.h/2);
               }
               else {
                   evt.target.x = evt.target.origx;
                   evt.target.y = evt.target.origy;
               }
            }
            
            if(markerBox.isFull()) {
                fullBoxes++;    
            }
        }
        
        if(hits === 0) {
            evt.target.x = evt.target.origx;
            evt.target.y = evt.target.origy;
        }

        stage.update();

        if(fullBoxes == HealingHz.markerBoxes.length) {
            HealingHz.checkNoteOrder();
        }
        
        // Find the clicked NoteMarker
        for(i=0; i< HealingHz.noteMarkers.length; i++)
        {
            var n = HealingHz.noteMarkers[i];
            
            if(n.circle == evt.target){
               console.log(n.note.index);
            }
        }
    });

    stage.addChild(c);
    stage.update();
};