export class Tour{
  id:number;
  name:string;
  image:string;
  description:string;
  price:number;
  status:number;
  dayStart:Date;
  dayEnd:Date;
  avgPoint:number;


  constructor(id: number, name: string, image: string, description: string, price: number, status: number, dayStart: Date, dayEnd: Date, avgPoint: number) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.status = status;
    this.dayStart = dayStart;
    this.dayEnd = dayEnd;
    this.avgPoint = avgPoint;
  }
}



