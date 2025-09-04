async function fetchProfile() {
  const url =
    "https://raw.githubusercontent.com/Leonardo-P-Santana/portfolio/6133e65922046e7cdf1551dcfdefa32792f7ad7f/assets/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
