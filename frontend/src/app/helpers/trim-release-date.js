export function trimReleaseDate(relDate) {
  return relDate ? relDate.split('-')[0] : '';
}
