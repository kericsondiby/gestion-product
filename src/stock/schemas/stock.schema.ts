import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({
  timestamps: true,
})

export class Stock {
  @Prop()
  nom_stock: string;
  

  @Prop()
  description : string
}


export const StockSchema = SchemaFactory.createForClass(Stock)