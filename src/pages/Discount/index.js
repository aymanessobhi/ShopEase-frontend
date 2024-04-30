import React, { useEffect, useMemo } from 'react'
import { useTranslation } from "react-i18next";
import { Card, CardBody, Container} from "reactstrap";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from "../../components/Common/TableContainer";
import EmptyDiscount from './EmptyDiscount';

const DiscountPage = () => {

    const { t } = useTranslation('translation');
    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('staffs'), link: "#" }
    ];
    const navigate = useNavigate();
    
    const discounts = []; 

    useEffect(() => {
        // Fetch discounts from dispatcher action
    }, []);

    const columns = useMemo(
        () => [],
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