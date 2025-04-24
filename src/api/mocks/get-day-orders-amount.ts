import { http, HttpResponse } from "msw";
import { GetdayOrdersAmountResponse } from "../get-day-orders-amout";

export const getDayOrdersAmountMock = http.get<never, never, GetdayOrdersAmountResponse>('/metricsy/day-orders-amount', () => {
    return HttpResponse.json({
        amount: 20,
        diffFromYesterday: -5
    })
})