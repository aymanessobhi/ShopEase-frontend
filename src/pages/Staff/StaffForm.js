import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Card, CardBody,Button, Container} from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { staffActions } from "../../sagas/staffSlice";

import ContactInformaton from './ContactInformaton';
import PointOfSaleAccess from './PointOfSaleAccess';


const initForm = {
    name: '',
    access: '',
    posRole: '',
    fulfillOnlineOrders: false,
    posEnabled: false,
    location: ''
    
}

const StaffForm = () => {
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
            console.log('values',values);
            dispatch(staffActions.staff({ query: values, history: navigate  }));

        }
    });

    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('staff'), link: "#" },
        { title: t('newstaff'), link: "#" }
    ];

    return (
        <React.Fragment>
            <div className="page-content">
            <AvForm className="form-horizontal" onValidSubmit={formik.handleSubmit} >

                <Container fluid={true}>
                    <Breadcrumbs title={t('newstaff')} breadcrumbItems={breadcrumbItems} />
                    <ContactInformaton formik={formik} /> 
                    <PointOfSaleAccess formik={formik} /> 
                    <div className="mt-4 text-center">
                    <Button color="primary" className="w-md waves-effect waves-light" type="submit">{t('actions.save')}</Button>
                

                    </div>
                </Container>
                </AvForm>

            </div>
        </React.Fragment>
    )
}

export default StaffForm