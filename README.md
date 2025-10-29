# Evervault E-commerce Platform

A full-stack MERN e-commerce application with modern UI, secure authentication, and integrated payment processing.

## 🚀 Features

### User Features
- **Product Browsing** - Browse products by categories and brands
- **Shopping Cart** - Add/remove items, update quantities
- **User Authentication** - Secure login/register with JWT
- **Address Management** - Save multiple delivery addresses
- **Order Management** - View order history and details
- **Product Reviews** - Rate and review products
- **Search Functionality** - Search products by name

### Admin Features
- **Product Management** - Add, edit, delete products
- **Image Upload** - Cloudinary integration for product images
- **Order Management** - View and manage customer orders
- **Dashboard** - Admin overview and analytics

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Redux Toolkit** - State management
- **TailwindCSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### Services
- **MongoDB Atlas** - Cloud database
- **Cloudinary** - Image storage and optimization
- **PayPal** - Payment processing (sandbox mode)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Cloudinary account
- PayPal Developer account (optional)

### 1. Clone Repository
```bash
git clone https://github.com/akshattyagi03/Minor-Project.git
cd Minor-Project
```

### 2. Install Dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Environment Setup
Create `.env` file in the `server` directory:
```env
# Database
MONGODB_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# PayPal (optional)
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
PAYPAL_MODE=sandbox

# Server Port
PORT=5000
```

### 4. Run Application
```bash
# Start server (from server directory)
npm run dev

# Start client (from client directory)
npm run dev
```

## 🌐 Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Admin Panel**: http://localhost:5173/admin
- **Shopping**: http://localhost:5173/shop

## 👤 Default Admin Account

Create admin user by running:
```bash
cd server
node create-admin.js
```

**Login Credentials:**
- Email: admin@example.com
- Password: admin123

## 📱 Usage

### For Customers
1. Register/Login as a user
2. Browse products on the home page
3. Add items to cart
4. Proceed to checkout
5. Add delivery address
6. Complete purchase

### For Admins
1. Login with admin credentials
2. Access admin panel at `/admin`
3. Manage products, orders, and features
4. Upload product images via Cloudinary

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Products
- `GET /api/shop/products/get` - Get all products
- `POST /api/admin/products/add` - Add product (admin)
- `PUT /api/admin/products/edit/:id` - Edit product (admin)
- `DELETE /api/admin/products/delete/:id` - Delete product (admin)

### Cart
- `POST /api/shop/cart/add` - Add to cart
- `GET /api/shop/cart/get/:userId` - Get cart items
- `PUT /api/shop/cart/update-cart` - Update cart
- `DELETE /api/shop/cart/:userId/:productId` - Remove from cart

### Orders
- `POST /api/shop/order/create` - Create order
- `GET /api/shop/order/list/:userId` - Get user orders
- `GET /api/shop/order/details/:id` - Get order details

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the client: `npm run build`
2. Deploy the `dist` folder

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy the `server` directory

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Akshat Tyagi**
- GitHub: [@akshattyagi03](https://github.com/akshattyagi03)
- Repository: [Minor-Project](https://github.com/akshattyagi03/Minor-Project)

## 🙏 Acknowledgments

- Built with modern MERN stack technologies
- UI components from Radix UI
- Styling with TailwindCSS
- Image management via Cloudinary
- Payment processing with PayPal

---

⭐ Star this repository if you found it helpful!