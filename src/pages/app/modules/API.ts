//import { Component } from "../../../general/components/components";
//import { Button } from "../../../general/components/ui";
import { ICar, IWinner } from "../../../general/interfaces";

export class API {
  private static URL = "http://localhost:3000";
  private static garage = `${API.URL}/garage`;
  private static winners = `${API.URL}/winners`;

  private static Methods = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE",
  };

  static getCars = async () => {
    const response = await fetch(`${API.garage}`);
    const cars: ICar[] = await response.json();
    const totalCount = cars.length;
    //const totalCount = response.headers.get(API.Headers.totalCount);

    return { cars, totalCount };
  };

  static getCar = async (id: number) => {
    const response = await fetch(`${API.garage}/${id}`);
    const car: ICar = await response.json();
    console.log(car);
    return car;
  };

  static getWinners = async () => {
    const response = await fetch(`${API.winners}`);
    const winners: IWinner[] = await response.json();
    const total: number = winners.length;
    return { winners, total };
  };

  static getWinner = async (id: number) => {
    const response = await fetch(`${API.winners}/${id}`);
    const winner: IWinner = await response.json();

    return { winner };
  };

  static createNewCar = async (car: ICar) => {
    const response = await fetch(`${API.garage}`, {
      method: API.Methods.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });
    const newCar: ICar = await response.json();

    return newCar;
  };

  static deleteCar = async (id: number) => {
    await fetch(`${API.garage}/${id}`, {
      method: API.Methods.DELETE,
    });
  };

  static deleteAllCars = async () => {
    const { cars } = await API.getCars();
    cars.forEach(async ({ id }) => await API.deleteCar(Number(id)));
  };
}
