import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputPhone } from "@/components/ui/input-phone";
import { Label } from "@/components/ui/label";
import { useAuthSlice } from "@/hooks/useAuthSlice";

export default function PhoneNumberInputForm() {
  const { nextStage, setUser, user } = useAuthSlice();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Set the user's phone number in the state.
    // Trim any leading or trailing whitespace from the input.
    // Remove any non-digit characters from the input.
    setUser({
      ...user,
      phoneNumber: e.currentTarget.phone.value.trim().replace(/\D/g, ""),
    });
    nextStage();
  }
  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-96  p-2">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your phone number to sign in.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <InputPhone
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Enter a phone number"
              defaultCountry="IN"
            />
            {/* <Input
              id="phone"
              type="tel"
              placeholder="+91 (555) 555-5555"
              pattern="^+?d{1,3}[- ]?(?d{3})?[- ]?d{3}[- ]?d{4}$"
              required
              className="p-6 text-lg"
            /> */}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            Send OTP
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
