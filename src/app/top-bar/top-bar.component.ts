import { OnInit, Component, Input} from "@angular/core";
import { EventEmitter } from "@angular/core/src/event_emitter";
import { Element } from "@angular/compiler";

//import { UserProfileService } from "../user/user-profile.service";
//import { UserProfile } from "../user/UserProfile";

@Component({
    selector: 'top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
})

export class TopBarComponent implements  OnInit{
   
    //profile: UserProfile;
    // constructor(private service: UserProfileService) {
    //     this.profile = {
    //         name: '',
    //         email: '',
    //         photoUrl: ''
    //     }
    // }

    @Input() isExpand: boolean = false;
    ngOnInit(): void {
        //this.service.getProfile().subscribe(p => this.profile = p);
    }
    onClick() {
        this.isExpand = !this.isExpand;
    }

    clickLink(event: any){
         console.log(event);
        // event.target.nextElementSibling.classList.add("active-link");
    }
}