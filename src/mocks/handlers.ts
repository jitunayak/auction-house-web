import { IAuction } from "@/types";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/user", () => {
    return HttpResponse.json({
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "H0Ji3@example.com",
      phoneNumber: "1234567890",
      countryCode: "IN",
      preferences: ["1", "2"],
      isAuthenticated: true,
      onboaringCompleted: true,
    });
  }),
  http.get("/api/auctions", () => {
    return HttpResponse.json([
      {
        id: "1",
        name: "Alora Residence",
        description: "Auction 1 description",
        image: "https://hartabina.bidnow.my/medias/92/20240313172833.jpeg",
        bidDate: "2022-01-01T00:00:00.000Z",
        endDate: "2022-01-01T00:00:00.000Z",
        currentPrice: 100,
        highestBid: 200,
        highestBidder: "John Doe",
        status: "Open",
        type: "Residential",
        location: "Chennai, India",
        createdDate: "2022-01-01T00:00:00.000Z",
        updatedDate: "2022-01-01T00:00:00.000Z",
      },
      ...Array.from({ length: 10 }).map((_, index) => ({
        id: `${index + 2}`,
        name: `Auction ${index + 2}`,
        description: `Auction ${index + 2} description`,
        image: `https://picsum.photos/${index + 2}00`,
        bidDate: "2022-01-01T00:00:00.000Z",
        endDate: "2022-01-01T00:00:00.000Z",
        currentPrice: 100 + index * 10,
        highestBid: 200 + index * 10,
        highestBidder: `John Doe ${index + 1}`,
        status: "Open",
        type: "Residential",
        location: `Location ${index + 1}`,
        createdDate: "2022-01-01T00:00:00.000Z",
        updatedDate: "2022-01-01T00:00:00.000Z",
      })),
    ] satisfies IAuction[]);
  }),
];
