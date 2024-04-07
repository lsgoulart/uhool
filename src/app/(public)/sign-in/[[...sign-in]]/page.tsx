import { SignIn } from "@clerk/nextjs";
 
export default function SignInPage() {
  return (
    <div className="min-h-screen w-screen grid place-items-center">
      <SignIn />
    </div>
  )
}