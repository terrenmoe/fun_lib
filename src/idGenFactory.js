function idGenFactory({ start = 0, stop = 4294967296, step = 1 } = {}) {
  return (function* idFactory() {
    while(start < stop) {
      yield start;
      start += step;
    }
  }());
}

exports.idGenFactory = idGenFactory;
// Used like:
//   const passedKeygen = idGeneratorFactory({start:1,stop:4,step:2});
//   passedKeygen.next().value // 1
//   passedKeygen.next().value // 3
//   passedKeygen.next().value // undefined
