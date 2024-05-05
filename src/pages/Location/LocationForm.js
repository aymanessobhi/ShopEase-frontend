import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Card, CardBody,Button, Container} from "reactstrap";
import LocationName from './LocationName';
import Address from './Address';
import FulfillmentDetails from './FulfillmentDetails';
import PointOfSaleSection from './PointOfSaleSection';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { locationActions } from "../../sagas/locationSlice";




const initForm = {
    name: '',
    country_id: '',
    address: '',
    appartment: '',
    postal_code: '',
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
    }, []);

    const formik = useFormik({
        initialValues: { ...formState },
        enableReinitialize: true,
        onSubmit: (values) => {
            dispatch(locationActions.location({ query: values, history: navigate  }));
        }
    });

    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('locations'), link: "#" },
        { title: t('newprod'), link: "#" }
    ];

    return (
        <React.Fragment>
            <div className="page-content">                
            <AvForm className="form-horizontal" onValidSubmit={formik.handleSubmit} >

                <Container fluid={true}>

                    <Breadcrumbs title={t('newlocation')} breadcrumbItems={breadcrumbItems} />
                    <LocationName formik={formik} /> 
                    <Address formik={formik} /> 
                    <FulfillmentDetails formik={formik} /> 
                    <PointOfSaleSection formik={formik} />
                    <div className="mt-4 text-center">
                    <Button color="primary" className="w-md waves-effect waves-light" type="submit">{t('actions.save')}</Button>
                

                    </div>
                </Container>
                </AvForm>
            </div>
        </React.Fragment>
    )
}

export default LocationForm