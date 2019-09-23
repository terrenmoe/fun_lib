class ReplaceRepeats {
  constructor(...repeatRange) {
    [this.START = 2, this.END = 3] = repeatRange;
  }
  [Symbol.replace](string) {
    return [`(${string}){${this.START},${this.END}}}/${string}/`, 'g'];
  }
}

module.exports = ReplaceRepeats;
