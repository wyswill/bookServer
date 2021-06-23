/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-10 13:50:51
 * @LastEditTime: 2021-06-10 13:50:51
 */
import _ from 'lodash';
import { v5 as uid } from 'uuid';
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
export function genUUID(name: string): string {
  return uid(name, MY_NAMESPACE);
}
