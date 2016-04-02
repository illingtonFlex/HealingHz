var ns = HealingHz.createNS("HealingHz.model");

ns.NoteMarkerBox = function(x, y, color, borderColor) {

    this.box = new createjs.Shape();
    this.box.x = x;
    this.box.y = y;
    this.w = 100;
    this.h = 100;
    this.color = color;
    this.borderColor = borderColor;
};

ns.NoteMarkerBox.prototype.draw = function(stage) {

    var b = this.box;

    b.graphics
        .beginStroke(this.borderColor)
        .beginFill(this.color)
        .drawRect(0, 0, this.w, this.h);

    stage.addChildAt(b, 0);
    stage.update();
};

ns.NoteMarkerBox.prototype.hasTooManyNoteMarkers = function() {

    var hits = 0;

    for(i=0; i<HealingHz.noteMarkers.length; i++) {

        var pt = HealingHz.noteMarkers[i].circle.localToLocal(0, 0, this.box);

        if(this.box.hitTest(pt.x, pt.y)) {
            hits++;
        }
    }

    return hits > 1;
};


ns.NoteMarkerBox.prototype.isFull = function() {

    var hits = 0;

    for(i=0; i<HealingHz.noteMarkers.length; i++) {

        var pt = HealingHz.noteMarkers[i].circle.localToLocal(0, 0, this.box);

        if(this.box.hitTest(pt.x, pt.y)) {
            hits++;
        }
    }

    return hits > 0;
};


ns.NoteMarkerBox.prototype.getNote = function() {
    
    var ret;
    
    for(i=0; i<HealingHz.noteMarkers.length; i++) {

        var pt = HealingHz.noteMarkers[i].circle.localToLocal(0, 0, this.box);

        if(this.box.hitTest(pt.x, pt.y)) {
            ret = HealingHz.noteMarkers[i].note;
        }
    }

    return ret;
};