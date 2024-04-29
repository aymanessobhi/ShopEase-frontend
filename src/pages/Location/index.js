import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Container} from "reactstrap";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from "../../components/Common/TableContainer";

const LocationPage = () => {
    const { t } = useTranslation('translation');
    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('locations'), link: "#" }
    ];
    const navigate = useNavigate();

    const columns = useMemo(
        () => [],
        []
      );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title={t('locations')} breadcrumbItems={breadcrumbItems} />

                    <Card>
                        <CardBody>
                        <TableContainer
                                columns={columns || []}
                                // data={locations || []}
                                isPagination={false}
                                isAddLocationList={true}
                                customPageSizeOptions={true}
                                iscustomPageSize={false}
                                handleLocationClick={() => navigate("/base/location/new")}
                                isBordered={false}
                                customPageSize={10}
                            />
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default LocationPage;