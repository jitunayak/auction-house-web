import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Your name must be 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Your company name must be 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.number().min(10, {
    message: "Your phone must be at least 10 characters.",
  }),
  purpose: z.string().min(10, {
    message: "Your purpose must be at least 10 characters.",
  }),
});

export const DemoRequest = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: 0,
      purpose: "",
    },
  });

  return (
    <div className="flex items-center justify-center p-2 w-full min-w-44">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) =>
            console.log("Form submitted:", data)
          )}
          className="space-y-6"
        >
          <div className="font-semibold">Demo request form</div>
          <legend className="sr-only">Client's information</legend>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" size={"sm"}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
