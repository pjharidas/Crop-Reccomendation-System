import { Content } from "./Content";
import { EditInfo } from "./EditInfo";
import { Help } from "./Help";
import { Predict } from "./Predict";


function MainContent({selection}) {

    if (selection===0) {
        return(
            <Content />
        )
    }
    else if (selection===1) {
        return(
            <Predict/>
        )
    }
    else if (selection===2) {
        return(
            <EditInfo/>
        )
    }
    else{
        return(
            <Help/>
        )
    }
     
}

export default MainContent