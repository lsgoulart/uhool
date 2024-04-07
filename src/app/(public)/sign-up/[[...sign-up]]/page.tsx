import { SignUp } from "@clerk/nextjs";
 
export default function SignUpPage() {
  return (
    <div className="min-h-screen w-screen grid place-items-center">
      <SignUp />
    </div>
  )
}