const source = [];
const brands = [4, 80, 57, 82, 95, 44, 45, 106, 74, 72, 73, 62, 6, 7, 1, 110, 114];
const res = source.filter(man => man.released > 2012 && brands.includes(Number(man.brandId))).map(man => ({ ...man, brandId: Number(man.brandId) }));

console.log(JSON.stringify(res));
