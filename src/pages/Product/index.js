import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Container, Table } from "reactstrap";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from "../../components/Common/TableContainer";
import { products, } from "../../common/data/ecommerce";
import { useNavigate } from "react-router-dom";

function ProductPage() {
    const { t } = useTranslation('translation');
    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('products'), link: "#" }
    ];
    const navigate = useNavigate();

    const columns = useMemo(
        () => [
          {
            Header: t('productCode'),
            accessor: "productCode",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('designation'),
            accessor: "designation",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('marque'),
            accessor: "marque",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('category'),
            accessor: "category",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('sku'),
            accessor: "sku",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('buyingPriceHT'),
            accessor: "buyingPriceHT",
            disableFilters: true,
            filterable: false,
          },
          {
            Header:  t('salePrice'),
            accessor: "salePrice",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('pphPrice'),
            accessor: "pphPrice",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('reduction'),
            accessor: "reduction",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('tva'),
            accessor: "tva",
            disableFilters: true,
            filterable: false,
          },
         
        ],
        []
      );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title={t('products')} breadcrumbItems={breadcrumbItems} />

                    <Card>
                        <CardBody>
                            <TableContainer
                                columns={columns || []}
                                data={products || []}
                                isPagination={false}
                                isAddProdList={true}
                                customPageSizeOptions={true}
                                iscustomPageSize={false}
                                handleProductClick={() => navigate("/base/product/new")}
                                isBordered={false}
                                customPageSize={10}
                            />
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ProductPage;
