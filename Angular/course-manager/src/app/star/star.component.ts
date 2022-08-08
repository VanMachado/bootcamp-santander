import { Component, Input, OnChanges } from "@angular/core";

//Essa parte passa algumas especificacoes para identificar esse elemento como parte dos "component" ao longo
//do HTML
@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
}) 

export class StarComponent implements OnChanges {
    @Input()
    rating: number = 0;

    starWidth: number= 0;
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 74/5;
    }
}