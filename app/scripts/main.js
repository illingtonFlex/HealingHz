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
    
    var stage = new createjs.Stage("healingHzCanvas");

    var model = HealingHz.model;   

    var factory = new model.NoteMarkerFactory();
    
    var notes = factory.buildNoteMarkers(5);

    createjs.Touch.enable(stage);
    
    
    for(i=0; i<notes.length; i++)
    {
        notes[i].draw(stage);
    }
}

window.onload = function()
{
    HealingHz.init();
};