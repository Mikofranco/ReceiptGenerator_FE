export const ROUTES = {
  login: () => "/api/auth/login",
  register: () => "/api/auth/register",

  receipt: ()=> "/api/v1/receipt",
  getReceipts: (userId: string)=> `/api/receipt/${userId}`,
  getSingleReceipt: (receiptId: string)=> `/api/v1/receipt/${receiptId}`,
  editReceipt: (receiptId: string)=> `/api/v1/receipt/${receiptId}`,


};
