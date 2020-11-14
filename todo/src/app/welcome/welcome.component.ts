import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelecomeDataService, HelloWorldBean } from '../service/data/welecome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name: string;
  welcomeMessageFromService:string;
  constructor(private route: ActivatedRoute, private service: WelecomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage() {
   this.service.executeHelloWorldBeanService().subscribe(
     response =>this.handleSuccessResponse(response),
     error=>this.handleErrorResponse(error)
   );
  }
  handleSuccessResponse(response){
this.welcomeMessageFromService=response.message;
  }
  handleErrorResponse(error){
    this.welcomeMessageFromService=error.message;
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe(
      response =>this.handleSuccessResponse(response),
      error=>this.handleErrorResponse(error)
    );
   }
}
