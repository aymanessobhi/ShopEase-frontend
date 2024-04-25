import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
// import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from 'react-i18next';

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader
} from "../../store/actions";
import withRouter from "../Common/withRouter";

class SidebarContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pathName: this.props.router.location.pathname,
    };

  }

  componentDidMount() {
    this.initMenu();
  }

  UNSAFE_componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {

        if (this.props.type !== prevProps.type) {
            this.initMenu();
        }

    }
    if (this.props.router.location.pathname !== prevProps.router.location.pathname) {
      this.setState({ pathName: this.props.router.location.pathname }, () => {
        this.initMenu();
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");
    const { pathName } = this.state;


    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = item => {
    item.classList.add("active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu">

          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{this.props.t('Menu')}</li>

            <li>
              <Link to="#" className="waves-effect">
                <i className="ri-dashboard-line"></i><span className="badge rounded-pill bg-success float-end">3</span>
                <span className="ms-1">{this.props.t('dashboard')}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-database-2-line"></i>
                <span className="ms-1">{this.props.t('database')}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/base/product">{this.props.t('products')}</Link></li>
                <li><Link to="/base/fournisseur">{this.props.t('fournisseur')}</Link></li>
                <li><Link to="/base/customer">{this.props.t('clients')}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-exchange-dollar-line"></i>
                <span className="ms-1">{this.props.t('sales')}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="#">{this.props.t('orders')}</Link></li>
                <li><Link to="#">{this.props.t('factures')}</Link></li>
                <li><Link to="#">{this.props.t('pos')}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-store-2-line"></i>
                <span className="ms-1">{this.props.t('buys')}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="#">{this.props.t('bons')}</Link></li>
                <li><Link to="#">{this.props.t('livraison')}</Link></li>
                <li><Link to="#">{this.props.t('factforun')}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-article-line"></i>
                <span className="ms-1">{this.props.t('stock')}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="#">{this.props.t('valorisation')}</Link></li>
                <li><Link to="#">{this.props.t('transfert')}</Link></li>
                <li><Link to="#">{this.props.t('inventaire')}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-customer-service-2-line"></i>
                <span className="ms-1">{this.props.t('crm')}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="#">{this.props.t('historique')}</Link></li>
                <li><Link to="#">{this.props.t('segment')}</Link></li>
                <li><Link to="#">{this.props.t('service')}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-bank-card-2-line"></i>
                <span className="ms-1">{this.props.t('gestfin')}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="#">{this.props.t('comptagen')}</Link></li>
                <li><Link to="#">{this.props.t('banque')}</Link></li>
                <li><Link to="#">{this.props.t('lettrage')}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-bar-chart-2-line"></i>
                <span className="ms-1">{this.props.t('reporting')}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="#">{this.props.t('tablebord')}</Link></li>
                <li><Link to="#">{this.props.t('export')}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-settings-2-line"></i>
                <span className="ms-1">{this.props.t('admin')}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="#">{this.props.t('gestusers')}</Link></li>
                <li><Link to="#">{this.props.t('sauvsecu')}</Link></li>
                <li><Link to="#">{this.props.t('integ')}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-question-answer-line"></i>
                <span className="ms-1">{this.props.t('support')}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="#">{this.props.t('baseconnai')}</Link></li>
                <li><Link to="#">{this.props.t('supptech')}</Link></li>
              </ul>
            </li>

            

          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  return { ...state.Layout };
};

export default withRouter(connect(mapStatetoProps, {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeLayoutWidth,
  changePreloader
})(withTranslation()(SidebarContent)));
