import "../registro.css";
import { SignUp } from "@clerk/nextjs";

export default function LoginPage() {
  return (
  <SignUp 
  appearance={{
    elements:{
    card: "w-full max-w-2x1",
    rootBox: "w-full",
    },
  }}
  />
  )
}