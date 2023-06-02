interface Breed {
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
  weight: {
    imperial: string;
    metric: string;
  };
}

export interface ApiResponse {
  breeds: Breed[];
  categories: any[]; // O tipo para "categories" não está especificado nos dados fornecidos
  id: string;
  url: string;
}

const fetchData = async ():Promise<ApiResponse | void> => {
    try {
      const response = await fetch(process.env.URL_TO_API, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.THE_DOG_API,
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        return data as ApiResponse
      } else {
        console.log("Erro na requisição:", response.status);
      }
    } catch (error) {
      console.log("Erro ao fazer a requisição:", error);
    }
  };

export default fetchData;