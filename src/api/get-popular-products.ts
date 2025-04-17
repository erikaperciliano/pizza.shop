import { api } from "@/lib/axios";
import { GetDailyRevenueInPeriodResponse } from "./get-daily-revenue-in-period";

export type GetPopularProductsResponse = {
    product: string
    amount: number
}[]

export async function getGetPopularProducts() {
    const response = await api.get<GetDailyRevenueInPeriodResponse>('/metrics/popular-products')

    return response.data
}