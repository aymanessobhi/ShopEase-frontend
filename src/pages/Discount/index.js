import React, { useEffect, useMemo } from 'react'
import { useTranslation } from "react-i18next";
import { Card, CardBody, Container} from "reactstrap";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from "../../components/Common/TableContainer";
import EmptyDiscount from './EmptyDiscount';
import { useDispatch, useSelector } from 'react-redux';
import { discountActions } from '../../sagas/discountSlice';

const DiscountPage = () => {

    const { t } = useTranslation('translation');
    const {isFetching,  discounts } = useSelector(state => state.discount);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('discounts'), link: "#" }
    ];
    
    useEffect(() => {
        dispatch(discountActions.list());
        console.log(discountActions.list());
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: t('discount.title'),
                accessor: "code",
                disableFilters: true,
                filterable: false,
            },
            {
                Header: t('discount.status'),
                accessor: "status",
                disableFilters: true,
                filterable: false,
            },
            {
                Header: t('discount.method'),
                accessor: "method",
                disableFilters: true,
                filterable: false,
            },
            {
                Header: t('discount.type'),
                accessor: "type",
                disableFilters: true,
                filterable: false,
            },
            {
                Header: t('discount.combinations'),
                accessor: "combinations",
                disableFilters: true,
                filterable: false,
            }
 
        ],
        []
      );

    return (
        <div className="page-content">
        <Container fluid>
            <Breadcrumbs title={t('discounts')} breadcrumbItems={breadcrumbItems} />

            <Card>
                <CardBody>
                    {discounts.length > 0 ? (
                            <TableContainer
                                columns={columns || []}
                                data={discounts || []}
                                isPagination={false}
                                isAddDiscountList={true}
                                customPageSizeOptions={true}
                                iscustomPageSize={false}
                                handleDiscountClick={() => navigate("/base/discount/new")}
                                isBordered={false}
                                customPageSize={10}
                            />
                        ) : (
                            <EmptyDiscount />
                        )}
                </CardBody>
            </Card>
        </Container>
    </div>
    )
}

export default DiscountPage