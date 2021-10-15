import { BASE_URL } from "../constants";
import { validateResponse } from "../utils/validate_response";

export const getAllAdventures = async () => {
  const response = await fetch(BASE_URL + "adventures");
  return validateResponse(response);
};
