import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../sagas/dataSlice";

function DashboardPage() {
    const { t } = useTranslation('translation');

    const { isFetching } = useSelector(state => state.data);

    const breadcrumbItems = [
        { title: "Main", link: "#" },
        { title: t('menu.dashboard'), link: "#" }
    ];

    const reports = [
        { icon: "ri-stack-line", title: "Figure X1", value: "1452", rate: "2.4%", desc: "From previous period" },
        { icon: "ri-store-2-line", title: "Figure X2", value: "$ 38452", rate: "2.4%", desc: "From previous period" },
        { icon: "ri-briefcase-4-line", title: "Figure X3", value: "$ 15.4", rate: "2.4%", desc: "From previous period" },
    ]

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(dataActions.loadData());
          }, 3000);
    }, [])

return (
    <React.Fragment>
        {isFetching ? <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <i className="ri-loader-line spin-icon"></i>
                </div>
            </div>
        </div> :
            <div className="page-content">
                <Container fluid>

                    <Breadcrumbs title={t('menu.dashboard')} breadcrumbItems={breadcrumbItems} />
                    
                </Container>
            </div>}
    </React.Fragment>
);


}

export default DashboardPage;
