var HealingHz = HealingHz || {};

HealingHz.createNS = function (namespace) {
    var nsparts = namespace.split(".");
    var parent = HealingHz;
 
    if (nsparts[0] === "HealingHz") {
        nsparts = nsparts.slice(1);
    }
 
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];

        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }

        parent = parent[partname];
    }

    return parent;
};


HealingHz.init = function() {
    var model = HealingHz.model;   

    HealingHz.NUM_MARKERS = 3;
    
    var stage = new createjs.Stage("healingHzCanvas");
    createjs.Touch.enable(stage);
    
    var factory = new model.NoteMarkerFactory();
    HealingHz.notes = factory.buildNoteMarkers(HealingHz.NUM_MARKERS);
    HealingHz.markerBoxes = [];

    
    for(i=0; i<HealingHz.notes.length; i++)
    {
        HealingHz.notes[i].draw(stage);
    }

    for(i=0; i<HealingHz.NUM_MARKERS; i++)
    {
        HealingHz.markerBoxes.push(
            new HealingHz.model.NoteMarkerBox(
                110*i, 50, 100, 100, "white", "black", HealingHz.notes));
        HealingHz.markerBoxes[i].draw(stage);
    }
};


window.onload = function() {
    HealingHz.init();
};