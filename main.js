import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const DesignCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
    <div className="relative overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-2 right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
        Mới
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-pink-500 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
        {description}
      </p>
      <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 font-medium">
        Xem chi tiết
      </button>
    </div>
  </div>
);

const ThietKeDecorUI = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const categories = [
    'Tất cả',
    'Backdrop',
    'Tag cầm tay',
    'Halloween',
    'Phụ nữ Việt Nam',
    'Sinh nhật',
    'Cưới hỏi'
  ];

  const products = [
    {
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      title: "Backdrop PNVN 20-10 tone hồng",
      description: "File định dạng Photoshop và PNG, kèm font chữ và line bóng. Có hỗ trợ thiết kế chỉnh sửa kích thước nội dung xuất file in"
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      title: "Backdrop PNVN 2010 tone vàng",
      description: "File định dạng Photoshop và PNG, kèm font chữ và line bóng. Có hỗ trợ thiết kế chỉnh sửa kích thước nội dung xuất file in"
    },
    {
      image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&h=600&fit=crop",
      title: "Backdrop Ngày PNVN cảm hứng hoa lá Vibe nàng thơ cổ điển",
      description: "File định dạng Photoshop và PNG, kèm font chữ và line bóng. Có hỗ trợ thiết kế chỉnh sửa kích thước"
    },
    {
      image: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?w=800&h=600&fit=crop",
      title: "SET 18 hashtag cầm tay check in ngày PNVN 20/10",
      description: "Định dạng PNG - Bộ sưu tập hashtag đa dạng cho sự kiện"
    },
    {
      image: "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?w=800&h=600&fit=crop",
      title: "File thiết kế Background Halloween Trang trí Decor",
      description: "File định dạng AI và PNG. Có hỗ trợ thiết kế chỉnh sửa kích thước nội dung xuất file in"
    },
    {
      image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&h=600&fit=crop",
      title: "Halloween Trang trí chụp ảnh cute, dễ thương",
      description: "File định dạng photoshop và PNG. Phù hợp cho Trung tâm tiếng Anh, Mall, Siêu Thị"
    },
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      title: "Set 18 tag cầm tay Phụ nữ ngầu lòi",
      description: "Định dạng PNG - Thiết kế độc đáo, cá tính"
    },
    {
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
      title: "Bộ Tag cầm tay Phụ nữ 4 tone màu",
      description: "Định dạng PNG - Đa dạng màu sắc, phù hợp nhiều concept"
    },
    {
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop",
      title: "Backdrop check in Ngày Phụ nữ Việt Nam 20-10 tone đỏ",
      description: "File định dạng photoshop và PNG. Phong cách gái hoa sang trọng"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                ChinhToan.vn
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Trang chủ</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Sản phẩm</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Về chúng tôi</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Liên hệ</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-3">
                <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Trang chủ</a>
                <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Sản phẩm</a>
                <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Về chúng tôi</a>
                <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Liên hệ</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            KHO TÀI NGUYÊN THIẾT KẾ DECOR
          </h2>
          <p className="text-xl md:text-2xl mb-6">
            EVENT - BIRTHDAY - WEDDING
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Kho file thiết kế chuyên nghiệp cho mọi sự kiện của bạn
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <DesignCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          Xem thêm sản phẩm
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                ThietKeDecor.vn
              </h3>
              <p className="text-gray-400">
                Kho tài nguyên thiết kế decor chuyên nghiệp cho mọi sự kiện
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Trang chủ</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Sản phẩm</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Liên hệ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@thietkedecor.vn</li>
                <li>Hotline: 0123 456 789</li>
                <li>Địa chỉ: TP. Hồ Chí Minh</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ThietKeDecor.vn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThietKeDecorUI;