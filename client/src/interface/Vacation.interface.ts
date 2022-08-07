export interface IVacation {
  vacation_id?: number | string;
  title: string;
  description: string;
  destination: string;
  imgUrl: string;
  checkInDate: string;
  checkOutDate: string;
  price: number;
  numberOfFollowers?: string;
}


export interface IDeleteVacationResponse {
  vacation_id: number | string;
  success: boolean;
}
