import { redirect } from "next/navigation";

export default function page() {

    const flag =true;
    if(flag){
        redirect('/product')
    }
  return (
    <div>
      Hello Server Componant
    </div>
  )
}
    