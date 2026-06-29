export const Routes = {
  dashboard: () => "/dashboard",
  analytics: () => "/dashboard/analytics",
  profile: (userId:string) => `/dashboard/profile/${userId}`,
  createReceipt: ()=> "/dashboard/receipt/create",
  previewReceipt: (receiptId: string)=> `/dashboard/receipt/preview/${receiptId}`,

  // Authentication
  login: () => "/auth/login",
  register: () => "/auth/register",
  forgotPassword: () => "/auth/forgotPassword",
};
