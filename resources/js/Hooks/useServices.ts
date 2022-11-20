import {useQuery} from "react-query";
import axios from "axios";

export default function useServices(){
    return useQuery(['services'],()=>axios.get('/services').then(res=>res.data))
}
