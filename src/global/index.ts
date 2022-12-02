/**
 * @name: 全局插件
 * @author: itmobai
 * @date: 2022-11-24 17:40
 * @description：index
 * @update: 2022-11-24 17:40
 */
import { App } from "vue";
import store from "@/store";
import uviewMax from '@/uview-max'

export default (app: App) => {
  // 全局安装pinia
  app.use(store)
  // 安装uview-max
  app.use(uviewMax);
}
