import { Component, OnInit } from '@angular/core';
import {User} from "fusio-sdk/dist/src/generated/backend/User";
import {Action} from "fusio-sdk/dist/src/generated/backend/Action";
import {AxiosResponse} from "axios";
import {Message} from "fusio-sdk/dist/src/generated/backend/Message";
import {App} from "fusio-sdk/dist/src/generated/backend/App";
import {Modal} from "../../../modal";

@Component({
  selector: 'app-app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends Modal<App> {

  status = [{
    key: 1,
    value: 'Active'
  }, {
    key: 2,
    value: 'Pending'
  }, {
    key: 3,
    value: 'Deactivated'
  }];

  users?: Array<User>;

  override async ngOnInit(): Promise<void> {
    const user = await this.factory.getClient().backendUser();
    const response = await user.getBackendUser().backendActionUserGetAll({count: 1024});
    this.users = response.data.entry;
  }

  protected async create(entity: Action): Promise<AxiosResponse<Message>> {
    const group = await this.factory.getClient().backendApp();
    return await group.getBackendApp().backendActionAppCreate(entity);
  }

  protected async update(entity: Action): Promise<AxiosResponse<Message>> {
    const group = await this.factory.getClient().backendApp();
    return await group.getBackendAppByAppId('' + entity.id).backendActionAppUpdate(entity);
  }

  protected async delete(entity: Action): Promise<AxiosResponse<Message>> {
    const group = await this.factory.getClient().backendApp();
    return await group.getBackendAppByAppId('' + entity.id).backendActionAppDelete();
  }

  protected newEntity(): App {
    return {
      status: 1,
      name: '',
      url: '',
      scopes: []
    };
  }

}
