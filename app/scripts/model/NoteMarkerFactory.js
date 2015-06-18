var ns = HealingHz.createNS("HealingHz.model");


ns.NoteMarkerFactory = function() {
};

ns.NoteMarkerFactory.prototype.buildNoteMarkers = function(numOfMarkers) {
    
    var noteMarkers = [];
    
    for(i=0; i<numOfMarkers; i++)
    {
        var nm = new HealingHz.model.NoteMarker(100+(i*100), 200, 40, "red", "black");
        noteMarkers.push(nm);
    }
    
    return noteMarkers;
};