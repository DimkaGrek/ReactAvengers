export function getColors(data) {
  // const colors = [
  //   '#054025',
  //   '#097b46',
  //   '#3ba171',
  //   '#4de69f',
  //   '#7ef1bb',
  //   '#b8e6d1',
  //   '#eaefec',
  //   '#bcc2bf',
  // ];

  const colors = [
    '#008000 ',
    '#32CD32',
    '#00FA9A',
    '#98FB98',
    '#228B22',
    '#2E8B57',
    '#3CB371',
    '#00FF7F',
    '#66CDAA',
    '#8FBC8F',
    '#2F4F4F',
    '#aabaaa',
    '#dbf0db',
    '#777f77',
    '#5a5e5a',
  ];

  data.map((item, index) => (item.color = colors[index]));

  return data;
}
