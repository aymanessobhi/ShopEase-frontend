import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Card, CardBody, Container, Button } from "reactstrap";
import LocationName from './LocationName';
import Address from './Address';
import FulfillmentDetails from './FulfillmentDetails';
import PointOfSaleSection from './PointOfSaleSection';

const initForm = {
    locationName: '',
    country: '',
    address: '',
    appartment: '',
    postalCode: '',
    city: '',
    phone: '',
    fulfillOnlineOrders: false,
    posEnabled: false,
}

const LocationForm = () => {
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
    }, []);

    const formik = useFormik({
        initialValues: { ...formState },
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log("Form Values:", values); // Log form values to console
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
        { title: t('locations'), link: "#" },
        { title: t('newprod'), link: "#" }
    ];

    const handleFormSubmit = () => {
        formik.handleSubmit();
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title={t('newlocation')} breadcrumbItems={breadcrumbItems} />
                    <LocationName formik={formik} /> 
                    <Address formik={formik} /> 
                    <FulfillmentDetails formik={formik} /> 
                    <PointOfSaleSection formik={formik} />
                    <Button color="primary" onClick={handleFormSubmit}>Submit</Button> 
                </Container>
            </div>
        </React.Fragment>
    )
}

export default LocationForm;
