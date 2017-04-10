var ns = HealingHz.createNS("HealingHz.data");

ns.Note = function(fileName, displayName, index) {
    this.fileName = fileName;
    this.index = index;
    this.displayName = displayName;
};