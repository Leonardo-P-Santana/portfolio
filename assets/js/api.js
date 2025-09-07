async function fetchProfile() {
  const url =
    "https://raw.githubusercontent.com/Leonardo-P-Santana/portfolio/refs/heads/main/assets/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
