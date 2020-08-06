import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  datas;
    
  ngOnInit(){
    this.http.get<Iadvice>('https://api.adviceslip.com/advice')
        .subscribe(data => {
            this.datas = data;
            this.datas = JSON.stringify(this.datas.slip.advice)
            console.log('advice here',this.datas)
        },
        error => console.log('there is an  error',error)
        )
  } 
  constructor(private http: HttpClient){}
}
interface Iadvice{
  id: number,
  advice: string;
}







            // let total = JSON.stringify(this.totalAngularPackages)
            // console.log(JSON.stringify(this.totalAngularPackages));
            // this.title = total;