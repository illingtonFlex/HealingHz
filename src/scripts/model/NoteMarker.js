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
    var thisNote = this.note;

    c.graphics
        .beginStroke(c.borderColor)
        .beginFill(c.color)
        .drawCircle(0, 0, c.rad);

    c.on("pressmove", 
        function(evt) {
            if(!createjs.Tween.hasActiveTweens()) {
                evt.target.x = evt.stageX;
                evt.target.y = evt.stageY;
                stage.update();
            }
        });

    c.on("pressup", function(evt) { 
        var hits = 0;
        var fullBoxes = 0;

        createjs.Sound.play(thisNote.fileName);
        console.log(thisNote.fileName);
        
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
                   createjs.Tween.get(c, { loop: false })
                    .to({ alpha: 0 }, 50)
                    .to({ alpha: 1 }, 50)
                    .to({ alpha: 0 }, 50)
                    .to({ alpha: 1 }, 50)
                    .to({ x: evt.target.origx, y: evt.target.origy }, 1000, createjs.Ease.getPowInOut(4));
               }
            }
            
            if(markerBox.isFull()) {
                fullBoxes++;    
            }
        }
        
        if(hits === 0) {
           createjs.Tween.get(c, { loop: false })
            .to({ x: evt.target.origx, y: evt.target.origy }, 1000, createjs.Ease.getPowInOut(4));
        }

        createjs.Tween.get(c, { loop: false })
            .to({ alpha: 0 }, 250)
            .to({ alpha: 1 }, 500);
            
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);

        if(fullBoxes == HealingHz.markerBoxes.length) {
            HealingHz.checkNoteOrder();
        }
        
        // Find the clicked NoteMarker
        for(i=0; i< HealingHz.noteMarkers.length; i++)
        {
            var n = HealingHz.noteMarkers[i];
        }
    });

    stage.addChild(c);
};