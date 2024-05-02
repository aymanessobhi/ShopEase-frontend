import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Breadcrumbs from '../../../components/Common/Breadcrumb';
import { Card, CardBody, Container} from "reactstrap";
import AmountOffProducts from './AmountOffProducts';
import DiscountValue from './DiscountValue';
import Availability from './Availability';
import Purchase from './Purchase';
import CustomerEligibility from './CustomerEligibility';
import Combinations from './Combinations';
import ActiveDates from './ActiveDates';
import MaximumDiscountUses from './MaximumDiscountUses';

const initForm = {
    
}

const AmountOffProductForm = () => {
    const { t } = useTranslation('translation');
    const [formState, setForm] = useState(initForm);
    let { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAvailability, setShowAvailability] = useState(true);
    const [showCustomerEligibility, setShowCustomerEligibility] = useState(true);
    const [showNoMinimumRequirements, setShowNoMinimumRequirements] = useState(true);
    const [showMaximumDiscountUses, setShowMaximumDiscountUses] = useState(true);

    const handleButtonToggle = (show) => {
        setShowAvailability(show);
        setShowCustomerEligibility(!show);
        setShowNoMinimumRequirements(show);
        setShowMaximumDiscountUses(!show);
    };

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
        { title: t('discounts'), link: "#" },
        { title: t('New Discount'), link: "#" }
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title={t('create discount')} breadcrumbItems={breadcrumbItems} />
                    <AmountOffProducts formik={formik} handleButtonToggle={handleButtonToggle}/> 
                    <DiscountValue formik={formik} /> 
                    {showAvailability && <Availability formik={formik} />}
                    <Purchase formik={formik} automaticDiscountClicked={!showNoMinimumRequirements} />
                    {showCustomerEligibility && <CustomerEligibility formik={formik} />}
                    {showMaximumDiscountUses && <MaximumDiscountUses formik={formik} />}
                    <Combinations formik={formik}/> 
                    <ActiveDates formik={formik}/> 
                </Container>
            </div>
        </React.Fragment>
    )
}

export default AmountOffProductForm;
