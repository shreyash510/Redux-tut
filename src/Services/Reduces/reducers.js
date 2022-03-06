const initialState = {
  cartData: []
}
export default function cardItems(initialState, action) {
  switch (action.type) {
    case ADD_TO_CARD:
      return {
        ...StaticRange,
        cartData: action.data
      }
      break;
    default:
      return state
  }
}