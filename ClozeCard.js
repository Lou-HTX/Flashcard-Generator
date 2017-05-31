function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.fullText =  text;
    // this.partial = 
}

ClozeCard.prototype.partial = function() {
    const position = this.fullText.indexOf(this.cloze);
    if (position < 0) {
        return;
    }
    return this.fullText.replace(this.cloze, "...");
};

module.exports = ClozeCard;
