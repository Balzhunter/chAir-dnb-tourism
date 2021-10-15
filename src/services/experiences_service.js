import { BASE_URL } from "../constants";
import { evaluateResponse } from "../utils/evaluate_response";

export const getAllExperiences = async () => {
  const response = await fetch(BASE_URL + "experiences");
  return evaluateResponse(response);
};
