import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title;
  totalAngularPackages;

  ngOnInit(){
    this.http.get<any>('	https://api.adviceslip.com/advice')
        .subscribe(data => {
            this.totalAngularPackages = data;
            let total = JSON.stringify(this.totalAngularPackages.slip.advice)
            // console.log(JSON.stringify(this.totalAngularPackages));
            this.title = total;
            console.log(total)

        },
        error => console.log('there is an error',error)
        )
  }
  constructor(private http: HttpClient){}
}


interface Iadvice{
  id: number,
  advice: string;
}