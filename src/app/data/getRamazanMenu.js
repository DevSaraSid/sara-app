const fetchData = async () => {
  try {
    // Make a GET request using the Fetch API
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRr_pvtmF5j5_UArTWf3EhA3Epn59SbumVvenGqjlAouDWQFTwslH0UbuzrOrhpzj0FSaedLKnd5Git/pub?gid=1731691932&single=true&output=csv"
    );

    if (!response.ok) {
      throw new Error("Network request failed");
    }

    // Parse the response in plain text
    const result = await response.text();
  } catch (error) {
    // Handle errors
    setError(error.message);
  } finally {
    // Set loading state to false, regardless of success or failure
    setIsLoading(false);
  }
};
