import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useDeleteProductMutation,
} from "../features/productsApiSlice";
import { useEffect } from "react";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isSuccess, error } = useGetProductByIdQuery(id);
  const [deleteProduct, { isSuccess: deleteSuccess }] =
    useDeleteProductMutation();

  useEffect(() => {
    deleteSuccess && navigate("/");
  }, [deleteSuccess, navigate]);

  if (error) {
    return <h1>{error}</h1>;
  }

  const deleteHandler = async () => {
    await deleteProduct(id);
  };

  return (
    <>
      {isSuccess && <div>{data.name}</div>}
      <Link to="edit">Edit</Link>
      <button type="button" onClick={deleteHandler}>
        Delete
      </button>
      <br></br>
      <Link to="/">Home</Link>
    </>
  );
};
export default SingleProductPage;
