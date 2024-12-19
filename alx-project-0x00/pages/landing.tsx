import Card from "@/components/Card"
import { Button }   from "@/components/Button";
const Landing: React.FC = () =>{
  return(
    <div>
       <h1 className=" text-xl font-extralight">Landing Page</h1>
       <Card />
      <Button title="Small button" styles="text-sm p-1 rounded-sm"/>
      <Button title="Medium button" styles="text-base p-2 rounded-md" />
      <Button title="Large button" styles="text-lg p-3 rounded-full" />
    </div>
  )
}
export default Landing;