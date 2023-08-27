import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";

import "../css/font-awesome-v5.css";
import "../css/line-icons-pro.css";
import "../css/index.css";
import "../css/AnimatedLogo.css";
import "../css/signup.css";
import "../css/app.css";

createInertiaApp({
  resolve: (name) => {
    return require(`./Pages/${name}`);
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
