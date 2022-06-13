import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onRelodServers() {
    this.router.navigate(['/servers'], {relativeTo: this.activeRoute});
    console.log("Active route: "+ this.activeRoute.component?.toString());
  }

}
