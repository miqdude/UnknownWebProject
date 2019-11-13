import {Vue, Component, Prop} from 'vue-property-decorator'

import UserColumn from "@/components/Contents/usercolumn";

@Component({
    components:{
        UserColumn
    }
})
export default class DefaultLayoutComponents extends Vue {
    justify:string = "center";
}