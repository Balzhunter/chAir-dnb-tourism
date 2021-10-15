import { BASE_URL } from "../constants";
import { validateResponse } from "../utils/validate_response";

export const getAllPlaces = async () => {
  const response = await fetch(BASE_URL + "all");
  validateResponse(response);
};
