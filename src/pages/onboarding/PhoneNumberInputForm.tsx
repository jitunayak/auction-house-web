import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthSlice } from "@/hooks/useAuthSlice";

export default function PhoneNumberInputForm() {
  const { nextStage, setUser, user } = useAuthSlice();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUser({ ...user, phoneNumber: e.currentTarget.phone.value });
    nextStage();
  }
  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your phone number to sign in.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 (555) 555-5555"
              pattern="^+?d{1,3}[- ]?(?d{3})?[- ]?d{3}[- ]?d{4}$"
              required
              className="p-6 text-lg"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
