export default async function usePokeLocation(url, lang) {
   const res = await fetch(url);
   const data = await res.json();
   const selected = data.names
      .filter((el) => el.language.name == lang)
      .map((option) => option.name)
      .toString();

   return selected;
}
