export function getColors(data) {
  data.map(
    (item, index) =>
      (item.color = `rgb(${3 + index * 5}, ${40 + index * 12}, ${
        25 + index * 5
      })`)
  );

  return data;
}
