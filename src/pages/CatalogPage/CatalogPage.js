import React, { useState, useEffect } from 'react';

import styles from './CatalogPage.module.css';

import Container from '../../components/Container/Container';
import Filter from '../../components/Filter/Filter';
import HeaderBig from '../../components/Header/HeaderBig';
import Loading from '../../components/Loading/Loading';
import ProductsList from '../../components/ProductsList/ProductsList';

import ProductService from '../../services/ProductService';

const CatalogPage = ({ products, pending, error }) => {
  const [filterValues, setFilterValues] = useState({
    text: '',
    manufacture: 'All',
  });
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filteredProducts = ProductService.getProductsByFilter(products, {
      name: filterValues.text,
      manufacture: filterValues.manufacture === 'All' ? null : filterValues.manufacture,
    });
    setFiltered(filteredProducts);
  }, [filterValues, products]);

  const handleInputChange = (values) => setFilterValues(values);

  const manufacturers = ProductService.getManufacturers(products);

  return (
    <Container>
      {error ? (
        <h1>ERROR</h1>
      ) : (
        <>
          <HeaderBig>Catalog</HeaderBig>
          {pending ? (
            <Loading />
          ) : (
            <div className={styles.Catalog}>
              <div className={styles.ColumnLeft}>
                <Filter
                  manufacturers={manufacturers}
                  onChange={handleInputChange}
                  filterValues={filterValues}
                />
              </div>
              <div className={styles.ColumnRight}>
                <ProductsList products={filtered} />
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default CatalogPage;
