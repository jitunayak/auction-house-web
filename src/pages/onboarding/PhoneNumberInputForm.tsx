import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { InputPhone } from "@/components/ui/input-phone";
import { Label } from "@/components/ui/label";
import { useAuthSlice } from "@/hooks/useAuthSlice";
import { MessageCircleMoreIcon } from "lucide-react";

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
      subsribedToWhatsapp: e.currentTarget.subscribeToWhatsapp.checked,
    });
    nextStage();
  }
  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-96 p-2 border-none">
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
          </div>
          <div className="flex items-center space-x-2 pt-6">
            <Checkbox id="subscribeToWhatsapp" />
            <label
              htmlFor="subscribeToWhatsapp"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Update me on whatsapp
            </label>
            <MessageCircleMoreIcon className="h-5 w-5 text-green-600" />
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
