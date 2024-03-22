import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// pra definir el esquema de base de datos usamos el siguiente decorador
@Schema()
export class Pokemon extends Document {
  // mongo da el id para cada elemento, por eso no tongo que especificarlo
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  
  @Prop({
    unique: true,
    index: true,
})
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
