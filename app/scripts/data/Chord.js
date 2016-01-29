var ns = HealingHz.createNS("HealingHz.data");

ns.Chord = function(name, notes) {
    this.name = name;
    this.notes = notes;
};

ns.Chord.prototype.getName = function() {
    return this.name;
};

ns.Chord.prototype.getNotes = function() {
    return this.notes;
};