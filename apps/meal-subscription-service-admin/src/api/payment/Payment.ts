export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  paymentDate: Date | null;
  paymentMethod?: "Option1" | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
