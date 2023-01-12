export interface VehiclePerson {
  details: string;
  ownerName: string;
  vehicle: string;
}

export interface Vehicle {
  id: number,
  brand: string,
  model: string,
  ownerId: number
}