/** Turns a title into a URL slug. */
export function slugify(title: string): string {
  return title.toLowerCase().replace(/ /g, "-");
}
