export async function getActivityForMultipleUsers() {
  const response = await fetch(
    `https://www.boredapi.com/api/activity?participants=${Math.floor(
      Math.random() * 4 + 2,
    )}`,
  );
  const data = await response.json();
  return data;
}

export async function getActivityForSingleUser() {
  const response = await fetch(
    "https://www.boredapi.com/api/activity?participants=1",
  );
  const data = await response.json();
  return data;
}
