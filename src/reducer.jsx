export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const existingItem = state.basket.find((item) => item.id === action.item.id);
      if (existingItem) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      if (index >= 0) {
        let newBasket = [...state.basket];
        newBasket.splice(index, 1);
        return {
          ...state,
          basket: newBasket,
        };
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket!`);
        return state;
      }

    case "INCREASE_QUANTITY":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
