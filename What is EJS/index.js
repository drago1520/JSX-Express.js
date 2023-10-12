import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port_1 = 3000;


function display_day (){
    const d = new Date();
    let day = d.getDay();
    let  display = new Object();
    display = {option_1: ""};
    if (day < 6 && day !=0){
        display.option_1 = "Son, you got yourself a great day to change lives.";
    }
    else{
        display.option_1 = "Look at the Friday paycheck...Unadulterated freedom.";
    }
    return display;
}

app.listen(port_1, ()=>{
  console.log(`Listening to server port: ${port_1}`);
})
//# тук трябва да пратя
app.get("", (req, res)=>{
  res.render("index.ejs", display_day());
})

