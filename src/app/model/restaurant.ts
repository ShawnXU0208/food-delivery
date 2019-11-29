export class Restaurant {
  private restaurantName: string;
  private restaurantAddress: string;
  private restaurantOpen: string;
  private restaurantClose: string;
  private restaurantTypes: string[];
  private restaurantIntro: string;

  private restaurantId: number;

  constructor(
      name: string = '',
      address: string = '',
      open: string = '',
      close: string = '',
      types: string[] = [],
      intro: string = ''

  ) {
    this.restaurantName = name;
    this.restaurantAddress = address;
    this.restaurantOpen = open;
    this.restaurantClose = close;
    this.restaurantTypes = types;
    this.restaurantIntro = intro;

    localStorage.setItem("restaurants", '');

    const number = localStorage.getItem("restaurants").length;
    this.restaurantId = number + 1;
  }
}
