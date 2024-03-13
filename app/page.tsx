import { CustomButton } from "./UI/customButtons";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <div>This is a test application using NextJS & material-tailwind component library</div>
      <div>{`It will also incorporate some interaction with AWS, all being well ;)`}</div>
      <CustomButton value={'some ludicrous value'}/>
     </main>
  )
}
