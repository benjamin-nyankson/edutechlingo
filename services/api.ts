const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const translateLanguage = async ({
  endpoint,
  postdata,
}: {
  endpoint: string;
  postdata: any;
}) => {
  console.log("data", BASE_URL);
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postdata),
  });

  if (!response.ok) {
    //  @ts-ignore
    throw new Error("Failed to fetch movies", response.statusText);
  }

  const data = await response.json();
  console.log(data);
  return data.translation;
};

export const api = {
  translateLanguage,
};
