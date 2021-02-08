export default function getRandomColor() {
  const num = function () {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${num()},${num()},${num()})`;
}
