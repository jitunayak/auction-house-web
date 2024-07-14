export interface IAuction {
  id: string;
  name: string;
  description: string;
  image: string;
  bidDate: string;
  endDate: string;
  currentPrice: number;
  highestBid: number;
  highestBidder: string;
  status: string;
  type: string;
  location: string;
  createdDate: string;
  updatedDate: string;
}
