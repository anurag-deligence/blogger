import { Component, OnInit, Input } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  data: any;
  imageStr: any;
  constructor(private dataservice: DataTransferService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    var d = this.dataservice.getUserData();
    console.log("d", d);
    if (d === null)
      this.data = d;
    else {
      this.data = d;
      if (this.data.image)
        this.imageStr = this.sanitizer.bypassSecurityTrustUrl("../../../assets/" + d.image);
      else
        this.imageStr = this.sanitizer.bypassSecurityTrustUrl("../../../assets/default.png");
    }
  }

}
