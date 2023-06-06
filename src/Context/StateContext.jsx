import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [productLists, setProductList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: productLists });
    const filterProduct = productLists.filter(item => item.title.toLowerCase().includes(search));
    dispatch({type: "GET_PRODUCTS", payload: filterProduct})
  }, [productLists,search]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProductList(data);
  };

  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch ,search ,setSearch };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextSelf = () => {
  return useContext(StateContext);
};
