import { Component } from '@angular/core';
import { DatasharingService } from './datasharing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public persondata : any;
  activitydates: any;
   constructor(private myservice: DatasharingService) {}
   ngOnInit() {
      this.myservice.getData().subscribe((data:any) => {
        this.persondata = data.members;
        console.log(this.persondata)
      });
   }

   myFunction(item){
     this.activitydates = item.activity_periods
     console.log(item)
   }

}
