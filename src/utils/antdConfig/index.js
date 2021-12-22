import { Button } from 'ant-design-vue';

/**
 * @description: 本系统使用的是antd框架，统一配置
 * @url: 官方地址：https://www.antdv.com/docs/vue/getting-started-cn/
 */
export default {
  install (app) {
    app.use(Button);
  },
};
