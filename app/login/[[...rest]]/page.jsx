import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
    return <SignIn fallbackRedirectUrl="/landing" appearance={{
        elements: {
            card: "w-full max-w-2x1",
            rootBox: "w-full",
        },
    }}
    />;
}
