import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Button, Card, Container, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
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
    const [record, setRecord] = useState({ open: false, data: null });
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
                accessor: "", 
                disableFilters: true,
                filterable: false,
                Cell: ({ row }) => {
                    const autoCode = row.original.autoCode;
                    const discountCode = row.original.discountCode;
            
                    return (
                        <span>
                            {autoCode !== '' ? autoCode : discountCode}
                        </span>
                    );
                }
            },
            {
                Header: t('discount.status'),
                accessor: "status",
                disableFilters: true,
                filterable: false,
                Cell: ({ row }) => {
                    const endDate = new Date(row.original.endDate);
                    const currentDate = new Date();
                    const isExpired = endDate < currentDate;
                    
                    return (
                        <span className={`badge ${isExpired ? 'bg-danger' : 'bg-success'}`}>
                            {isExpired ? t('discount.expired') : t('discount.active')}
                        </span>
                    );
                }
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
                Cell: ({ row }) => {
                    const discountType = row.original.discountType;
            
                    let content;
                    switch (discountType) {
                        case "OFF_PRODUCT":
                            content = "Amount off Product";
                            break;
                        case "BUYGET":
                            content = "Buy X get Y";
                            break;
                        case "AMOUNT_OFF":
                            content = "Amount off order";
                            break;
                        case "FREE_SHIP":
                            content = "Free shipping";
                            break;
                        default:
                            content = "";
                    }
            
                    return <span>{content}</span>;
                }
            },
            {
                Header: t('action'),
                accessor: (cellProps) => {
                    return (
                        <React.Fragment>
                            <Link to={`/base/discount/edit/${cellProps.discountType}/:id`.replace(":id", cellProps.id)}  className="me-3 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
                            <Link onClick={() => handleDelete(cellProps)} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        </React.Fragment>
                    )
                },
                disableFilters: true,
                filterable: false,
            },
        ],
        [t]
    );

    const handleDelete = (cellProps) => {
        setRecord({ open: true, data: cellProps })
    }

    const confirmDelete = () => {
        setRecord({ ...record, open: false })
        let payload = {
            id: record.data.id,
            onSuccess: () => {
                dispatch(discountActions.list());
            },
            onError: (error) => {
                console.log(error)
            },
        };
        dispatch(discountActions.delete(payload));
    }

    const handleDiscountClick = (typeCode) => {
        navigate(`/base/discount/new/${typeCode}`);
        openModal();
    };

    return (
        <React.Fragment>
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
            <Modal
                isOpen={record.open}
                toggle={() => setRecord({ ...record, open: false })}
                backdrop="static"
            >
                <ModalHeader toggle={() => setRecord({ ...record, open: false })}>
                    {t('text.confirmation')}
                </ModalHeader>
                <ModalBody>
                    <p>
                        {t('text.msgDelete')}
                    </p>
                    <ModalFooter>
                        <Button type="button" color="light" onClick={() => setRecord({ ...record, open: false })}>{t('actions.close')}</Button>
                        <Button type="button" color="primary" onClick={confirmDelete}>{t('actions.confirm')}</Button>
                    </ModalFooter>
                </ModalBody>
            </Modal>
            </div>
        </React.Fragment>
    );
};

export default DiscountPage;
