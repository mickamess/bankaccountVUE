export default function (date) {
  return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
}
