async function fetchProfile() {
  const url = "/assets/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
