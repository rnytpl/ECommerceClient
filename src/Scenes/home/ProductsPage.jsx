import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../features/productsApiSlice";
import StyledLink from "../../Components/StyledLink";

const ProductsPage = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  console.log(data);

  if (isLoading) {
    return <p>is Loading...</p>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {data.map((element) => {
        return (
          <StyledLink
            to={`/products/${element.id}`}
            key={element.id}
            sx={{
              display: "block",
            }}
          >
            {element.name}
          </StyledLink>
        );
      })}
      <Link to={"products/new"}>New Product</Link>
    </div>
  );
};
export default ProductsPage;
