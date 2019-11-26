import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'extension' })

export class RemoveExtension implements PipeTransform {


    //   transform(item) {
    //     return item.substring(0, item.indexOf('.'))
    //   }

    transform(name) {
        console.log("jdcgch")
        console.log(name)
        return name.substring(0, name.indexOf('.'))
    }

}