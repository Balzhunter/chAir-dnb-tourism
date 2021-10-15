import { BASE_URL } from "../constants";
import { evaluateResponse } from "../utils/evaluate_response";

export const getAllPlaces = async () => {
  const response = await fetch(BASE_URL + "all");
  return evaluateResponse(response);
};
