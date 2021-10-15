import { BASE_URL } from "../constants";
import { evaluateResponse } from "../utils/evaluate_response";

export const getAllAdventures = async () => {
  const response = await fetch(BASE_URL + "adventures");
  return evaluateResponse(response);
};
