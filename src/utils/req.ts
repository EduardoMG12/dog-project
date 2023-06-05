export interface IBreed {
  bred_for: string;
  breed_group: string;
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  life_span: string;
  name: string;
  reference_image_id: string;
  temperament: string;
  url:string
  weight: {
    imperial: string;
    metric: string;
  };
}

export interface IApiResponse {
  breeds: IBreed[];
  categories: any[]; // O tipo para "categories" não está especificado nos dados fornecidos
  id: string;
  url: string;
  width:number
  height:number
}

const fetchData = async (): Promise<IApiResponse[] | undefined> => {
  try {
    const response = await fetch(process.env.URL_TO_API, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.THE_DOG_API,
      },
      next: { revalidate: 8640 },
    });

    if (response.ok) {
      const data = await response.json();
      return data as IApiResponse[];
    } else {
      console.log("Request error", response.status);
      return undefined;
    }
  } catch (error) {
    console.log("Internal server error:", error);
    return undefined;
  }
};

export default fetchData;