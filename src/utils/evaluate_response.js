export const evaluateResponse = (response) => {
  if (response.ok) {
      const data = response.json();
      return data;
  } else {
    const errorMessage = response.text();
    throw new Error(errorMessage);
  }
}