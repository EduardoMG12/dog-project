export interface IBreed {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
}

export interface IBreedDinamic {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
}

export interface IBreedWithImagesDinamic {
  id: string;
  url: string;
  breeds: [
    {
      weight: {
        imperial: string;
        metric: string;
      };
      height: {
        imperial: string;
        metric: string;
      };
      id: 1;
      name: string;
      bred_for: string;
      breed_group: string;
      life_span: string;
      temperament: string;
      origin: string;
      reference_image_id: string;
    }
  ];
  width: number;
  height: number;
}

export interface IPropsFetchData {
  id?: string;
}

export const fetchBreeds = async (): Promise<IBreed[] | undefined> => {
  try {
    const response = await fetch(process.env.URL_TO_API + "v1/breeds/", {
      headers: {
        Content: "application/json",
        "x-api-key": process.env.THE_DOG_API,
      },
      next: { revalidate: 86400 },
    });

    if (response.ok) {
      const data = await response.json();
      return data as IBreed[];
    } else {
      console.log("Request error", response.status);
      return undefined;
    }
  } catch (error) {
    console.log("Internal server error:", error);
    return undefined;
  }
};

export async function fetchDinamicDogs(dinamicId: string) {
  return fetch(process.env.URL_TO_API + `v1/breeds/${dinamicId}`, {
    headers: {
      Content: "application/json",
      "x-api-key": process.env.THE_DOG_API,
    },
    next: { revalidate: 86400 },
  })
    .then(async (data: any) => {
      const { reference_image_id } = await data.json();
      if (reference_image_id) {
        const secondReq: any = await fetch(
          process.env.URL_TO_API + `v1/images/${reference_image_id}`,
          {
            headers: {
              Content: "application/json",
              "x-api-key": process.env.THE_DOG_API,
            },
            next: { revalidate: 86400 },
          }
        );
        return await secondReq.json();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
