import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {
      collection: 'note'
    },
    strictObjectIDCoercion: true,
  }
})
export class Note extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: {
      dataType: 'ObjectId',
    },
  })
  id: string;

  @property({
    type: 'string',
    required: true,
    mongodb: {
      fieldName: 'title',
    },
    index: {
      unique: true,
    },
  })
  title: string;

  @property({
    type: 'string',
    mongodb: {
      fieldName: 'content',
    }
  })
  content?: string;


  constructor(data?: Partial<Note>) {
    super(data);
  }
}

export interface NoteRelations {
  // describe navigational properties here
}

export type NoteWithRelations = Note & NoteRelations;
