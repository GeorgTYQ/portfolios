export function formateDate(timestamp) {
  const date = new Date(timestamp);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}
