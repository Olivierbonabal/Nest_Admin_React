import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Paginator from "../../components/Paginator";
import Wrapper from "../../components/Wrapper";
import { Product } from "../../models/product";
import { Buffer } from "buffer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (async () => {
      console.log(page);
      const { data } = await axios.get(`products?page=${page}`);

      setProducts(data.data);
      setLastPage(data.meta.last_page);
    })();
  }, [page]);

  const del = async (id: number) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      await axios.delete(`products/${id}`);

      setProducts(products.filter((p: Product) => p.id !== id));
    }
  };

  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link
          to="/products/create"
          className=" my-3 btn btn-sm btn-outline-primary"
        >
          Ajouter
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Titre</th>
              <th>Description</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p: Product) => {
              return (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>
                    <img src={ axios.defaults.baseURL + "products/" + p.id + "/image" } width="50" />
                  </td>
                  <td>{p.title}</td>
                  <td>{p.description}</td>
                  <td>{p.price}</td>
                  <td>

                    <div className="btn-group mr-2">
                      <Link to={`/products/${p.id}/edit`} className="btn btn-sm btn-outline-secondary">
                        Editer
                      </Link>

                      <a href="#" className="btn btn-sm btn-outline-danger" onClick={() => del(p.id)} >
                        Supprimer
                      </a>
                    </div>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Paginator page={page} lastPage={lastPage} pageChanged={setPage} />
    </Wrapper>
  );
};

export default Products;
