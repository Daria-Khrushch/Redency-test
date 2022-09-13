function loadGrain(levels) {
  const result = {
    grainAmount: 0,
    maxHeight: 0,
  };

  if (levels.length < 3) return result.grainAmount;

  const highestPoint = Math.max(...levels);
  const highestPointIdx = levels.indexOf(highestPoint);

  function getGrainAmount(i) {
    const currentHeight = levels.at(i);

    if (result.maxHeight < currentHeight) result.maxHeight = currentHeight;

    result.grainAmount += result.maxHeight - currentHeight;
  }

  for (let i = 0; i < highestPointIdx; i += 1) {
    getGrainAmount(i);
  }
result.maxHeight = 0;
  for (let i = levels.length - 1; i > highestPointIdx; i -= 1) {
    getGrainAmount(i);
  }

    return result.grainAmount;
}


console.log(loadGrain([4, 1, 3]));
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]) );
console.log(loadGrain([2, 0, 1, 5, 2, 7]));
console.log(loadGrain([2, 4, 2]));
console.log(loadGrain([7, 4]));
console.log(loadGrain([]));





