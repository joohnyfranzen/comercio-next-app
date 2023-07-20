import { UserProduct } from "@/@types/UserProduct";

export default class ProductFilter {
  private readonly MonthsAgo1: Date;
  private readonly MonthsAgo2: Date;

  constructor(MonthsAgoOffset1: number, MonthsAgoOffset2: number) {
    const today = new Date();
    this.MonthsAgo1 = new Date(today);
    this.MonthsAgo1.setMonth(today.getMonth() - MonthsAgoOffset1);

    this.MonthsAgo2 = new Date(today);
    this.MonthsAgo2.setMonth(today.getMonth() - MonthsAgoOffset2);
  }

  filterBetweenMonthsAgo(userProducts: UserProduct[]): UserProduct[] {
    return userProducts.filter((userProduct) => {
      const createdAt = userProduct.createdAt
        ? new Date(userProduct.createdAt)
        : null;
      return (
        createdAt &&
        createdAt >= this.MonthsAgo1 &&
        createdAt <= this.MonthsAgo2
      );
    });
  }
}
