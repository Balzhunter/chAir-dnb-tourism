import { BASE_URL } from "../constants";
import { evaluateResponse } from "../utils/evaluate_response";

export const getAllFeatured = async () => {
  const response = await fetch(BASE_URL + "featured");
  return evaluateResponse(response);
};
