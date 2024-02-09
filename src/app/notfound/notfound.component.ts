import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  @Input() visible:boolean=false;
  @Input() notfoundmessage:string="not found!";
  @Input() resetlinktest:string='Reset';
  @Input() resetLinkRoute:string='/';

}
