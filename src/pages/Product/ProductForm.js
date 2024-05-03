import { AvField, AvForm } from "availity-reactstrap-validation";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, CardBody, Container } from "reactstrap";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import DescriptionBloc from "./DescriptionBloc";
import MediaUploadForm from "./MediaUpload";
import Pricing from "./Pricing";
import Shipping from "./Shipping";
import Inventory from "./Inventory";

const initForm = {
    title: '',
    description: '', 
    price: '',
    comparePrice:'',
    taxable: false,
    costPerItem: '',
    profit: '',
    margin: '',
    trackQte:'',
    weight: '',
    unit:'',
    shipping: false,
    skuBarcode: false,
}

const ProductForm = () => {
    const { t } = useTranslation('translation');
    const [formState, setForm] = useState(initForm);

    let { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            let payload = {
                id,
                onSuccess: (data) => {
                    setForm({ ...data });
                }
            }
           // dispatch(empActions.find(payload))
        }
    }, [])

    const formik = useFormik({
        initialValues: { ...formState },
        enableReinitialize: true,
        onSubmit: (values) => {
            let payload = {
                data: values,
                onSuccess: () => {
                    //navigate(DATABASE_EMPLOYE_PAGE);
                }
            }
            //dispatch(empActions.create(payload))
        }
    });

    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('products'), link: "#" },
        { title: t('newprod'), link: "#" }
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title={t('newprod')} breadcrumbItems={breadcrumbItems} />
                        <DescriptionBloc formik={formik} /> 
                        <MediaUploadForm formik={formik}/>   
                        <Pricing formik={formik}/>
                        <Inventory formik={formik} />
                        <Shipping formik={formik}/>  
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ProductForm;