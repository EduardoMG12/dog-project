import { IBreed, IPropsFetchData } from "./req";

export interface IBreedDinamic{
	weight: {
		imperial: string,
		metric: string,
	},
	height: {
		imperial: string,
		metric: string,
	},
	id: number,
	name: string,
	bred_for: string,
	breed_group: string,
	life_span: string,
	temperament: string,
	origin: string,
	reference_image_id: string,
}

export interface IBreedWithImagesDinamic{
	id: string,
	url: string,
	breeds: [
		{
			weight: {
				imperial: string,
				metric: string
			},
			height: {
				imperial: string,
				metric: string
			},
			id: 1,
			name: string,
			bred_for: string,
			breed_group: string,
			life_span: string,
			temperament: string,
			origin: string,
			reference_image_id: string,
		}
	],
	width: number,
	height: number,
}



const fetchData = async ({pathApi}:IPropsFetchData): Promise<IBreedDinamic | IBreedWithImagesDinamic | undefined> => {
    try {
      const response = await fetch(process.env.URL_TO_API + pathApi, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.THE_DOG_API,
        },
        next: { revalidate: 86400 },
      });
  
      if (response.ok) {
        const data = await response.json();
        return data as IBreed;
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
  


