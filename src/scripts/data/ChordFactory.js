var ns = HealingHz.createNS("HealingHz.data");

ns.ChordFactory = function() {

    this.C4  = new HealingHz.data.Note("C", "C", 0);
    this.Db4 = new HealingHz.data.Note("CsharpDflat", "C#/Db", 1);
    this.D4  = new HealingHz.data.Note("D", "D", 2);
    this.Eb4 = new HealingHz.data.Note("DsharpEflat", "D#/Eb", 3);
    this.E4  = new HealingHz.data.Note("E", "E", 4);
    this.F4  = new HealingHz.data.Note("F", "F", 5);
    this.Gb4 = new HealingHz.data.Note("FsharpGflat", "F#/Gb", 6);
    this.G4  = new HealingHz.data.Note("G", "G", 7);
    this.Ab4 = new HealingHz.data.Note("GsharpAflat", "G#/Ab", 8);
    this.A4  = new HealingHz.data.Note("A", "A", 9);
    this.Bb4 = new HealingHz.data.Note("AsharpBflat", "A#Bb", 10);
    this.B4  = new HealingHz.data.Note("B", "B", 11);

    this.C_major   = new HealingHz.data.Chord("C major",     [ this.C4,  this.E4,   this.G4  ]);
    this.Db_major  = new HealingHz.data.Chord("C#/Db major", [ this.Db4, this.F4,   this.Ab4 ]);
    this.D_major   = new HealingHz.data.Chord("D major",     [ this.D4,  this.Gb4,  this.A4  ]);
    this.Eb_major  = new HealingHz.data.Chord("D#/Eb major", [ this.Eb4, this.G4,   this.Bb4 ]);
    this.E_major   = new HealingHz.data.Chord("E major",     [ this.E4,  this.Ab4,  this.B4  ]);
    this.F_major   = new HealingHz.data.Chord("F major",     [ this.F4,  this.A4,   this.C4  ]);
    this.Gb_major  = new HealingHz.data.Chord("F#/Gb major", [ this.Gb4, this.Bb4,  this.Db4 ]);
    this.G_major   = new HealingHz.data.Chord("G major",     [ this.G4,  this.B4,   this.D4  ]);
    this.Ab_major  = new HealingHz.data.Chord("G#/Ab major", [ this.Ab4, this.C4,   this.Eb4 ]);
    this.A_major   = new HealingHz.data.Chord("A major",     [ this.A4,  this.Db4,  this.E4  ]);
    this.Bb_major  = new HealingHz.data.Chord("A#/Bb major", [ this.Bb4, this.D4,   this.F4  ]);
    this.B_major   = new HealingHz.data.Chord("B major",     [ this.B4,  this.Eb4,  this.Gb4 ]);

    this.C_major7   = new HealingHz.data.Chord("C major7",     [ this.C4,  this.E4,  this.G4,  this.B4 ]);
    this.Db_major7  = new HealingHz.data.Chord("C#/Db major7", [ this.Db4, this.F4,  this.Ab4, this.C4 ]);
    this.D_major7   = new HealingHz.data.Chord("D major7",     [ this.D4,  this.Gb4, this.A4,  this.Bb4]);
    this.Eb_major7  = new HealingHz.data.Chord("D#/Eb major7", [ this.Eb4, this.G4,  this.Bb4, this.D4 ]);
    this.E_major7   = new HealingHz.data.Chord("E major7",     [ this.E4,  this.Ab4, this.B4,  this.Eb4]);
    this.F_major7   = new HealingHz.data.Chord("F major7",     [ this.F4,  this.A4,  this.C4,  this.E4 ]);
    this.Gb_major7  = new HealingHz.data.Chord("F#/Gb major7", [ this.Gb4, this.Bb4, this.Db4, this.F4 ]);
    this.G_major7   = new HealingHz.data.Chord("G major7",     [ this.G4,  this.B4,  this.D4,  this.Gb4]);
    this.Ab_major7  = new HealingHz.data.Chord("G#/Ab major7", [ this.Ab4, this.C4,  this.Eb4, this.G4 ]);
    this.A_major7   = new HealingHz.data.Chord("A major7",     [ this.A4,  this.Db4, this.E4,  this.Ab4]);
    this.Bb_major7  = new HealingHz.data.Chord("A#/Bb major7", [ this.Bb4, this.D4,  this.F4,  this.A4 ]);
    this.B_major7   = new HealingHz.data.Chord("B major7",     [ this.B4,  this.Eb4, this.Gb4, this.Bb4]);
    
    this.C_minor   = new HealingHz.data.Chord("C minor",     [ this.C4,  this.Eb4, this.G4  ]);
    this.Db_minor  = new HealingHz.data.Chord("C#/Db minor", [ this.Db4, this.E4,  this.Ab4 ]);
    this.D_minor   = new HealingHz.data.Chord("D minor",     [ this.D4,  this.F4,  this.A4  ]);
    this.Eb_minor  = new HealingHz.data.Chord("D#/Eb minor", [ this.Eb4, this.Gb4, this.Bb4 ]);
    this.E_minor   = new HealingHz.data.Chord("E minor",     [ this.E4,  this.G4,  this.B4  ]);
    this.F_minor   = new HealingHz.data.Chord("F minor",     [ this.F4,  this.Ab4, this.C4  ]);
    this.Gb_minor  = new HealingHz.data.Chord("F#/Gb minor", [ this.Gb4, this.A4,  this.Db4 ]);
    this.G_minor   = new HealingHz.data.Chord("G minor",     [ this.G4,  this.Bb4, this.D4  ]);
    this.Ab_minor  = new HealingHz.data.Chord("G#/Ab minor", [ this.Ab4, this.B4,  this.Eb4 ]);
    this.A_minor   = new HealingHz.data.Chord("A minor",     [ this.A4,  this.C4,  this.E4  ]);
    this.Bb_minor  = new HealingHz.data.Chord("A#/Bb minor", [ this.Bb4, this.Db4, this.F4  ]);
    this.B_minor   = new HealingHz.data.Chord("B minor",     [ this.B4,  this.D4,  this.Gb4 ]);

    this.C_minor7  = new HealingHz.data.Chord("C minor7",     [ this.C4,  this.Eb4,   this.G4,   this.Bb4]);
    this.Db_minor7 = new HealingHz.data.Chord("C#/Db minor7", [ this.Db4, this.E4,    this.Ab4,  this.B4 ]);
    this.D_minor7  = new HealingHz.data.Chord("D minor7",     [ this.D4,  this.F4,    this.A4 ,  this.C4 ]);
    this.Eb_minor7 = new HealingHz.data.Chord("D#/Eb minor7", [ this.Eb4, this.Gb4,   this.Bb4,  this.Db4 ]);
    this.E_minor7  = new HealingHz.data.Chord("E minor7",     [ this.E4,  this.G4,    this.B4,   this.D4 ]);
    this.F_minor7  = new HealingHz.data.Chord("F minor7",     [ this.F4,  this.Ab4,   this.C4,   this.Eb4 ]);
    this.Gb_minor7 = new HealingHz.data.Chord("F#/Gb minor7", [ this.Gb4, this.A4,    this.Db4,  this.E4 ]);
    this.G_minor7  = new HealingHz.data.Chord("G minor7",     [ this.G4,  this.Bb4,   this.D4,   this.F4 ]);
    this.Ab_minor7 = new HealingHz.data.Chord("G#/Ab minor7", [ this.Ab4, this.B4,    this.Eb4,  this.Gb4]);
    this.A_minor7  = new HealingHz.data.Chord("A minor7",     [ this.A4,  this.C4,    this.E4,   this.G4 ]);
    this.Bb_minor7 = new HealingHz.data.Chord("A#/Bb minor7", [ this.Bb4, this.Db4,   this.F4,   this.Ab4]);
    this.B_minor7   = new HealingHz.data.Chord("B minor7",    [ this.B4,  this.D4,    this.Gb4,  this.A4 ]);

    this.C_chrom  = new HealingHz.data.Chord("C Chromatic scale",     [ this.C4,  this.Db4, this.D4,  this.Eb4, this.E4  ]);
    this.Db_chrom = new HealingHz.data.Chord("C#/Db Chromatic scale", [ this.Db4, this.D4,  this.Eb4, this.E4,  this.F4  ]);
    this.D_chrom  = new HealingHz.data.Chord("D Chromatic scale",     [ this.D4,  this.Eb4, this.E4,  this.F4,  this.Gb4 ]);
    this.Eb_chrom = new HealingHz.data.Chord("D#/Eb Chromatic scale", [ this.Eb4, this.E4,  this.F4,  this.Gb4, this.G4  ]);
    this.E_chrom  = new HealingHz.data.Chord("E Chromatic scale",     [ this.E4,  this.F4,  this.Gb4, this.G4,  this.Ab4 ]);
    this.F_chrom  = new HealingHz.data.Chord("F Chromatic scale",     [ this.F4,  this.Gb4, this.G4,  this.Ab4, this.A4  ]);
    this.Gb_chrom = new HealingHz.data.Chord("F#/Gb Chromatic scale", [ this.Gb4, this.G4,  this.Ab4, this.A4,  this.Bb4 ]);
    this.G_chrom  = new HealingHz.data.Chord("G Chromatic scale",     [ this.G4,  this.Ab4, this.A4,  this.Bb4, this.B4  ]);


    this.chords = [ this.C_major, this.Db_major, this.D_major, this.Eb_major, this.E_major, this.F_major, this.Gb_major, this.G_major, this.Ab_major, this.A_major, this.Bb_major, this.B_major,
                    this.C_major7, this.Db_major7, this.D_major7, this.Eb_major7, this.E_major7, this.F_major7, this.Gb_major7, this.G_major7, this.Ab_major7, this.A_major7, this.Bb_major7, this.B_major7, 
                    this.C_minor, this.Db_minor, this.D_minor, this.Eb_minor, this.E_minor, this.F_minor, this.Gb_minor, this.G_minor, this.Ab_minor, this.A_minor, this.Bb_minor, this.B_minor,
                    this.C_minor7, this.Db_minor7, this.D_minor7, this.Eb_minor7, this.E_minor7, this.F_minor7, this.Gb_minor7, this.G_minor7, this.Ab_minor7, this.A_minor7, this.Bb_minor7, this.B_minor7,
                    this.C_chrom, this.Db_chrom, this.D_chrom, this.Eb_chrom, this.E_chrom, this.F_chrom, this.Gb_chrom, this.G_chrom];
};

ns.ChordFactory.prototype.getChord = function(name) {

    if(name === undefined) {
        return this.chords[Math.floor(Math.random() * this.chords.length)];
    }

    for(i=0; i< this.chords.length; i++){
        if(name === this.chords[i]) {
            return this.chords[i];
        }
    }
    return undefined;
};