export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  sentDate: Date | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
