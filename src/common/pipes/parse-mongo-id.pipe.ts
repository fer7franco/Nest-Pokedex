import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

// recuerda que los pipes se crean en el modulo de common y se crea desde nestcli
// los pipes nos transforman la data que llega a nuestro controlador
@Injectable()
export class ParseMongoIdPipe implements PipeTransform {


transform(value: string, metadata: ArgumentMetadata) {
    // console.log({ value, metadata });

// lo que se preende evaluar con el isvalidobjectId es si el value que llega como string en transform sea u ID
    if ( !isValidObjectId(value) ) {
throw new BadRequestException(`${ value } is not a valid MongoID`);
    }

    return value;
}


}