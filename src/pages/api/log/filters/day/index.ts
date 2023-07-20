import { UserProduct } from "@/@types/UserProduct";

export default class DayProductFilter {
  private readonly dayOffset1: number;
  private readonly dayOffset2: number;

  constructor(dayOffset1: number, dayOffset2: number) {
    this.dayOffset1 = dayOffset1;
    this.dayOffset2 = dayOffset2;
  }

  filterBetweenDaysAgo(userProducts: UserProduct[]): UserProduct[] {
    const dayAgo1 = this.calculateDaysAgoDate(this.dayOffset1);
    const dayAgo2 = this.calculateDaysAgoDate(this.dayOffset2);

    return userProducts.filter((userProduct) => {
      const createdAt = userProduct.createdAt
        ? new Date(userProduct.createdAt)
        : null;
      return createdAt && createdAt >= dayAgo1 && createdAt <= dayAgo2;
    });
  }

  private calculateDaysAgoDate(dayOffset: number): Date {
    const today = new Date();
    const daysAgoDate = new Date(today);
    daysAgoDate.setDate(today.getDate() - dayOffset);

    return daysAgoDate;
  }
}
