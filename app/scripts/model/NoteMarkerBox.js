var ns = HealingHz.createNS("HealingHz.model");

ns.NoteMarkerBox = function(x, y, w, h, color, borderColor) {

    this.box = new createjs.Shape();
    this.box.x = x;
    this.box.y = y;
    this.w = w;
    this.h = h;
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

ns.NoteMarkerBox.prototype.hasNoteMarker = function() {

    var hits = 0;
    
    for(i=0; i<HealingHz.notes.length; i++) {

        var pt = HealingHz.notes[i].circle.localToLocal(0, 0, this.box);

        if(this.box.hitTest(pt.x, pt.y)) {
            hits++;
        }
    }
    return hits > 1;
};