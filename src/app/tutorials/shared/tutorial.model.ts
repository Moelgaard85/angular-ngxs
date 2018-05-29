export class TutorialModel {
  name: string;
  url: string;
  _id: string;
  _rev?: string;
  _deleted?: boolean;
}

export class Tutorial extends TutorialModel {
  constructor(data?: TutorialModel) {
    super();
    Object.assign(this, data);
  }
}


