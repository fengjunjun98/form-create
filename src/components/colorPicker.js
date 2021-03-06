import handlerFactory from "../factory/handler";
import renderFactory from "../factory/render";

const handler = handlerFactory({});

const render = renderFactory({
    parse(){
        return [this.cvm.colorPicker(this.inputProps().get())];
    }
});

export default {handler,render};
