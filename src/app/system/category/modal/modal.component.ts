import { Component, OnInit } from '@angular/core';
import {Category} from "fusio-sdk/dist/src/generated/backend/Category";
import {AxiosResponse} from "axios";
import {Message} from "fusio-sdk/dist/src/generated/backend/Message";
import {Modal} from "../../../modal";

@Component({
  selector: 'app-category-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends Modal<Category> {

  protected async create(entity: Category): Promise<AxiosResponse<Message>> {
    const group = await this.factory.getClient().backendCategory();
    return await group.getBackendCategory().backendActionCategoryCreate(entity);
  }

  protected async update(entity: Category): Promise<AxiosResponse<Message>> {
    const group = await this.factory.getClient().backendCategory();
    return await group.getBackendCategoryByCategoryId('' + entity.id).backendActionCategoryUpdate(entity);
  }

  protected async delete(entity: Category): Promise<AxiosResponse<Message>> {
    const group = await this.factory.getClient().backendCategory();
    return await group.getBackendCategoryByCategoryId('' + entity.id).backendActionCategoryDelete();
  }

  protected newEntity(): Category {
    return {
      name: '',
    };
  }

}
