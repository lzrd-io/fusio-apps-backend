import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "fusio-sdk/dist/src/generated/backend/User";
import {App} from "fusio-sdk/dist/src/generated/backend/App";
import {Route} from "fusio-sdk/dist/src/generated/backend/Route";
import {LogCollectionQuery} from "fusio-sdk/dist/src/generated/backend/LogCollectionQuery";
import {BackendService} from "ngx-fusio-sdk";

@Component({
  selector: 'app-log-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  filter!: LogCollectionQuery;

  constructor(private backend: BackendService, public modal: NgbActiveModal) { }

  routes?: Array<Route>;
  apps?: Array<App>;
  users?: Array<User>;

  async ngOnInit(): Promise<void> {
    this.loadRoutes();
    this.loadApps();
    this.loadUsers();
  }

  async doSubmit() {
    this.modal.close(this.filter);
  }

  private async loadRoutes(): Promise<void> {
    const resource = await this.backend.getClient().getBackendRoutes();
    const response = await resource.backendActionRouteGetAll({count: 1024});
    this.routes = response.data.entry;
  }

  private async loadApps(): Promise<void> {
    const resource = await this.backend.getClient().getBackendApp();
    const response = await resource.backendActionAppGetAll({count: 1024});
    this.apps = response.data.entry;
  }

  private async loadUsers(): Promise<void> {
    const resource = await this.backend.getClient().getBackendUser();
    const response = await resource.backendActionUserGetAll({count: 1024});
    this.users = response.data.entry;
  }

}
