const host = "http://localhost:5000";
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;

export const addProduct = `${host}/api/product/new`;
export const listProduct = `${host}/api/product`;
export const deleteProduct = `${host}/api/product`;
export const getProduct = `${host}/api/product`;
export const updateProduct = `${host}/api/product/:id/update`;
//export const searchProduct = `${host}/api/product/search`;

export const listCategory = `${host}/api/category`;
export const addCategory = `${host}/api/category/new`;

// Order
export const newOrder = `${host}/api/order/new`;
