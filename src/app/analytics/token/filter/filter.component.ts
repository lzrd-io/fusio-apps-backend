import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "fusio-sdk/dist/src/generated/backend/User";
import {App} from "fusio-sdk/dist/src/generated/backend/App";
import {AppTokenCollectionQuery} from "fusio-sdk/dist/src/generated/backend/AppTokenCollectionQuery";
import {BackendService} from "ngx-fusio-sdk";

@Component({
  selector: 'app-token-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  filter!: AppTokenCollectionQuery;

  constructor(protected backend: BackendService, public modal: NgbActiveModal) { }

  apps?: Array<App>;
  users?: Array<User>;

  async ngOnInit(): Promise<void> {
    this.loadApps();
    this.loadUsers();
  }

  async doSubmit() {
    this.modal.close(this.filter);
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
