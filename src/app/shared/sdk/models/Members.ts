/* tslint:disable */

declare var Object: any;
export interface MembersInterface {
  "uid": string;
  "password": string;
  "name": string;
  "email": string;
  "mobile_phone": string;
  "phone"?: string;
  "address"?: string;
  "comments"?: string;
  "regist_date": Date;
  "id"?: number;
}

export class Members implements MembersInterface {
  "uid": string;
  "password": string;
  "name": string;
  "email": string;
  "mobile_phone": string;
  "phone": string;
  "address": string;
  "comments": string;
  "regist_date": Date;
  "id": number;
  constructor(data?: MembersInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Members`.
   */
  public static getModelName() {
    return "Members";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Members for dynamic purposes.
  **/
  public static factory(data: MembersInterface): Members{
    return new Members(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Members',
      plural: 'Members',
      path: 'Members',
      idName: 'id',
      properties: {
        "uid": {
          name: 'uid',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "mobile_phone": {
          name: 'mobile_phone',
          type: 'string'
        },
        "phone": {
          name: 'phone',
          type: 'string',
          default: 'null'
        },
        "address": {
          name: 'address',
          type: 'string',
          default: 'null'
        },
        "comments": {
          name: 'comments',
          type: 'string',
          default: 'null'
        },
        "regist_date": {
          name: 'regist_date',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
