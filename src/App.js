
import NavScrollExample from "./components/converter/index.js";
import TextControlsExample from "./components/converter/form.js"; 
// import { useState } from "react";
import Banner from "./components/converter/Alert.js";
import { useState } from "react";

// import { Button } from "bootstrap";


function App() {
    const [alert , setAlert]=useState(null)

    const showAlert=(message , type)=>{(
        setAlert({

            msg:message,
            type:type
          
        })
        )
        setTimeout(() => {
            setAlert(null)
        },1500);
    }

    const [mode , setMode]=useState("light")

    let toggleMode=()=>{
        if(mode==="light"){

            
            
            setMode("dark")
            document.body.style.backgroundColor="#103365"
            showAlert("darkmood enable" , "success")
        }
        else{
            setMode("light")
            document.body.style.backgroundColor="white"
            showAlert("lightmood enable" , "success")


        }
    }
    return(
        
        <div>

        <NavScrollExample mode={mode} toggleMode={toggleMode}/> 
        <Banner alert={alert}/> 
        <TextControlsExample heading="Write the text here." mode={mode} showAlert={showAlert}/>
        
        </div>
    )
}

export default App;
