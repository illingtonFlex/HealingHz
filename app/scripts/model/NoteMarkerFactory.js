var ns = HealingHz.createNS("HealingHz.model");


ns.NoteMarkerFactory = function() {
};
ns.NoteMarkerFactory.prototype.generateColorCode = function() {
    return Math.floor(Math.random()*16777215);
};

ns.NoteMarkerFactory.prototype.buildNoteMarkers = function(numOfMarkers) {

    var noteMarkers = [];

    for(i=0; i<numOfMarkers; i++)
    {
        var color = this.generateColorCode();

        var xindex = (690+(10*i))/HealingHz.NUM_MARKERS + (110*i) + 50;
        var nm = new HealingHz.model.NoteMarker(xindex, 200, 40, '#'+color.toString(16), "black");
        noteMarkers.push(nm);
    }

    return noteMarkers;
};