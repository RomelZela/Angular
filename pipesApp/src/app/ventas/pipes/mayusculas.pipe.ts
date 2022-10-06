import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ //Eso es el nombre que se le asigna al pipe para utilizarlo posteriormente.
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform{

    transform(value: string, enMayuscula: boolean = true) {
        return enMayuscula ? value.toUpperCase() : value.toLowerCase()
    }

}
