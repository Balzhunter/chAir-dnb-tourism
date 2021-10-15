import { BASE_URL } from "../constants";
import { evaluateResponse } from "../utils/evaluate_response";

export const getAllAccommodations = async () => {
  const response = await fetch(BASE_URL + "accommodations");
  return evaluateResponse(response);
};
