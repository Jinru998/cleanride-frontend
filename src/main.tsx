import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import './index.scss';
import { BrowserRouter,  Route, Routes  } from 'react-router-dom';
import Authenticationlayout from './pages/authenticationlayout.tsx';
import Auth from './firebase/auth.tsx';
import Login from './firebase/login.tsx';
import Signup from './firebase/signup.tsx';
import Landinglayout from './pages/landinglayout.tsx';
import Crm from './container/dashboards/crm/crm.tsx';
import Ecommerce from './container/dashboards/ecommerce/ecommerce.tsx';
import Crypto from './container/dashboards/crypto/crypto.tsx';
import Jobs from './container/dashboards/jobs/jobs.tsx';
import Nft from './container/dashboards/nft/nft.tsx';
import Sales from './container/dashboards/sales/sales.tsx';
import Analytics from './container/dashboards/analytics/analytics.tsx';
import Projects from './container/dashboards/projects/projects.tsx';
import Hrm from './container/dashboards/hrm/hrm.tsx';
import Stocks from './container/dashboards/stocks/stocks.tsx';
import Courses from './container/dashboards/courses/courses.tsx';
import Personal from './container/dashboards/personal/personal.tsx';
import Aboutus from './container/pages/aboutus/aboutus.tsx';
import Chat from './container/pages/chat/chat.tsx';
import Contacts from './container/pages/contacts/contacts.tsx';
import Contactus from './container/pages/contactus/contactus.tsx';
import Empty from './container/pages/empty/empty.tsx';
import Faqs from './container/pages/faqs/faqs.tsx';
import Landing from './container/pages/landing/landing.tsx';
import Jobslanding from './container/pages/jobslanding/jobslanding.tsx';
import Notifications from './container/pages/notifications/notifications.tsx';
import Pricing from './container/pages/pricing/pricing.tsx';
import Profile from './container/pages/profile/profile.tsx';
import Reviews from './container/pages/reviews/reviews.tsx';
import Team from './container/pages/team/team.tsx';
import Termsconditions from './container/pages/termsconditions/termsconditions.tsx';
import Timeline from './container/pages/timeline/timeline.tsx';
import Todolist from './container/pages/todolist/todolist.tsx';
import Blog from './container/pages/blog/blog/blog.tsx';
import Blogdetails from './container/pages/blog/blogdetails/blogdetails.tsx';
import Createblog from './container/pages/blog/createblog/createblog.tsx';
import Addproducts from './container/pages/ecommerce/addproducts/addproducts.tsx';
import Cart from './container/pages/ecommerce/cart/cart.tsx';
import Checkout from './container/pages/ecommerce/checkout/checkout.tsx';
import Editproducts from './container/pages/ecommerce/editproducts/editproducts.tsx';
import Orderdetails from './container/pages/ecommerce/orderdetails/orderdetails.tsx';
import Orders from './container/pages/ecommerce/orders/orders.tsx';
import Products from './container/pages/ecommerce/products/products.tsx';
import Productdetails from './container/pages/ecommerce/productdetails/productdetails.tsx';
import Productlist from './container/pages/ecommerce/productlist/productlist.tsx';
import Wishlist from './container/pages/ecommerce/wishlist/wishlist.tsx';
import Mailapp from './container/pages/email/mailapp/mailapp.tsx';
import Mailsettings from './container/pages/email/mailsettings/mailsettings.tsx';
import Filemanager from './container/pages/filemanager/filemanager/filemanager.tsx';
import Createinvoice from './container/pages/invoice/createinvoice/createinvoice.tsx';
import Invoicedetails from './container/pages/invoice/invoicedetails/invoicedetails.tsx';
import Invoicelist from './container/pages/invoice/invoicelist/invoicelist.tsx';
import Kanbanboard from './container/task/kanbanboard/kanbanboard.tsx';
import Listview from './container/task/listview/listview.tsx';
import Taskdetails from './container/task/taskdetails/taskdetails.tsx';
import Comingsoon from './container/authentication/comingsoon/comingsoon.tsx';
import Basic from './container/authentication/createpassword/basic/basic.tsx';
import Cover from './container/authentication/createpassword/cover/cover.tsx';
import Lockscreenbasic from './container/authentication/lockscreen/lockscreenbasic/lockscreenbasic.tsx';
import Lockscreencover from './container/authentication/lockscreen/lockscreencover/lockscreencover.tsx';
import Resetbasic from './container/authentication/resetpassword/resetbasic/resetbasic.tsx';
import Resetcover from './container/authentication/resetpassword/resetcover/resetcover.tsx';
import Signupbasic from './container/authentication/signup/signupbasic/signupbasic.tsx';
import Signupcover from './container/authentication/signup/signupcover/signupcover.tsx';
import Signinbasic from './container/authentication/signin/signinbasic/signinbasic.tsx';
import Signincover from './container/authentication/signin/signincover/signincover.tsx';
import Twostepbasic from './container/authentication/twostepverification/twostepbasic/twostepbasic.tsx';
import Twostepcover from './container/authentication/twostepverification/twostepcover/twostepcover.tsx';
import Undermaintenance from './container/authentication/undermaintenance/undermaintenance.tsx';
import Error401 from './container/error/401error/401error.tsx';
import Error404 from './container/error/404error/404error.tsx';
import Error500 from './container/error/500error/500error.tsx';
import Alerts from './container/uielements/alerts/alerts.tsx';
import Badge from './container/uielements/badge/badges.tsx';
import Breadcrumb from './container/uielements/breadcrumb/breadcrumbs.js';
import Buttons from './container/uielements/buttons/buttons.tsx';
import Buttongroup from './container/uielements/buttongroup/buttongroup.tsx';
import Cards from './container/uielements/cards/cards.tsx';
import Dropdowns from './container/uielements/dropdowns/dropdowns.tsx';
import Imagesfigures from './container/uielements/imagesfigures/imagesfigures.tsx';
import Listgroup from './container/uielements/listgroup/listgroup.tsx';
import Navtabs from './container/uielements/navtabs/navtabs.tsx';
import Objectfit from './container/uielements/objectfit/objectfit.tsx';
import Pagination from './container/uielements/pagination/paginations.js';
import Popoovers from './container/uielements/popoovers/popoovers.tsx';
import Progress from './container/uielements/progress/progress.js';
import Spinners from './container/uielements/spinners/spinners.tsx';
import Toasts from './container/uielements/toasts/toasts.tsx';
import Tooltips from './container/uielements/tooltips/tooltips.tsx';
import Typography from './container/uielements/typography/typography.tsx';
import Avatars from './container/utilities/avatars/avatars.tsx';
import Borders from './container/utilities/borders/borders.tsx';
import Breakpoints from './container/utilities/breakpoints/breakpoints.tsx';
import Colors from './container/utilities/colors/colors.tsx';
import Columns from './container/utilities/columns/columns.tsx';
import Flex from './container/utilities/flex/flex.tsx';
import Gutters from './container/utilities/gutters/gutters.tsx';
import Helpers from './container/utilities/helpers/helpers.tsx';
import Position from './container/utilities/position/position.tsx';
import Additionalcontent from './container/utilities/additionalcontent/additionalcontent.tsx';
import Floatinglabel from './container/forms/floatinglabel/floatinglabel.tsx';
import Formlayouts from './container/forms/formlayouts/formlayouts.tsx';
import Validation from './container/forms/validation/validation.tsx';
import Select2 from './container/forms/select2/select2.tsx';
import Inputs from './container/forms/formelements/inputs/inputs.tsx';
import Checksradios from './container/forms/formelements/checksradios/checksradios.tsx';
import Inputgroup from './container/forms/formelements/inputgroup/inputgroup.tsx';
import Formselect from './container/forms/formelements/formselect/formselect.tsx';
import Rangeslider from './container/forms/formelements/rangeslider/rangeslider.tsx';
import Inputmasks from './container/forms/formelements/inputmasks/inputmasks.tsx';
import Fileuploads from './container/forms/formelements/fileuploads/fileuploads.tsx';
import Datetimepicker from './container/forms/formelements/datetimepicker/datetimepicker.tsx';
import Colorpickers from './container/forms/formelements/colorpickers/colorpickers.tsx';
import Quilleditor from './container/forms/formeditor/quilleditor/quilleditor.tsx';
import Accordionscollapse from './container/advancedui/accordionscollapse/accordionscollapse.tsx';
import Carousel from './container/advancedui/carousel/carousel.tsx';
import Draggablecards from './container/advancedui/draggablecards/draggablecards.tsx';
import Modalscloses from './container/advancedui/modalscloses/modalscloses.tsx';
import Navbar from './container/advancedui/navbar/navbar.tsx';
import Offcanvas from './container/advancedui/offcanvas/offcanvas.tsx';
import Placeholders from './container/advancedui/placeholders/placeholders.tsx';
import Ratings from './container/advancedui/ratings/ratings.tsx';
import Swiperjs from './container/advancedui/swiperjs/swiperjs.tsx';
import Widgets from './container/widgets/widgets.tsx';
import Fullcalendar from './container/apps/fullcalendar/fullcalendar.tsx';
import Gallery from './container/apps/gallery/gallery.tsx';
import Sweetalerts from './container/apps/sweetalerts/sweetalerts.tsx';
import Projectslist from './container/apps/projects/projectslist/projectslist.tsx';
import Projectoverview from './container/apps/projects/projectoverview/projectoverview.tsx';
import Createproject from './container/apps/projects/createproject/createproject.tsx';
import Jobdetails from './container/apps/jobs/jobdetails/jobdetails.tsx';
import Searchcompany from './container/apps/jobs/searchcompany/searchcompany.tsx';
import Searchjobs from './container/apps/jobs/searchjobs/searchjobs.tsx';
import Jobpost from './container/apps/jobs/jobpost/jobpost.tsx';
import Jobslist from './container/apps/jobs/jobslist/jobslist.tsx';
import Searchcandidate from './container/apps/jobs/searchcandidate/searchcandidate.tsx';
import Candidatedetails from './container/apps/jobs/candidatedetails/candidatedetails.tsx';
import Marketplace from './container/apps/nft/marketplace/marketplace.tsx';
import Nftdetails from './container/apps/nft/nftdetails/nftdetails.tsx';
import Createnft from './container/apps/nft/createnft/createnft.tsx';
import Walletintegration from './container/apps/nft/walletintegration/walletintegration.tsx';
import Liveauction from './container/apps/nft/liveauction/liveauction.tsx';
import Crmcontacts from './container/apps/crm/crmcontacts/crmcontacts.tsx';
import Companies from './container/apps/crm/companies/companies.tsx';
import Deals from './container/apps/crm/deals/deals.tsx';
import Leads from './container/apps/crm/leads/leads.tsx';
import Transactions from './container/apps/crypto/transactions/transactions.tsx';
import Currencyexchange from './container/apps/crypto/currencyexchange/currencyexchange.tsx';
import Buysell from './container/apps/crypto/buysell/buysell.tsx';
import Marketcap from './container/apps/crypto/marketcap/marketcap.tsx';
import Wallet from './container/apps/crypto/wallet/wallet.tsx';
import Tables from './container/tables/tables/tables.tsx';
import Gridjstables from './container/tables/gridjstables/gridjstables.tsx';
import Datatables from './container/tables/datatables/datatables.tsx';
import Chartjscharts from './container/charts/chartjscharts/chartjscharts.tsx';
import Echartscharts from './container/charts/echartscharts/echartscharts.tsx';
import Leafletmaps from './container/maps/leafletmaps/leafletmaps.tsx';
import Vectormaps from './container/maps/vectormaps/vectormaps.tsx';
import Icons from './container/icons/icons.tsx';
import Linecharts from './container/charts/apexcharts/linecharts/linecharts.tsx';
import Areacharts from './container/charts/apexcharts/areacharts/areacharts.tsx';
import Columncharts from './container/charts/apexcharts/columncharts/columncharts.tsx';
import Barcharts from './container/charts/apexcharts/barcharts/barcharts.tsx';
import Mixedcharts from './container/charts/apexcharts/mixedcharts/mixedcharts.tsx';
import Rangeareacharts from './container/charts/apexcharts/rangeareacharts/rangeareacharts.tsx';
import Timelinecharts from './container/charts/apexcharts/timelinecharts/timelinecharts.tsx';
import Candlestickcharts from './container/charts/apexcharts/candlestickcharts/candlestickcharts.tsx';
import Boxplotcharts from './container/charts/apexcharts/boxplotcharts/boxplotcharts.tsx';
import Bubblecharts from './container/charts/apexcharts/bubblecharts/bubblecharts.tsx';
import Scattercharts from './container/charts/apexcharts/scattercharts/scattercharts.tsx';
import Heatmapcharts from './container/charts/apexcharts/heatmapcharts/heatmapcharts.tsx';
import Treemapcharts from './container/charts/apexcharts/treemapcharts/treemapcharts.tsx';
import Piecharts from './container/charts/apexcharts/piecharts/piecharts.tsx';
import Radialbarcharts from './container/charts/apexcharts/radialbarcharts/radialbarcharts.tsx';
import Polarareacharts from './container/charts/apexcharts/polarareacharts/polarareacharts.tsx';
import Radarcharts from './container/charts/apexcharts/radarcharts/radarcharts.tsx';
import Loader from './components/common/loader/loader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
  <BrowserRouter>
    <React.Suspense fallback={<Loader/>}>
      <Routes> 
      <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
          <Route index element={<Login />} />
          <Route path={`${import.meta.env.BASE_URL}firebase/login`} element={<Login />} />
          <Route path={`${import.meta.env.BASE_URL}firebase/signup`} element={<Signup />}/>
       </Route>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App/>}>
          <Route path={`${import.meta.env.BASE_URL}dashboards/crm`} element={<Crm/>} />
          <Route path={`${import.meta.env.BASE_URL}dashboards/ecommerce`} element={<Ecommerce/>} />
          <Route path={`${import.meta.env.BASE_URL}dashboards/crypto`} element={<Crypto/>} />
          <Route path={`${import.meta.env.BASE_URL}dashboards/jobs`} element={<Jobs/>} />
          <Route path={`${import.meta.env.BASE_URL}dashboards/nft`} element={<Nft/>} />
          <Route path={`${import.meta.env.BASE_URL}dashboards/sales`} element={<Sales/>} />
          <Route path={`${import.meta.env.BASE_URL}dashboards/analytics`} element={<Analytics/>} />
          <Route path={`${import.meta.env.BASE_URL}dashboards/projects`} element={<Projects/>} />
          <Route path={`${import.meta.env.BASE_URL}dashboards/hrm`} element={<Hrm/>} />
          <Route path={`${import.meta.env.BASE_URL}dashboards/stocks`} element={<Stocks/>} />
          <Route path={`${import.meta.env.BASE_URL}dashboards/courses`} element={<Courses/>} />
          <Route path={`${import.meta.env.BASE_URL}dashboards/personal`} element={<Personal/>} />

          <Route path={`${import.meta.env.BASE_URL}pages/aboutus`} element={<Aboutus/>} />
          
          <Route path={`${import.meta.env.BASE_URL}pages/blog/blog`} element={<Blog/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/blog/blogdetails`} element={<Blogdetails/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/blog/createblog`} element={<Createblog/>} />

          <Route path={`${import.meta.env.BASE_URL}pages/chat`} element={<Chat/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/contacts`} element={<Contacts/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/contactus`} element={<Contactus/>} />

          <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/addproducts`} element={<Addproducts/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} element={<Cart/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/checkout`} element={<Checkout/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/editproducts`} element={<Editproducts/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/orderdetails`} element={<Orderdetails/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/orders`} element={<Orders/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/products`} element={<Products/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`} element={<Productdetails/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/productlist`} element={<Productlist/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist`} element={<Wishlist/>} />
          
          <Route path={`${import.meta.env.BASE_URL}pages/email/mailapp`} element={<Mailapp/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/email/mailsettings`} element={<Mailsettings/>} />

          <Route path={`${import.meta.env.BASE_URL}pages/empty`} element={<Empty/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/faqs`} element={<Faqs/>} />

          <Route path={`${import.meta.env.BASE_URL}pages/filemanager/filemanager`} element={<Filemanager/>} />
          
          <Route path={`${import.meta.env.BASE_URL}pages/invoice/createinvoice`} element={<Createinvoice/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/invoice/invoicedetails`} element={<Invoicedetails/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/invoice/invoicelist`} element={<Invoicelist/>} />
          
          <Route path={`${import.meta.env.BASE_URL}pages/notifications`} element={<Notifications/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/pricing`} element={<Pricing/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/profile`} element={<Profile/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/reviews`} element={<Reviews/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/team`} element={<Team/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/termsconditions`} element={<Termsconditions/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/timeline`} element={<Timeline/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/todolist`} element={<Todolist/>} />
          
          <Route path={`${import.meta.env.BASE_URL}task/kanbanboard`} element={<Kanbanboard/>} />
          <Route path={`${import.meta.env.BASE_URL}task/listview`} element={<Listview/>} />
          <Route path={`${import.meta.env.BASE_URL}task/taskdetails`} element={<Taskdetails/>} />

          <Route path={`${import.meta.env.BASE_URL}uielements/alerts`} element={<Alerts/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/badge`} element={<Badge/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/breadcrumb`} element={<Breadcrumb/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/buttons`} element={<Buttons/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/buttongroup`} element={<Buttongroup/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/cards`} element={<Cards/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/dropdowns`} element={<Dropdowns/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/imagesfigures`} element={<Imagesfigures/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/listgroup`} element={<Listgroup/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/navtabs`} element={<Navtabs/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/objectfit`} element={<Objectfit/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/pagination`} element={<Pagination/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/popoovers`} element={<Popoovers/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/progress`} element={<Progress/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/spinners`} element={<Spinners/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/toasts`} element={<Toasts/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/tooltips`} element={<Tooltips/>} />
          <Route path={`${import.meta.env.BASE_URL}uielements/typography`} element={<Typography/>} />

          <Route path={`${import.meta.env.BASE_URL}utilities/avatars`} element={<Avatars/>} />
          <Route path={`${import.meta.env.BASE_URL}utilities/borders`} element={<Borders/>} />
          <Route path={`${import.meta.env.BASE_URL}utilities/breakpoints`} element={<Breakpoints/>} />
          <Route path={`${import.meta.env.BASE_URL}utilities/colors`} element={<Colors/>} />
          <Route path={`${import.meta.env.BASE_URL}utilities/columns`} element={<Columns/>} />
          <Route path={`${import.meta.env.BASE_URL}utilities/flex`} element={<Flex/>} />
          <Route path={`${import.meta.env.BASE_URL}utilities/gutters`} element={<Gutters/>} />
          <Route path={`${import.meta.env.BASE_URL}utilities/helpers`} element={<Helpers/>} />
          <Route path={`${import.meta.env.BASE_URL}utilities/position`} element={<Position/>} />
          <Route path={`${import.meta.env.BASE_URL}utilities/additionalcontent`} element={<Additionalcontent/>} />
      
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/inputs`} element={<Inputs/>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/checksradios`} element={<Checksradios/>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/inputgroup`} element={<Inputgroup/>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/formselect`} element={<Formselect/>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/rangeslider`} element={<Rangeslider/>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/inputmasks`} element={<Inputmasks/>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/fileuploads`} element={<Fileuploads/>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/datetimepicker`} element={<Datetimepicker/>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/colorpickers`} element={<Colorpickers/>} />

          <Route path={`${import.meta.env.BASE_URL}forms/floatinglabel`} element={<Floatinglabel/>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formlayouts`} element={<Formlayouts/>} />
          <Route path={`${import.meta.env.BASE_URL}forms/validation`} element={<Validation/>} />
          <Route path={`${import.meta.env.BASE_URL}forms/select2`} element={<Select2/>} />

          <Route path={`${import.meta.env.BASE_URL}forms/formeditor/quilleditor`} element={<Quilleditor/>} />

          <Route path={`${import.meta.env.BASE_URL}advancedui/accordionscollapse`} element={<Accordionscollapse/>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/carousel`} element={<Carousel/>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/draggablecards`} element={<Draggablecards/>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/modalscloses`} element={<Modalscloses/>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/navbar`} element={<Navbar/>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/offcanvas`} element={<Offcanvas/>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/placeholders`} element={<Placeholders/>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/ratings`} element={<Ratings/>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/swiperjs`} element={<Swiperjs/>} />

          <Route path={`${import.meta.env.BASE_URL}widgets`} element={<Widgets/>} />
          
          <Route path={`${import.meta.env.BASE_URL}apps/fullcalendar`} element={<Fullcalendar/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/gallery`} element={<Gallery/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/sweetalerts`} element={<Sweetalerts/>} />

          <Route path={`${import.meta.env.BASE_URL}apps/projects/projectslist`} element={<Projectslist/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/projects/projectoverview`} element={<Projectoverview/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/projects/createproject`} element={<Createproject/>} />

          <Route path={`${import.meta.env.BASE_URL}apps/jobs/jobdetails`} element={<Jobdetails/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/jobs/searchcompany`} element={<Searchcompany/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/jobs/searchjobs`} element={<Searchjobs/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/jobs/jobpost`} element={<Jobpost/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/jobs/jobslist`} element={<Jobslist/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/jobs/searchcandidate`} element={<Searchcandidate/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/jobs/candidatedetails`} element={<Candidatedetails/>} />

          <Route path={`${import.meta.env.BASE_URL}apps/nft/marketplace`} element={<Marketplace/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/nft/nftdetails`} element={<Nftdetails/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/nft/createnft`} element={<Createnft/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/nft/walletintegration`} element={<Walletintegration/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/nft/liveauction`} element={<Liveauction/>} />

          <Route path={`${import.meta.env.BASE_URL}apps/crm/crmcontacts`} element={<Crmcontacts/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/crm/companies`} element={<Companies/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/crm/deals`} element={<Deals/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/crm/leads`} element={<Leads/>} />

          <Route path={`${import.meta.env.BASE_URL}apps/crypto/transactions`} element={<Transactions/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/crypto/currencyexchange`} element={<Currencyexchange  />} />
          <Route path={`${import.meta.env.BASE_URL}apps/crypto/buysell`} element={<Buysell/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/crypto/marketcap`} element={<Marketcap/>} />
          <Route path={`${import.meta.env.BASE_URL}apps/crypto/wallet`} element={<Wallet/>} />

          <Route path={`${import.meta.env.BASE_URL}tables/tables`} element={<Tables/>} />
          <Route path={`${import.meta.env.BASE_URL}tables/gridjstables`} element={<Gridjstables/>} />
          <Route path={`${import.meta.env.BASE_URL}tables/datatables`} element={<Datatables/>} />
      
          <Route path={`${import.meta.env.BASE_URL}apexcharts/linecharts`} element={<Linecharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/areacharts`} element={<Areacharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/columncharts`} element={<Columncharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/barcharts`} element={<Barcharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/mixedcharts`} element={<Mixedcharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/rangeareacharts`} element={<Rangeareacharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/timelinecharts`} element={<Timelinecharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/candlestickcharts`} element={<Candlestickcharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/boxplotcharts`} element={<Boxplotcharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/bubblecharts`} element={<Bubblecharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/scattercharts`} element={<Scattercharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/heatmapcharts`} element={<Heatmapcharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/treemapcharts`} element={<Treemapcharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/piecharts`} element={<Piecharts />} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/radialbarcharts`} element={<Radialbarcharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/polarareacharts`} element={<Polarareacharts/>} />
          <Route path={`${import.meta.env.BASE_URL}apexcharts/radarcharts`} element={<Radarcharts/>} />

          <Route path={`${import.meta.env.BASE_URL}charts/chartjscharts`} element={<Chartjscharts/>} />
          <Route path={`${import.meta.env.BASE_URL}charts/echartscharts`} element={<Echartscharts/>} />

          <Route path={`${import.meta.env.BASE_URL}maps/leafletmaps`} element={<Leafletmaps/>} />
          <Route path={`${import.meta.env.BASE_URL}maps/vectormaps`} element={<Vectormaps/>} />

          <Route path={`${import.meta.env.BASE_URL}icons`} element={<Icons/>} />

           </Route>

          <Route path={`${import.meta.env.BASE_URL}`} element={<Authenticationlayout />}>
          <Route path={`${import.meta.env.BASE_URL}authentication/comingsoon`} element={<Comingsoon/>} />
          <Route path={`${import.meta.env.BASE_URL}authentication/createpassword/basic`} element={<Basic/>} />
          <Route path={`${import.meta.env.BASE_URL}authentication/createpassword/cover`} element={<Cover/>} />

          <Route path={`${import.meta.env.BASE_URL}authentication/lockscreen/lockscreenbasic`} element={<Lockscreenbasic/>} />
          <Route path={`${import.meta.env.BASE_URL}authentication/lockscreen/lockscreencover`} element={<Lockscreencover/>} />

          <Route path={`${import.meta.env.BASE_URL}authentication/resetpassword/resetbasic`} element={<Resetbasic/>} />
          <Route path={`${import.meta.env.BASE_URL}authentication/resetpassword/resetcover`} element={<Resetcover/>} />

          <Route path={`${import.meta.env.BASE_URL}authentication/signup/signupbasic`} element={<Signupbasic/>} />
          <Route path={`${import.meta.env.BASE_URL}authentication/signup/signupcover`} element={<Signupcover/>} />

          <Route path={`${import.meta.env.BASE_URL}authentication/signin/signinbasic`} element={<Signinbasic/>} />
          <Route path={`${import.meta.env.BASE_URL}authentication/signin/signincover`} element={<Signincover/>} />

          <Route path={`${import.meta.env.BASE_URL}authentication/twostepverification/twostepbasic`} element={<Twostepbasic/>} />
          <Route path={`${import.meta.env.BASE_URL}authentication/twostepverification/twostepcover`} element={<Twostepcover/>} />

          <Route path={`${import.meta.env.BASE_URL}authentication/undermaintenance`} element={<Undermaintenance/>} />

          <Route path={`${import.meta.env.BASE_URL}error/401error`} element={<Error401/>} />
          <Route path={`${import.meta.env.BASE_URL}error/404error`} element={<Error404/>} />
          <Route path={`${import.meta.env.BASE_URL}error/500error`} element={<Error500/>} />
          </Route>
          <Route path={`${import.meta.env.BASE_URL}`} element={<Landinglayout />}>
          <Route path={`${import.meta.env.BASE_URL}pages/landing`} element={<Landing/>} />
          <Route path={`${import.meta.env.BASE_URL}pages/jobslanding`} element={<Jobslanding/>} />
          </Route>

      </Routes>
    </React.Suspense>
  </BrowserRouter>
</React.Fragment>
);
