import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session: any = await getServerSession(authOptions);

  if (!session?.accessToken) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const headers = {
    Authorization: `Bearer ${session.accessToken}`,
  };

  // 1. Get accounts
  const accountsRes = await fetch(
    "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
    { headers }
  );

  const accountsData = await accountsRes.json();
  const accountName = accountsData.accounts?.[0]?.name;

  if (!accountName) {
    return Response.json({ error: "No business account found" }, { status: 404 });
  }

  // 2. Get locations
  const locationsRes = await fetch(
    `https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations?readMask=name,title`,
    { headers }
  );

  const locationsData = await locationsRes.json();
  const locationName = locationsData.locations?.[0]?.name;

  if (!locationName) {
    return Response.json({ error: "No business location found" }, { status: 404 });
  }

  // 3. Get reviews
  const reviewsRes = await fetch(
    `https://mybusiness.googleapis.com/v4/${locationName}/reviews?pageSize=10`,
    { headers }
  );

  const reviewsData = await reviewsRes.json();

  return Response.json(reviewsData.reviews || []);
}
