var ns = HealingHz.createNS("HealingHz.data");

ns.ChordFactory = function() {

    this.C0  = new HealingHz.data.Note("C",     0,  0, 0);
    this.Db0 = new HealingHz.data.Note("C♯/D♭", 1,  0, 0);
    this.D0  = new HealingHz.data.Note("D",     2,  0, 0);
    this.Eb0 = new HealingHz.data.Note("D♯/E♭", 3,  0, 0);
    this.E0  = new HealingHz.data.Note("E",     4,  0, 0);
    this.F0  = new HealingHz.data.Note("F",     5,  0, 0);
    this.Gb0 = new HealingHz.data.Note("F♯/G♭", 6,  0, 0);
    this.G0  = new HealingHz.data.Note("G",     7,  0, 0);
    this.Ab0 = new HealingHz.data.Note("G♯/A♭", 8,  0, 0);
    this.A0  = new HealingHz.data.Note("A",     9,  0, 0);
    this.Bb0 = new HealingHz.data.Note("A♯/B♭", 10, 0, 0);
    this.B0  = new HealingHz.data.Note("B",     11, 0, 0);
    this.C1  = new HealingHz.data.Note("C",     12, 0, 0);

    this.E_major = new HealingHz.data.Chord("E major", [this.E0, this.Ab0, this.B0]);

};

ns.ChordFactory.prototype.getChord = function(numOfNotes) {
    return this.E_major;
};