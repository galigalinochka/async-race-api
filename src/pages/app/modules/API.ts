//import { Component } from "../../../general/components/components";
//import { Button } from "../../../general/components/ui";
import { ICar } from "../../../general/interfaces";

export class API {
  private static URL = "http://localhost:3000";
  private static garage = `${API.URL}/garage`;
  private static Methods = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE",
  };
  private static Headers = {
    totalCount: "X-Total-Count",
  };

  static getCars = async () => {
    const response = await fetch(`${API.garage}`);
    const cars: ICar[] = await response.json();
    const totalCount = response.headers.get(API.Headers.totalCount);

    return { cars, totalCount };
  };

  static getCar = async (id: number) => {
    const response = await fetch(`${API.garage}/${id}`);
    const car: ICar = await response.json();

    return car;
  };
}
