import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/solid";
function Introduce() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <Link to="/">
              <div className="mb-2 flex flex-row items-center fixed right-2 top-2">
                <ArrowLeftIcon className="w-3 h-3 mr-1" />
                <span className="text-sm">Trở về trang chủ</span>
              </div>
            </Link>
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Giới thiệu
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Pilo - Quản lý công việc toàn diện cho doanh nghiệp
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              Kết nối mọi lúc, mọi nơi không còn chỉ được chuộng trong các hoạt
              động giải trí, thư giãn mà ngay cả trong công việc, xu hướng này
              cũng đang ngày một phổ biến. Đây là một trong những yếu tố thúc
              đẩy sự phát triển các ứng dụng phần mềm online. Là một trong nhưng
              đơn vị tiên phong xu hướng Điện toán đám mây, Pilo không dừng lại
              ở việc cung cấp phần mềm online mà còn tích hợp nhiều nghiệp vụ
              quản trị doanh nghiệp trong cùng 1 hệ thống phần mềm, giúp doanh
              nghiệp quản trị toàn diện doanh nghiệp chỉ bằng một tài khoản duy
              nhất tại địa chỉ Pilo
            </p>
            <div className="mt-5 text-lg prose prose-indigo text-gray-500">
              <span className="text-2xl mt-4 mb-2 block font-bold text-black">
                Quản trị doanh nghiệp toàn diện
              </span>
              <p>
                là giải pháp quản trị doanh nghiệp hợp nhất, được tích hợp từ
                nhiều hệ thống quản trị khác nhau như: Kế toán, Bán hàng, Nhân
                sự. Ngoài ra, Pilo còn hỗ trợ nhiều công tác quản trị khác trong
                doanh nghiệp như: Truyền thông, Tri thức, Sáng kiến, Tài sản,
                Chất lượng... cũng như hỗ trợ công tác của bộ phận hành chính.
                Người dùng chỉ cần sử dụng một tài khoản duy nhất để truy cập và
                sử dụng toàn bộ các hệ thống trên, giúp nâng cao hiệu quả công
                việc, tối ưu và giảm thiểu chi phí cho doanh nghiệp. Pilo phù
                hợp triển khai cho tất cả các doanh nghiệp có quy mô từ nhỏ đến
                lớn thuộc mọi loại hình, lĩnh vực.
              </p>
              <span className="text-2xl mt-4 block font-bold text-black">
                Đầu tư 1 lần, được tất cả!
              </span>
              <p className="text-lg">
                Là một hệ thống tích hợp nhiều phần mềm nghiệp vụ, nên khi doanh
                nghiệp chọn mua phần mềm kế toán sẽ được thêm các phần mềm Quản
                trị khác như: Quản trị Bán hàng, Quản trị Nhân sự, Quản trị
                Truyền thông, Quản trị Sáng kiến, Quản trị Tri thức, Quản trị
                Hành chính, Quản trị chất lượng... Tất cả những phần mềm này đều
                có đầy đủ tính năng, giải quyết được tất cả các nghiệp vụ của
                một doanh nghiệp. Bênh cạnh các nghiệp vụ chủ yếu như Kế toán,
                Nhân sự, Bán hàng thì Pilo còn tích hợp các phần mềm quản trị
                Tri thức (Hỗ trợ công tác đào tạo và tự đào tạo của nhân viên),
                Quản trị Sáng kiến (Cho phép tất cả nhân viên gửi các sáng kiến
                thúc đẩy năng suất và hệ thống quản lý sáng kiến từ khi đề xuất
                đến khi hoàn thiện áp dụng trong thực tế) hay Quản trị truyền
                thông (Tạo môi trường làm việc thân thiện, thúc đẩy sự hiểu biết
                nội bộ, khích lệ tinh thần làm việc...). Đây là những công cụ
                thực sự hữu ích và cần thiết để tạo động lực cho đội ngũ trong
                gia đoạn khủng hoảng kinh tế.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
