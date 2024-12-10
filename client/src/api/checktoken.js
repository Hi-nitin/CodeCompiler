import { getapi } from "./getpost";

const tokenchecker=async()=>{

    const tokendata= await getapi('http://localhost:7777/tokenchecker')
const result= await tokendata;
return result;


}


export default tokenchecker;
