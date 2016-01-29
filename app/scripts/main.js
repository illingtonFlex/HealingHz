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
    var data = HealingHz.data;

    HealingHz.NUM_MARKERS = 3; //(Math.floor(Math.random() * 3) + 1) + 2;

    var stage = new createjs.Stage("healingHzCanvas");
    createjs.Touch.enable(stage);
    
    var chordFactory = new data.ChordFactory();
    var theChord = chordFactory.getChord();

    var factory = new model.NoteMarkerFactory();
    HealingHz.noteMarkers = factory.buildNoteMarkers(theChord);
    HealingHz.markerBoxes = [];

    
    for(i=0; i<HealingHz.noteMarkers.length; i++)
    {
        HealingHz.noteMarkers[i].draw(stage);
    }

    for(i=0; i<HealingHz.NUM_MARKERS; i++)
    {
        var xindex = (690+(10*i))/HealingHz.NUM_MARKERS + (110*i);
        
        HealingHz.markerBoxes.push(
            new HealingHz.model.NoteMarkerBox(
                xindex, 50, "white", "black"));
        HealingHz.markerBoxes[i].draw(stage);
    }
};


window.onload = function() {
    HealingHz.init();
};