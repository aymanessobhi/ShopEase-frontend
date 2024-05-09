import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Button, Card, Container, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from "../../components/Common/TableContainer";
import EmptyDiscount from './EmptyDiscount';
import { useDispatch, useSelector } from 'react-redux';
import { discountActions } from '../../sagas/discountSlice';

const DiscountPage = () => {
    const { t } = useTranslation('translation');
    const { isFetching, discounts } = useSelector(state => state.discount);
    const { discTypes } = useSelector(state => state.data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('discounts'), link: "#" }
    ];

    useEffect(() => {
        dispatch(discountActions.list());
    }, [dispatch]);

    const columns = useMemo(
        () => [
            {
                Header: t('discount.title'),
                accessor: discounts.some(discount => discount.discountCode) ? "discountCode" : "autoCode",
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
                accessor: "discountMethod",
                disableFilters: true,
                filterable: false,
            },
            {
                Header: t('discount.type'),
                accessor: "discountType",
                disableFilters: true,
                filterable: false,
            },
            // {
            //     Header: t('discount.combinations'),
            //     accessor: "combinations",
            //     disableFilters: true,
            //     filterable: false,
            // }
        ],
        [t]
    );

    const handleDiscountClick = (typeCode) => {
        navigate(`/base/discount/new/${typeCode}`);
        openModal();
    };

    return (
        <div className="page-content">
            <Container fluid>
                <Breadcrumbs title={t('discounts')} breadcrumbItems={breadcrumbItems} />

                <Card>
                    <CardBody>
                        {discounts.length > 0 ? (
                            <><TableContainer
                                columns={columns}
                                data={discounts}
                                isPagination={false}
                                isAddDiscountList={true}
                                customPageSizeOptions={true}
                                iscustomPageSize={false}
                                handleDiscountClick={toggleModal}
                                isBordered={false}
                                customPageSize={10} />
                                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                                    <ModalHeader toggle={toggleModal}>{t('discount.createDiscount')}</ModalHeader>
                                    <ModalBody>
                                        <div>
                                            {discTypes.map((type) => (
                                                <div key={type.code}>
                                                    <Card style={{ cursor: 'pointer', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '0.25rem' }} onClick={() => handleDiscountClick(type.code)}>
                                                        <CardBody>
                                                            <p>{type.description}</p>
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            ))}
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={closeModal}>{t('discount.cancel')}</Button>
                                    </ModalFooter>
                                </Modal></>
                        ) : (
                            <EmptyDiscount discTypes={discTypes} />
                        )}
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default DiscountPage;
