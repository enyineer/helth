// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import ReportCommentsLayout from 'src/layouts/ReportCommentsLayout'
import IncidentReportsLayout from 'src/layouts/IncidentReportsLayout'
import IncidentsLayout from 'src/layouts/IncidentsLayout'
import ServicesLayout from 'src/layouts/ServicesLayout'
import DashLayout from 'src/layouts/DashLayout'
import FrameLayout from './layouts/FrameLayout/FrameLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={FrameLayout}>
        <Set wrap={ReportCommentsLayout}>
          <Route path="/admin/report-comments/new" page={ReportCommentNewReportCommentPage} name="newReportComment" />
          <Route path="/admin/report-comments/{id}/edit" page={ReportCommentEditReportCommentPage} name="editReportComment" />
          <Route path="/admin/report-comments/{id}" page={ReportCommentReportCommentPage} name="reportComment" />
          <Route path="/admin/report-comments" page={ReportCommentReportCommentsPage} name="reportComments" />
        </Set>
        <Set wrap={IncidentReportsLayout}>
          <Route path="/admin/incident-reports/new" page={IncidentReportNewIncidentReportPage} name="newIncidentReport" />
          <Route path="/admin/incident-reports/{id}/edit" page={IncidentReportEditIncidentReportPage} name="editIncidentReport" />
          <Route path="/admin/incident-reports/{id}" page={IncidentReportIncidentReportPage} name="incidentReport" />
          <Route path="/admin/incident-reports" page={IncidentReportIncidentReportsPage} name="incidentReports" />
        </Set>
        <Set wrap={IncidentsLayout}>
          <Route path="/admin/incidents/new" page={IncidentNewIncidentPage} name="newIncident" />
          <Route path="/admin/incidents/{id}/edit" page={IncidentEditIncidentPage} name="editIncident" />
          <Route path="/admin/incidents/{id}" page={IncidentIncidentPage} name="incident" />
          <Route path="/admin/incidents" page={IncidentIncidentsPage} name="incidents" />
        </Set>
        <Set wrap={ServicesLayout}>
          <Route path="/admin/services/new" page={ServiceNewServicePage} name="newService" />
          <Route path="/admin/services/{id}/edit" page={ServiceEditServicePage} name="editService" />
          <Route path="/admin/services/{id}" page={ServiceServicePage} name="service" />
          <Route path="/admin/services" page={ServiceServicesPage} name="services" />
        </Set>
        <Set wrap={DashLayout}>
          <Route path="/" page={DashPage} name="dash" />
        </Set>
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
