export function getColors(data) {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const colors = data.map(
    (_, index) => `rgb(${3 + index * 5}, ${40 + index * 12}, ${25 + index * 5})`
  );

  shuffleArray(colors);

  data.map((item, index) => (item.color = colors[index]));

  return data;
}
