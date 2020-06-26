export const getCartList = async () => {
  let local = await localStorage.getItem("cart");
  let arr = local ? await JSON.parse(local) : [];
  return await arr
};
export const addToCart = async (item: any) => {
  let local = await localStorage.getItem("cart");
  let arr = local ? await JSON.parse(local) : [];
  arr = await [...arr,item];
  await localStorage.setItem("cart", JSON.stringify(arr));
  return await arr;
};

export const deleteCart = async (id:any) => {
  let local = await localStorage.getItem("cart");
  let arr = local ? await JSON.parse(local) : [];
  let newArr = await arr.filter((item:any) => item.id !== id)
  await localStorage.setItem("cart", JSON.stringify(newArr));
  return await newArr
}
