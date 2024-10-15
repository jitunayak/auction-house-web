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
import { CURRENCY_SYMBOL } from "@/types/enum";
import { Calendar, Clock, IndianRupee } from "lucide-react";

export default function Footer() {
  const featuredAuctions = [
    {
      id: "1",
      thumbnail:
        "https://www.financialexpress.com/wp-content/uploads/2024/05/Akshaya-Tritiya-Gold-Buying-2.jpg?w=440",
      title: "Gold jewellery",
      description: "Buy gold jewellery",
      bidPrice: "3,45,666",
    },
    {
      id: "2",
      thumbnail: "https://hartabina.bidnow.my/medias/92/20240313172833.jpeg",
      title: "Alora Residence",
      description: "Modern house apartments",
      bidPrice: "52,15,999",
    },
    {
      id: "3",
      thumbnail:
        "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/28B1/production/_88071401_dsc_0531.jpg",
      title: "Jaguar 2021 model",
      description: "Prepossed Jaguar S",
      bidPrice: "31,99,999",
    },
  ];

  return (
    <div className="min-h-screen bg-background mt-16">
      {/* Featured Auctions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Auctions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAuctions.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={`Auction Item ${item}`}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4" />
                    <span className="text-sm">Ends in 2 days</span>
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="mr-2 h-4 w-4" />
                    <span className="text-sm">
                      Current Bid: {CURRENCY_SYMBOL}
                      {item.bidPrice}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Place Bid</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((event) => (
              <Card key={event} className="flex flex-col">
                <CardHeader>
                  <CardTitle>Fine Art Auction</CardTitle>
                  <CardDescription>
                    Featuring works from renowned artists
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="text-sm">July 1{event}, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span className="text-sm">2:00 PM EST</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated on Exclusive Auctions
          </h2>
          <p className="mb-8">
            Subscribe to our newsletter and never miss an opportunity to bid on
            extraordinary items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-sm"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Auctions House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
