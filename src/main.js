import { createApp } from "vue"
import store from "./store/index.js"
import router from "./router.js"
import App from "./App.vue"

import BaseCard from "./components/UI/BaseCard.vue"
import BaseButton from "./components/UI/BaseButton.vue"
import BaseDialog from "./components/UI/BaseDialog.vue"

const app = createApp(App)

app.use(router)
app.use(store)

app.component("base-card", BaseCard)
app.component("base-button", BaseButton)
app.component("base-dialog", BaseDialog)

app.mount("#app")
