import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  memberData;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.memberData()
      .subscribe(memberDataRes => {
        this.memberData = memberDataRes;

      })
  }

}
