import {Tag} from './Tag';

export type Note = {
  'content':string,
  'color':string,
  'title':string,
  'id':number,
  'tags':Tag[]| null

}
