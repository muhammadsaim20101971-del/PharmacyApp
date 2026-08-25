import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { SubscriptionProvider } from './context/SubscriptionContext';
import { OrdersProvider } from './context/OrdersContext';
import { ReturnsProvider } from './context/ReturnsContext';
import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SubscriptionPlansPage from './pages/SubscriptionPlansPage';
import MySubscriptionsPage from './pages/MySubscriptionsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import BranchLocatorPage from './pages/BranchLocatorPage';
import ConsultationPage from './pages/ConsultationPage';
import ChatScreen from './pages/ChatScreen';
import VideoCallScreen from './pages/VideoCallScreen';
import BlogListPage from './pages/BlogListPage';
import BlogArticlePage from './pages/BlogArticlePage';
import FaqPage from './pages/FaqPage';
import ReturnsPage from './pages/ReturnsPage';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <WishlistProvider>
          <SubscriptionProvider>
            <OrdersProvider>
              <ReturnsProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/subscriptions" element={<SubscriptionPlansPage />} />
                    <Route path="/my-subscriptions" element={<MySubscriptionsPage />} />
                    <Route path="/orders" element={<MyOrdersPage />} />
                    <Route path="/branches" element={<BranchLocatorPage />} />
                    <Route path="/consultation" element={<ConsultationPage />} />
                    <Route path="/consultation/chat/:pharmacistId" element={<ChatScreen />} />
                    <Route path="/consultation/call/:pharmacistId" element={<VideoCallScreen />} />
                    <Route path="/blog" element={<BlogListPage />} />
                    <Route path="/blog/:id" element={<BlogArticlePage />} />
                    <Route path="/faq" element={<FaqPage />} />
                    <Route path="/returns" element={<ReturnsPage />} />
                  </Routes>
                </BrowserRouter>
              </ReturnsProvider>
            </OrdersProvider>
          </SubscriptionProvider>
        </WishlistProvider>
      </CartProvider>
    </div>
  );
}

export default App;